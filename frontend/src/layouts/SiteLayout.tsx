import { Outlet } from 'react-router'
import { DocumentMeta } from '../lib/seo'
import { useRouteMeta } from '../routes/config'
import { SkipLink } from '../components/SkipLink'
import { ScrollToTop } from './ScrollToTop'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

/**
 * Application shell — the single layout shared by every route.
 * Pages render into <main> via <Outlet/>; header/footer/metadata are
 * defined here once rather than per page.
 */
export function SiteLayout() {
  const meta = useRouteMeta()

  return (
    <div className="flex min-h-svh flex-col">
      <SkipLink />
      <DocumentMeta meta={meta} />
      <ScrollToTop />
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}