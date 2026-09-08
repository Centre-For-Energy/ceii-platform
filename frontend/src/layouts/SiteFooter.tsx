import { Container } from '../components/Container'

/**
 * Site footer — contentinfo landmark. Contact details below are drawn
 * from verified safe sources (see ENGINEERING-BASELINE.md).
 */
export function SiteFooter() {
  return (
    <footer className="bg-brand-green-deep text-white/80">
      <Container className="flex flex-col gap-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-white">Centre for Energy Investment and Innovation</p>
          <p className="mt-1">2, Sambreiro Crescent, Maitama 901101, Abuja, Nigeria</p>
        </div>
        <address className="not-italic">
          <a href="mailto:info@centreforenergy.org" className="underline-offset-2 hover:underline">
            info@centreforenergy.org
          </a>
          <span aria-hidden="true"> · </span>
          <a href="https://centreforenergy.org" className="underline-offset-2 hover:underline">
            centreforenergy.org
          </a>
        </address>
      </Container>
    </footer>
  )
}