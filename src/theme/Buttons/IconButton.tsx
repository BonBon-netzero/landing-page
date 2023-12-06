import { ComponentProps, ReactNode } from 'react'

import { Button } from '.'

const IconButton = ({
  icon,
  variant = 'outline',
  type = 'button',
  borderRadius = '40px',
  width = '40px',
  height,
  sx,
  ...props
}: ComponentProps<typeof Button> & {
  icon: ReactNode
  iconColor?: string
  variant?: string
  borderRadius?: number | string
  as?: any
  htmlFor?: string
}) => (
  <Button
    type={type}
    variant={variant}
    {...props}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius,
      p: 0,
      'svg, span': {
        verticalAlign: 'middle',
      },
      ...sx,
      width,
      height: height ?? width,
    }}
  >
    {icon}
  </Button>
)

export default IconButton
