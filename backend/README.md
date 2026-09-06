# CEII Backend (FastAPI)

Application/business layer for the CEII platform.

**Phase 1 scope:** service shell with `/health` (liveness) and `/ready`
(readiness, checks `DATABASE_URL` + PostgreSQL ping). No domain routes,
models, or business tables yet — they arrive in later phases by explicit task.

## Local development

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements-dev.txt
uvicorn app.main:app --reload --port 8000
```

`/health` → 200 when the process is up. `/ready` → 200 only when PostgreSQL
is reachable via `DATABASE_URL`, otherwise 503 with a reason.

## Tests

```bash
pytest
```