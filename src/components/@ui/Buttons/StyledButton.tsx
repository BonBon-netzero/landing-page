import { ArrowCircleRight } from '@phosphor-icons/react'
import { ReactNode } from 'react'

import { Button, ButtonProps } from 'theme/Buttons'
import { Box, IconBox, Type } from 'theme/base'

export default function StyledButton({
  children,
  wrapperSx,
  onClick,
  sx,
  disabled,
  icon = <IconBox icon={<ArrowCircleRight size={24} />} />,
  ...props
}: {
  children: ReactNode
  wrapperSx?: any
  onClick?: () => void
  icon?: ReactNode
} & ButtonProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 'max-content',
        cursor: 'pointer',
        ...(wrapperSx || {}),
        userSelect: 'none',
      }}
      onClick={onClick}
    >
      <Button
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          px: 24,
          py: '15px',
          borderRadius: '16px',
          border: 'small',
          borderColor: 'neutral1',
          bg: 'primary1',
          zIndex: 1,
          transform: disabled ? 'none' : 'translateX(-2px) translateY(-2px)',
          transition: '0.3s',
          '&:hover:not(:disabled), &:focus:not(:disabled), &:active:not(:disabled)': {
            bg: 'primary1',
            transform: 'translateX(0) translateY(0)',
          },
          '&[disabled]': {
            cursor: 'not-allowed',
            opacity: '0.8',
          },
          ...(sx || {}),
        }}
        disabled={disabled}
        {...props}
      >
        <Type.Body as="p" sx={{ fontWeight: '700', lineHeight: '1em', mr: 2 }}>
          {children}
        </Type.Body>
        {icon}
      </Button>
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          bg: 'neutral1',
          zIndex: 0,
          borderRadius: '16px',
        }}
      />
    </Box>
  )
}
