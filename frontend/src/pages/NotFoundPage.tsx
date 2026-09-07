import { ButtonLink } from '../components/Button'
import { Container } from '../components/Container'

/** Not-found (404) page — institutional, simple, accessible. */
export function NotFoundPage() {
  return (
    <section className="py-section-sm sm:py-section">
      <Container className="max-w-2xl">
        <p className="text-meta font-semibold uppercase tracking-[0.18em] text-brand-green">404</p>
        <h1 className="mt-3 text-h1 font-semibold text-brand-green">Page not found</h1>
        <p className="mt-4 text-body leading-relaxed text-brand-ink/80">
          The page you requested could not be found. It may have been moved or
          removed, or the address may be incorrect.
        </p>
        <div className="mt-8">
          <ButtonLink to="/">Return to the home page</ButtonLink>
        </div>
      </Container>
    </section>
  )
}