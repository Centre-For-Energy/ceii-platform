import { CtaBand } from '../../components/CtaBand'
import { PageHero } from '../../components/PageHero'
import { GOVERNANCE_CTA, GOVERNANCE_INTRO } from './content'
import { LeadershipSection } from './sections/LeadershipSection'
import { StructureSection } from './sections/StructureSection'

/**
 * Governance page — institutional structure and leadership, built only
 * from CEII-published source material (see content.ts for provenance).
 * Composition follows the established institutional-page pattern: a
 * shared PageHero, content sections, and the shared CtaBand.
 *
 * Intentionally absent: Chairman's name, Advisory/Management Board
 * membership, biographies, credentials, appointment dates, photographs,
 * and legacy contact details — no safe source verifies them, and none
 * were invented.
 */
export function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow={GOVERNANCE_INTRO.eyebrow}
        title={GOVERNANCE_INTRO.title}
        description={GOVERNANCE_INTRO.description}
      />
      <StructureSection />
      <LeadershipSection />
      <CtaBand
        eyebrow={GOVERNANCE_CTA.eyebrow}
        title={GOVERNANCE_CTA.title}
        description={GOVERNANCE_CTA.description}
        buttonLabel={GOVERNANCE_CTA.buttonLabel}
        buttonTo={GOVERNANCE_CTA.buttonTo}
      />
    </>
  )
}
