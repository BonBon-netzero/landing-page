import { ReactNode } from 'react'

import { Type } from 'theme/base'

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <Type.Body
      as="h3"
      display="block"
      sx={{
        color: 'neutral1',
        pl: 2,
        lineHeight: '24px',
        position: 'relative',
        '&:before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          left: 0,
          top: 0,
          width: '2px',
          height: '24px',
          bg: 'primary1',
        },
      }}
    >
      {children}
    </Type.Body>
  )
}
