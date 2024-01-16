import { Trans } from '@lingui/macro'

import { LogoWhite } from 'components/@ui/Logo'
import SocialLinks from 'components/@ui/SocialLinks'
import { Box, Flex, Type } from 'theme/base'

export default function Footer() {
  return (
    <Box sx={{ width: '100%', bg: 'neutral1' }}>
      <Box sx={{ width: '100%', maxWidth: 1260, mx: 'auto', py: 32, px: 24 }}>
        <Flex
          mb={3}
          sx={{
            width: '100%',
            alignItems: 'center',
            columnGap: 3,
            rowGap: 4,
            justifyContent: ['center', 'space-between'],
            flexWrap: 'wrap',
          }}
        >
          <Flex sx={{ width: '100%', justifyContent: 'space-between', alignItems: ['center'] }}>
            <LogoWhite size={32} />
            <Box mb={24} />
            <SocialLinks />
          </Flex>
        </Flex>

        <Type.Body color="neutral4" sx={{ display: 'block', textAlign: 'center' }}>
          <Trans>© 2023 Bonbon. All right reserved ☕</Trans>
        </Type.Body>
      </Box>
    </Box>
  )
}
