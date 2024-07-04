'use client'

import React from 'react'

import { Title } from '@/app/components/title'
import { Typography } from '@/app/components/common'
import styles from './styles.module.scss'

export function AboutSection() {
  return (
    <section className={ styles.about } id="about">
      <Title>Sobre mi</Title>

      <Typography>
        Soy Alejandro Martínez, un diseñador gráfico apasionado por el arte visual y la comunicación efectiva. Con más de 8 años de experiencia en la industria del diseño, he tenido la oportunidad de trabajar en una amplia variedad de proyectos, desde la creación de identidades visuales hasta el desarrollo de campañas publicitarias integrales.
      </Typography>

      <Typography>
        Mi carrera comenzó en una pequeña agencia de publicidad, donde rápidamente me di cuenta de mi amor por el diseño de logotipos y la creación de marcas. A lo largo de los años, he perfeccionado mis habilidades en ilustración digital, diseño web y fotografía, permitiéndome ofrecer soluciones de diseño completas y coherentes para mis clientes.
      </Typography>

      <Typography>
        En mi trabajo, me esfuerzo por combinar la creatividad con la funcionalidad, asegurándome de que cada pieza visual no solo sea estéticamente agradable, sino también efectiva en comunicar el mensaje deseado. Me apasiona el branding, y creo firmemente que una marca fuerte puede hacer una gran diferencia en el éxito de un negocio.
      </Typography>
    </section>
  )
}

export default AboutSection
