// src/app/components/footer/__tests__/Footer.test.tsx

import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer'
import { UserContext } from '@/domain/contexts/user'

jest.mock('../../../../domain/hooks/useColorSchema', () => ({
  useColorSchema: jest.fn().mockReturnValue(false),
}))

const mockUser = {
  colorMode: 'light',
  user: {
    name: 'John Doe',
    role: 'Designer',
    email: 'john.doe@example.com',
    phone: '+1 (123) 456-7890',
    location: 'New York, USA',
  },
  toggleColorMode: jest.fn(),
}

describe('Footer', () => {
  test('should render footer with links and avatar', () => {
    render(
      <UserContext.Provider value={ mockUser as any }>
        <Footer />
      </UserContext.Provider>
    )

    const aboutLinkElement = screen.getByText('Sobre mi')
    const interestsLinkElement = screen.getByText('Intereses')
    const contactLinkElement = screen.getByText('Contacto')
    const avatarElement = screen.getByAltText('footer-avatar')
    const madeWithElement = screen.getByText('Made with ❤️')

    expect(aboutLinkElement).toBeInTheDocument()
    expect(interestsLinkElement).toBeInTheDocument()
    expect(contactLinkElement).toBeInTheDocument()
    expect(avatarElement).toBeInTheDocument()
    expect(madeWithElement).toBeInTheDocument()
  })
})
