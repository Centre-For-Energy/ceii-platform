# CEII Platform

Monorepo for the institutional digital platform of the **Centre for Energy
Investment and Innovation (CEII)** — a multi-disciplinary energy advisory and
investment facilitation organisation headquartered in Abuja, Nigeria.

## Architecture

A **modular monolith** with strong internal boundaries and a clear
source-of-truth rule:

```
Users
  │
  ▼
React / TypeScript / Vite / Tailwind   ← presentation layer
  │ REST
  ▼
FastAPI                                 ← application/business layer
  ├──► PostgreSQL                       ← application-owned data
  └──► Strapi API                       ← editorial content (CMS)
```

- Frontend must not become the business-logic layer or touch PostgreSQL directly.
- Editorial content (news, press releases, …) is owned by Strapi.
- Application records (contact submissions, newsletter subscriptions,
  membership, …) are owned by PostgreSQL via FastAPI.
- No domain is duplicated across systems as a second source of truth.

## Repository layout

```
├── frontend/          React + TypeScript + Vite + Tailwind
├── backend/           FastAPI application layer
├── database/          PostgreSQL migrations (Alembic)
├── cms/               Strapi editorial CMS (documentation; image-based in Phase 1)
├── infra/             deployment/infrastructure notes (portable, provider-neutral)
├── .github/workflows/ CI (backend tests + migrations, frontend lint/build)
├── docker-compose.yml local orchestration
└── .env.example       required environment variables (never commit real secrets)
```

## Quick start

```bash
cp .env.example .env    # fill in generated Strapi secrets
docker compose up --build
```

| Service  | URL                   |
|----------|-----------------------|
| Frontend | http://localhost:4173 |
| Backend  | http://localhost:8000 |
| CMS      | http://localhost:1337 |

### Local development without Docker

```bash
# Backend
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements-dev.txt
uvicorn app.main:app --reload --port 8000

# Frontend (separate terminal)
cd frontend
npm install
npm run dev             # http://localhost:5173
```

## Phase status

| Phase | Scope                          | Status |
|-------|--------------------------------|--------|
| 0     | Reconnaissance / baseline      | ✅ Done — see `ENGINEERING-BASELINE.md` |
| 1     | Platform foundation            | ✅ Done — monorepo, probes, migrations, CI |
| 2     | Design system + application shell | 🔜 Branch `feat/frontend-app-shell`: routing, shell, primitives, frontend tests |
| 3+    | Content architecture, CMS …    | 🔜 Later phases, each separately scoped |

Phase 1 is deliberately minimal: no domain routes, no business tables, no
Strapi content types. Those arrive only when explicitly scoped tasks require
them.

## Content integrity

All public-facing content must come from verified CEII sources (safe local
assets and the recovered legacy archive). Never fabricate institutional facts.
There is a hard boundary on `Assets/DO-NOT-USE-RESTRICTED/` — it is never
opened, copied, or referenced; it is excluded by `.gitignore` at the root.

## Repository origin

See `ENGINEERING-BASELINE.md` for the Phase 0 report: workspace state,
architectural gaps, unknowns, and the phased roadmap.