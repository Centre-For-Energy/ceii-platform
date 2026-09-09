/**
 * Governance page content — typed, statically maintained institutional copy.
 *
 * Content authority: only statements directly supported by CEII-published
 * sources are rendered. Personnel information that no safe source verifies
 * (Chairman's name, Advisory/Management Board membership, biographies,
 * credentials, appointment dates, photographs) is intentionally absent.
 *
 * Sources used (safe material only — Assets/DO-NOT-USE-RESTRICTED/ was
 * never accessed):
 * - legacy-site-archive/leadership.html (CEII website snapshot, 2023-06-18):
 *   governance structure wording and the Office of the Director General
 *   entry naming Grema Sulaiman Ahmad
 * - legacy-site-archive/article-grema-energy.html (CEII news article,
 *   2024-06-21): attributed quotes and partnership/collaboration description
 * - org profile README (github.com/Centre-For-Energy, approved): mission
 *   tagline used in the CTA
 *
 * Known discrepancy preserved, not resolved by invention: the 2023
 * leadership page titles Grema Sulaiman Ahmad "Director General" (heading
 * "Office of the Director General") while a 2024 CEII article calls him
 * "Chairperson of the Centre". The profile below uses the leadership-page
 * title, which is the dedicated governance source; both readings are noted
 * here for the content owner to reconcile before any wider publication.
 */

/** Page intro — hero eyebrow, title and lead paragraph. */
export const GOVERNANCE_INTRO = {
  eyebrow: 'Centre for Energy Investment and Innovation',
  title: 'Governance',
  description:
    'The governance and institutional leadership of the Centre: its boards, management structure, and the office responsible for its day-to-day direction.',
}

export interface GovernanceBody {
  title: string
  /** What the source directly establishes about this body. */
  description: string
}

/**
 * Verified governance structure — CEII-published wording (leadership.html):
 * "Advisory Board is governed by the Chairman Governing Board." and the
 * "Management Board / Office of the Director General" heading. The source
 * establishes these bodies and that relationship only; no further
 * reporting lines are inferred and no membership is listed, because no
 * safe source verifies it.
 */
export const GOVERNANCE_BODIES: GovernanceBody[] = [
  {
    title: 'Governing Board',
    description:
      'Chaired by the Chairman of the Governing Board, which the published structure identifies as the governing authority over the Advisory Board.',
  },
  {
    title: 'Advisory Board',
    description: 'Governed by the Chairman of the Governing Board.',
  },
  {
    title: 'Management Board',
    description:
      'The management tier of the Centre, headed through the Office of the Director General.',
  },
]

/**
 * The one verified named officeholder (leadership.html, "Office of the
 * Director General"). Legacy contact details from the 2023 snapshot are
 * deliberately NOT republished — their currency is unverified. The quote
 * is verbatim from the CEII-published 2024 article; the description
 * paraphrases that article's own characterisation of his work.
 */
export const DIRECTOR_GENERAL = {
  name: 'Grema Sulaiman Ahmad',
  role: 'Director General',
  description:
    'Leads the Centre’s work convening industry professionals, researchers, and policymakers, and has built strategic partnerships in support of energy projects and initiatives across Nigeria and Africa.',
  quote: {
    text: 'We are creating a conducive environment for innovation, investment, and knowledge sharing, significantly contributing to the growth and development of the energy industry.',
    attribution: 'Grema Sulaiman Ahmad, CEII (2024)',
  },
} as const

/** Closing engagement band — routed to /contact. */
export const GOVERNANCE_CTA = {
  eyebrow: 'Get involved',
  title: 'Engage with the Centre’s governance and leadership',
  description:
    'The Centre welcomes engagement with governments, organisations, and individuals working across the energy sector.',
  buttonLabel: 'Contact the Centre',
  buttonTo: '/contact',
}
