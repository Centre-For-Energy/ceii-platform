/**
 * Section heading — the standard institutional heading block:
 * optional eyebrow (kicker) + title + optional lead paragraph.
 * Keeps heading hierarchy and spacing consistent across pages.
 */
interface SectionHeadingProps {
  eyebrow?: string
  title: string
  /** Lead paragraph rendered below the title. */
  description?: string
  /** Heading level: pages use `h1`, in-page sections use the default `h2`. */
  as?: 'h1' | 'h2'
  /** On dark (brand-green) surfaces, eyebrow/text colours invert. */
  onDark?: boolean
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  as = 'h2',
  onDark = false,
  align = 'left',
}: SectionHeadingProps) {
  const centered = align === 'center'
  const Heading = as
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? (
        <p
          className={`text-meta font-semibold uppercase tracking-[0.18em] ${
            onDark ? 'text-brand-orange-soft' : 'text-brand-green'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading className={`mt-3 text-h2 font-semibold ${onDark ? 'text-white' : 'text-brand-green'}`}>{title}</Heading>
      {description ? (
        <p className={`mt-4 text-body leading-relaxed ${onDark ? 'text-white/85' : 'text-brand-ink/80'}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}