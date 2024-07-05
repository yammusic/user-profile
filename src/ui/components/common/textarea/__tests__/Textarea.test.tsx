import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import { Textarea } from '../Textarea'

// Mock para las props
const mockProps = {
  id: 'test-textarea',
  placeholder: 'Enter text',
  value: 'Test value',
  onChange: jest.fn(),
  disabled: false,
}

describe('Textarea Component', () => {
  it('renders without crashing', () => {
    render(<Textarea { ...mockProps } />)
    const textareaElement = screen.getByPlaceholderText(/enter text/i)
    expect(textareaElement).toBeInTheDocument()
  })

  it('applies placeholder correctly', () => {
    render(<Textarea { ...mockProps } />)
    const textareaElement = screen.getByPlaceholderText(/enter text/i)
    expect(textareaElement).toHaveAttribute('placeholder', 'Enter text')
  })

  it('applies value correctly', () => {
    render(<Textarea { ...mockProps } />)
    const textareaElement = screen.getByDisplayValue(/test value/i)
    expect(textareaElement).toHaveValue('Test value')
  })

  it('calls onChange handler when value changes', async () => {
    render(<Textarea { ...mockProps } />)
    const textareaElement = screen.getByPlaceholderText(/enter text/i)

    fireEvent.change(textareaElement, { target: { value: 'New value' } })

    await waitFor(() => {
      expect(mockProps.onChange).toHaveBeenCalledTimes(1)
      expect(mockProps.onChange).toHaveBeenCalledWith(expect.anything())
    })
  })

  it('disables the textarea when disabled prop is true', () => {
    render(<Textarea { ...{ ...mockProps, disabled: true } } />)
    const textareaElement = screen.getByPlaceholderText(/enter text/i)
    expect(textareaElement).toBeDisabled()
  })

  it('does not disable the textarea when disabled prop is false', () => {
    render(<Textarea { ...mockProps } />)
    const textareaElement = screen.getByPlaceholderText(/enter text/i)
    expect(textareaElement).not.toBeDisabled()
  })
})
