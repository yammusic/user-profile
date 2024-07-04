'use client'

import React from 'react'
import { ThemeProvider } from '@material-tailwind/react'
import { SnackbarProvider } from 'notistack'

import { UserProvider } from '@/domain/contexts/user'
import type { AppLayoutProps } from './types'
import styles from './styles.module.scss'

export function AppLayout({ children }: Readonly<AppLayoutProps>) {
  return (
    <ThemeProvider>
      <SnackbarProvider maxSnack={ 3 }>
        <UserProvider>
          <main className={ styles.main }>
            { children }
          </main>
        </UserProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default AppLayout
