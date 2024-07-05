import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { Input } from '../Input'

// Definimos los props de ejemplo
const mockProps = {
  id: 'test-input',
  placeholder: 'Enter text',
  value: 'Test value',
  onChange: jest.fn(),
  disabled: false,
}

describe('Input Component', () => {
  it('renders without crashing', () => {
    const { getByPlaceholderText } = render(<Input { ...mockProps } />)
    const inputElement = getByPlaceholderText(/enter text/i)
    expect(inputElement).toBeInTheDocument()
  })

  it('applies placeholder correctly', () => {
    const { getByPlaceholderText } = render(<Input { ...mockProps } />)
    const inputElement = getByPlaceholderText(/enter text/i)
    expect(inputElement).toHaveAttribute('placeholder', 'Enter text')
  })

  it('applies value correctly', () => {
    const { getByDisplayValue } = render(<Input { ...mockProps } />)
    const inputElement = getByDisplayValue(/test value/i)
    expect(inputElement).toHaveValue('Test value')
  })

  it('calls onChange handler when value changes', async () => {
    const { getByPlaceholderText } = render(<Input { ...mockProps } />)
    const inputElement = getByPlaceholderText(/enter text/i)

    fireEvent.change(inputElement, { target: { value: 'New value' } })

    await waitFor(() => {
      expect(mockProps.onChange).toHaveBeenCalledTimes(1)
      expect(mockProps.onChange).toHaveBeenCalledWith(expect.anything())
    })
  })

  it('disables the input when disabled prop is true', () => {
    const { getByPlaceholderText } = render(<Input { ...{ ...mockProps, disabled: true } } />)
    const inputElement = getByPlaceholderText(/enter text/i)
    expect(inputElement).toBeDisabled()
  })

  it('does not disable the input when disabled prop is false', () => {
    const { getByPlaceholderText } = render(<Input { ...mockProps } />)
    const inputElement = getByPlaceholderText(/enter text/i)
    expect(inputElement).not.toBeDisabled()
  })
})
