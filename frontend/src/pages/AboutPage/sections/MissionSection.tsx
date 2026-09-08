import { Container } from '../../../components/Container'
import { MISSION } from '../content'

/**
 * Mission statement — the approved CEII tagline presented as a full-band
 * editorial quote on the dark brand surface.
 */
export function MissionSection() {
  return (
    <section className="bg-brand-green-deep py-section-sm text-white sm:py-section">
      <Container>
        <p className="text-meta font-semibold uppercase tracking-[0.22em] text-brand-orange-soft">{MISSION.eyebrow}</p>
        <p className="mt-6 max-w-4xl text-h1 font-semibold leading-tight sm:text-display">{MISSION.quote}</p>
        <p className="mt-6 text-meta uppercase tracking-[0.18em] text-white/60">{MISSION.note}</p>
      </Container>
    </section>
  )
}