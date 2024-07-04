import React from 'react'
import { Avatar, Typography } from '@/app/components/common'
import styles from './styles.module.scss'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className={ styles.footer }>
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
