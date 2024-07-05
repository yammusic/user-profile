import React from 'react'
import { act, render, renderHook, screen } from '@testing-library/react'
import { UserProvider, UserContext } from '../UserProvider'
import { useUser } from '../hooks'

jest.mock('../../../hooks/useColorSchema', () => ({
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

describe('UserProvider', () => {
  test('should provide default user context values', () => {
    const { result } = renderHook(() => useUser(), {
      wrapper: UserProvider,
    })

    expect(result.current.user.name).toBe('Alejandro Martínez')
    expect(result.current.user.role).toBe('Diseñador Gráfico')
    expect(result.current.colorMode).toBe('light')
  })

  test('should toggle color mode', () => {
    const { result } = renderHook(() => useUser(), {
      wrapper: UserProvider,
    })

    act(() => {
      result.current.toggleColorMode()
    })

    expect(result.current.colorMode).toBe('dark')

    act(() => {
      result.current.toggleColorMode()
    })

    expect(result.current.colorMode).toBe('light')
  })

  test('should render children', () => {
    customRender(<div>Test Child</div>, {
      providerProps: {
        user: {
          name: 'Test User',
          role: 'Test Role',
        },
        colorMode: 'light',
        toggleColorMode: jest.fn(),
      },
    })

    expect(screen.getByText('Test Child')).toBeInTheDocument()
  })
})
