import { Card } from '../../../components/Card'
import { Container } from '../../../components/Container'
import { SectionHeading } from '../../../components/SectionHeading'
import { FOCUS_AREAS } from '../content'

/**
 * Focus areas — the six institutional workstreams as a reusable card
 * grid. Content is typed data (content.ts), not inline JSX.
 */
export function FocusAreasSection() {
  return (
    <section className="bg-white py-section-sm sm:py-section">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Six areas of institutional focus"
          description="CEII works across the energy value chain — from investment frameworks and sovereign funds to transition strategy, policy, and human capital."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FOCUS_AREAS.map((area, index) => (
            <Card key={area.title}>
              <p className="text-2xl font-semibold leading-none text-brand-orange" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-4 text-h3 font-semibold text-brand-green">{area.title}</h3>
              <p className="mt-2 text-body leading-relaxed text-brand-ink/80">{area.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}