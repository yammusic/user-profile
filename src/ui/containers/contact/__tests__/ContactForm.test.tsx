import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { SnackbarProvider } from 'notistack'

import { delay } from '@/domain/utils/delay'
import { ContactForm } from '../ContactForm'

const mockEnqueueSnackbar = jest.fn()

jest.mock('notistack', () => ({
  useSnackbar: () => ({
    enqueueSnackbar: mockEnqueueSnackbar,
  }),
  SnackbarProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

describe('ContactForm', () => {
  test('should render contact form with required fields', async () => {
    const { getByTestId } = render(
      <SnackbarProvider>
        <ContactForm dark={ false } />
      </SnackbarProvider>
    )

    const nameInput = getByTestId('name-input') as HTMLInputElement
    const emailInput = getByTestId('email-input') as HTMLInputElement
    const messageInput = getByTestId('message-input') as HTMLInputElement
    const submitButton = getByTestId('submit-button')

    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(messageInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  test('should display error messages for invalid form submission', async () => {
    const { getByText, getByTestId } = render(
      <SnackbarProvider>
        <ContactForm dark={ false } />
      </SnackbarProvider>
    )

    const submitButton = getByTestId('submit-button')

    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(getByText('El nombre es obligatorio')).toBeInTheDocument()
      expect(getByText('El email es obligatorio')).toBeInTheDocument()
      expect(getByText('El mensaje es obligatorio')).toBeInTheDocument()
    })
  })

  test('should submit form successfully with valid input', async () => {
    const { getByTestId } = render(
      <SnackbarProvider>
        <ContactForm dark={ false } />
      </SnackbarProvider>
    )

    const nameInput = getByTestId('name-input') as HTMLInputElement
    const emailInput = getByTestId('email-input') as HTMLInputElement
    const messageInput = getByTestId('message-input') as HTMLInputElement
    const submitButton = getByTestId('submit-button')

    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } })
    fireEvent.change(messageInput, { target: { value: 'This is a test message.' } })
    fireEvent.click(submitButton)

    await delay(2000)
    await waitFor(() => {
      expect(mockEnqueueSnackbar).toHaveBeenCalledWith('Mensaje enviado correctamente!', expect.any(Object))
    })
  })

  test('should display error message for invalid email format', async () => {
    const { getByText, getByTestId } = render(
      <SnackbarProvider>
        <ContactForm dark={ false } />
      </SnackbarProvider>
    )

    const emailInput = getByTestId('email-input') as HTMLInputElement
    const submitButton = getByTestId('submit-button')

    fireEvent.change(emailInput, { target: { value: 'invalidemail' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(getByText('Por favor, ingrese un email valido')).toBeInTheDocument()
    })
  })
})
