import type { ReactNode } from 'react'

export interface UserType {
  name: string
  role: string
  email: string
  phone: string
  description: string[]
  location: string
  interests: {
    Icon: any
    title: string
    description: string
  }[]
}

export interface UserState {
  colorMode: 'light' | 'dark'
  toggleColorMode: () => void
  user: UserType
}

export interface UserProviderProps {
  children: ReactNode
}
