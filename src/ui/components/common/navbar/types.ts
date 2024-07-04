import type { ReactNode } from 'react'
import type { NavbarProps as MTRNavbarProps } from '@material-tailwind/react'

export interface NavbarProps extends MTRNavbarProps {
  children: ReactNode
}
