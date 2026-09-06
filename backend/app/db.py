"""Database connectivity.

Phase 1 keeps this deliberately small: a single SQLAlchemy engine factory and
a liveness ping used by the readiness probe. Domain models and repositories
arrive in later phases; nothing here exposes database tables as APIs.
"""

from sqlalchemy import create_engine, text


def check_database(database_url: str) -> None:
    """Ping PostgreSQL with a trivial query. Raises on any failure."""
    engine = create_engine(database_url, pool_pre_ping=True)
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))
    finally:
        engine.dispose()