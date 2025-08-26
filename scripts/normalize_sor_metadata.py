#!/usr/bin/env python3
import json
import re
import sys
from pathlib import Path
from datetime import datetime, timezone
from dateutil import parser as dateparser

REPO_ROOT = Path(__file__).resolve().parents[1]
RAW_JSON = REPO_ROOT / "existingSORDocs" / "metadataSORDocs" / "Drafted-SOR-Metadatav2.json"
RAW_MD = REPO_ROOT / "existingSORDocs" / "metadataSORDocs" / "Drafted-SOR-Metadata.md"
OUTPUT = REPO_ROOT / "existingSORDocs" / "metadataSORDocs" / "sor-metadata.normalized.json"

DOCS_DIR = REPO_ROOT / "existingSORDocs"

COMPLIANCE_KEYWORDS = [
    "VDOT Security Policy", "VITA Security Standards", "HIPAA", "CJIS", "PCI",
    "FERPA", "IRS 1075", "COV Standards", "SOX", "FedRAMP"
]


def slugify(s: str) -> str:
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s


def parse_date(value: str) -> str | None:
    if not value or not isinstance(value, str):
        return None
    try:
        d = dateparser.parse(value, fuzzy=True, dayfirst=False)
        return d.date().isoformat()
    except Exception:
        return None


def normalize_pricing_model(fee: str | None) -> str | None:
    if not fee:
        return None
    s = fee.lower()
    fixed = "fixed" in s
    tm = "t&m" in s or "time" in s
    if fixed and tm:
        return "Hybrid"
    if fixed:
        return "Fixed Price"
    if tm:
        return "T&M"
    return None


def parse_delivery_and_constraints(additional: str | None):
    delivery = None
    constraints = []
    funding = None
    complexity = None
    security = set()

    if not additional:
        return delivery, constraints, funding, complexity, list(security)

    parts = [p.strip() for p in re.split(r"[;,]", additional) if p.strip()]
    for p in parts:
        if p.lower().startswith("delivery model:"):
            dm = p.split(":", 1)[1].strip().lower()
            if "hybrid" in dm:
                delivery = "Hybrid"
            elif "remote" in dm:
                delivery = "Remote"
            elif "onsite" in dm or "on-site" in dm:
                delivery = "Onsite"
        elif "complexity" in p.lower():
            if "low" in p.lower():
                complexity = "Low"
            elif "medium" in p.lower():
                complexity = "Medium"
            elif "high" in p.lower():
                complexity = "High"
        elif "arpa" in p.lower():
            funding = "ARPA"
        elif "federal" in p.lower() and "no federal" in p.lower():
            funding = "State"
        else:
            constraints.append(p)

        # Security compliance detection
        for kw in COMPLIANCE_KEYWORDS:
            if kw.lower() in p.lower():
                security.add(kw)

    return delivery, constraints, funding, complexity, list(security)


def detect_security_from_fields(*fields: str | None) -> list[str]:
    found = set()
    for field in fields:
        if not field:
            continue
        for kw in COMPLIANCE_KEYWORDS:
            if kw.lower() in field.lower():
                found.add(kw)
    return list(found)


def find_document_path(name_value: str) -> str | None:
    # Try to match a real file in existingSORDocs by a loose name key
    base = Path(name_value).name
    stem = slugify(Path(base).stem)
    candidates = list(DOCS_DIR.rglob("*.docx"))
    for c in candidates:
        cstem = slugify(c.stem)
        if stem in cstem or cstem in stem:
            return str(c.relative_to(REPO_ROOT))
    return None


def extract_numeric_id(name_value: str) -> str | None:
    # Example: "SOR EXAMPLE_APP DEV_18184_VDOT ..." -> 18184
    m = re.search(r"[_\- ](\d{4,6})[_\- ]", name_value)
    if m:
        return m.group(1)
    return None


def normalize_record(r: dict) -> dict | None:
    name = r.get("Name") or r.get("name")
    summary = r.get("Summary") or r.get("summary")
    sor_type = r.get("SOR-Type") or r.get("sorType")
    services = r.get("Services (CAI)") or r.get("services") or ""
    industries = r.get("Industries (CAI)") or r.get("industries") or ""
    primary_tech = r.get("Primary Technology/Platform") or r.get("primaryTechnology") or ""
    tech_focus = r.get("Tech Focus/Discipline") or r.get("techFocus") or ""
    sector = r.get("Sector") or r.get("sector")
    juris_level = r.get("Jurisdiction Level") or r.get("jurisdictionLevel")
    state = r.get("State") or r.get("state")
    agency = r.get("Agency/Division/Department") or r.get("agency")
    client_type = r.get("Client Type") or r.get("clientType")
    client = r.get("Client") or r.get("client")
    date_raw = r.get("Date") or r.get("date")
    fee = r.get("Fee Structure") or r.get("pricingModel")
    addl = r.get("Additional Characteristic") or r.get("additionalCharacteristics") or ""

    if not (name and summary and sor_type and sector):
        # Skip incomplete rows
        return None

    services_a = [s.strip() for s in str(services).split(",") if s.strip()]
    industries_a = [s.strip() for s in str(industries).split(",") if s.strip()]
    primary_tech_a = [s.strip() for s in str(primary_tech).split(",") if s.strip()]
    tech_focus_a = [s.strip() for s in str(tech_focus).split(",") if s.strip()]

    date_iso = parse_date(str(date_raw)) if date_raw else None
    pricing = normalize_pricing_model(fee) or "Fixed Price"

    delivery, constraints, funding, complexity, security_from_addl = parse_delivery_and_constraints(addl)
    security_from_fields = detect_security_from_fields(addl)
    security = sorted(set(security_from_addl + security_from_fields))

    doc_path = find_document_path(name) or ""
    num_id = extract_numeric_id(name)
    base_slug = slugify(f"{(agency or 'client')}-{(client or '')}-{(num_id or name)}")
    # Trim slug to a readable length
    _id = "-".join([p for p in base_slug.split("-") if p])[:64].strip("-")

    normalized = {
        "id": _id or slugify(name)[:64],
        "name": name,
        "summary": summary,
        "sorType": sor_type,
        "services": services_a,
        "industries": industries_a,
        "primaryTechnology": primary_tech_a,
        "techFocus": tech_focus_a,
        "sector": sector,
        "jurisdiction": {
            "level": juris_level or "State",
            **({"state": state} if state else {})
        },
        "agency": agency,
        "clientType": client_type,
        "client": client or "TBD",
        "date": date_iso or "2000-01-01",
        "pricingModel": pricing,
        "deliveryModel": delivery or "Hybrid",
        "securityCompliance": security,
        "constraints": constraints,
        "fundingType": funding or "N/A",
        "complexity": complexity or "Medium",
        "tags": [],
        "documentPath": doc_path,
        "version": "1.0",
        "lastReviewed": datetime.now(timezone.utc).date().isoformat()
    }
    return normalized


def load_raw_json():
    if not RAW_JSON.exists():
        return []
    with open(RAW_JSON, "r", encoding="utf-8") as f:
        try:
            return json.load(f)
        except Exception as e:
            print(f"Failed to parse {RAW_JSON}: {e}", file=sys.stderr)
            return []


def main():
    raw = load_raw_json()
    normalized = []
    for r in raw:
        n = normalize_record(r)
        if n:
            normalized.append(n)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT, "w", encoding="utf-8") as f:
        json.dump(normalized, f, ensure_ascii=False, indent=2)
    print(f"Wrote {len(normalized)} records to {OUTPUT}")


if __name__ == "__main__":
    main()