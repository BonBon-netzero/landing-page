// eslint-disable-next-line no-restricted-imports
import { Trans } from '@lingui/macro'
import Image from 'next/image'

import logoWithText from 'assets/logo-with-text.svg'
import { Box, Flex, Type } from 'theme/base'

import { WaitListForm } from '../../@pages/Index/HomeInputForm'

export default function Footer() {
  return (
    <Box
      py={{ _: 24, lg: 40 }}
      px={{ _: 3, md: 4, lg: 72 }}
      sx={{
        borderTop: '1px solid',
        borderColor: 'neutral7',
      }}
    >
      <Flex alignItems="flex-end" justifyContent="space-between" flexDirection={['column', 'row']}>
        <Box flex={1}>
          <Box sx={{ display: 'block' }}>
            <Box height={24} sx={{ aspectRatio: '134/36', position: 'relative' }}>
              <Image src={logoWithText.src} fill alt="logoWithText" />
            </Box>
            <Type.LargeBold color="neutral3" mt={3}>
              <Trans>ExCarbon Joint Stock Company</Trans>
            </Type.LargeBold>
            <br />
            <Type.Body color="neutral4" mt={12}>
              <Trans>Vietnam Innovation Hub - 179 Tran Hung Dao - Da Nang - Viet Nam</Trans>
            </Type.Body>
          </Box>
        </Box>
        <Flex
          flex={1}
          mt={0}
          justifyContent={'center'}
          alignItems={'end'}
          flexDirection={'column'}
          sx={{
            width: '100%',
          }}
        >
          <Box display={['none', 'none', 'none', 'block']}>
            <WaitListForm />
          </Box>
        </Flex>
      </Flex>
      <Box display={['block', 'block', 'block', 'none']} mt={3}>
        <WaitListForm />
      </Box>
      <Flex alignItems="start" justifyContent="space-between" flexDirection={['column', 'row']} mt={24}>
        <Type.Caption color="neutral5">
          <Trans>© 2023 Carbon Credit NFT Exchange. All right reserved ☕</Trans>
        </Type.Caption>
        <Flex mt={[3, 0]} alignItems="center" justifyContent="end">
          <a href={'https://docs.excarbon.co/legal-and-security/privacy-policy'}>
            <Type.Body color="neutral4">
              <Trans>Privacy Policy</Trans>
            </Type.Body>
          </a>
          <Box mx={20}>|</Box>
          <a href={'https://docs.excarbon.co/legal-and-security/term-of-use'}>
            <Type.Body color="neutral4">
              <Trans>Term of Use</Trans>
            </Type.Body>
          </a>
        </Flex>
      </Flex>
    </Box>
  )
}
