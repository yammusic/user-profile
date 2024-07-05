'use client'

import React from 'react'

import { Title } from '@/app/components/title'
import { Typography } from '@/app/components/common'
import { useUser } from '@/domain/contexts/user'
import styles from './styles.module.scss'

export function AboutSection() {
  const { colorMode, user } = useUser()
  const isDark = colorMode === 'dark'

  return (
    <section
      className={ `${styles.about} ${isDark ? styles.dark : ''}` }
      id="about"
    >
      <Title dark={ isDark }>Sobre mi</Title>

      { user?.description.map((paragraph) => (
        <Typography key={ paragraph }>{ paragraph }</Typography>
      ))}
    </section>
  )
}

export default AboutSection
