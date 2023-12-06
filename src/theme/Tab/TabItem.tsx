import css from '@styled-system/css'
import { ReactNode } from 'react'
import styled from 'styled-components/macro'

import { Button } from 'theme/Buttons'
import { Box, Flex, IconBox } from 'theme/base'
import { SxProps } from 'theme/types'

type TabItemProps = {
  active?: boolean
  isVertical?: boolean
  sx?: SxProps
}

const TabItem = styled(Button)(({ active, isVertical, sx }: TabItemProps) =>
  css({
    border: isVertical ? '1px solid' : 'none',
    borderColor: 'stroke',
    px: '0',
    py: '12px',
    width: 'fit-content',
    fontWeight: '600',
    background: 'transparent',
    color: active ? 'neutral1' : 'neutral5',
    '&:hover:not(:disabled),&:focus:not(:disabled),&:active:not(:disabled)': {
      color: active ? 'neutral1' : 'neutral3',
    },
    borderRadius: 0,
    ...sx,
  })
)

TabItem.defaultProps = {
  variant: 'ghost',
}

export default TabItem

export const TabTitle = ({ icon, children, active }: { icon: ReactNode; children?: ReactNode; active: boolean }) => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <IconBox color={active ? 'neutral1' : 'neutral5'} icon={icon} />
      <Box display="inline-block" ml={8}>
        {children}
      </Box>
    </Flex>
  )
}
