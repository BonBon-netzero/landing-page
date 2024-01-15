import { Trans } from '@lingui/macro'

import bgImage from 'assets/images/contact-image.png'
import JoinCommunity from 'components/JoinCommunity'
import { Box, TextWrapper, Type } from 'theme/base'

export default function ContactSection() {
  return (
    <Box px={24} py={[32]} sx={{ position: 'relative', bg: '#f8f8f8' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url(${bgImage.src}) no-repeat`,
          filter: 'grayscale(100%) opacity(10%)',
        }}
      />
      <Box sx={{ maxWidth: 1200, mx: 'auto', position: 'relative' }}>
        <TextWrapper
          mb={3}
          sx={{
            display: 'block',
            textAlign: 'center',
            fontSize: ['32px', '32px', '32px', '32px', '40px'],
            lineHeight: ['40px', '40px', '40px', '40px', '48px'],
            fontWeight: 900,
          }}
        >
          <Trans>Get involved and make a difference!</Trans>
        </TextWrapper>
        <Type.Body mb={40} color="neutral4" sx={{ display: 'block', textAlign: 'center' }}>
          <Trans>Register your email to get early access</Trans>
        </Type.Body>
        <Box sx={{ maxWidth: 550, mx: 'auto' }}>
          <Box display={{ _: 'block', md: 'none' }}>
            <JoinCommunity placeholderKey="emailAddress" buttonText={<Trans>Send</Trans>} />
          </Box>
          <Box display={{ _: 'none', md: 'block' }}>
            <JoinCommunity placeholderKey="registerYourEmail" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
