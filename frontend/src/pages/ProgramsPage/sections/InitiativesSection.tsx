import { Card } from '../../../components/Card'
import { Container } from '../../../components/Container'
import { SectionHeading } from '../../../components/SectionHeading'
import { KEY_INITIATIVES } from '../content'

/**
 * Key initiatives — the five named initiatives from the approved source,
 * presented as accent-ruled cards. Deliberately name-and-descriptor only:
 * no approved source establishes initiative status, dates, metrics, or
 * detail pages, so none are rendered.
 */
export function InitiativesSection() {
  return (
    <section className="py-section-sm sm:py-section">
      <Container>
        <SectionHeading
          eyebrow="Key initiatives"
          title="Named initiatives"
          description="The Centre’s initiatives across investment facilitation, governance frameworks, decarbonization, and emerging energy leadership."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {KEY_INITIATIVES.map((initiative) => (
            <Card key={initiative.title} accent>
              <h3 className="text-h3 font-semibold text-brand-green">{initiative.title}</h3>
              <p className="mt-2 text-body leading-relaxed text-brand-ink/80">{initiative.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
