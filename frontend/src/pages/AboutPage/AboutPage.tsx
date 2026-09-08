import { CtaBand } from '../../components/CtaBand'
import { PageHero } from '../../components/PageHero'
import { ABOUT_CTA, ABOUT_INTRO } from './content'
import { MissionSection } from './sections/MissionSection'
import { OverviewSection } from './sections/OverviewSection'
import { RoleSection } from './sections/RoleSection'

/**
 * About page — the first institutional subpage, establishing the
 * standard composition for the remaining routes: a shared PageHero,
 * content sections, and the shared CtaBand.
 *
 * No Vision section: no verified vision statement exists in recovered
 * material (content.ts documents this).
 */
export function AboutPage() {
  return (
    <>
      <PageHero eyebrow={ABOUT_INTRO.eyebrow} title={ABOUT_INTRO.title} description={ABOUT_INTRO.description} />
      <OverviewSection />
      <MissionSection />
      <RoleSection />
      <CtaBand
        eyebrow={ABOUT_CTA.eyebrow}
        title={ABOUT_CTA.title}
        description={ABOUT_CTA.description}
        buttonLabel={ABOUT_CTA.buttonLabel}
        buttonTo={ABOUT_CTA.buttonTo}
      />
    </>
  )
}