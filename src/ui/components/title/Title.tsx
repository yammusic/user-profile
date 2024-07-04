import React from 'react'

import { Typography } from '../common/typography'
import type { TitleProps } from './types'
import styles from './styles.module.scss'

export function Title(props: Readonly<TitleProps>) {
  const { children, ...rest } = props

  return (
    <Typography
      className={ styles.title }
      variant="h3"
      { ...rest }
    >
      { children }

      <div className={ styles.underline } />
    </Typography>
  )
}
