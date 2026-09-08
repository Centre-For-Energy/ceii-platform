import { ButtonLink } from '../../../components/Button'
import { Container } from '../../../components/Container'

/**
 * Hero — the institutional opening statement.
 *
 * The right-hand graphic is a decorative orbital composition echoing the
 * CEII globe-and-orbit logo mark (CSS/SVG only, no photography). It is
 * purely decorative and hidden from assistive technology.
 */
export function HeroSection() {
  return (
    <section className="bg-brand-green text-white">
      <div className="h-1 w-full bg-brand-orange" aria-hidden="true" />
      <Container className="py-section-sm sm:py-section">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div>
            <p className="text-meta font-semibold uppercase tracking-[0.22em] text-brand-orange-soft">
              Abuja, Nigeria · Est. 2021
            </p>
            <h1 className="mt-5 max-w-2xl text-h1 font-semibold leading-tight sm:text-display">
              Accelerating investment and innovation within the global energy industry
            </h1>
            <p className="mt-6 max-w-xl text-body leading-relaxed text-white/85 sm:text-h3">
              A multi-disciplinary advisory and investment facilitation organisation
              working at the intersection of energy policy, investment frameworks,
              and governance — with emphasis on energy security, energy transition,
              and sustainable development across Africa and beyond.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink to="/about" variant="inverse">
                About CEII
              </ButtonLink>
              <ButtonLink to="/contact" variant="outline-light">
                Contact us
              </ButtonLink>
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden="true">
            <svg viewBox="0 0 480 480" className="mx-auto w-full max-w-105" role="presentation">
              <circle cx="240" cy="240" r="92" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1.5" />
              <circle cx="240" cy="240" r="150" fill="none" stroke="#ffffff" strokeOpacity="0.10" strokeWidth="1.5" />
              <circle cx="240" cy="240" r="208" fill="none" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1.5" />
              <ellipse
                cx="240"
                cy="240"
                rx="196"
                ry="86"
                fill="none"
                stroke="#ff9a4d"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                transform="rotate(-24 240 240)"
              />
              <circle cx="240" cy="240" r="4" fill="#ff6200" />
              <circle
                cx="240"
                cy="54"
                r="5"
                fill="#ff9a4d"
                transform="rotate(-24 240 240)"
              />
              <circle cx="392" cy="208" r="3.5" fill="#ffffff" fillOpacity="0.6" />
              <circle cx="88" cy="296" r="3" fill="#ffffff" fillOpacity="0.4" />
            </svg>
          </div>
        </div>
      </Container>
    </section>
  )
}