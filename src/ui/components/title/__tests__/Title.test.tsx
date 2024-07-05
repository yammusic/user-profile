import React from 'react'
import { render, screen } from '@testing-library/react'

import { Title } from '../Title'
import styles from '../styles.module.scss'

// Mock para las props
const mockProps = {
  children: 'Test Title',
  dark: false,
}

describe('Title Component', () => {
  it('renders without crashing', () => {
    render(<Title { ...mockProps } />)
    const titleElement = screen.getByText(/test title/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('applies children correctly', () => {
    render(<Title { ...mockProps } />)
    const titleElement = screen.getByText(/test title/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('applies dark class when dark prop is true', () => {
    render(<Title { ...{ ...mockProps, dark: true } } />)
    const titleElement = screen.getByText(/test title/i)
    expect(titleElement).toHaveClass(styles.dark)
  })

  it('does not apply dark class when dark prop is false', () => {
    render(<Title { ...mockProps } />)
    const titleElement = screen.getByText(/test title/i)
    expect(titleElement).not.toHaveClass(styles.dark)
  })

  it('renders underline element', () => {
    render(<Title { ...mockProps } />)
    const underlineElement = screen.getByTestId('underline')
    expect(underlineElement).toBeInTheDocument()
  })

  it('applies rest props correctly', () => {
    render(<Title { ...{ ...mockProps, id: 'test-id' } } />)
    const titleElement = screen.getByText(/test title/i)
    expect(titleElement).toHaveAttribute('id', 'test-id')
  })
})
