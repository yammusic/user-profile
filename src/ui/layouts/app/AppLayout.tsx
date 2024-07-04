'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { ThemeProvider } from '@material-tailwind/react'
import { SnackbarProvider } from 'notistack'
import { Roboto } from 'next/font/google'

import type { AppLayoutProps } from './types'
import styles from './styles.module.scss'

const UserProvider = dynamic(() => import('@/domain/contexts/user/UserProvider'), { ssr: false })

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export function AppLayout({ children }: Readonly<AppLayoutProps>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={ `${roboto.className}` }
        data-testid="app-layout-body"
      >
        <ThemeProvider>
          <SnackbarProvider maxSnack={ 3 }>
            <UserProvider>
              <main className={ styles.main }>
                { children }
              </main>
            </UserProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default AppLayout
