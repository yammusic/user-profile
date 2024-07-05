import React from 'react'
import { render, screen } from '@testing-library/react'

import { TextField } from '../TextField'
import styles from '../styles.module.scss'

// Mock para las props
const mockProps = {
  dark: false,
  error: '',
  helperText: 'Helper text',
}

describe('TextField Component', () => {
  it('renders without crashing', () => {
    render(<TextField { ...mockProps } />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
  })

  it('applies dark class when dark prop is true', () => {
    render(<TextField { ...{ ...mockProps, dark: true } } />)
    const containerElement = screen.getByTestId('text-field')
    expect(containerElement).toHaveClass(styles.dark)
  })

  it('does not apply dark class when dark prop is false', () => {
    render(<TextField { ...mockProps } />)
    const containerElement = screen.getByTestId('text-field')
    expect(containerElement).not.toHaveClass(styles.dark)
  })

  it('displays helper text when provided and no error', () => {
    render(<TextField { ...mockProps } />)
    const helperTextElement = screen.getByText(/helper text/i)
    expect(helperTextElement).toBeInTheDocument()
    expect(helperTextElement).toHaveClass(styles.helper)
  })

  it('displays error text when error prop is provided', () => {
    render(<TextField { ...{ ...mockProps, error: 'Error text' } } />)
    const errorTextElement = screen.getByText(/error text/i)
    expect(errorTextElement).toBeInTheDocument()
    expect(errorTextElement).toHaveClass(styles.error)
  })

  it('does not display helper text when error prop is provided', () => {
    render(<TextField { ...{ ...mockProps, error: 'Error text' } } />)
    const helperTextElement = screen.queryByText(/helper text/i)
    expect(helperTextElement).not.toBeInTheDocument()
  })

  it('applies rest props correctly to Input', () => {
    render(<TextField { ...{ ...mockProps, id: 'test-id', placeholder: 'Enter text' } } />)
    const inputElement = screen.getByPlaceholderText(/enter text/i)
    expect(inputElement).toHaveAttribute('id', 'test-id')
  })
})
