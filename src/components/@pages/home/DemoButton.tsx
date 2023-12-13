import { Trans } from '@lingui/macro'

import StyledButton from 'components/@ui/Buttons/StyledButton'
import { Box } from 'theme/base'

export default function DemoButton({ wrapperSx, buttonSx }: { wrapperSx?: any; buttonSx?: any }) {
  return (
    <Box as="a" target="_blank" href="#">
      <StyledButton wrapperSx={wrapperSx} sx={buttonSx}>
        <Trans>Live Demo</Trans>
      </StyledButton>
    </Box>
  )
}
