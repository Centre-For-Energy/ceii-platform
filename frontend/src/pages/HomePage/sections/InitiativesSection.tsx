import { Container } from '../../../components/Container'
import { SectionHeading } from '../../../components/SectionHeading'
import { INITIATIVES } from '../content'

/**
 * Selected initiatives — programs and frameworks drawn from approved
 * org content. Presented as an editorial divided list rather than cards
 * to keep the section distinct from the focus-area grid.
 */
export function InitiativesSection() {
  return (
    <section className="py-section-sm sm:py-section">
      <Container>
        <SectionHeading
          eyebrow="Selected initiatives"
          title="Programmes and frameworks"
          description="A selection of the frameworks and programs CEII develops with governments and partners to structure energy investment and transition."
        />
        <div className="mt-12 divide-y divide-brand-green/10 border-y border-brand-green/10">
          {INITIATIVES.map((initiative) => (
            <div
              key={initiative.title}
              className="grid gap-2 py-6 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-10"
            >
              <h3 className="text-h3 font-semibold leading-snug text-brand-green">{initiative.title}</h3>
              <p className="text-body leading-relaxed text-brand-ink/80">{initiative.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}