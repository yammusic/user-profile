import React from 'react'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Roboto } from 'next/font/google'
import '@/app/styles/globals.scss'

import { APP_DESCRIPTION, APP_TITLE } from '@/domain/constants/app'

const AppLayout = dynamic(() => import('@/app/layouts/app/AppLayout'), { ssr: false })

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={ `${roboto.className}` }
      >
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  )
}
