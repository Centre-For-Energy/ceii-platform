import { Container } from '../../../components/Container'
import { SectionHeading } from '../../../components/SectionHeading'
import { ROLE_ITEMS } from '../content'

/**
 * Role within the energy ecosystem — four sourced statements presented
 * as an editorial divided list, distinct from the Home focus-area cards.
 */
export function RoleSection() {
  return (
    <section className="bg-white py-section-sm sm:py-section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
          <SectionHeading
            eyebrow="Position within the energy ecosystem"
            title="What the Centre does"
            description="CEII operates across the energy value chain — from knowledge exchange and investment facilitation to policy advice and capacity building."
          />
          <div className="divide-y divide-brand-green/10 border-y border-brand-green/10">
            {ROLE_ITEMS.map((item, index) => (
              <div key={item.title} className="grid gap-2 py-6 sm:grid-cols-[minmax(0,5rem)_minmax(0,1fr)] sm:gap-6">
                <p className="text-2xl font-semibold leading-none text-brand-orange" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div>
                  <h3 className="text-h3 font-semibold text-brand-green">{item.title}</h3>
                  <p className="mt-2 text-body leading-relaxed text-brand-ink/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}