import { Container } from '../../../components/Container'
import { SectionHeading } from '../../../components/SectionHeading'
import { WHAT_WE_DO } from '../content'

/**
 * What We Do — the six approved practice areas as a numbered editorial
 * divided list (the same institutional treatment as the Governance
 * structure section). The side heading's summary restates the six areas
 * themselves; it adds no claims beyond the source.
 */
export function WhatWeDoSection() {
  return (
    <section className="bg-white py-section-sm sm:py-section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
          <SectionHeading
            eyebrow="What we do"
            title="Areas of work"
            description="The Centre’s practice areas span investment advisory, sovereign fund development, transition strategy, policy, human capital, and research."
          />
          <div className="divide-y divide-brand-green/10 border-y border-brand-green/10">
            {WHAT_WE_DO.map((area, index) => (
              <div key={area.title} className="grid gap-2 py-6 sm:grid-cols-[minmax(0,5rem)_minmax(0,1fr)] sm:gap-6">
                <p className="text-2xl font-semibold leading-none text-brand-orange" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div>
                  <h3 className="text-h3 font-semibold text-brand-green">{area.title}</h3>
                  <p className="mt-2 text-body leading-relaxed text-brand-ink/80">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
