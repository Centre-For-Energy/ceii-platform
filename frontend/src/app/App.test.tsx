import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { AppShell } from './App'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppShell />
    </MemoryRouter>,
  )
}

describe('application shell', () => {
  it('renders the header, main region and footer landmarks', () => {
    renderAt('/')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the home page by default', async () => {
    renderAt('/')
    expect(
      await screen.findByRole('heading', { level: 1, name: /accelerating investment and innovation/i }),
    ).toBeInTheDocument()
  })

  it('resolves page metadata for trailing-slash URLs', async () => {
    renderAt('/about/')
    expect(await screen.findByRole('heading', { level: 1, name: /about the centre/i })).toBeInTheDocument()
    expect(document.title).toBe('About CEII')
  })

  it('navigates from the primary navigation to a route', async () => {
    const user = userEvent.setup()
    renderAt('/')
    await user.click(screen.getByRole('link', { name: 'About' }))
    expect(await screen.findByRole('heading', { level: 1, name: /about the centre/i })).toBeInTheDocument()
  })

  it('renders the not-found page for unknown routes', async () => {
    renderAt('/does-not-exist')
    expect(await screen.findByRole('heading', { level: 1, name: /page not found/i })).toBeInTheDocument()
  })

  it('provides a skip-to-content link targeting the main region', () => {
    renderAt('/')
    const skip = screen.getByRole('link', { name: /skip to main content/i })
    expect(skip).toHaveAttribute('href', '#main-content')
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')
  })
})