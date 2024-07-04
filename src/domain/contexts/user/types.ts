import type { ReactNode } from 'react'

export interface UserType {
  name: string
  role: string
  description: string[]
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
