import { SystemStyleObject } from '@styled-system/css'
import { HTMLAttributes, ReactNode } from 'react'
import { DefaultTheme } from 'styled-components/macro'
import { ColorProps, FlexboxProps, GridProps, LayoutProps, SpaceProps, TypographyProps } from 'styled-system'

export type Color = string
export type Colors = {
  darkMode: boolean

  // base
  white: Color
  black: Color

  // backgrounds / greys
  neutral8: Color
  neutral7: Color
  neutral6: Color
  neutral5: Color
  neutral4: Color
  neutral3: Color
  neutral2: Color
  neutral1: Color

  //primary colors
  primary1: Color
  primary2: Color
  primary3: Color
  primary4: Color

  // secondary colors
  secondary1: Color
  secondary2: Color

  // other
  info1: Color
  info2: Color
  success1: Color
  success2: Color
  warning1: Color
  warning2: Color
  danger1: Color
  danger2: Color

  gradient1: Color
  gradient2: Color
  gradient3: Color

  modalBG: Color
  cardBG: Color
  stroke: Color
}

export type VariantProps = {
  theme?: DefaultTheme
  variant?: string
  tx?: string
}

export type SxProps = {
  theme?: DefaultTheme
  sx?: SystemStyleObject & GridProps
}
export type CssProps = { theme?: DefaultTheme; __css?: SystemStyleObject }

export type BoxProps = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  VariantProps &
  SxProps & { itemId?: number | string } & { color?: string }

export type DivProps = BoxProps & HTMLAttributes<HTMLDivElement>

export type SpacingProps = SpaceProps & HTMLAttributes<HTMLDivElement>

export type IconProps = BoxProps & {
  icon: ReactNode
} & HTMLAttributes<HTMLDivElement>
