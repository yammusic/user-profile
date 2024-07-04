import React from 'react'
import { Input, Typography } from '../../common'
import type { TextFieldProps } from './types'
import styles from './styles.module.scss'

export function TextField(props: Readonly<TextFieldProps>) {
  const { error, helperText, ...rest } = props

  return (
    <div className={ styles.container }>
      <Input
        error={ !!error }
        labelProps={ { className: styles.label } }
        size="lg"
        { ...rest }
      />

      { (!!helperText && !error) && (
        <Typography className={ styles.helper } variant="small">
          { helperText }
        </Typography>
      ) }

      { (!!error) && (
        <Typography className={ styles.error } variant="small">
          { error }
        </Typography>
      ) }
    </div>
  )
}
