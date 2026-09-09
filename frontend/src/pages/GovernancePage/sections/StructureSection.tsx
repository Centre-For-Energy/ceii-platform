import { Container } from '../../../components/Container'
import { SectionHeading } from '../../../components/SectionHeading'
import { GOVERNANCE_BODIES } from '../content'

/**
 * Governance structure — the three verified institutional bodies,
 * presented as an editorial divided list (same treatment as the About
 * page's role list). The order follows the source wording; no reporting
 * lines beyond what the source states are drawn.
 */
export function StructureSection() {
  return (
    <section className="bg-white py-section-sm sm:py-section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
          <SectionHeading
            eyebrow="Institutional structure"
            title="Boards and management"
            description="The Centre's published structure comprises a Governing Board, an Advisory Board, and a Management Board led through the Office of the Director General."
          />
          <div className="divide-y divide-brand-green/10 border-y border-brand-green/10">
            {GOVERNANCE_BODIES.map((body, index) => (
              <div key={body.title} className="grid gap-2 py-6 sm:grid-cols-[minmax(0,5rem)_minmax(0,1fr)] sm:gap-6">
                <p className="text-2xl font-semibold leading-none text-brand-orange" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div>
                  <h3 className="text-h3 font-semibold text-brand-green">{body.title}</h3>
                  <p className="mt-2 text-body leading-relaxed text-brand-ink/80">{body.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
