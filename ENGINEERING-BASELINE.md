# CEII Platform — Engineering Baseline & Proposed Roadmap (Phase 0)

**Date:** September 6, 2026
**Author:** Buffy (Staff Engineer / Solutions Architect)
**Status:** Reconnaissance complete (Phase 0). Phase 1 — Platform Foundation was authorized and delivered the same day; see §10.

---

## 1. WHAT WAS DONE

- Inspected the full workspace at `~/Desktop/Centre For Energy Investment and Innovation/`.
- Enumerated all safe assets (filename-only; **no restricted files were opened or inspected**).
- Enumerated the recovered legacy-site archive (38 files).
- Verified repository/Git state, GitHub organization state, and existing repos.
- Cross-checked prior work products: `RECOVERY-REPORT.md`, `.gitignore`, org `.github` profile repo.
- Produced this baseline and roadmap. **No platform code, scaffolding, or Git initialization was performed** (not authorized yet).

---

## 2. WORKSPACE STATE (VERIFIED FACTS)

```
~/Desktop/Centre For Energy Investment and Innovation/
├── .gitignore                     # Excludes Assets/DO-NOT-USE-RESTRICTED/ — present & correct
├── RECOVERY-REPORT.md             # Full recovery report (sitemap, brand, gaps) — 2026-09-02
├── ENGINEERING-BASELINE.md        # ← this document
├── .freebuff/                     # Agent tooling (ignore)
├── Assets/                        # 66 safe files (154 MB) — logos, PDFs, TXT, PPTX, JPG
│   └── DO-NOT-USE-RESTRICTED/     # 22 files — HARD BOUNDARY, gitignored, never opened
└── legacy-site-archive/           # 38 files (2.4 MB) — recovered Wayback snapshots
    ├── 26 × .html                 # Home, about, objectives, leadership, membership, news,
    │                              # documents, events, notices, directory, contacts, terms,
    │                              # disclaimer, French home, 4 news articles, etc.
    └── 12 × .xml                  # sitemap + sub-sitemaps + RSS feed
```

- **Git:** NOT a repository. `git init` has never been run (`.gitignore` was prepared in advance, as instructed).
- **Application code:** zero. No `frontend/`, `backend/`, `cms/`, `database/`, `infra/`, no Docker, no CI.

### GitHub Organization State (verified via API)

| Item | State |
|------|-------|
| Org | `Centre-For-Energy` — "Centre For Energy Investment and Innovation" |
| Description | "Accelerating investment and innovation within the global energy industry. Abuja, Nigeria." |
| Website / Email / Location / Twitter | centreforenergy.org / info@centreforenergy.org / Abuja, Nigeria / @CentreforEnergy |
| Repos | 1 public repo: `.github` (profile README + `ceii-logo.png` + LICENSE) — profile renders on org page |
| Placeholder repos | Deleted (both) |
| Org avatar | **Still the default** — upload requires `admin:org` scope unavailable on this token; user must set `Assets/CEII.png` manually at github.com/orgs/Centre-For-Energy/settings/profile |

### Safe Brand Assets (key items)

- Logos: `CEII.png` (1461×1461 RGBA), `CEII - Logo.jpg` (2739×2739), `logo.jpg` (letterhead banner, 9662×5132), `CEII.jpg`, `CEII MEMBERSHIP THUMBNAIL.jpg`.
- Brand palette (extracted from assets): dark green `#024B38` / `#003F0E`, vibrant orange `#FF6200` / `#F58334`, white.
- Strategy documents: `ceii PROP.pdf`, `CEII- NLGIF SLIDES.pdf/.pptx`, `Liberia.pdf`, `CEII- NGLIF.pdf`, `CEII roadmap.pdf`, `CEII-National Decarbonization Program roadmap.pdf`.
- Institutional correspondence (non-confidential): delegation/letter-of-appointment documents, BusinessTechnology Under 30 program decks, resumes, Wikipedia drafts, and assorted TXT notes.

### Legacy Site (recovered, not to be blindly reproduced)

- 38 archived files from centreforenergy.org (WordPress, TownPress theme, EN/FR via Weglot, 2023–2024 snapshots).
- Full sitemap, brand summary, and gap analysis already documented in `RECOVERY-REPORT.md`.
- Notable caveat: archived news articles were largely **syndicated third-party energy news** (oil markets, OPEC) — re-publication rights are unverified and must not be assumed.

---

## 3. ARCHITECTURAL DECISIONS (this phase)

None beyond documentation. Explicitly deferred:

- No stack choices were changed; the Master Context stack (React + TypeScript + Vite + Tailwind / FastAPI / PostgreSQL / Strapi / Docker / monorepo) is adopted as the target.
- Modular-monolith discipline and the source-of-truth rule (Strapi = editorial, PostgreSQL via FastAPI = application data) are accepted as binding.

---

## 4. VERIFICATION PERFORMED

- `git status` / `git log` / `git branch` → confirmed "not a git repository".
- `ls` enumeration of Assets, legacy-site-archive, restricted folder name (outer listing only).
- `gh api` queries against the org and the `.github` repo — live GitHub state confirmed.
- `.gitignore` content read and confirmed: `Assets/DO-NOT-USE-RESTRICTED/`.
- Restricted boundary: **no file inside `Assets/DO-NOT-USE-RESTRICTED/` was opened, read, extracted, indexed, or referenced** at any point, including this phase.

---

## 5. TEST RESULTS

Not applicable — no code exists to test. This is the pre-implementation baseline.

---

## 6. KNOWN ISSUES / LIMITATIONS / UNKNOWNS

**Issues:**
1. **No code repository exists.** The workspace is not even Git-initialized; the org has no code repo. This is the single biggest gap versus the directive's monorepo target.
2. **Org avatar still default** (token scope limitation; manual step pending for the user).
3. **`RECOVERY-REPORT.md` undercounts the archive** (it cites 21 HTML + 2 XML; the folder actually holds 26 HTML + 12 XML). Baseline uses the verified live counts.
4. **News content rights unverified** — most archived "news" is third-party syndicated material.

**Unknowns (blockers to resolve before Phase 1–4 where marked):**
- Where should the code monorepo live? Presumably `Centre-For-Energy/ceii-platform` (or similar) — **decision needed**.
- Public or private repo(s)? (Organizational page suggests public; credentials/domain suggests care.)
- Is Azure access actually available/authorized for deployment, or is Phase 1 local-only (Docker Compose)?
- Strapi hosting: self-hosted where — Docker local first, Azure later?
- Which real institutional copy (from safe assets + recovered site) is approved for public use, and by whom?
- Bilingual requirement (EN/FR like the legacy site) — in scope from Phase 1 or later?
- Should safe brand assets (logos) be committed to the code repo, kept out of VCS, or stored in a dedicated `brand-assets` repo?
- Who owns centreforenergy.org DNS/domain for eventual production deployment?

---

## 7. NEXT RECOMMENDED STEP

Begin **Phase 1 — Platform Foundation** with explicit authorization:

1. `git init` + initial commit of `.gitignore`, `RECOVERY-REPORT.md`, `ENGINEERING-BASELINE.md` (no assets in VCS).
2. Scaffold the monorepo skeleton per the directive (frontend / backend / cms / database+migrations / infra / .github/workflows / docker-compose.yml / .env.example / README).
3. FastAPI "hello world" with `/health` and `/ready` endpoints + PostgreSQL container + migration tooling baseline.
4. Strapi container with **no content types yet** (only introduced when a page domain requires it).
5. Frontend scaffold (Vite + React + TS + Tailwind) with the CEII palette as design tokens (`#024B38`, `#FF6200`) — no pages beyond a styled shell.
6. First CI workflow: lint + typecheck + build on PR.

Nothing in Phase 1 introduces CMS content models, database business tables, or the 40+ page inventory — those belong to Phases 2–6 and will each be separately scoped tasks.

---

## 8. PROPOSED ROADMAP (mapped to the directive's phases)

| Phase | Scope | Entry Criteria / Notes |
|-------|-------|------------------------|
| **0** | Reconnaissance & baseline | ✅ Done — this document |
| **1** | Platform foundation | Monorepo, Docker Compose, FastAPI health, PostgreSQL, Strapi shell, CI skeleton |
| **2** | Design system + application shell | Design tokens, layout system, reusable archetypes (institutional/listing/detail/article/form), a11y baseline, responsive nav |
| **3** | Institutional content architecture | Real safe content: About, Mission, Governance, Leadership, Focus Areas, Contact — no fabricated facts; placeholders flagged |
| **4** | Editorial content / CMS | Strapi content types (news, press releases) + FastAPI API boundary + frontend consumption; decide EN/FR |
| **5** | Programs / initiatives / knowledge | NLGIF, NETFUND, decarbonization roadmap, BT30 — real, approved content only |
| **6** | Membership & engagement | Membership pages, application workflow, newsletter, forms (security: validation, rate limiting, spam) |
| **7** | Advanced functionality | Auth, dashboards, workflows (only when explicitly requested) |
| **8** | Hardening | Observability, backups, performance, SEO, production deployment to Azure or provider-neutral target |

---

## 10. PHASE 1 STATUS (2026-09-06, delivered)

Authorized via decision on repository location: `Centre-For-Energy/ceii-platform` (public). Delivered:

1. Git initialized (`main`); root `.gitignore` hardened (`Assets/`, `legacy-site-archive/`, `.freebuff/`, Python/Node/env artifacts).
2. `backend/` — FastAPI shell: `/health` (liveness) + `/ready` (readiness, PostgreSQL ping). **Verified locally**: 2/2 pytest pass; `/health` 200; `/ready` 503 with reason when no DB configured.
3. `frontend/` — Vite + React + TS + Tailwind v4 shell with CEII design tokens (`#024B38` / `#FF6200`) and real logo (`public/ceii-logo.png`). **Verified**: typecheck + build + oxlint all clean.
4. `database/` — Alembic migrations, empty baseline revision. **Verified** offline: upgrade SQL emits correctly, history resolves to head. Live PostgreSQL apply deferred to CI (Docker unavailable on this machine).
5. `cms/` (docs only; no content types), `infra/` (portability posture), `docker-compose.yml` (db/backend/frontend/cms), `.env.example`, root `README.md`.
6. `.github/workflows/ci.yml` — backend tests + migration validation against a PostgreSQL service container; frontend lint + typecheck + build on PR and main.

Deferred to later phases: design system + page archetypes (Phase 2), institutional content (3), Strapi content types (4), membership/engagement (6), production hardening (8). Docker Compose orchestration is written but unverified locally (Docker not installed); CI + a future local Docker install cover it.

---

## 9. RESTRICTED-ASSET CONFIRMATION

`Assets/DO-NOT-USE-RESTRICTED/` was not opened, listed-by-content, read, extracted, copied, indexed, embedded, or referenced in this phase. Only its directory name appears in this document. All future phases observe the same hard boundary; if required information exists only there, work stops and the user is asked directly.