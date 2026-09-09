import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { AppShell } from '../../app/App'
import { FOCUS_AREAS, INITIATIVES, OBJECTIVES } from './content'

function renderHome() {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <AppShell />
    </MemoryRouter>,
  )
}

/** Finds a section by its h2 title and returns the section element. */
async function sectionByHeading(name: RegExp | string) {
  const heading = await screen.findByRole('heading', { level: 2, name })
  return heading.closest('section') as HTMLElement
}

describe('home page', () => {
  it('renders exactly one h1 (the institutional tagline)', async () => {
    renderHome()
    const headings = await screen.findAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent(/accelerating investment and innovation/i)
  })

  it('renders the hero call-to-action links to their routes', async () => {
    renderHome()
    expect(screen.getByRole('link', { name: 'About CEII' })).toHaveAttribute('href', '/about')
    expect(screen.getByRole('link', { name: 'Contact us' })).toHaveAttribute('href', '/contact')
    expect(screen.getByRole('link', { name: 'Contact the Centre' })).toHaveAttribute('href', '/contact')
  })

  it('renders every focus area from the typed content and links into the canonical detail', async () => {
    renderHome()
    const section = await sectionByHeading(/six areas of institutional focus/i)
    for (const area of FOCUS_AREAS) {
      expect(within(section).getByRole('heading', { level: 3, name: area.title })).toBeInTheDocument()
    }
    // Preview pass: Home points into the canonical /programs detail.
    expect(within(section).getByRole('link', { name: 'Explore our programs' })).toHaveAttribute('href', '/programs')
  })

  it('renders the institutional objectives list', async () => {
    renderHome()
    const section = await sectionByHeading(/serving the energy transition era/i)
    expect(within(section).getAllByRole('listitem')).toHaveLength(OBJECTIVES.length)
  })

  it('renders every initiative from the typed content and links into the canonical detail', async () => {
    renderHome()
    const section = await sectionByHeading(/programmes and frameworks/i)
    for (const initiative of INITIATIVES) {
      expect(within(section).getByRole('heading', { level: 3, name: initiative.title })).toBeInTheDocument()
    }
    // Preview pass: Home renders initiative titles only — descriptions live on /programs.
    expect(within(section).queryByText('Attracting foreign direct investment into Nigeria’s energy sector.')).toBeNull()
    expect(within(section).getByRole('link', { name: 'Explore our programs' })).toHaveAttribute('href', '/programs')
  })

  it('shows an explicit empty state for editorial content rather than fabricated news', async () => {
    renderHome()
    const section = await sectionByHeading(/latest from the centre/i)
    expect(within(section).getByText(/published through the CEII content system/i)).toBeInTheDocument()
  })
})