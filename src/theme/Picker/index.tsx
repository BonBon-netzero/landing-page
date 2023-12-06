// eslint-disable-next-line no-restricted-imports
import { ReactNode } from 'react'

import { ButtonProps } from 'theme/Buttons'
import { Box } from 'theme/base'

const Picker = ({
  isActive = false,
  children,
  onClick,
  sx,
  ...props
}: { isActive: boolean; children: ReactNode; onClick: () => void } & ButtonProps) => {
  return (
    <Box
      as="button"
      type="button"
      {...props}
      sx={{
        p: 16,
        bg: 'neutral8',
        border: 'small',
        cursor: 'pointer',
        borderColor: isActive ? 'neutral1' : 'stroke',
        '&:hover': { borderColor: isActive ? 'neutral1' : 'neutral5' },
        ...sx,
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  )
}

export default Picker
