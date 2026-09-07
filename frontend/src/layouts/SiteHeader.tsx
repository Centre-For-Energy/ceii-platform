import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Container } from '../components/Container'
import { NAV_ITEMS } from '../routes/config'

/**
 * Site header — banner landmark with wordmark, data-driven primary
 * navigation (desktop) and an accessible disclosure-style mobile menu.
 *
 * Mobile menu behaviour:
 * - toggle button announces state via aria-expanded / aria-controls
 * - Escape closes the panel and returns focus to the toggle
 * - selecting a link closes the panel
 * - focus moves to the first link when the panel opens
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return
    panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="border-b border-brand-green/15 bg-white">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src="/ceii-logo.png" alt="CEII logo" className="h-12 w-12 shrink-0 rounded-full object-cover" />
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">
              Centre for Energy Investment &amp; Innovation
            </span>
            <span className="block truncate text-meta text-brand-green-muted">
              Accelerating investment and innovation within the global energy industry
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `border-b-2 pb-1 text-nav font-medium transition-colors ${
                  isActive
                    ? 'border-brand-orange text-brand-green'
                    : 'border-transparent text-brand-green hover:text-brand-green-muted'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
          className="-mr-1 p-1 text-brand-green md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <nav
          ref={panelRef}
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-brand-green/15 bg-white md:hidden"
        >
          <Container className="flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-l-2 py-3 pl-3 text-nav font-medium ${
                    isActive ? 'border-brand-orange text-brand-green' : 'border-transparent text-brand-green'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  )
}