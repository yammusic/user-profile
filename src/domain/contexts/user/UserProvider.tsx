'use client'

import React, { createContext, useState, useMemo, useEffect } from 'react'
import { GoTypography } from 'react-icons/go'
import { GrBriefcase } from 'react-icons/gr'
import { LiaCameraRetroSolid } from 'react-icons/lia'
import { MdWeb } from 'react-icons/md'
import { SlPicture } from 'react-icons/sl'
import { PiPaintBrush } from 'react-icons/pi'

import { useColorSchema } from '@/domain/hooks/useColorSchema'
import type { UserProviderProps, UserState } from './types'

const initialState: UserState['user'] = {
  name: 'Alejandro Martínez',
  role: 'Diseñador Gráfico',
  email: 'alejandro.martinez@mail.com',
  phone: '+1 (123) 456-7890',
  location: 'CABA, Argentina',
  description: [
    'Soy Alejandro Martínez, un diseñador gráfico apasionado por el arte visual y la comunicación efectiva. Con más de 8 años de experiencia en la industria del diseño, he tenido la oportunidad de trabajar en una amplia variedad de proyectos, desde la creación de identidades visuales hasta el desarrollo de campañas publicitarias integrales.',
    'Mi carrera comenzó en una pequeña agencia de publicidad, donde rápidamente me di cuenta de mi amor por el diseño de logotipos y la creación de marcas. A lo largo de los años, he perfeccionado mis habilidades en ilustración digital, diseño web y fotografía, permitiéndome ofrecer soluciones de diseño completas y coherentes para mis clientes.',
    'En mi trabajo, me esfuerzo por combinar la creatividad con la funcionalidad, asegurándome de que cada pieza visual no solo sea estéticamente agradable, sino también efectiva en comunicar el mensaje deseado. Me apasiona el branding, y creo firmemente que una marca fuerte puede hacer una gran diferencia en el éxito de un negocio.'
  ],
  interests: [
    {
      Icon: PiPaintBrush,
      title: 'Diseño de logotipos',
      description: 'Me encanta crear logotipos que capturen la esencia de una marca y sean más legibles y visuales.'
    },
    {
      Icon: SlPicture,
      title: 'Ilustración digital',
      description: 'Disfruto de la libertad creativa que ofrece la ilustración digital, permitiéndome explorar nuevas ideas y estilos.'
    },
    {
      Icon: LiaCameraRetroSolid,
      title: 'Fotografía',
      description: 'La fotografía me permite capturar momentos y crear imágenes que complementan mi trabajo de diseño.'
    },
    {
      Icon: GrBriefcase,
      title: 'Branding',
      description: 'Ayudar a las empresas a desarrollar una identidad de marca sólida y coherente es una de mis mayores pasiones.'
    },
    {
      Icon: GoTypography,
      title: 'Tipografía',
      description: 'La elección de la tipografía adecuada puede transformar un diseño y comunicar el tono correcto de un mensaje.'
    },
    {
      Icon: MdWeb,
      title: 'Diseño web',
      description: 'Crear una página web de una marca es una de mis principales pasiones, y me esfuerzo por crear una experiencia de usuario excepcional.'
    }
  ]
}

export const UserContext = createContext<UserState>({
  colorMode: 'light',
  user: initialState,
} as UserState)

export function UserProvider({ children }: Readonly<UserProviderProps>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState(initialState)

  const isDark = useColorSchema('dark')
  const [colorMode, setColorMode] = useState(isDark ? 'dark' : 'light')

  useEffect(() => {
    if (colorMode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [colorMode])

  const toggleColorMode = () => {
    setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const contextValue = useMemo<UserState>(() => ({
    colorMode,
    toggleColorMode,
    user,
  }) as UserState, [
    user,
    colorMode,
    toggleColorMode,
  ])

  return (
    <UserContext.Provider value={ contextValue }>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
