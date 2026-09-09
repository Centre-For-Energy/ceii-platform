import { ButtonLink } from './Button'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

/**
 * CtaBand — the shared institutional engagement band: brand-green, orange
 * rule, centered heading block and a single button.
 *
 * Used by the Home page and About page (and future institutional pages),
 * with per-page copy supplied by the caller.
 */
interface CtaBandProps {
  eyebrow: string
  title: string
  description?: string
  buttonLabel: string
  buttonTo: string
}

export function CtaBand({ eyebrow, title, description, buttonLabel, buttonTo }: CtaBandProps) {
  return (
    <section className="bg-brand-green py-section-sm text-white sm:py-section">
      <div className="h-1 w-full bg-brand-orange" aria-hidden="true" />
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} onDark align="center" />
          <ButtonLink to={buttonTo} variant="inverse">
            {buttonLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}