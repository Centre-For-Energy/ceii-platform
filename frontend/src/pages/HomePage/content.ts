/**
 * Home page content — typed, statically maintained institutional copy.
 *
 * Provenance (content authority hierarchy, Phase 2B directive):
 * - org profile README (github.com/Centre-For-Energy, approved): tagline,
 *   mission positioning, focus areas, key initiatives, contact details
 * - legacy-site-archive/ (safe recovered archive): about-us.html and
 *   objectives.html copy, lightly edited for clarity only
 *
 * When editorial/CMS integration lands, this module is the seam: each
 * section below consumes typed data and can be switched to the content
 * API without rewriting section components.
 */

export interface FocusArea {
  title: string
  description: string
}

/** Source: org profile README — "What We Do". */
export const FOCUS_AREAS: FocusArea[] = [
  {
    title: 'Energy Investment Advisory',
    description: 'Developing governance and investment frameworks for African governments.',
  },
  {
    title: 'Sovereign Fund Development',
    description: 'Creating structured investment vehicles, including the New Niger Fund and the New Liberia Fund.',
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
    description: 'Energy market analysis, sector reports, and institutional publications.',
  },
]

export interface Initiative {
  title: string
  description: string
}

/** Source: org profile README — "Key Initiatives". */
export const INITIATIVES: Initiative[] = [
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

/**
 * Source: legacy-site-archive/objectives.html (safe recovered archive).
 * Wording preserved with minimal editorial cleanup.
 */
export const OBJECTIVES: string[] = [
  'Create a platform for conversations on transformation plans and the energy transition drive across all sectors.',
  'Drive in-depth research and learning within the energy sector to gain insight into models of sustainable investing.',
  'Develop human capital expertise within the energy sector.',
  'Advise organizations within the energy and financing framework on investment decisions in the energy transition era.',
  'Engage governments on best policies to aid the growth and development of the energy industry.',
  'Drive innovative approaches to the complexities of the oil and gas sector, promoting natural gas investment and proper stakeholder engagement.',
  'Help the finance industry make sense of the transitions happening within the energy industry.',
]

/**
 * Editorial boundary contract for the news/insights preview.
 *
 * Future integration: this array will be served by the content API
 * (Strapi via the FastAPI boundary). Until editorial publishing is live
 * it remains empty and the section renders an explicit empty state —
 * no fabricated news items.
 */
export interface NewsItem {
  title: string
  date: string
  excerpt: string
  url: string
}

export const NEWS_ITEMS: NewsItem[] = []