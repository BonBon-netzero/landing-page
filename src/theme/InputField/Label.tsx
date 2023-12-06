import { ReactNode } from 'react'

import { Box, Flex, Type } from 'theme/base'
import { Colors } from 'theme/types'

const Label = ({
  label,
  error,
  columnGap = 8,
  required,
  annotation,
  labelColor = 'neutral3',
  bold = true,
  wrapperProps = {},
}: {
  label: ReactNode
  columnGap?: number
  error?: any
  required?: boolean
  annotation?: ReactNode
  labelColor?: keyof Colors
  bold?: boolean
  wrapperProps?: any
}) => {
  const Caption = bold ? Type.CaptionBold : Type.Caption
  const Small = bold ? Type.CaptionBold : Type.Caption
  return (
    <Flex
      justifyContent={annotation ? 'space-between' : 'start'}
      alignItems="baseline"
      {...wrapperProps}
      mb={columnGap}
      flexWrap="wrap"
    >
      <Box>
        <Caption color={error ? 'danger2' : labelColor}>{label}</Caption>
        {required && (
          <Caption color="danger2" ml="2px">
            *
          </Caption>
        )}
      </Box>
      {!!annotation && <Small color="neutral4">{annotation}</Small>}
    </Flex>
  )
}
export default Label
