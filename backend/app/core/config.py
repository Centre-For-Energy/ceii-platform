"""Application configuration.

All configuration flows through environment variables (see `.env.example`
at the repository root). No secrets are ever hard-coded in this module.
"""

from functools import lru_cache
from typing import Optional

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Runtime settings for the CEII application backend."""

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    app_name: str = "CEII Platform API"
    environment: str = "development"
    # PostgreSQL connection string, e.g. postgresql+psycopg://ceii:ceii@localhost:5432/ceii
    database_url: Optional[str] = None


@lru_cache
def get_settings() -> Settings:
    """Return a cached Settings instance (environment is read once per process)."""
    return Settings()


settings = get_settings()