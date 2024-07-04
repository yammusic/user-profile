'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Input, Textarea } from '@material-tailwind/react'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineAlternateEmail, MdOutlineLocationOn } from 'react-icons/md'
import { TiPhoneOutline } from 'react-icons/ti'

import { Title } from '@/app/components/title'
import { Button, Typography } from '@/app/components/common'
import styles from './styles.module.scss'

const PHONE = '+1 (123) 456-7890'
const EMAIL = 'alejandro.martinez@mail.com'

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [success, setSuccess] = useState(false)

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // Aquí podrías agregar lógica de validación y envío
    setSuccess(true)
  }

  return (
    <section className={ styles.contact } id="contact">
      <Title>Contacto</Title>

      <div className="flex flex-col w-full gap-6 md:flex-row">
        <div className="flex flex-col flex-1">
          <Typography className="mb-6" variant="lead">
            Información personal
          </Typography>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <TiPhoneOutline className="text-4xl text-blue-500" />

              <Link href={ `tel:${ PHONE }` } rel="noopener noreferrer">
                <Typography className="text-blue-500 hover:underline">{ PHONE }</Typography>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <MdOutlineAlternateEmail className="text-4xl text-blue-500" />

              <Link href={ `mailto:${ EMAIL }` } rel="noopener noreferrer">
                <Typography className="text-blue-500 hover:underline">{ EMAIL }</Typography>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <MdOutlineLocationOn className="text-4xl text-blue-500" />

              <Typography>CABA, Argentina</Typography>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <Typography className="mb-6" variant="lead">
            ¡Escribime un mensaje para contactarme!
          </Typography>

          <form className="flex flex-col space-y-4" onSubmit={ onSubmit }>
            <Input
              required
              label="Nombre"
              name="name"
              onChange={ onChange }
              type="text"
              value={ formData.name }
            />

            <Input
              required
              label="Email"
              name="email"
              onChange={ onChange }
              type="email"
              value={ formData.email }
            />

            <Textarea
              required
              label="Mensaje"
              name="message"
              onChange={ onChange }
              value={ formData.message }
            />

            <Button color="blue" type="submit">
              Enviar
            </Button>
          </form>
        </div>
      </div>


      {success ? <Typography className="mt-4" color="green">¡Mensaje enviado con éxito!</Typography> : null}
    </section>
  )
}

export default ContactSection
