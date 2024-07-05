'use client'

import React from 'react'
import Image from 'next/image'
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
  const { user, colorMode, toggleColorMode } = useUser()
  const isDark = colorMode === 'dark'

  const onToggle = () => {
    toggleColorMode()
  }

  return (
    <header className={ styles.header }>
      <Image
        alt="banner"
        height={ BANNER_HEIGHT }
        src="/assets/banner.webp"
        width={ BANNER_WIDTH }
      />

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
              size="xxl"
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
