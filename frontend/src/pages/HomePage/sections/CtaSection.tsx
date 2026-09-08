import { CtaBand } from '../../../components/CtaBand'

/**
 * Home page call to action — institutional engagement band routed to
 * /contact. Shared band markup lives in components/CtaBand.
 */
export function CtaSection() {
  return (
    <CtaBand
      eyebrow="Engage with CEII"
      title="Shape the future of energy investment and innovation"
      description="Contact the Centre to discuss collaboration, research, advisory, and investment-facilitation engagements."
      buttonLabel="Contact the Centre"
      buttonTo="/contact"
    />
  )
}