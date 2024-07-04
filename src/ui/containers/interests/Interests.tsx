'use client'

import React from 'react'
import { GoTypography } from 'react-icons/go'
import { GrBriefcase } from 'react-icons/gr'
import { LiaCameraRetroSolid } from 'react-icons/lia'
import { MdWeb } from 'react-icons/md'
import { PiPaintBrush } from 'react-icons/pi'
import { SlPicture } from 'react-icons/sl'

import { Title } from '@/app/components/title'
import { Typography } from '@/app/components/common'
import styles from './styles.module.scss'

const INTERESTS = [
  {
    Icon: PiPaintBrush,
    title: 'Diseño de logotipos',
    description: 'Me encanta crear logotipos que capturen la esencia de una marca y sean más legibles y visuales.'
  },
  {
    Icon: SlPicture,
    title: 'Ilustración digital',
    description: 'Disfruto de la libertad creativa que ofrece la ilustración digital, permitiéndome explorar nuevas ideas y estilos.'
  },
  {
    Icon: LiaCameraRetroSolid,
    title: 'Fotografía',
    description: 'La fotografía me permite capturar momentos y crear imágenes que complementan mi trabajo de diseño.'
  },
  {
    Icon: GrBriefcase,
    title: 'Branding',
    description: 'Ayudar a las empresas a desarrollar una identidad de marca sólida y coherente es una de mis mayores pasiones.'
  },
  {
    Icon: GoTypography,
    title: 'Tipografía',
    description: 'La elección de la tipografía adecuada puede transformar un diseño y comunicar el tono correcto de un mensaje.'
  },
  {
    Icon: MdWeb,
    title: 'Diseño web',
    description: 'Crear una página web de una marca es una de mis principales pasiones, y me esfuerzo por crear una experiencia de usuario excepcional.'
  }
]

export function InterestsSection() {
  return (
    <section className={ styles.interests } id="interests">
      <Title>Intereses</Title>

      <div className={ styles.container }>
        { INTERESTS.map(({ Icon, title, description }) => (
          <article className={ styles.article } key={ title }>
            <Icon className={ styles.icon } />

            <Typography className={ styles.title } variant="lead">
              { title }
            </Typography>

            <Typography className={ styles.description }>
              { description }
            </Typography>
          </article>
        )) }
      </div>
    </section>
  )
}

export default InterestsSection
