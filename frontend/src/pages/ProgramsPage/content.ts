/**
 * Programs page content — typed, statically maintained institutional copy.
 *
 * Content authority: every statement below is drawn from the approved CEII
 * organisation profile (github.com/Centre-For-Energy/.github —
 * profile/README.md), sections "What We Do", "Our Focus", and
 * "Key Initiatives". Descriptions are the source's own wording (emoji
 * decoration stripped; minor sentence-case adaptation only). No status,
 * dates, metrics, partners, outcomes, or activity claims exist in any
 * approved source, so none are published.
 *
 * Terminology note (not rendered): no approved source establishes
 * "Programs" as a CEII content taxonomy. The source terminology is
 * "What We Do" / "Our Focus" / "Key Initiatives" — preserved here as the
 * section titles. "Programs" is only the website navigation label
 * established during the application-shell phase. Legacy sources use
 * "Objectives" for a separate (already published on Home) concept; the
 * four categories are not interchangeable.
 *
 * Naming variance (documented, not resolved by invention): the source's
 * "What We Do" table abbreviates "New Niger Fund" / "New Liberia Fund"
 * inside the Sovereign Fund Development description, while "Key
 * Initiatives" carries the fuller names used below. The abbreviated
 * parenthetical is omitted from the practice-area copy; the fuller names
 * appear once, in Key Initiatives.
 */

/** A published CEII practice area ("What We Do" in the approved source). */
export interface PracticeArea {
  title: string
  description: string
}

/** Approved source: "What We Do" table (6 areas). */
export const WHAT_WE_DO: PracticeArea[] = [
  {
    title: 'Energy Investment Advisory',
    description: 'Developing governance and investment frameworks for African governments.',
  },
  {
    title: 'Sovereign Fund Development',
    description: 'Creating structured investment vehicles.',
  },
  {
    title: 'Energy Transition Strategy',
    description: 'National decarbonization roadmaps and transition planning.',
  },
  {
    title: 'Policy Advocacy',
    description: 'Advising governments on energy policy and regulatory reform.',
  },
  {
    title: 'Human Capital Development',
    description: 'Training programs, learning frameworks, and capacity building.',
  },
  {
    title: 'Research & Publications',
    description: 'Energy market analysis, OPEC bulletins, sector reports.',
  },
]

/** A named CEII initiative ("Key Initiatives" in the approved source). */
export interface Initiative {
  title: string
  description: string
}

/**
 * Approved source: "Key Initiatives" (5 named). No initiative carries
 * verified status, dates, or outcomes — deliberately represented as name
 * and descriptor only.
 */
export const KEY_INITIATIVES: Initiative[] = [
  {
    title: 'Nigeria Energy Transition Fund (NETFUND)',
    description: 'Attracting foreign direct investment into Nigeria’s energy sector.',
  },
  {
    title: 'New Niger Governance & Investment Framework (NLGIF)',
    description: 'Sovereign investment framework for Niger State.',
  },
  {
    title: 'New Liberia Governance & Investment Framework',
    description: 'Strategic roadmap for the Republic of Liberia.',
  },
  {
    title: 'National Decarbonization Program',
    description: 'Roadmap development for Nigeria’s decarbonization efforts.',
  },
  {
    title: 'BusinessTechnology Under 30',
    description: 'Recognizing emerging leaders in energy and technology.',
  },
]

/** A strategic focus area ("Our Focus" in the approved source). */
export interface FocusArea {
  title: string
  description: string
}

/** Approved source: "Our Focus" list (5 items). */
export const OUR_FOCUS: FocusArea[] = [
  {
    title: 'Africa-Centric Energy Solutions',
    description: 'Driving sustainable energy across the continent.',
  },
  {
    title: 'Investment Facilitation',
    description: 'Connecting global capital with African energy opportunities.',
  },
  {
    title: 'Energy Transition',
    description: 'Supporting the shift to clean and renewable energy.',
  },
  {
    title: 'Governance Frameworks',
    description: 'Building transparent, investor-friendly regulatory environments.',
  },
  {
    title: 'Data-Driven Insights',
    description: 'Research and analysis for informed decision-making.',
  },
]

/** Page intro — hero eyebrow, title and lead paragraph. */
export const PROGRAMS_INTRO = {
  eyebrow: 'Centre for Energy Investment and Innovation',
  title: 'Programs',
  description:
    'The Centre’s areas of work, key initiatives, and strategic focus across energy investment, energy transition, and innovation.',
}

/** Closing engagement band — routed to /contact. */
export const PROGRAMS_CTA = {
  eyebrow: 'Get involved',
  title: 'Engage with the Centre’s work',
  description:
    'The Centre welcomes engagement with governments, organisations, and individuals working across the energy sector.',
  buttonLabel: 'Contact the Centre',
  buttonTo: '/contact',
}
