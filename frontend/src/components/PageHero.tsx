/**
 * PageHero — the standard institutional page introduction: a brand-green
 * band with the orange brand rule, an eyebrow, the page's single H1, and
 * an optional lead paragraph.
 *
 * Used by every institutional subpage (About now; Governance, Programs,
 * Contact, … later) so page intros stay visually consistent. The Home
 * hero is a distinct composition and deliberately does not use this.
 */
import { Container } from './Container'

interface PageHeroProps {
  eyebrow: string
  title: string
  description?: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-brand-green text-white">
      <div className="h-1 w-full bg-brand-orange" aria-hidden="true" />
      <Container className="py-section-sm sm:py-section">
        <p className="text-meta font-semibold uppercase tracking-[0.22em] text-brand-orange-soft">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-h1 font-semibold leading-tight sm:text-display">{title}</h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-body leading-relaxed text-white/85 sm:text-h3">{description}</p>
        ) : null}
      </Container>
    </section>
  )
}