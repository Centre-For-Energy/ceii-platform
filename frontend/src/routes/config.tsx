/**
 * Route configuration — the single source of truth for CEII routes,
 * navigation, and per-route document metadata.
 *
 * Adding a page means: (1) add an entry to APP_ROUTES, (2) add it to
 * NAV_ITEMS if it belongs in the primary navigation. Routes support
 * future dynamic segments (e.g. `/news/:slug`) directly.
 *
 * This file holds data + hooks only (no components) so fast refresh is
 * preserved for the component files that consume it.
 */

import type { ReactNode } from 'react'
import { useLocation } from 'react-router'
import type { PageMeta } from '../lib/seo'
import { AboutPage } from '../pages/AboutPage/AboutPage'
import { GovernancePage } from '../pages/GovernancePage/GovernancePage'
import { HomePage } from '../pages/HomePage/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { PlaceholderPage } from '../pages/PlaceholderPage'

export interface AppRoute {
  path: string
  element: ReactNode
  meta: PageMeta
}

/** Primary navigation — small, approved institutional destinations. */
export const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/governance', label: 'Governance' },
  { to: '/programs', label: 'Programs' },
  { to: '/news', label: 'News' },
  { to: '/press', label: 'Press' },
  { to: '/contact', label: 'Contact' },
] as const

const DEFAULT_META: PageMeta = {
  title: 'Centre for Energy Investment and Innovation (CEII)',
  description:
    'Accelerating investment and innovation within the global energy industry. Abuja, Nigeria.',
}

/** Home page metadata — institutional positioning drawn from approved org content. */
const HOME_META: PageMeta = {
  title: 'Centre for Energy Investment and Innovation (CEII)',
  description:
    'A multi-disciplinary advisory and investment facilitation organisation headquartered in Abuja, Nigeria — advancing energy investment, energy transition, and innovation across Africa and beyond.',
}

export const APP_ROUTES: AppRoute[] = [
  {
    path: '/',
    element: <HomePage />,
    meta: HOME_META,
  },
  {
    path: '/about',
    element: <AboutPage />,
    meta: {
      title: 'About CEII',
      description:
        'The Centre for Energy Investment and Innovation (CEII) is a multi-disciplinary energy advisory and investment facilitation organisation headquartered in Abuja, Nigeria.',
    },
  },
  {
    path: '/governance',
    element: <GovernancePage />,
    meta: {
      title: 'Governance — CEII',
      description:
        'The governance and institutional leadership of the Centre for Energy Investment and Innovation: its boards, management structure, and the Office of the Director General.',
    },
  },
  {
    path: '/programs',
    element: <PlaceholderPage eyebrow="Programs" title="Programs" />,
    meta: { title: 'Programs — CEII', description: 'Programs of the Centre for Energy Investment and Innovation.' },
  },
  {
    path: '/news',
    element: <PlaceholderPage eyebrow="News" title="News" />,
    meta: { title: 'News — CEII', description: 'News from the Centre for Energy Investment and Innovation.' },
  },
  {
    path: '/press',
    element: <PlaceholderPage eyebrow="Press" title="Press" />,
    meta: { title: 'Press — CEII', description: 'Press and media information for the Centre for Energy Investment and Innovation.' },
  },
  {
    path: '/contact',
    element: <PlaceholderPage eyebrow="Contact" title="Contact" />,
    meta: { title: 'Contact — CEII', description: 'Contact the Centre for Energy Investment and Innovation.' },
  },
  {
    path: '*',
    element: <NotFoundPage />,
    meta: { title: 'Page not found — CEII', description: 'The requested page could not be found.' },
  },
]

/**
 * Resolves the metadata for the current pathname.
 *
 * Trailing slashes are normalized before lookup so `/about/` and `/about`
 * resolve to the same page metadata (canonical URLs already strip them).
 */
export function useRouteMeta(): PageMeta {
  const { pathname } = useLocation()
  const normalized = pathname.replace(/\/+$/, '') || '/'
  const match = APP_ROUTES.find((route) => route.path === normalized)
  if (match) return match.meta
  const fallback = APP_ROUTES.find((route) => route.path === '*')
  return fallback?.meta ?? DEFAULT_META
}