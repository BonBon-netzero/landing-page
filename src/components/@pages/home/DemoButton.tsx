import { Trans } from '@lingui/macro'

import StyledButton from 'components/@ui/Buttons/StyledButton'

export default function DemoButton({ wrapperSx, buttonSx }: { wrapperSx?: any; buttonSx?: any }) {
  return (
    <StyledButton wrapperSx={wrapperSx} buttonSx={buttonSx}>
      <Trans>Live Demo</Trans>
    </StyledButton>
  )
}
