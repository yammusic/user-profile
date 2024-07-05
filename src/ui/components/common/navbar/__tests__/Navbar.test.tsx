import React from 'react'
import { render, screen } from '@testing-library/react'

import { Navbar } from '../Navbar'

// Mock para las props
const mockProps = {
  id: 'test-navbar',
  className: 'test-class',
}

describe('Navbar Component', () => {
  it('renders without crashing', () => {
    render(
      <Navbar { ...mockProps }>
        <div>Test Child</div>
      </Navbar>
    )
    const navbarElement = screen.getByRole('navigation')
    expect(navbarElement).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    render(
      <Navbar { ...mockProps }>
        <div>Test Child</div>
      </Navbar>
    )
    const childElement = screen.getByText(/test child/i)
    expect(childElement).toBeInTheDocument()
  })

  it('applies props correctly', () => {
    render(
      <Navbar { ...mockProps }>
        <div>Test Child</div>
      </Navbar>
    )
    const navbarElement = screen.getByRole('navigation')
    expect(navbarElement).toHaveAttribute('id', 'test-navbar')
    expect(navbarElement).toHaveClass('test-class')
  })
})
