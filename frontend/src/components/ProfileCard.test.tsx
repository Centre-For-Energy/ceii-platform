import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProfileCard } from './ProfileCard'

describe('ProfileCard', () => {
  it('renders name, role, description and attributed quote', () => {
    render(
      <ProfileCard
        name="Ada Test"
        role="Officer"
        description="Institutional description text."
        quote={{ text: 'A verified quotation.', attribution: 'Ada Test' }}
      />,
    )
    expect(screen.getByRole('heading', { level: 3, name: 'Ada Test' })).toBeInTheDocument()
    expect(screen.getByText('Officer')).toBeInTheDocument()
    expect(screen.getByText('Institutional description text.')).toBeInTheDocument()
    expect(screen.getByText(/a verified quotation/i)).toBeInTheDocument()
  })

  it('renders a brand monogram instead of a photo when no cleared image exists', () => {
    render(<ProfileCard name="Ada Test" role="Officer" />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(screen.getByText('AT')).toBeInTheDocument()
  })

  it('renders the provided image with meaningful alt text when given', () => {
    render(<ProfileCard name="Ada Test" role="Officer" image={{ src: '/cleared.jpg', alt: 'Portrait of Ada Test' }} />)
    const img = screen.getByRole('img', { name: 'Portrait of Ada Test' })
    expect(img).toHaveAttribute('src', '/cleared.jpg')
  })
})
