import { CtaSection } from './sections/CtaSection'
import { ContextSection } from './sections/ContextSection'
import { FocusAreasSection } from './sections/FocusAreasSection'
import { HeroSection } from './sections/HeroSection'
import { InitiativesSection } from './sections/InitiativesSection'
import { MissionSection } from './sections/MissionSection'
import { NewsPreviewSection } from './sections/NewsPreviewSection'

/**
 * Home page — the first real CEII institutional page.
 *
 * Pure composition: each section is a reusable, self-contained component
 * consuming typed content from ./content.ts. No page-level layout logic
 * lives here; the shell (header/footer/metadata) is owned by SiteLayout.
 */
export function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <FocusAreasSection />
      <ContextSection />
      <InitiativesSection />
      <NewsPreviewSection />
      <CtaSection />
    </>
  )
}