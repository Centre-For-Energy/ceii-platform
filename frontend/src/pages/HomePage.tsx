import { ButtonLink } from '../components/Button'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'

/**
 * Home page — preserves the verified Phase 1 institutional copy
 * (organisation tagline, positioning and contact details drawn from safe
 * recovered sources). The lower section is structural shell content, not
 * a finished marketing page.
 */
export function HomePage() {
  return (
    <>
      <section className="bg-brand-green text-white">
        <div className="h-1 w-full bg-brand-orange" aria-hidden="true" />
        <Container className="py-section-sm sm:py-section">
          <p className="mb-4 text-meta font-semibold uppercase tracking-[0.22em] text-brand-orange-soft">
            Institutional Platform
          </p>
          <h1 className="max-w-2xl text-h1 font-semibold leading-tight sm:text-display">
            Advancing energy investment and innovation across Africa
          </h1>
          <p className="mt-6 max-w-xl text-body leading-relaxed text-white/85 sm:text-h3">
            A multi-disciplinary energy advisory and investment facilitation
            organisation headquartered in Abuja, Nigeria — working at the
            intersection of energy policy, investment frameworks, and
            governance consulting.
          </p>
        </Container>
      </section>

      <section className="py-section-sm sm:py-section">
        <Container>
          <SectionHeading
            eyebrow="Platform Foundation"
            title="The CEII institutional platform"
            description="This application shell establishes the architecture for the CEII platform: a React frontend over a FastAPI application layer, PostgreSQL, and a Strapi editorial CMS. Institutional pages, news, and membership domains are introduced in later phases with approved CEII content."
          />
          <div className="mt-10">
            <ButtonLink to="/about">About CEII</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  )
}