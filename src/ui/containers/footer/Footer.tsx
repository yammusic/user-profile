'use client'

import React from 'react'
import Link from 'next/link'

import { Avatar, Typography } from '@/app/components/common'
import { useUser } from '@/domain/contexts/user'
import styles from './styles.module.scss'

export function Footer() {
  const { colorMode } = useUser()
  const isDark = colorMode === 'dark'

  return (
    <footer className={ `${styles.footer} ${isDark ? styles.dark : ''}` }>
      <div className={ styles.content }>
        <Avatar
          alt="footer-avatar"
          src="/assets/avatar.jpg"
          variant="circular"
        />

        <nav className={ styles.nav }>
          <Link passHref href="#about">
            <Typography as="a" className={ styles.link } color="blue-gray">
              Sobre mi
            </Typography>
          </Link>

          <Link passHref href="#interests">
            <Typography as="a" className={ styles.link } color="blue-gray">
              Intereses
            </Typography>
          </Link>

          <Link passHref href="#contact">
            <Typography as="a" className={ styles.link } color="blue-gray">
              Contacto
            </Typography>
          </Link>
        </nav>
      </div>

      <hr className={ styles.divider } />

      <Typography className={ styles.copyright } color="blue-gray">
        Made with ❤️
      </Typography>
    </footer>
  )
}
