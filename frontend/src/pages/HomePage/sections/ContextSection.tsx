import { Container } from '../../../components/Container'
import { SectionHeading } from '../../../components/SectionHeading'
import { OBJECTIVES } from '../content'

/**
 * Context — why CEII exists, expressed through its seven recovered
 * institutional objectives. Numbered editorial list on a dark band.
 */
export function ContextSection() {
  return (
    <section className="bg-brand-green-deep py-section-sm text-white sm:py-section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Why CEII"
              title="Serving the energy transition era"
              description="CEII was established to make sense of a changing energy landscape — helping governments, organisations, and the finance industry navigate the transition, channel investment, and build durable energy systems."
              onDark
            />
          </div>
          <ol className="space-y-6">
            {OBJECTIVES.map((objective, index) => (
              <li key={objective} className="flex gap-5 border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                <span
                  className="mt-0.5 shrink-0 text-h3 font-semibold leading-none text-brand-orange-soft"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-body leading-relaxed text-white/90">{objective}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}