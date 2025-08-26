#!/usr/bin/env python3
import json
import re
import sys
from pathlib import Path
from typing import List, Dict

REPO_ROOT = Path(__file__).resolve().parents[1]
IN_DIR = REPO_ROOT / "processedDocs"
OUT = REPO_ROOT / "context" / "chunks.jsonl"
OUT.parent.mkdir(exist_ok=True, parents=True)

HEADING_RE = re.compile(r"^(#{1,6})\s+(.*)")


def read_docs() -> List[Path]:
    return sorted(IN_DIR.glob("*.md"))


def chunk_markdown(text: str) -> List[Dict]:
    lines = text.splitlines()
    chunks = []
    current = {"title": "Document", "content": [], "level": 0, "path": []}

    path_stack = []

    def push_chunk():
        if current["content"]:
            chunks.append({
                "title": current["title"],
                "path": " > ".join(current["path"] + [current["title"]]) if current["path"] else current["title"],
                "text": "\n".join(current["content"]).strip()
            })

    for line in lines:
        m = HEADING_RE.match(line)
        if m:
            # New heading
            push_chunk()
            level = len(m.group(1))
            title = m.group(2).strip()

            # Adjust stack
            while path_stack and path_stack[-1][0] >= level:
                path_stack.pop()
            parent_titles = [t for (_lvl, t) in path_stack]

            current = {"title": title, "content": [], "level": level, "path": parent_titles}
            path_stack.append((level, title))
        else:
            current["content"].append(line)

    push_chunk()
    # Remove empty chunks
    return [c for c in chunks if c["text"]]


def main():
    count = 0
    with OUT.open("w", encoding="utf-8") as f:
        pass  # Clear the file
    
    for md in read_docs():
        doc_id = md.stem
        text = md.read_text(encoding="utf-8")
        # Skip frontmatter for chunking
        if text.startswith("---"):
            # remove frontmatter block
            parts = text.split("\n---\n", 2)
            if len(parts) >= 3:
                text = parts[2].strip()
            else:
                # Handle case where frontmatter ends with just ---
                parts = text.split("---", 2)
                if len(parts) >= 3:
                    text = parts[2].strip()

        chunks = chunk_markdown(text)
        with OUT.open("a", encoding="utf-8") as f:
            for idx, c in enumerate(chunks, start=1):
                rec = {
                    "docId": doc_id,
                    "section": c["path"],
                    "text": c["text"][:8000],  # keep chunks manageable for embedding
                    "sourcePath": str(md.relative_to(REPO_ROOT))
                }
                f.write(json.dumps(rec, ensure_ascii=False) + "\n")
                count += 1
    print(f"Wrote {count} chunks to {OUT}")


if __name__ == "__main__":
    main()