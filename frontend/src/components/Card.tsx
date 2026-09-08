import type { HTMLAttributes } from 'react'

/**
 * Institutional card — a bordered content surface. Sharp corners and
 * restrained borders keep the visual language editorial rather than
 * "SaaS-y". Optional `accent` adds a brand-orange top rule.
 */
interface CardProps extends HTMLAttributes<HTMLElement> {
  accent?: boolean
}

export function Card({ accent = false, className = '', ...props }: CardProps) {
  return (
    <article
      className={`border border-brand-green/15 bg-white p-6 sm:p-8 ${accent ? 'border-t-2 border-t-brand-orange' : ''} ${className}`}
      {...props}
    />
  )
}