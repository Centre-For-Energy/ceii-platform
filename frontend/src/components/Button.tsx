import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'

export type ButtonVariant = 'primary' | 'secondary'

const base =
  'inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold ' +
  'transition-colors focus-visible:outline-2 focus-visible:outline-offset-2'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-brand-green text-white hover:bg-brand-green-deep',
  secondary: 'border border-brand-green/30 text-brand-green hover:bg-brand-green hover:text-white',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

/** Action button. For navigation actions use `ButtonLink`. */
export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}

interface ButtonLinkProps {
  to: string
  variant?: ButtonVariant
  className?: string
  children: ReactNode
}

/** Navigation element styled as a button (renders a react-router Link). */
export function ButtonLink({ to, variant = 'primary', className = '', children }: ButtonLinkProps) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}