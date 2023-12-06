/* eslint-disable react/display-name */
import css, { get } from '@styled-system/css'
import {
  Children,
  ComponentProps,
  FC,
  ForwardedRef,
  HTMLAttributes,
  ImgHTMLAttributes,
  cloneElement,
  forwardRef,
} from 'react'
import styled from 'styled-components/macro'
import { color, compose, flexbox, grid, layout, space, typography } from 'styled-system'

import { BoxProps, CssProps, IconProps, SpacingProps, SxProps, VariantProps } from './types'

export const sx = ({ sx, theme }: SxProps) => css(sx)(theme)
const base = ({ __css, theme }: CssProps) => css(__css)(theme)
const variant = ({ theme, variant, tx = 'variants' }: VariantProps) =>
  variant && theme ? css(get(theme, tx + '.' + variant, get(theme, variant)))(theme) : {}

export const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  (props: any) => props.css,
  compose(space, layout, typography, color, flexbox),
  sx
)

export const Flex = styled<any>(Box)({
  display: 'flex',
})

export const Grid = styled(Box)<BoxProps>(
  {
    display: 'grid',
  },
  grid
)

export const IconBox = ({ sx, icon, ...props }: IconProps) => (
  <Box
    sx={{
      lineHeight: 0,
      verticalAlign: 'middle',
      display: 'inline-block',
      ...sx,
    }}
    {...props}
  >
    {icon}
  </Box>
)

export const Text = forwardRef((props: HTMLAttributes<HTMLDivElement>, ref: ForwardedRef<HTMLDivElement>) => (
  <Box ref={ref} tx="text" {...props} as="h1" />
))

export const Icon = styled(Box)`
  line-height: 0;
  vertical-align: middle;
  display: inline-block;
`

export const Svg = styled.svg<any>(compose(space, layout, typography, color, flexbox), sx)

export const TextWrapper = styled(Box)`
  color: ${({ theme, color }: { theme: any; color?: string }) => (color ? theme.colors[color] : 'inherit')};
  overflow-wrap: break-word;
  word-break: break-word;
`
// export const Link = forwardRef(
//   (props, ref: ForwardedRef<HTMLAnchorElement>) => (
//     <Box ref={ref} as="a" variant="link" {...props} />
//   )
// );
export type TextProps = ComponentProps<typeof TextWrapper>

export const Type = {
  Hero({ children, ...props }: TextProps) {
    return (
      <TextWrapper
        as="h1"
        fontSize={['64px', '64px', '72px', '110px']}
        lineHeight={['64px', '64px', '72px', '110px']}
        fontWeight="900"
        letterSpacing="-2.2px"
        {...props}
      >
        {children}
      </TextWrapper>
    )
  },
  H1({ children, ...props }: TextProps) {
    return (
      <TextWrapper
        as="h1"
        fontSize={['48px', '48px', '48px', '64px']}
        lineHeight={['56px', '56px', '56px', '72px']}
        fontWeight="600"
        letterSpacing="-1.5%"
        {...props}
      >
        {children}
      </TextWrapper>
    )
  },
  H2({ children, ...props }: TextProps) {
    return (
      <TextWrapper
        as="h2"
        fontSize={['40px', '40px', '40px', '48px']}
        lineHeight={['48px', '48px', '48px', '56px']}
        fontWeight="600"
        letterSpacing="-0.5%"
        {...props}
      >
        {children}
      </TextWrapper>
    )
  },
  H3({ children, ...props }: TextProps) {
    return (
      <TextWrapper
        as="h3"
        fontSize={['32px', '32px', '32px', '40px']}
        lineHeight={['40px', '40px', '40px', '48px']}
        fontWeight="600"
        // letterSpacing="0%"
        {...props}
      >
        {children}
      </TextWrapper>
    )
  },
  H4({ children, ...props }: TextProps) {
    return (
      <TextWrapper
        as="h4"
        fontSize={['24px', '24px', '24px', '32px']}
        lineHeight={['32px', '32px', '32px', '40px']}
        fontWeight="600"
        letterSpacing="0.25%"
        {...props}
      >
        {children}
      </TextWrapper>
    )
  },
  H5({ children, ...props }: TextProps) {
    return (
      <TextWrapper as="h5" fontSize="24px" lineHeight="32px" fontWeight="600" letterSpacing="0.15%" {...props}>
        {children}
      </TextWrapper>
    )
  },
  Caption(props: TextProps) {
    return <TextWrapper fontSize="14px" lineHeight="24px" display="inline-block" {...props} />
  },
  CaptionBold(props: TextProps) {
    return <TextWrapper fontSize="14px" lineHeight="24px" fontWeight="600" display="inline-block" {...props} />
  },
  Small(props: TextProps) {
    return <TextWrapper fontSize="12px" lineHeight="20px" display="inline-block" {...props} />
  },
  SmallBold(props: TextProps) {
    return <TextWrapper fontSize="12px" lineHeight="20px" display="inline-block" fontWeight="600" {...props} />
  },
  Large(props: TextProps) {
    return <TextWrapper fontSize="20px" lineHeight="32px" display="inline-block" {...props} />
  },
  LargeBold(props: TextProps) {
    return <TextWrapper fontSize="20px" lineHeight="32px" display="inline-block" fontWeight="600" {...props} />
  },
  Body(props: TextProps) {
    return <TextWrapper fontSize="16px" lineHeight="24px" display="inline-block" {...props} />
  },
  BodyBold(props: TextProps) {
    return <TextWrapper fontSize="16px" lineHeight="24px" display="inline-block" fontWeight="600" {...props} />
  },
  HairlineLarge(props: TextProps) {
    return <TextWrapper fontSize="16px" lineHeight="16px" fontWeight="700" {...props} />
  },
  HairlineSmall(props: TextProps) {
    return <TextWrapper fontSize="12px" lineHeight="12px" fontWeight="700" {...props} />
  },
}

export const Image = forwardRef(
  ({ sx, ...props }: BoxProps & ImgHTMLAttributes<HTMLImageElement>, ref: ForwardedRef<HTMLImageElement>) => (
    <Box ref={ref} as="img" draggable="false" maxWidth="100%" height="auto" verticalAlign="middle" sx={sx} {...props} />
  )
)

export const Card = forwardRef(
  (props: BoxProps & HTMLAttributes<HTMLDivElement>, ref: ForwardedRef<HTMLDivElement>) => (
    <Box ref={ref} variant="card" {...props} />
  )
)

const classnames = (...args: any[]) => args.join(' ')
const getClassName = (el: any) => (el.props && el.props.className) || ''

const StyledChildren = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const styledChildren = Children.toArray(children).map((child: any) =>
    cloneElement(child, {
      ...props,
      className: classnames(getClassName(child), className),
    })
  )
  return <>{styledChildren}</>
}

export const Space: FC<SpacingProps> = styled(StyledChildren)(space)
