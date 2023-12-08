import { Trans } from '@lingui/macro'

import StyledButton from 'components/@ui/Buttons/StyledButton'

export default function JoinWaitlistButton() {
  return (
    <StyledButton buttonSx={{ px: [2, 24] }}>
      <Trans>Join Waitlist</Trans>
    </StyledButton>
  )
}
