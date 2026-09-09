import { ProfileCard } from '../../../components/ProfileCard'
import { Container } from '../../../components/Container'
import { SectionHeading } from '../../../components/SectionHeading'
import { DIRECTOR_GENERAL } from '../content'

/**
 * Leadership — the Office of the Director General. One verified named
 * officeholder; no biography, credentials, appointment dates, photograph,
 * or contact details are published because no safe source verifies them.
 */
export function LeadershipSection() {
  return (
    <section className="bg-brand-paper py-section-sm sm:py-section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
          <SectionHeading
            eyebrow="Leadership"
            title="Office of the Director General"
            description="The Office of the Director General leads the Centre's management and its day-to-day direction."
          />
          <ProfileCard
            name={DIRECTOR_GENERAL.name}
            role={DIRECTOR_GENERAL.role}
            description={DIRECTOR_GENERAL.description}
            quote={DIRECTOR_GENERAL.quote}
          />
        </div>
      </Container>
    </section>
  )
}
