import type { AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router'

/**
 * Application link — the default styled link for in-app navigation.
 * External links should use a plain <a> (see SiteFooter).
 */
export function AppLink({
  className = '',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) {
  return (
    <Link
      className={`font-medium text-brand-green underline decoration-brand-green/30 underline-offset-4 hover:decoration-brand-green ${className}`}
      {...props}
    />
  )
}