# CEII Editorial CMS (Strapi)

Strapi is the editorial content management system: news and press releases
(Phase 4), later publications, reports, insights, resources, events.

## Phase 1 posture

No Strapi application code is committed yet and **no content types have been
created**. The CMS runs from the official `strapi/strapi:5` image via
`docker compose up` (service `cms`, port 1337). On first boot the image
generates a project inside the container; the admin account is created
through the browser at http://localhost:1337/admin.

Do not add content types speculatively — each content model is introduced by
an explicit task when a page domain requires it.

## Phase 4 considerations (documented, not implemented)

- Content models: `news_posts`, `press_releases` — only when required.
- The frontend must not couple directly to Strapi's internal database; content
  flows through the FastAPI application boundary (deliberate, documented
  decision if direct consumption is ever needed).
- If a dedicated `ceii_cms` database is introduced, add an init script so the
  container can create it at first boot.
- Generate real secrets for `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`,
  `TRANSFER_TOKEN_SALT`, `JWT_SECRET` before any non-local deployment.

## First boot

```bash
cp .env.example .env   # fill in generated secrets
docker compose up cms
open http://localhost:1337/admin
```