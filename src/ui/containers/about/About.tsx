'use client'

import React from 'react'

import { Title } from '@/app/components/title'
import { Typography } from '@/app/components/common'
import { useUser } from '@/domain/contexts/user'
import styles from './styles.module.scss'

export function AboutSection() {
  const { user } = useUser()

  return (
    <section className={ styles.about } id="about">
      <Title>Sobre mi</Title>

      { user?.description.map((paragraph) => (
        <Typography key={ paragraph }>{ paragraph }</Typography>
      ))}
    </section>
  )
}

export default AboutSection
