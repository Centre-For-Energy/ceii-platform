import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { AppShell } from '../../app/App'
import { DIRECTOR_GENERAL, GOVERNANCE_BODIES } from './content'

function renderGovernance(path = '/governance') {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppShell />
    </MemoryRouter>,
  )
}

describe('governance page', () => {
  it('renders exactly one h1 — the page introduction', async () => {
    renderGovernance()
    const headings = await screen.findAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent(/^governance$/i)
  })

  it('renders every verified governance body from the typed content', async () => {
    renderGovernance()
    const heading = await screen.findByRole('heading', { level: 2, name: 'Boards and management' })
    const section = heading.closest('section') as HTMLElement
    for (const body of GOVERNANCE_BODIES) {
      expect(within(section).getByRole('heading', { level: 3, name: body.title })).toBeInTheDocument()
    }
  })

  it('shows the verified Director General profile', async () => {
    renderGovernance()
    expect(await screen.findByRole('heading', { level: 3, name: DIRECTOR_GENERAL.name })).toBeInTheDocument()
    expect(screen.getByText(DIRECTOR_GENERAL.role)).toBeInTheDocument()
    const leadershipHeading = screen.getByRole('heading', {
      level: 2,
      name: 'Office of the Director General',
    })
    const section = leadershipHeading.closest('section') as HTMLElement
    expect(
      within(section).getByText(/leads the Centre.s management and its day-to-day direction/),
    ).toBeInTheDocument()
  })

  it('does not fabricate unverified personnel', () => {
    renderGovernance()
    // Only one person entry is verified; no roster cards may exist.
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(GOVERNANCE_BODIES.length + 1)
    // Legacy contact details from the 2023 snapshot must not be republished.
    expect(screen.queryByText(/\+2348098470303/)).not.toBeInTheDocument()
    expect(screen.queryByText(/dg@centreforenergy\.org/)).not.toBeInTheDocument()
  })

  it('renders the engagement CTA routed to /contact', async () => {
    renderGovernance()
    expect(await screen.findByRole('link', { name: 'Contact the Centre' })).toHaveAttribute('href', '/contact')
  })

  it('sets the governance page document metadata', async () => {
    renderGovernance()
    await screen.findByRole('heading', { level: 1 })
    expect(document.title).toBe('Governance — CEII')
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      expect.stringContaining('Office of the Director General'),
    )
  })
})
