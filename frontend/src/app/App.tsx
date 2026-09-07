import { BrowserRouter } from 'react-router'
import { AppRoutes } from '../routes'

/**
 * AppShell — the router tree without a router context, exported for
 * tests (rendered inside a MemoryRouter). Contains every route under
 * the shared SiteLayout.
 */
export function AppShell() {
  return <AppRoutes />
}

/** App root — BrowserRouter + the application shell. */
export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}