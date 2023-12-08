import { Trans } from '@lingui/macro'

import { LogoWithText } from 'components/@ui/Logo'
import SocialLinks from 'components/@ui/SocialLinks'
import JoinCommunity from 'components/JoinCommunity'
import { Box, Flex, Type } from 'theme/base'

export default function Footer() {
  return (
    <Box sx={{ width: '100%', maxWidth: 1260, mx: 'auto', py: 48, px: 24 }}>
      <Flex
        mb={4}
        sx={{
          width: '100%',
          alignItems: 'center',
          columnGap: 3,
          rowGap: 4,
          justifyContent: ['center', 'space-between'],
          flexWrap: 'wrap',
        }}
      >
        <Flex sx={{ flexDirection: 'column', alignItems: ['center', 'start'] }}>
          <LogoWithText size={40} />
          <Box mb={24} />
          <SocialLinks />
        </Flex>
        <Box>
          <JoinCommunity />
        </Box>
      </Flex>
      <Type.Body color="neutral4" sx={{ display: 'block', textAlign: 'center' }}>
        <Trans>© 2023 BonBon. All right reserved ☕</Trans>
      </Type.Body>
    </Box>
  )
}
