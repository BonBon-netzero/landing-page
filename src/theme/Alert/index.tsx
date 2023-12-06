import css from '@styled-system/css'
import { ReactNode } from 'react'
import styled from 'styled-components/macro'
import { compose, layout, space, variant as systemVariant } from 'styled-system'

import { Flex, Type, sx } from 'theme/base'

import { styleVariants } from './theme'
import { AlertProps, Variant } from './types'

export const AlertStyled = styled.div<AlertProps>(
  css({
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'left',
    textDecoration: 'none',
    borderRadius: 'xs',
    p: '2',
    bg: 'neutral7',
  }),

  ({ block }) => `
  display: ${block ? 'block' : 'inline-block'};
  width: ${block ? '100%' : 'auto'};
  `,
  systemVariant({
    scale: 'buttons',
    variants: styleVariants,
  }),
  compose(space, layout),
  sx
)

function Alert({
  icon,
  label,
  description,
  block = true,
  variant,
  sx,
  ...props
}: AlertProps & {
  icon?: ReactNode
  label?: ReactNode
  description?: ReactNode
  variant?: Variant
  block?: boolean
}) {
  return (
    <AlertStyled variant={variant} {...props} block={block} sx={{ ...sx }}>
      {label && (
        <Flex alignItems="center" sx={{ gap: 2 }}>
          {icon != null && icon}
          <Type.CaptionBold>{label}</Type.CaptionBold>
        </Flex>
      )}
      {description && <Type.Caption color="neutral3">{description}</Type.Caption>}
    </AlertStyled>
  )
}

export default Alert
