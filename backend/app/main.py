"""CEII application backend — FastAPI entrypoint.

Phase 1 scope: service shell with liveness (`/health`) and readiness
(`/ready`) probes. Domain routes are introduced in later phases.
"""

from fastapi import FastAPI
from fastapi.responses import JSONResponse

from app.core.config import settings
from app.db import check_database

app = FastAPI(
    title=settings.app_name,
    version="0.1.0",
    description="Application/business layer for the Centre for Energy Investment and Innovation platform.",
)


@app.get("/health")
def health() -> dict[str, str]:
    """Liveness probe: the process is up and serving requests."""
    return {"status": "ok", "service": "ceii-api"}


@app.get("/ready")
def ready():
    """Readiness probe: configuration is present and PostgreSQL is reachable."""
    if not settings.database_url:
        return JSONResponse(
            status_code=503,
            content={"status": "unavailable", "reason": "DATABASE_URL not configured"},
        )

    try:
        check_database(settings.database_url)
    except Exception as exc:  # noqa: BLE001 — readiness must report, never raise
        return JSONResponse(
            status_code=503,
            content={
                "status": "unavailable",
                "reason": f"database unreachable: {type(exc).__name__}",
            },
        )

    return {"status": "ok", "database": "reachable"}