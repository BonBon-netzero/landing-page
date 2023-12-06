import { ButtonHTMLAttributes } from 'react'
import { LayoutProps, SpaceProps } from 'styled-system'

import { SxProps, VariantProps } from 'theme/types'

export const sizes = {
  LG: 'lg',
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
  ICON: 'icon',
} as const

export const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  OUTLINE: 'outline',
  OUTLINE_DANGER: 'outlineDanger',
  OUTLINE_PRIMARY: 'outlinePrimary',
  GHOST: 'ghost',
  GHOST_PRIMARY: 'ghostPrimary',
  GHOST_DANGER: 'ghostDanger',
  NAV: 'nav',
  TEXT: 'text',
} as const

export type ButtonProps = {
  block?: boolean
  isLoading?: boolean
  itemId?: number | string
  size?: Size
  variant?: Variant
} & SxProps &
  LayoutProps &
  SpaceProps &
  VariantProps &
  ButtonHTMLAttributes<HTMLButtonElement>

export type Size = (typeof sizes)[keyof typeof sizes]
export type Variant = (typeof variants)[keyof typeof variants]
