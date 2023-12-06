import { HTMLAttributes } from 'react'
import { LayoutProps, SpaceProps } from 'styled-system'

import { SxProps, VariantProps } from 'theme/types'

export const variants = {
  PRIMARY: 'primary',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
} as const

export type AlertProps = { block?: boolean } & SxProps &
  LayoutProps &
  SpaceProps &
  VariantProps &
  HTMLAttributes<HTMLDivElement>

export type Variant = (typeof variants)[keyof typeof variants]
