/**
 * ProfileCard — a restrained institutional profile for named officeholders.
 *
 * Deliberately small: name, role, optional description, optional attributed
 * quote, optional image. When no cleared image exists (the current situation
 * for CEII personnel), the card renders a brand monogram instead of a
 * photograph — no stock or AI-generated portraits.
 */
export interface ProfileQuote {
  text: string
  attribution: string
}

interface ProfileCardProps {
  name: string
  role: string
  description?: string
  quote?: ProfileQuote
  image?: { src: string; alt: string }
}

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

export function ProfileCard({ name, role, description, quote, image }: ProfileCardProps) {
  return (
    <article className="border border-brand-green/15 bg-white">
      <div className="flex flex-col gap-6 p-6 sm:flex-row sm:gap-8 sm:p-8">
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            className="h-28 w-28 shrink-0 border border-brand-green/15 object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-28 w-28 shrink-0 items-center justify-center bg-brand-green text-3xl font-semibold text-white"
          >
            {initialsOf(name)}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="text-h3 font-semibold text-brand-green">{name}</h3>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-green-muted">
            {role}
          </p>
          {description ? <p className="mt-4 text-body leading-relaxed text-brand-ink/80">{description}</p> : null}
          {quote ? (
            <blockquote className="mt-5 border-l-2 border-brand-orange pl-4">
              <p className="text-body italic leading-relaxed text-brand-ink/80">&ldquo;{quote.text}&rdquo;</p>
              <footer className="mt-2 text-sm text-brand-ink/80">&mdash; {quote.attribution}</footer>
            </blockquote>
          ) : null}
        </div>
      </div>
    </article>
  )
}
