/**
 * CEII platform — application shell (Phase 1).
 *
 * Deliberately minimal: header, hero band, and footer establish the
 * institutional visual language with the real brand palette. No navigation
 * links exist yet because no routes have been built; page archetypes arrive
 * in Phase 2.
 *
 * Content here is drawn only from verified safe sources: the organisation
 * tagline, name, and contact details recovered during asset recovery.
 */

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="border-b border-brand-green/15 bg-white">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-4">
          <img
            src="/ceii-logo.png"
            alt="CEII logo"
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">
              Centre for Energy Investment &amp; Innovation
            </p>
            <p className="text-xs text-brand-green/70">
              Accelerating investment and innovation within the global energy industry
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-brand-green text-white">
          <div className="h-1 w-full bg-brand-orange" aria-hidden="true" />
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-orange-soft">
              Institutional Platform
            </p>
            <h1 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
              Advancing energy investment and innovation across Africa
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              A multi-disciplinary energy advisory and investment facilitation
              organisation headquartered in Abuja, Nigeria — working at the
              intersection of energy policy, investment frameworks, and
              governance consulting.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-xl font-semibold text-brand-green sm:text-2xl">
            Platform foundation — Phase 1
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink/80">
            This is the application shell of the CEII institutional platform.
            The modular monolith is being established incrementally: React
            frontend, FastAPI application layer, PostgreSQL, and a Strapi
            editorial CMS. Institutional pages, news, and membership domains
            are introduced in later phases with approved CEII content.
          </p>
        </section>
      </main>

      <footer className="bg-brand-green-deep text-white/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-white">Centre for Energy Investment and Innovation</p>
            <p className="mt-1">2, Sambreiro Crescent, Maitama 901101, Abuja, Nigeria</p>
          </div>
          <address className="not-italic">
            <a href="mailto:info@centreforenergy.org" className="underline-offset-2 hover:underline">
              info@centreforenergy.org
            </a>
            <span aria-hidden="true"> · </span>
            <a href="https://centreforenergy.org" className="underline-offset-2 hover:underline">
              centreforenergy.org
            </a>
          </address>
        </div>
      </footer>
    </div>
  )
}

export default App