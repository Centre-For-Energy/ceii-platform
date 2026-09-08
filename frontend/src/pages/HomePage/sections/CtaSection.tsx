import { ButtonLink } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { SectionHeading } from '../../../components/SectionHeading'

/**
 * Call to action — institutional engagement band routed to /contact.
 */
export function CtaSection() {
  return (
    <section className="bg-brand-green py-section-sm text-white sm:py-section">
      <div className="h-1 w-full bg-brand-orange" aria-hidden="true" />
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <SectionHeading
            eyebrow="Engage with CEII"
            title="Shape the future of energy investment and innovation"
            description="Contact the Centre to discuss collaboration, research, advisory, and investment-facilitation engagements."
            onDark
            align="center"
          />
          <ButtonLink to="/contact" variant="inverse">
            Contact the Centre
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}