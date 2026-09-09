/**
 * About page content — typed, statically maintained institutional copy.
 *
 * Provenance (content authority hierarchy, Phase 2C directive):
 * - org profile README (github.com/Centre-For-Energy, approved): founding,
 *   headquarters, hub positioning, mission tagline
 * - legacy-site-archive/about-us.html (safe recovered archive): commitment
 *   statement, hub/value-chain copy (lightly edited for clarity only)
 * - legacy-site-archive/objectives.html (safe recovered archive): advisory
 *   and human-capital items condensed into the role list
 *
 * No verified vision statement exists in recovered material, so no
 * Vision section is rendered. When editorial/CMS integration lands, this
 * module is the seam for content served by the content API.
 */

/** Page intro — hero eyebrow, title and lead paragraph. */
export const ABOUT_INTRO = {
  eyebrow: 'Centre for Energy Investment and Innovation',
  title: 'About the Centre',
  description:
    'A multi-disciplinary advisory and investment facilitation organisation established to promote sustainable energy practices, drive investment, and advance innovation across the global energy industry.',
}

/** Institutional overview — approved org profile README. */
export const OVERVIEW = {
  eyebrow: 'Institutional overview',
  title: 'A hub for energy knowledge and opportunity',
  body: 'Founded in 2021 and headquartered in Abuja, Nigeria, CEII serves as a hub for the exchange of knowledge, technological innovations, and opportunities within the energy sector — with emphasis on energy security, energy transition, and sustainable development across Africa and beyond.',
}

/** Commitment statement — legacy-site-archive/about-us.html. */
export const COMMITMENT_QUOTE =
  'We are committed to driving sustainable growth in the energy sector, promoting responsible investment, and ensuring a secure and reliable energy supply for generations to come.'

/** Mission statement — approved org profile README tagline. */
export const MISSION = {
  eyebrow: 'Our mission',
  quote: 'Accelerating Investment and Innovation Within the Global Energy Industry',
  note: 'The CEII mission statement',
}

export interface RoleItem {
  title: string
  description: string
}

/**
 * Role within the energy ecosystem. Items condense approved and legacy
 * copy; each statement is directly supported by the cited source.
 */
export const ROLE_ITEMS: RoleItem[] = [
  {
    title: 'Knowledge exchange',
    description:
      'A hub for the exchange of knowledge, technological innovations, and opportunities within the energy sector.',
  },
  {
    title: 'Value-chain focus',
    description:
      'Exploring the global energy value chain, analysing its challenges and potential, and identifying strategies to channel investment for its growth and sustenance.',
  },
  {
    title: 'Advisory and facilitation',
    description:
      'Advising governments and organisations on investment decisions, energy policy, and financing frameworks.',
  },
  {
    title: 'Human capital',
    description: 'Developing energy-sector expertise and building the skills the transition era demands.',
  },
]

/** Closing engagement band — routed to /contact. */
export const ABOUT_CTA = {
  eyebrow: 'Get involved',
  title: 'Join the conversation shaping the future of energy investment and innovation',
  description:
    'The Centre welcomes engagement with governments, organisations, and individuals working across the energy sector.',
  buttonLabel: 'Contact the Centre',
  buttonTo: '/contact',
}