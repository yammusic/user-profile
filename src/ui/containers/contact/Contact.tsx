'use client'

import React from 'react'
import Link from 'next/link'
import { MdOutlineAlternateEmail, MdOutlineLocationOn } from 'react-icons/md'
import { TiPhoneOutline } from 'react-icons/ti'

import { Title } from '@/app/components/title'
import { Typography } from '@/app/components/common'
import { useUser } from '@/domain/contexts/user'
import { ContactForm } from './ContactForm'
import styles from './styles.module.scss'

export function ContactSection() {
  const { colorMode, user } = useUser()
  const isDark = colorMode === 'dark'

  return (
    <section
      className={ `${styles.contact} ${isDark ? styles.dark : ''}` }
      id="contact"
    >
      <Title dark={ isDark }>Contacto</Title>

      <div className={ styles.content }>
        <div className={ styles.infoContainer }>
          <Typography className="mb-6" variant="lead">
            Información personal
          </Typography>

          <div className={ styles.info }>
            <div className={ styles.itemContainer }>
              <TiPhoneOutline className={ styles.icon } />

              <Link href={ `tel:${user?.phone}` } rel="noopener noreferrer">
                <Typography className={ styles.link }>
                  { user?.phone }
                </Typography>
              </Link>
            </div>

            <div className={ styles.itemContainer }>
              <MdOutlineAlternateEmail className={ styles.icon } />

              <Link href={ `mailto:${user?.email}` } rel="noopener noreferrer">
                <Typography className={ styles.link }>
                  { user?.email }
                </Typography>
              </Link>
            </div>

            <div className={ styles.itemContainer }>
              <MdOutlineLocationOn className={ styles.icon } />

              <Typography>{ user?.location }</Typography>
            </div>
          </div>
        </div>

        <div className={ styles.formContainer }>
          <Typography className={ styles.title } variant="lead">
            ¡Escribime un mensaje para contactarme!
          </Typography>

          <ContactForm dark={ isDark } />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
