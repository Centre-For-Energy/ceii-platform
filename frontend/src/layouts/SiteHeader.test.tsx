import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { SiteHeader } from './SiteHeader'

function renderHeader() {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <SiteHeader />
    </MemoryRouter>,
  )
}

describe('site header', () => {
  it('hides the mobile menu by default and announces state via aria-expanded', () => {
    renderHeader()
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('navigation', { name: 'Primary' })).toHaveLength(1)
  })

  it('opens the mobile menu, exposing navigation links', async () => {
    const user = userEvent.setup()
    renderHeader()
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute('aria-expanded', 'true')

    const [desktopNav, mobileNav] = screen.getAllByRole('navigation', { name: 'Primary' })
    expect(desktopNav).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('closes the mobile menu with Escape', async () => {
    const user = userEvent.setup()
    renderHeader()
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getAllByRole('navigation', { name: 'Primary' })).toHaveLength(2)
    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('navigation', { name: 'Primary' })).toHaveLength(1)
  })

  it('closes the mobile menu when a link is selected', async () => {
    const user = userEvent.setup()
    renderHeader()
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const [, mobileNav] = screen.getAllByRole('navigation', { name: 'Primary' })
    await user.click(within(mobileNav).getByRole('link', { name: 'News' }))
    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute('aria-expanded', 'false')
  })
})