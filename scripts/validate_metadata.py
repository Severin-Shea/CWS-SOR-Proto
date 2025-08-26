#!/usr/bin/env python3
import json
import sys
from pathlib import Path
from jsonschema import Draft202012Validator

REPO_ROOT = Path(__file__).resolve().parents[1]
SCHEMA = REPO_ROOT / "metadata" / "sor-metadata.schema.json"
DATA = REPO_ROOT / "existingSORDocs" / "metadataSORDocs" / "sor-metadata.normalized.json"


def main():
    if not SCHEMA.exists():
        print(f"Schema not found: {SCHEMA}", file=sys.stderr)
        sys.exit(1)
    if not DATA.exists():
        print(f"Data not found: {DATA}", file=sys.stderr)
        sys.exit(1)

    schema = json.loads(SCHEMA.read_text(encoding="utf-8"))
    data = json.loads(DATA.read_text(encoding="utf-8"))

    validator = Draft202012Validator(schema)
    errors = sorted(validator.iter_errors(data), key=lambda e: e.path)
    if errors:
        print("Metadata validation failed:")
        for e in errors:
            loc = "/".join(str(p) for p in e.path)
            print(f" - {loc}: {e.message}")
        sys.exit(2)
    print("Metadata validation passed.")
    sys.exit(0)


if __name__ == "__main__":
    main()