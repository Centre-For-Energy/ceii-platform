import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { DocumentMeta } from './seo'

function renderMeta(path: string, meta: Parameters<typeof DocumentMeta>[0]['meta']) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <DocumentMeta meta={meta} />
    </MemoryRouter>,
  )
}

describe('DocumentMeta', () => {
  it('sets the document title and description', () => {
    renderMeta('/about', { title: 'About CEII', description: 'About the Centre.' })
    expect(document.title).toBe('About CEII')
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', 'About the Centre.')
  })

  it('writes canonical and Open Graph URLs for the current path', () => {
    renderMeta('/governance', { title: 'Governance — CEII' })
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://centreforenergy.org/governance',
    )
    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute(
      'content',
      'https://centreforenergy.org/governance',
    )
    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute('content', 'Governance — CEII')
  })

  it('uses the site root for the home path', () => {
    renderMeta('/', { title: 'CEII' })
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://centreforenergy.org',
    )
  })
})