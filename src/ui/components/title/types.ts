import type { ReactNode } from 'react'
import type { TypographyProps } from '../common/typography'

export interface TitleProps extends TypographyProps {
  children: ReactNode
  dark?: boolean
}
