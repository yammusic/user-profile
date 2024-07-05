import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { useUser } from '@/domain/contexts/user'
import { Header } from '../Header'

jest.mock('../../../../domain/hooks/useColorSchema', () => ({
  useColorSchema: jest.fn().mockReturnValue(false),
}))

jest.mock('../../../../domain/contexts/user')

describe('Header', () => {
  beforeEach(() => {
    // Mock the useUser hook
    (useUser as jest.Mock).mockReturnValue({
      user: {
        name: 'John Doe',
        role: 'Developer',
      },
      colorMode: 'light',
      toggleColorMode: jest.fn(),
    })
  })

  it('renders user information correctly', () => {
    render(<Header />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Developer')).toBeInTheDocument()
  })

  it('toggles color mode when button is clicked', () => {
    render(<Header />)

    const toggleButton = screen.getByRole('button')
    fireEvent.click(toggleButton)

    expect(useUser().toggleColorMode).toHaveBeenCalled()
  })
})
