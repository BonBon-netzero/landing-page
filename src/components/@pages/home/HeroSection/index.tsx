import { Trans } from '@lingui/macro'
import { ArrowCircleDown } from '@phosphor-icons/react'
import css from '@styled-system/css'
import Image, { StaticImageData } from 'next/image'
import styled from 'styled-components/macro'

import heroCloud1Desktop from 'assets/images/hero-cloud-1-desktop.png'
import heroCloud1 from 'assets/images/hero-cloud-1.png'
import heroCloud2Desktop from 'assets/images/hero-cloud-2-desktop.png'
import heroCloud2 from 'assets/images/hero-cloud-2.png'
import heroCloud3 from 'assets/images/hero-cloud-3.png'
import heroCloud4 from 'assets/images/hero-cloud-4.png'
import heroCloud5 from 'assets/images/hero-cloud-5.png'
import heroCloud6 from 'assets/images/hero-cloud-6.png'
import heroEarth from 'assets/images/hero-earth.png'
import heroLeaf from 'assets/images/hero-leaf-1.png'
import { Type, sx } from 'theme/base'
import { Box, Flex, TextWrapper } from 'theme/base'

import { StarBold, StarStroke } from './Star'

export default function HeroSection() {
  return (
    <Box
      sx={{
        width: '100%',
        height: ['max(1080px, 100%)', 'max(1080px, 100%)', 'max(1200px, 100%)', 'max(1200px, 100%)', 1080],
        position: 'relative',
      }}
    >
      <Flex
        sx={{
          p: 24,
          pt: [180, 180, 180, 180, 134],
          width: '100%',
          height: '100%',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
          '@media all and (min-width: 1500px)': {},
        }}
      >
        <TextWrapper
          mb={[20]}
          color="neutral2"
          sx={{
            lineHeight: ['28px', '28px', '28px', '28px', '30px'],
            fontSize: ['18px', '18px', '18px', '18px', '24px'],
            fontWeight: [400, 400, 400, 400, 700],
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            gap: '0.5ch',
            '.hero_tag': {
              px: 2,
              py: [0, 0, 0, 0, 2],
              bg: 'white',
              position: 'relative',
              display: 'inline-block',
              border: 'small',
              borderRadius: '60px',
              borderColor: 'green1',
            },
          }}
        >
          <Trans>
            <span>Start your</span>
            <span className="hero_tag">green journey</span>
            <span>with Bonbon</span>
          </Trans>
        </TextWrapper>
        <HeroText>
          <Trans>EARN</Trans>
        </HeroText>
        <HeroText>
          <Trans>REDEEM</Trans>
        </HeroText>
        <HeroText>
          <Trans>CELEBRATE</Trans>
        </HeroText>
        <Box
          as="a"
          sx={{
            display: 'flex',
            minWidth: 164,
            px: 3,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '40px',
            height: 36,
            bg: 'green1',
            transition: '0.3s',
            '&:hover': { opacity: 0.8 },
          }}
          href="#how_it_work"
        >
          <Type.Body color="white" fontWeight={700}>
            <Trans>See how we work</Trans>
          </Type.Body>
        </Box>
        <Box
          as="a"
          href="#how_it_work"
          mt={2}
          sx={{ color: '#679F24', lineHeight: 0, transition: '0.3s', '&:hover': { opacity: 0.8 } }}
        >
          <ArrowCircleDown size={24} />
        </Box>
      </Flex>

      <Decorators />
    </Box>
  )
}
const HeroText = styled(TextWrapper).attrs({ as: 'h2' })(
  css({
    fontSize: ['60px', '60px', '60px', '60px', '86px'],
    lineHeight: ['70px', '70px', '70px', '70px', '86px'],
    color: 'green1',
    textAlign: 'center',
    fontWeight: 900,
    '@media all and (max-width: 400px)': {
      fontSize: '56px',
    },
  }),
  sx
)

function Decorators() {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            background: 'radial-gradient(148.67% 69.21% at 50% 78.13%, #FFF 0%, #EDFFDE 100%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 600,
            left: '50%',
            transformOrigin: 'center',
            transform: 'translateX(-50%)',
            '@media all and (min-width: 1500px)': {},
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <ImageWrapper src={heroEarth} desktopRatio={1.4} />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              left: 'calc(50% + 100px)',
              top: ['-82px', '-82px', '-82px', '-82px', '-82px'],
              zIndex: 1,
            }}
          >
            <ImageWrapper src={heroLeaf} desktopRatio={1.4} />
          </Box>
        </Box>

        <Box
          display={{ _: 'none', lg: 'block' }}
          sx={{
            position: 'absolute',
            top: 180,
            left: 550,
            '@media all and (min-width: 1500px)': {
              top: 190,
              left: 750,
            },
          }}
        >
          <StarBold size={21} />
        </Box>
        <Box
          display={{ _: 'none', lg: 'block' }}
          sx={{
            position: 'absolute',
            top: 340,
            right: 420,
            '@media all and (min-width: 1500px)': {
              top: 430,
              right: 600,
            },
          }}
        >
          <StarBold size={21} />
        </Box>
        <Box
          display={{ _: 'none', lg: 'block' }}
          sx={{
            position: 'absolute',
            top: 550,
            right: 420,
            '@media all and (min-width: 1500px)': {
              top: 750,
              right: 620,
            },
          }}
        >
          <StarBold size={32} />
        </Box>
        <Box
          display={{ _: 'none', lg: 'block' }}
          sx={{
            position: 'absolute',
            top: 550,
            left: 420,
            '@media all and (min-width: 1500px)': {
              top: 800,
              left: 620,
            },
          }}
        >
          <StarStroke />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            right: ['-80px', '-80px', '-80px', 250],
            top: [75, 75, 75, 75, 400],
            '@media all and (min-width: 1500px)': {
              top: 550,
              right: 450,
            },
          }}
        >
          <ImageWrapper src={heroCloud3} />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            left: ['-40px', '-40px', '-40px', '-40px', 380],
            top: [470, 470, 470, 470, 220],
            '@media all and (min-width: 1500px)': {
              left: 580,
              top: 620,
            },
          }}
        >
          <ImageWrapper src={heroCloud4} />
        </Box>

        <Box
          sx={{
            display: ['block', 'block', 'block', 'block', 'none'],
            position: 'absolute',
            right: ['-360px', '-360px', '-340px', '-240px', 0],
            bottom: ['-100px', '-100px', '-200px', '-200px', 0],
          }}
        >
          <ImageWrapper src={heroCloud1} desktopRatio={2} tabletRatio={1.2} />
        </Box>

        <Box
          sx={{
            display: ['block', 'block', 'block', 'block', 'none'],
            position: 'absolute',
            left: ['-300px', '-300px', '-300px', '-200px', 0],
            bottom: ['-100px', '-100px', '-200px', '-200px', 0],
          }}
        >
          <ImageWrapper src={heroCloud2} desktopRatio={2} tabletRatio={1.2} />
        </Box>

        <Box
          sx={{
            display: ['none', 'none', 'none', 'none', 'block'],
            position: 'absolute',
            right: [0, 0, 0, 0, '-430px'],
            bottom: [0, 0, 0, 0, '-200px'],
            '@media all and (min-width: 1500px)': {
              right: '-380px',
              bottom: '-250px',
            },
          }}
        >
          <ImageWrapper src={heroCloud1Desktop} tabletRatio={0.6} />
        </Box>

        <Box
          sx={{
            display: ['none', 'none', 'none', 'none', 'block'],
            position: 'absolute',
            left: [0, 0, 0, 0, '-400px'],
            bottom: [0, 0, 0, 0, '-250px'],
            '@media all and (min-width: 1500px)': {
              left: '-300px',
            },
          }}
        >
          <ImageWrapper src={heroCloud2Desktop} tabletRatio={0.6} />
        </Box>

        <Box
          display={{ _: 'none', lg: 'block' }}
          sx={{
            position: 'absolute',
            right: [0, 0, 0, 150, 400],
            bottom: [0, 0, 0, '-100px', 50],
            '@media all and (min-width: 1500px)': {
              right: 450,
              bottom: 20,
            },
          }}
        >
          <ImageWrapper src={heroCloud5} />
        </Box>

        <Box
          display={{ _: 'none', lg: 'block' }}
          sx={{
            position: 'absolute',
            left: [0, 0, 0, 0, 100],
            bottom: [0, 0, 0, '-150px', '-30px'],
            '@media all and (min-width: 1500px)': {
              left: 280,
              bottom: '-20px',
            },
          }}
        >
          <ImageWrapper src={heroCloud6} />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 400,
            background: [
              'linear-gradient(0deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 100%)',
              'linear-gradient(0deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 100%)',
              'linear-gradient(0deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 100%)',
              'linear-gradient(0deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 100%)',
              'linear-gradient(0deg, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0) 100%)',
            ],
          }}
        />
      </Box>
    </>
  )
}

function ImageWrapper({
  src,
  desktopRatio = 1,
  tabletRatio = 1,
}: {
  src: StaticImageData
  desktopRatio?: number
  tabletRatio?: number
}) {
  return (
    <Box
      sx={{
        width: [
          src.width / 2,
          src.width / 2,
          (src.width / 2) * tabletRatio,
          (src.width / 2) * tabletRatio,
          (src.width / 2) * desktopRatio,
        ],
        height: [
          src.height / 2,
          src.height / 2,
          (src.height / 2) * tabletRatio,
          (src.height / 2) * tabletRatio,
          (src.height / 2) * desktopRatio,
        ],
      }}
    >
      <Image src={src} fill style={{ objectFit: 'cover' }} alt="" />
    </Box>
  )
}
