import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'

/**
 * Institutional page archetype placeholder.
 *
 * Establishes the layout boundary future institutional pages (about,
 * governance, programs, contact, …) will share: a Container with a
 * SectionHeading and a body region. The note below is structural demo
 * content, clearly marked — not institutional copy.
 */
interface PlaceholderPageProps {
  eyebrow?: string
  title: string
  description?: string
}

export function PlaceholderPage({ eyebrow = 'Institutional Content', title, description }: PlaceholderPageProps) {
  return (
    <section className="py-section-sm sm:py-section">
      <Container>
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 max-w-3xl border border-dashed border-brand-green/25 bg-white p-6">
          <p className="text-meta font-semibold uppercase tracking-[0.18em] text-brand-green">Structural placeholder</p>
          <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
            This route exists to establish the page archetype and navigation
            architecture. Its institutional content will be developed in a
            later phase using approved CEII material.
          </p>
        </div>
      </Container>
    </section>
  )
}