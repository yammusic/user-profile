import React from 'react'
import { render, screen } from '@testing-library/react'
import { TextareaField } from '../TextareaField'
import styles from '../styles.module.scss'

// Mock para las props
const mockProps = {
  error: '',
  helperText: 'Helper text',
}

describe('TextareaField Component', () => {
  it('renders without crashing', () => {
    render(<TextareaField { ...mockProps } />)
    const textareaElement = screen.getByRole('textbox')
    expect(textareaElement).toBeInTheDocument()
  })

  it('displays helper text when provided and no error', () => {
    render(<TextareaField { ...mockProps } />)
    const helperTextElement = screen.getByText(/helper text/i)
    expect(helperTextElement).toBeInTheDocument()
    expect(helperTextElement).toHaveClass(styles.helper)
  })

  it('displays error text when error prop is provided', () => {
    render(<TextareaField { ...{ ...mockProps, error: 'Error text' } } />)
    const errorTextElement = screen.getByText(/error text/i)
    expect(errorTextElement).toBeInTheDocument()
    expect(errorTextElement).toHaveClass(styles.error)
  })

  it('does not display helper text when error prop is provided', () => {
    render(<TextareaField { ...{ ...mockProps, error: 'Error text' } } />)
    const helperTextElement = screen.queryByText(/helper text/i)
    expect(helperTextElement).not.toBeInTheDocument()
  })

  it('applies rest props correctly to Textarea', () => {
    render(<TextareaField { ...{ ...mockProps, id: 'test-id', placeholder: 'Enter text' } } />)
    const textareaElement = screen.getByPlaceholderText(/enter text/i)
    expect(textareaElement).toHaveAttribute('id', 'test-id')
  })
})
