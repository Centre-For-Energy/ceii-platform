import { ButtonLink } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { SectionHeading } from '../../../components/SectionHeading'
import { INITIATIVES } from '../content'

/**
 * Selected initiatives — programs and frameworks drawn from approved
 * org content. Presented as an editorial divided list rather than cards
 * to keep the section distinct from the focus-area grid.
 *
 * Concise preview: /programs is the canonical presentation of these
 * initiatives (with their approved descriptors); Home renders the
 * titles only and links into the full detail.
 */
export function InitiativesSection() {
  return (
    <section className="py-section-sm sm:py-section">
      <Container>
        <SectionHeading
          eyebrow="Selected initiatives"
          title="Programmes and frameworks"
          description="A selection of the frameworks and programs CEII develops with governments and partners to structure energy investment and transition. The full detail is presented on our Programs page."
        />
        <div className="mt-12 divide-y divide-brand-green/10 border-y border-brand-green/10">
          {INITIATIVES.map((initiative) => (
            <div
              key={initiative.title}
              className="grid gap-2 py-6 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-10"
            >
              <h3 className="text-h3 font-semibold leading-snug text-brand-green">{initiative.title}</h3>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink to="/programs" variant="secondary">
            Explore our programs
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}