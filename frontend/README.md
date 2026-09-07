# CEII Frontend (React + TypeScript + Vite + Tailwind)

Presentation layer for the CEII institutional platform.

## Architecture

```
frontend/src/
├── app/          App root (BrowserRouter + AppShell)
├── components/   Design-system primitives (Button, Card, Container, …)
├── layouts/      Application shell (SiteLayout, SiteHeader, SiteFooter)
├── pages/        Route components (Home, placeholder archetypes, 404)
├── routes/       Central route + navigation + metadata configuration
├── lib/          Framework-agnostic logic (SEO metadata manager)
├── test/         Test setup
└── index.css     Design tokens (Tailwind v4 @theme)
```

Rules of thumb:

- **Pages never define their own header/footer/layout** — everything renders
  inside `SiteLayout` via `<Outlet/>`.
- **Routes, navigation and per-page metadata are declared once** in
  `src/routes/index.tsx`. Adding a page = add a route entry (+ nav item if
  applicable); document metadata flows from the route definition.
- **Pages use primitives** (`Container`, `SectionHeading`, `Card`, `Button`),
  they do not invent layout.
- Future archetypes: institutional pages use `PlaceholderPage`'s shape
  (Container + SectionHeading + body); editorial listing/detail pages
  (News/Press) and form pages (Contact) will build on the same primitives.

## Rendering strategy (decision, September 2026)

The platform is a **Vite + React SPA with client-side routing** (react-router
v8). This is a deliberate decision, not a default:

- **Why SPA today:** the smallest architecture that satisfies current
  requirements; no route is SEO-critical yet; no framework migration
  (Next/Astro/Remix) is warranted at this stage.
- **Per-route metadata** (title, description, canonical, Open Graph) is
  applied client-side from the central route configuration by
  `src/lib/seo.ts` — pages never edit `index.html`.
- **When to revisit:** before editorial volume (News/Press) or production
  launch, evaluate build-time prerendering (e.g. a prerender plugin or a
  hybrid framework). The metadata layer is the single integration point, so
  this remains an additive change, not a rewrite.

## Typography strategy (decision, September 2026)

System-native font stack, documented and intentional: "Avenir Next" on macOS,
"Segoe UI" on Windows, platform `system-ui` elsewhere. No font is bundled
because no appropriately licensed CEII brand font is available. Revisit only
if a licensed font is procured; the token lives in `--font-sans`.

## Brand tokens

CEII green `#024B38` and orange `#FF6200` are the institutional palette,
declared in `src/index.css` (`@theme`). Contrast-verified derivatives:

- `--color-brand-green-muted` `#356F55` — green text on white (≈5.9:1)
- `--color-brand-orange-soft` `#FF9A4D` — orange text on brand-green (≈4.8:1)
- Brand orange on light backgrounds is reserved for non-text accents
  (active-nav underline, focus outlines).

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
```

## Verification

```bash
npm run lint      # oxlint
npm test          # vitest (jsdom) — shell, navigation, 404, skip link, metadata
npm run build     # tsc -b + vite build
```