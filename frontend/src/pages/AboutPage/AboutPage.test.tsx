import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { AppShell } from '../../app/App'
import { ROLE_ITEMS } from './content'

function renderAbout(path = '/about') {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppShell />
    </MemoryRouter>,
  )
}

describe('about page', () => {
  it('renders exactly one h1 — the page introduction', async () => {
    renderAbout()
    const headings = await screen.findAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent(/about the centre/i)
  })

  it('shows the verified institutional overview and commitment statement', async () => {
    renderAbout()
    expect(await screen.findByText(/founded in 2021 and headquartered in abuja/i)).toBeInTheDocument()
    expect(
      screen.getByText(/committed to driving sustainable growth in the energy sector/i),
    ).toBeInTheDocument()
  })

  it('shows the approved mission statement', async () => {
    renderAbout()
    const eyebrow = await screen.findByText('Our mission')
    const section = eyebrow.closest('section') as HTMLElement
    expect(
      within(section).getByText('Accelerating Investment and Innovation Within the Global Energy Industry'),
    ).toBeInTheDocument()
  })

  it('renders every role item from the typed content', async () => {
    renderAbout()
    const heading = await screen.findByRole('heading', { level: 2, name: 'What the Centre does' })
    const section = heading.closest('section') as HTMLElement
    for (const item of ROLE_ITEMS) {
      expect(within(section).getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
    }
  })

  it('renders the engagement CTA routed to /contact', async () => {
    renderAbout()
    expect(await screen.findByRole('link', { name: 'Contact the Centre' })).toHaveAttribute('href', '/contact')
  })

  it('sets the about page document metadata', async () => {
    renderAbout()
    await screen.findByRole('heading', { level: 1 })
    expect(document.title).toBe('About CEII')
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      expect.stringContaining('Abuja, Nigeria'),
    )
  })
})