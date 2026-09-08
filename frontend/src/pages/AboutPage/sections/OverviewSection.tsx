import { Container } from '../../../components/Container'
import { SectionHeading } from '../../../components/SectionHeading'
import { COMMITMENT_QUOTE, OVERVIEW } from '../content'

/**
 * Institutional overview — the approved founding/positioning paragraph
 * beside the recovered commitment statement as an editorial pull quote.
 */
export function OverviewSection() {
  return (
    <section className="py-section-sm sm:py-section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionHeading eyebrow={OVERVIEW.eyebrow} title={OVERVIEW.title} description={OVERVIEW.body} />
          <blockquote className="flex flex-col justify-center border-l-2 border-brand-orange pl-6 sm:pl-8">
            <p className="text-h3 font-medium leading-relaxed text-brand-green">{COMMITMENT_QUOTE}</p>
            <footer className="mt-4 text-meta uppercase tracking-[0.18em] text-brand-green-muted">
              The Centre&apos;s commitment
            </footer>
          </blockquote>
        </div>
      </Container>
    </section>
  )
}