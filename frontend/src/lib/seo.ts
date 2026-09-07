/**
 * Per-route document metadata (title, description, canonical, Open Graph).
 *
 * Rendering strategy (see frontend/README.md): the CEII platform is a
 * Vite + React SPA. Route metadata is declared centrally in the route
 * configuration and applied by `DocumentMeta` on navigation. If the
 * platform later requires build-time prerendering for SEO-critical
 * editorial volume, this layer is the single integration point — page
 * components never touch the document head directly.
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router'

export interface PageMeta {
  title: string
  description?: string
}

export const SITE_NAME = 'Centre for Energy Investment and Innovation'

/** Public origin of the organisation site; used for canonical/OG URLs. */
export const SITE_URL = 'https://centreforenergy.org'

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function canonicalUrl(pathname: string): string {
  const clean = pathname === '/' ? '' : pathname.replace(/\/+$/, '')
  return `${SITE_URL}${clean}`
}

export function DocumentMeta({ meta }: { meta: PageMeta }): null {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = meta.title
    upsertMeta('name', 'description', meta.description ?? '')
    upsertMeta('property', 'og:title', meta.title)
    upsertMeta('property', 'og:description', meta.description ?? '')
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', canonicalUrl(pathname))
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertCanonical(canonicalUrl(pathname))
  }, [meta.title, meta.description, pathname])

  return null
}