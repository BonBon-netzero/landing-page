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
        gap: [2, 3],
        justifyContent: 'space-between',
        p: 2,
        pl: [16, 24],
        borderRadius: '24px',
      }}
    >
      <Type.Body color="neutral4" display={['none', 'block']}>
        <Trans>Join our community zalo here</Trans>
      </Type.Body>
      <Type.Body color="neutral4" display={['block', 'none']}>
        <Trans>Join our community here</Trans>
      </Type.Body>
      <JoinWaitlistButton />
    </Flex>
  )
}
