'use client'

import { useMediaQuery } from '@uidotdev/usehooks'

export const useColorSchema = (mode: 'light' | 'dark') => {
  const colorScheme = useMediaQuery(`(prefers-color-scheme: ${mode})`)
  return colorScheme
}
