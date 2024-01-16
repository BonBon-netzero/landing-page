import { Trans } from '@lingui/macro'
import Image, { StaticImageData } from 'next/image'
import { ReactNode, useEffect, useState } from 'react'

import image1 from 'assets/images/goal_1.png'
import image2 from 'assets/images/goal_2.png'
import image3 from 'assets/images/goal_3.png'
import Divider from 'components/@ui/Divider'
import FadeInSection from 'components/@ui/FadeInSection'
import JoinCommunity from 'components/JoinCommunity'
import { Box, Flex, TextWrapper } from 'theme/base'

import GoalImage4 from './GoalImage4'

export default function Goals() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return <Box sx={{ width: '100%', height: '100%' }} />
  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: 1200, mx: 'auto', overflow: 'hidden' }}>
      <Flex
        sx={{
          px: 24,
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          minHeight: 'min(100%, 1080px)',
          maxHeight: 'max-content',
          pt: [100, 100, 100, 100, 70],
          pb: [0, 0, 0, 0, 70],
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <FadeInSection>
          <TextWrapper
            as="h2"
            mb={4}
            color="neutral2"
            sx={{
              textAlign: 'center',
              fontWeight: 900,
              fontSize: ['32px', '32px', '32px', '32px', '40px'],
              lineHeight: ['40px', '40px', '40px', '40px', '48px'],
            }}
          >
            <Trans>Empower your daily choices with Bonbon</Trans>
          </TextWrapper>
        </FadeInSection>
        <FadeInSection direction="y" intersectOffset={300}>
          <Box
            mb={[70, 70, 70, 70, 70]}
            sx={{ display: 'grid', gridTemplateColumns: ['1fr', '1fr', 'repeat(3, 1fr)'], gap: 24 }}
          >
            {configs.map((config, index) => (
              <GoalItem key={index} {...config} />
            ))}
          </Box>
        </FadeInSection>

        <Divider display={{ _: 'block', xl: 'none' }} mb={70} />

        <Flex
          mt={[0, 0, 0, 0, 70]}
          sx={{
            width: '100%',
            flexDirection: ['column', 'column', 'column', 'column', 'row'],
            alignItems: ['center'],
            justifyContent: ['start', 'start', 'start', 'start', 'space-between'],
            gap: 4,
            overflow: 'hidden',
          }}
        >
          <Flex sx={{ width: '100%', flexDirection: 'column', alignItems: 'center' }}>
            <FadeInSection direction="x2">
              <Box sx={{ maxWidth: '520px', order: [2, 2, 2, 2, 1] }}>
                <TextWrapper
                  as="h2"
                  sx={{
                    fontWeight: 700,
                    textAlign: ['center', 'center', 'center', 'center', 'left'],
                    fontSize: ['24px', '24px', '24px', '40px'],
                    lineHeight: ['32px', '32px', '32px', '48px'],
                  }}
                >
                  <Trans>
                    Making a{' '}
                    <Box as="span" color="primary2" fontStyle="italic">
                      small change
                    </Box>{' '}
                    to the way you go, shop, eat and store food can make a{' '}
                    <Box as="span" color="primary2" fontStyle="italic">
                      big difference
                    </Box>{' '}
                    to the planet.
                  </Trans>
                </TextWrapper>
                <Box mt={24} sx={{ width: '100%', maxWidth: 500, display: ['none', 'none', 'none', 'none', 'block'] }}>
                  <JoinCommunity placeholderKey="registerYourEmail" />
                </Box>
              </Box>
            </FadeInSection>
          </Flex>

          <Flex sx={{ width: '100%', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
            <FadeInSection direction="x1">
              <Box sx={{ width: [201, 201, 201, 201, 370], order: [1, 1, 1, 1, 2] }}>
                <GoalImage4 />
              </Box>
            </FadeInSection>
          </Flex>
        </Flex>

        <Box
          mt={32}
          mb={100}
          sx={{ width: '100%', maxWidth: 500, display: ['block', 'block', 'block', 'block', 'none'] }}
        >
          <JoinCommunity placeholderKey="registerYourEmail" />
        </Box>

        <Divider display={{ _: 'block', xl: 'none' }} />
      </Flex>
    </Box>
  )
}

function GoalItem({ image, label, description }: Config) {
  return (
    <Flex sx={{ flexDirection: 'column', alignItems: 'center', p: 4, bg: '#F8F8F8', borderRadius: '16px' }}>
      <Box mb={24} sx={{ position: 'relative', width: '100%', height: '115px' }}>
        <Image src={image} fill alt="opt" style={{ objectFit: 'contain' }} />
      </Box>
      <TextWrapper
        mb={2}
        as="h2"
        color="neutral2"
        sx={{ textAlign: 'center', fontWeight: 900, fontSize: ['32px'], lineHeight: ['40px'] }}
      >
        {label}
      </TextWrapper>
      <TextWrapper
        as="h3"
        color="neutral4"
        sx={{ fontWeight: 'normal', textAlign: 'center', fontsize: ['18px'], lineHeight: ['28px'] }}
      >
        {description}
      </TextWrapper>
    </Flex>
  )
}
type Config = {
  image: StaticImageData
  label: ReactNode
  description: ReactNode
}
const configs: Config[] = [
  {
    image: image1,
    label: <Trans>Neutralize</Trans>,
    description: (
      <Trans>
        Balance your carbon score with Bonbon. Choose green options and watch your environmental impact drop.
      </Trans>
    ),
  },
  {
    image: image2,
    label: <Trans>Curtail</Trans>,
    description: (
      <Trans>Cut back on carbon with every choice. Bonbon helps you pick habits that make a real difference.</Trans>
    ),
  },
  {
    image: image3,
    label: <Trans>Expand</Trans>,
    description: (
      <Trans>Spread the eco-word with Bonbon. Get friends on board and watch your green influence grow.</Trans>
    ),
  },
]
