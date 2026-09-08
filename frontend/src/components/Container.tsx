import type { HTMLAttributes } from 'react'

/**
 * Page container — the single content-width wrapper used by every layout
 * and page. All page content should sit inside this or a component built
 * on it, so width/whitespace decisions stay centralized.
 */
export function Container({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`mx-auto w-full max-w-page px-4 sm:px-6 lg:px-8 ${className}`} {...props} />
}