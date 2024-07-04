'use client'

import React from 'react'

import { Title } from '@/app/components/title'
import { Typography } from '@/app/components/common'
import { useUser } from '@/domain/contexts/user'
import styles from './styles.module.scss'

export function InterestsSection() {
  const { user } = useUser()

  return (
    <section className={ styles.interests } id="interests">
      <Title>Intereses</Title>

      <div className={ styles.container }>
        { user?.interests?.map(({ Icon, title, description }) => (
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
