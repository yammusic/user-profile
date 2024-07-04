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

      <Navbar className={ styles.navbar }>
        <div className={ styles.content }>
          <div className={ styles.column }>
            <Avatar
              alt={ user?.name }
              className="top-[-4rem]"
              size="xxl"
              src="/assets/avatar.jpg"
              variant="circular"
            />

            <div className="flex flex-col gap-1 mt-[-4rem]">
              <Typography variant="h5">
                { user?.name }
              </Typography>

              <Typography variant="small">
                { user?.role }
              </Typography>

            </div>
          </div>

          <div className={ styles.column }>
            <IconButton onClick={ onToggle } variant="text">
              { colorMode === 'dark' ? <CiDark size={ 24 } /> : <CiLight size={ 24 } /> }
            </IconButton>
          </div>
        </div>
      </Navbar>
    </header>
  )
}

export default Header
