'use client'

import React from 'react'
import { Navbar as MTRNavbar } from '@material-tailwind/react'

import type { NavbarProps } from './types'

export function Navbar(props: Readonly<NavbarProps>) {
  const { children, ...rest } = props

  return (
    <MTRNavbar
      { ...rest as any }
    >
      { children }
    </MTRNavbar>
  )
}
