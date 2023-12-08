import { ArrowCircleRight } from '@phosphor-icons/react'
import { ReactNode } from 'react'

import { Box, Flex, IconBox, Type } from 'theme/base'

export default function StyledButton({
  children,
  buttonSx,
  wrapperSx,
}: {
  children: ReactNode
  buttonSx?: any
  wrapperSx?: any
}) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 'max-content',
        cursor: 'pointer',
        ...(wrapperSx || {}),
        userSelect: 'none',
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          gap: 2,
          position: 'relative',
          px: 24,
          py: 3,
          borderRadius: '16px',
          border: 'small',
          borderColor: 'neutral1',
          bg: 'primary1',
          zIndex: 1,
          transform: 'translateX(-2px) translateY(-2px)',
          transition: '0.3s',
          '&:focus, &:active': {
            transform: 'translateX(0) translateY(0)',
          },
          ...(buttonSx || {}),
        }}
      >
        <Type.Body sx={{ fontWeight: 'bold' }}>{children}</Type.Body>
        <IconBox icon={<ArrowCircleRight size={24} />} />
      </Flex>
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
