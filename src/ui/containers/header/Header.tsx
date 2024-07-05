'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useDebouncedCallback } from 'use-debounce'
import { CiDark, CiLight } from 'react-icons/ci'

import {
  Avatar,
  IconButton,
  Navbar,
  Typography,
} from '../../components/common'

import { BANNER_HEIGHT, BANNER_WIDTH } from '@/domain/constants/app'
import { useUser } from '@/domain/contexts/user'
import styles from './styles.module.scss'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, colorMode, toggleColorMode } = useUser()
  const bannerRef = useRef<HTMLDivElement>(null)
  const isDark = colorMode === 'dark'

  const onToggle = () => {
    toggleColorMode()
  }

  const handleScroll = useDebouncedCallback(() => {
    const scrollPosition = window.scrollY

    if (bannerRef.current) {
      setIsScrolled(scrollPosition > bannerRef.current.offsetHeight)
    }
  }, 60)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={ `${styles.header} ${isScrolled ? styles.scrolled : ''}` }>
      <div className={ styles.banner } ref={ bannerRef }>
        <Image
          alt="banner"
          height={ BANNER_HEIGHT }
          src="/assets/banner.webp"
          width={ BANNER_WIDTH }
        />
      </div>

      <Navbar
        className={ `${styles.navbar} ${isDark ? styles.dark : ''}` }
        color={ isDark ? 'transparent' : 'white' }
        variant="filled"
      >
        <div className={ styles.content }>
          <div className={ styles.column }>
            <Avatar
              alt={ user?.name }
              className={ styles.avatar }
              size={ isScrolled ? 'lg' : 'xxl' }
              src="/assets/avatar.jpg"
              variant="circular"
            />

            <div className={ styles.userInfo }>
              <Typography
                className={ isDark ? 'text-blue-gray-100' : '' }
                variant="h5"
              >
                { user?.name }
              </Typography>

              <Typography variant="small">
                { user?.role }
              </Typography>

            </div>
          </div>

          <div className={ styles.actions }>
            <IconButton
              className={ isDark ? 'text-blue-gray-100' : '' }
              onClick={ onToggle }
              role="button"
              variant="text"
            >
              { colorMode === 'light' ? <CiDark size={ 24 } /> : <CiLight size={ 24 } /> }
            </IconButton>
          </div>
        </div>
      </Navbar>
    </header>
  )
}

export default Header
