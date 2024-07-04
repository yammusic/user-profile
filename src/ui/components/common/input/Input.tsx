'use client'

import React from 'react'
import { Input as MTRInput } from '@material-tailwind/react'

import type { InputProps } from './types'

export function Input(props: Readonly<InputProps>) {
  const { ...rest } = props

  return (
    <MTRInput
      { ...rest as any }
    />
  )
}
