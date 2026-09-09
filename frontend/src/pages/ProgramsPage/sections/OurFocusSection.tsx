import { Container } from '../../../components/Container'
import { SectionHeading } from '../../../components/SectionHeading'
import { OUR_FOCUS } from '../content'

/**
 * Our Focus — the five approved strategic focus areas as a semantic
 * definition list with brand-orange rules. A deliberately different
 * presentation from What We Do (divided list) and Key Initiatives
 * (cards) so the three content categories remain visually distinct.
 */
export function OurFocusSection() {
  return (
    <section className="bg-white py-section-sm sm:py-section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
          <SectionHeading
            eyebrow="Our focus"
            title="Strategic focus"
            description="The strategic priorities that guide the Centre’s work across the energy sector."
          />
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {OUR_FOCUS.map((focus) => (
              <div key={focus.title} className="border-t-2 border-brand-orange pt-4">
                <dt className="font-semibold text-brand-green">{focus.title}</dt>
                <dd className="mt-1 text-body leading-relaxed text-brand-ink/80">{focus.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
