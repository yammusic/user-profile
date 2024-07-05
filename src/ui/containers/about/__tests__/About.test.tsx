import React from 'react'
import { render, screen } from '@testing-library/react'

import { UserContext } from '@/domain/contexts/user'
import { AboutSection } from '../About'

jest.mock('../../../../domain/hooks/useColorSchema', () => ({
  useColorSchema: jest.fn().mockReturnValue(false),
}))

const customRender = (ui: React.ReactElement, { providerProps, ...renderOptions }: any) => {
  return render(
    <UserContext.Provider value={ providerProps }>
      {ui}
    </UserContext.Provider>,
    renderOptions
  )
}

describe('AboutSection', () => {
  test('should render about section with user description', () => {
    const mockUser = {
      name: 'Alejandro Martínez',
      role: 'Diseñador Gráfico',
      email: 'alejandro.martinez@mail.com',
      phone: '+1 (123) 456-7890',
      location: 'CABA, Argentina',
      description: [
        'Soy Alejandro Martínez, un diseñador gráfico apasionado por el arte visual y la comunicación efectiva.',
        'Mi carrera comenzó en una pequeña agencia de publicidad, donde rápidamente me di cuenta de mi amor por el diseño de logotipos y la creación de marcas.',
        'En mi trabajo, me esfuerzo por combinar la creatividad con la funcionalidad, asegurándome de que cada pieza visual no solo sea estéticamente agradable, sino también efectiva en comunicar el mensaje deseado.'
      ],
      interests: []
    }

    customRender(<AboutSection />, {
      providerProps: {
        user: mockUser,
        colorMode: 'light',
        toggleColorMode: jest.fn(),
      },
    })

    expect(screen.getByText('Sobre mi')).toBeInTheDocument()
    expect(screen.getByText(mockUser.description[0])).toBeInTheDocument()
    expect(screen.getByText(mockUser.description[1])).toBeInTheDocument()
    expect(screen.getByText(mockUser.description[2])).toBeInTheDocument()
  })

  test('should render dark mode', () => {
    const mockUser = {
      name: 'Alejandro Martínez',
      role: 'Diseñador Gráfico',
      email: 'alejandro.martinez@mail.com',
      phone: '+1 (123) 456-7890',
      location: 'CABA, Argentina',
      description: [
        'Soy Alejandro Martínez, un diseñador gráfico apasionado por el arte visual y la comunicación efectiva.',
      ],
      interests: []
    }

    customRender(<AboutSection />, {
      providerProps: {
        user: mockUser,
        colorMode: 'dark',
        toggleColorMode: jest.fn(),
      },
    })

    const aboutSection = screen.getByTestId('about-section')
    expect(aboutSection).toHaveClass('dark')
  })
})
