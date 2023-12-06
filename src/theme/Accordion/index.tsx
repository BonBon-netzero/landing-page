import { CaretDown } from '@phosphor-icons/react'
import { ReactNode, useEffect, useRef, useState } from 'react'

import { Box, Flex, IconBox } from 'theme/base'

export default function Accordion({
  defaultOpen = false,
  header,
  body,
  wrapperSx,
  disableInternal = false,
  isExpanded = false,
  onClick,
}: {
  header: ReactNode
  body: ReactNode
  wrapperSx?: any
  defaultOpen?: boolean
  disableInternal?: boolean
  isExpanded?: boolean
  onClick?: () => void
}) {
  const [isExpand, setIsExpand] = useState(false)
  const firstUpdated = useRef(false)
  useEffect(() => {
    if (firstUpdated.current) return
    if (!!defaultOpen) {
      firstUpdated.current = true
      setIsExpand(true)
    }
  }, [defaultOpen])
  const handleClickItem = () => setIsExpand((prev) => !prev)
  const _isExpanded = disableInternal && onClick ? isExpanded : isExpand
  return (
    <Box sx={wrapperSx}>
      <Box
        onClick={() => {
          disableInternal && onClick ? onClick() : handleClickItem()
        }}
        sx={{
          cursor: 'pointer',
        }}
      >
        <Flex sx={{ alignItems: 'center', gap: 3, justifyContent: 'space-between' }}>
          <Box>{header}</Box>
          <IconBox icon={<CaretDown size={20} />} sx={isExpand ? { transform: 'rotate(180deg)' } : {}} />
        </Flex>
      </Box>
      <Box
        sx={{
          height: 'max-content',
          maxHeight: _isExpanded ? '999px' : '0px',
          transition: _isExpanded ? 'max-height 1s ease-in-out' : 'max-height 0.5s cubic-bezier(0, 1, 0, 1)',
          overflow: 'hidden',
        }}
      >
        {body}
      </Box>
    </Box>
  )
}
