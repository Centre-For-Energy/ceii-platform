import { Link } from 'react-router'
import { Container } from '../../../components/Container'
import { SectionHeading } from '../../../components/SectionHeading'

/**
 * Mission / introduction — institutional positioning with a link toward
 * the About route. Copy sourced from the approved org profile and the
 * safe legacy archive (about-us.html).
 */
export function MissionSection() {
  return (
    <section className="py-section-sm sm:py-section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
          <SectionHeading
            eyebrow="About the Centre"
            title="A hub for energy knowledge, investment, and innovation"
            description="The Centre serves as a hub for the exchange of knowledge, technological innovations, and opportunities within the energy sector, with emphasis on energy security. It explores the global energy value chain, analyzing its challenges and potential, and identifying strategies to channel investments for its growth and sustenance."
          />
          <div className="flex flex-col justify-end border-l-2 border-brand-orange pl-6">
            <p className="text-h3 font-medium leading-relaxed text-brand-green">
              “Accelerating Investment and Innovation Within the Global Energy Industry”
            </p>
            <p className="mt-3 text-meta uppercase tracking-[0.18em] text-brand-green-muted">
              The CEII mission
            </p>
            <Link
              to="/about"
              className="mt-8 text-nav font-semibold text-brand-green underline-offset-4 hover:text-brand-green-muted hover:underline"
            >
              Learn more about CEII
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}