import { Container } from '../../../components/Container'
import { SectionHeading } from '../../../components/SectionHeading'
import { NEWS_ITEMS } from '../content'

/**
 * News & insights preview — the editorial boundary.
 *
 * Future integration: `NEWS_ITEMS` will be populated from the content
 * API (Strapi editorial content consumed through the FastAPI boundary)
 * once publishing is live. Until then the section renders an explicit
 * empty state — it deliberately contains no fabricated news items.
 */
export function NewsPreviewSection() {
  return (
    <section className="bg-white py-section-sm sm:py-section">
      <Container>
        <SectionHeading
          eyebrow="News & insights"
          title="Latest from the Centre"
          description="News, press, and analysis from CEII as they are published."
        />
        <div className="mt-12">
          {NEWS_ITEMS.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">{/* Editorial items render here. */}</div>
          ) : (
            <div className="border border-dashed border-brand-green/25 bg-brand-paper p-8">
              <p className="text-meta font-semibold uppercase tracking-[0.18em] text-brand-green">
                Editorial content
              </p>
              <p className="mt-3 max-w-2xl text-body leading-relaxed text-brand-ink/80">
                News and press items are published through the CEII content
                system and will appear here as they are approved. This section
                is the integration boundary for editorial content.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}