# CEII Infrastructure

Phase 1 posture: everything runs in Docker Compose for local development.
No cloud infrastructure is provisioned.

## Principles

- **Portable by design.** The stack (Docker, PostgreSQL, REST, environment
  variables, object-storage abstractions) is provider-neutral. Azure may be
  used later because of available CEII resources/credits, but Azure-specific
  concerns must not leak into application code — the platform must be able to
  move providers without a rewrite.
- **No Kubernetes, no service meshes, no event buses.** A modular monolith
  stays operationally simple.
- Production deployment (containers, networking, DNS, backups, observability)
  is a Phase 8 concern and will be specified there.

## Local orchestration

```bash
docker compose up --build
```

| Service  | URL                      |
|----------|--------------------------|
| Frontend | http://localhost:4173    |
| Backend  | http://localhost:8000    |
| CMS      | http://localhost:1337    |
| Database | localhost:5432 (PostgreSQL) |

## Environment

Copy `.env.example` → `.env` and fill in generated secrets. Never commit a
real `.env`; the root `.gitignore` blocks it.