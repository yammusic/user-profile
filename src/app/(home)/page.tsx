import React from 'react'

import { Header } from '@/app/containers/header'
import { AboutSection } from '@/app/containers/about'
import { InterestsSection } from '@/app/containers/interests'
import { ContactSection } from '@/app/containers/contact'
import { Footer } from '@/app/containers/footer'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <main className={ styles.main }>
      <Header />

      <AboutSection />

      <InterestsSection />

      <ContactSection />

      <Footer />
    </main>
  )
}
