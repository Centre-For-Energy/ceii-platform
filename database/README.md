# CEII Database

PostgreSQL is the primary relational store for application-owned data
(contact submissions, newsletter subscriptions, and later membership /
application domains). Editorial content is owned by Strapi — never duplicate
the same source of truth in both systems.

## Conventions

- UUID primary keys where appropriate
- `created_at` / `updated_at` timestamps on application tables
- Foreign keys, uniqueness constraints, NOT NULL constraints, explicit indexes
- All schema changes land as explicit Alembic migrations — no hand-edited tables

## Migrations

```bash
# New revision (creates a file in migrations/versions/)
DATABASE_URL=postgresql+psycopg://ceii:ceii@localhost:5432/ceii \
  alembic -c alembic.ini revision -m "describe change"

# Apply
DATABASE_URL=postgresql+psycopg://ceii:ceii@localhost:5432/ceii \
  alembic -c alembic.ini upgrade head

# Review pending changes as SQL without applying
DATABASE_URL=postgresql+psycopg://ceii:ceii@localhost:5432/ceii \
  alembic -c alembic.ini upgrade head --sql
```

Phase 1 ships an intentionally empty baseline revision: no business tables
exist yet. Tables arrive with the phases that require them (contact forms →
`contact_submissions`, newsletter → `newsletter_subscriptions`, etc.).