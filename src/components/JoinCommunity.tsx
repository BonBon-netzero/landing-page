import { Trans } from '@lingui/macro'

import { Flex, Type } from 'theme/base'

import JoinWaitlistButton from './@pages/home/JoinWaitlistButton'

export default function JoinCommunity() {
  return (
    <Flex
      variant="card"
      sx={{
        width: '100%',
        alignItems: 'center',
        gap: 3,
        justifyContent: 'space-between',
        p: 2,
        pl: 24,
        borderRadius: '24px',
      }}
    >
      <Type.Body>
        <Trans>Join our community zalo here</Trans>
      </Type.Body>
      <JoinWaitlistButton />
    </Flex>
  )
}
