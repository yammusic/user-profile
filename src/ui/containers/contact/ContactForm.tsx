import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useSnackbar } from 'notistack'
import type { SnackbarOrigin } from 'notistack'

import { Button } from '@/app/components/common'
import { TextField, TextareaField } from '@/app/components/form'
import { REGEX_EMAIL } from '@/domain/constants/app'
import { delay } from '@/domain/utils/delay'

import type { ContactFormData } from './types'
import styles from './styles.module.scss'

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const snackbarPosition: SnackbarOrigin = {
    horizontal: 'right',
    vertical: 'bottom',
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async () => {
    setLoading(true)

    try {
      await delay(2000)

      enqueueSnackbar('Mensaje enviado correctamente!', {
        anchorOrigin: snackbarPosition,
        variant: 'success',
      })
    } catch (err) {
      enqueueSnackbar('Error al enviar el mensaje', {
        anchorOrigin: snackbarPosition,
        variant: 'error',
      })
    } finally {
      reset()
      setLoading(false)
    }
  }

  return (
    // eslint-disable-next-line react/jsx-handler-names
    <form noValidate className={ styles.form } onSubmit={ handleSubmit(onSubmit) }>
      <div>
        <Controller
          control={ control }
          name="name"
          render={ ({ field }) => (
            <TextField
              { ...field }
              required
              error={ errors.name?.message }
              helperText={ 'Escriba su nombre completo' }
              label="Nombre"
              type="text"
            />
          ) }
          rules={ { required: 'El nombre es obligatorio' } }
        />
      </div>

      <div>
        <Controller
          control={ control }
          name="email"
          render={ ({ field }) => (
            <TextField
              { ...field }
              required
              error={ errors.email?.message }
              helperText={ 'Escriba su correo electrónico' }
              label="Email"
              type="email"
            />
          ) }
          rules={ {
            required: 'El email es obligatorio',
            pattern: {
              value: REGEX_EMAIL,
              message: 'Por favor, ingrese un email valido',
            },
          } }
        />
      </div>

      <div>
        <Controller
          control={ control }
          name="message"
          render={ ({ field }) => (
            <TextareaField
              { ...field }
              required
              error={ errors.message?.message }
              label="Mensaje"
            />
          ) }
          rules={ { required: 'El mensaje es obligatorio' } }
        />
      </div>

      <Button color="blue" loading={ loading } type="submit">
        { loading ? 'Enviando...' : 'Enviar' }
      </Button>
    </form>
  )
}
