#!/usr/bin/env python3
import json
import sys
from pathlib import Path
import mammoth
from datetime import datetime, timezone

REPO_ROOT = Path(__file__).resolve().parents[1]
DOCS_DIR = REPO_ROOT / "existingSORDocs"
OUT_DIR = REPO_ROOT / "processedDocs"
METADATA = REPO_ROOT / "existingSORDocs" / "metadataSORDocs" / "sor-metadata.normalized.json"


def load_metadata_index():
    if METADATA.exists():
        data = json.loads(METADATA.read_text(encoding="utf-8"))
        by_path = {m.get("documentPath"): m for m in data if m.get("documentPath")}
        by_name = {m.get("name"): m for m in data if m.get("name")}
        return by_path, by_name
    return {}, {}


def to_frontmatter(meta: dict) -> str:
    # Minimal YAML frontmatter
    fields = {
        "id": meta.get("id"),
        "name": meta.get("name"),
        "sorType": meta.get("sorType"),
        "agency": meta.get("agency"),
        "client": meta.get("client"),
        "date": meta.get("date"),
        "documentPath": meta.get("documentPath")
    }
    lines = ["---"]
    for k, v in fields.items():
        if v is None:
            continue
        lines.append(f"{k}: \"{str(v).replace('\"', '\\\"')}\"")
    lines.append(f"extractedAt: \"{datetime.now(timezone.utc).isoformat()}Z\"")
    lines.append("---\n")
    return "\n".join(lines)


def slugify(s: str) -> str:
    import re
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s


def main():
    by_path, by_name = load_metadata_index()
    OUT_DIR.mkdir(exist_ok=True)
    for docx in DOCS_DIR.rglob("*.docx"):
        rel = str(docx.relative_to(REPO_ROOT))
        meta = by_path.get(rel)
        if not meta:
            # fallback by name match
            meta = next((m for m in by_name.values() if slugify(Path(m["name"]).stem) in slugify(docx.stem)), None)

        out_name = f"{meta['id']}.md" if meta and meta.get("id") else f"{slugify(docx.stem)}.md"
        out_path = OUT_DIR / out_name

        with open(docx, "rb") as f:
            md_result = mammoth.convert_to_markdown(f)
            md = md_result.value

        # Redact obvious PII like emails and phone numbers
        import re
        # Drop Markdown images entirely to avoid embedding base64 or external refs
        md = re.sub(r"!\[[^\]]*\]\([^\)]*\)", "", md)
        # Normalize common markdown escapes so regex can match
        normalized = md.replace("\\.", ".").replace("\\-", "-")
        normalized = normalized.replace("\\(", "(").replace("\\)", ")")
        # Redact emails
        normalized = re.sub(r"[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}",
                            "[redacted-email]",
                            normalized, flags=re.IGNORECASE)
        # Redact US phone numbers
        normalized = re.sub(r"(\+?1[\s.-]?)?(\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})",
                            "[redacted-phone]",
                            normalized)
        md = normalized

        fm = to_frontmatter(meta) if meta else ""
        out_path.write_text(fm + md, encoding="utf-8")
        print(f"Wrote {out_path}")


if __name__ == "__main__":
    main()