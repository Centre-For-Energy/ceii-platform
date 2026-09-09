import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { AppShell } from '../../app/App'
import { KEY_INITIATIVES, OUR_FOCUS, WHAT_WE_DO } from './content'

function renderPrograms(path = '/programs') {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppShell />
    </MemoryRouter>,
  )
}

describe('programs page', () => {
  it('renders exactly one h1 — the page introduction', async () => {
    renderPrograms()
    const headings = await screen.findAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent(/^programs$/i)
  })

  it('renders all six verified practice areas from the typed content', async () => {
    renderPrograms()
    const heading = await screen.findByRole('heading', { level: 2, name: 'Areas of work' })
    const section = heading.closest('section') as HTMLElement
    for (const area of WHAT_WE_DO) {
      expect(within(section).getByRole('heading', { level: 3, name: area.title })).toBeInTheDocument()
    }
    // Exact approved-source wording is preserved.
    expect(
      within(section).getByText('Developing governance and investment frameworks for African governments.'),
    ).toBeInTheDocument()
  })

  it('renders all five verified key initiatives from the typed content', async () => {
    renderPrograms()
    const heading = await screen.findByRole('heading', { level: 2, name: 'Named initiatives' })
    const section = heading.closest('section') as HTMLElement
    for (const initiative of KEY_INITIATIVES) {
      expect(within(section).getByRole('heading', { level: 3, name: initiative.title })).toBeInTheDocument()
    }
    expect(
      within(section).getByText('Attracting foreign direct investment into Nigeria’s energy sector.'),
    ).toBeInTheDocument()
  })

  it('renders all five verified strategic focus areas from the typed content', async () => {
    renderPrograms()
    const heading = await screen.findByRole('heading', { level: 2, name: 'Strategic focus' })
    const section = heading.closest('section') as HTMLElement
    for (const focus of OUR_FOCUS) {
      expect(within(section).getByText(focus.title)).toBeInTheDocument()
    }
  })

  it('publishes only verified personnel-free content — no fabricated statuses or roster entries', async () => {
    renderPrograms()
    // Exactly the six practice areas + five initiatives; nothing invented.
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(WHAT_WE_DO.length + KEY_INITIATIVES.length)
    // No initiative status/date badges — none are source-verified.
    for (const badge of ['Active', 'Ongoing', 'Completed', 'Flagship', 'Featured', '2025', '2026']) {
      expect(screen.queryByText(badge)).not.toBeInTheDocument()
    }
  })

  it('renders the engagement CTA routed to /contact', async () => {
    renderPrograms()
    expect(await screen.findByRole('link', { name: 'Contact the Centre' })).toHaveAttribute('href', '/contact')
  })

  it('sets the programs page document metadata', async () => {
    renderPrograms()
    await screen.findByRole('heading', { level: 1 })
    expect(document.title).toBe('Programs — CEII')
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      expect.stringContaining('key initiatives'),
    )
  })
})
