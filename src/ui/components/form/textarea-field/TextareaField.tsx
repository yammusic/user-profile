import React from 'react'
import { Textarea, Typography } from '../../common'
import type { TextareaFieldProps } from './types'
import styles from './styles.module.scss'

export function TextareaField(props: Readonly<TextareaFieldProps>) {
  const { error, helperText, ...rest } = props

  return (
    <div
      className={ styles.container }
      data-testid="textarea-field"
    >
      <Textarea
        error={ !!error }
        labelProps={ { className: styles.label } }
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
