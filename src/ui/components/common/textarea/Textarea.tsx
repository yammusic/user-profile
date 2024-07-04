'use client'

import React from 'react'
import { Textarea as MTRTextarea } from '@material-tailwind/react'

import type { TextareaProps } from './types'

export function Textarea(props: Readonly<TextareaProps>) {
  const { ...rest } = props

  return (
    <MTRTextarea
      { ...rest as any }
    />
  )
}
