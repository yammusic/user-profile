import React from 'react'
import { render, screen } from '@testing-library/react'

import { UserContext } from '@/domain/contexts/user'
import { ContactSection } from '../Contact'

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

describe('ContactSection', () => {
  test('should render contact section with user information', () => {
    render(
      <UserContext.Provider value={ mockUser as any }>
        <ContactSection />
      </UserContext.Provider>
    )

    const titleElement = screen.getByText('Contacto')
    const infoPersonalElement = screen.getByText('Información personal')
    const phoneIconElement = screen.getByTestId('phone-icon')
    const phoneLinkElement = screen.getByText('+1 (123) 456-7890')
    const emailIconElement = screen.getByTestId('email-icon')
    const emailLinkElement = screen.getByText('john.doe@example.com')
    const locationIconElement = screen.getByTestId('location-icon')
    const locationTextElement = screen.getByText('New York, USA')

    expect(titleElement).toBeInTheDocument()
    expect(infoPersonalElement).toBeInTheDocument()
    expect(phoneIconElement).toBeInTheDocument()
    expect(emailIconElement).toBeInTheDocument()
    expect(locationIconElement).toBeInTheDocument()
    expect(phoneLinkElement).toBeInTheDocument()
    expect(emailLinkElement).toBeInTheDocument()
    expect(locationTextElement).toBeInTheDocument()
  })
})
