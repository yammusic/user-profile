import React from 'react'
import { render, screen } from '@testing-library/react'

import { useUser } from '@/domain/contexts/user'
import { InterestsSection } from '../Interests'

jest.mock('../../../../domain/hooks/useColorSchema', () => ({
  useColorSchema: jest.fn().mockReturnValue(false),
}))

jest.mock('../../../../domain/contexts/user')

describe('InterestsSection', () => {
  beforeEach(() => {
    // Mock the useUser hook
    (useUser as jest.Mock).mockReturnValue({
      user: {
        interests: [
          {
            Icon: () => <svg data-testid="icon" />,
            title: 'Test Interest',
            description: 'This is a test interest description.',
          },
        ],
        colorMode: 'light',
      },
    })
  })

  it('renders interests correctly', () => {
    render(<InterestsSection />)

    expect(screen.getByText('Intereses')).toBeInTheDocument()
    expect(screen.getByText('Test Interest')).toBeInTheDocument()
    expect(screen.getByText('This is a test interest description.')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
