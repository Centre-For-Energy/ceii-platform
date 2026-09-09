import { CtaBand } from '../../components/CtaBand'
import { PageHero } from '../../components/PageHero'
import { PROGRAMS_CTA, PROGRAMS_INTRO } from './content'
import { InitiativesSection } from './sections/InitiativesSection'
import { OurFocusSection } from './sections/OurFocusSection'
import { WhatWeDoSection } from './sections/WhatWeDoSection'

/**
 * Programs page — the Centre's areas of work, key initiatives, and
 * strategic focus, built only from the approved organisation profile
 * (see content.ts for provenance). Composition follows the established
 * institutional-page pattern: shared PageHero, content sections that
 * keep the three source categories distinct, and the shared CtaBand.
 *
 * "Programs" is the website navigation label; the page's sections use
 * the approved source terminology. No initiative status, dates,
 * metrics, partners, or outcomes are published — none are verified.
 */
export function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow={PROGRAMS_INTRO.eyebrow}
        title={PROGRAMS_INTRO.title}
        description={PROGRAMS_INTRO.description}
      />
      <WhatWeDoSection />
      <InitiativesSection />
      <OurFocusSection />
      <CtaBand
        eyebrow={PROGRAMS_CTA.eyebrow}
        title={PROGRAMS_CTA.title}
        description={PROGRAMS_CTA.description}
        buttonLabel={PROGRAMS_CTA.buttonLabel}
        buttonTo={PROGRAMS_CTA.buttonTo}
      />
    </>
  )
}
