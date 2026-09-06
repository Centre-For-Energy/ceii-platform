"""Smoke tests for the Phase 1 service shell."""

from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_returns_ok() -> None:
    response = client.get("/health")
    assert response.status_code == 200
    body = response.json()
    assert body["status"] == "ok"
    assert body["service"] == "ceii-api"


def test_ready_reports_availability() -> None:
    """Readiness reflects database reachability.

    Without PostgreSQL reachable (local unit-test context) the probe must
    report 503 with a reason; against a reachable database (CI service
    container) it reports 200. Either outcome must be a well-formed body.
    """
    response = client.get("/ready")
    body = response.json()
    assert response.status_code in (200, 503)
    assert "status" in body