import { Trans } from '@lingui/macro'
import { ArrowCircleDown } from '@phosphor-icons/react'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
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
import FadeInSection from 'components/@ui/FadeInSection'
import { Type, sx } from 'theme/base'
import { Box, Flex, TextWrapper } from 'theme/base'

import { StarBold, StarStroke } from './Star'

export default function HeroSection() {
  const { locale } = useRouter()
  const heroTextSx: any =
    locale === 'vi'
      ? {
          fontSize: ['34px', '48px', '48px', '48px', '86px'],
          lineHeight: ['46px', '56px', '56px', '56px', '86px'],
          color: 'green1',
          textAlign: 'center',
          fontWeight: 900,
        }
      : {
          fontSize: ['60px', '60px', '60px', '60px', '86px'],
          lineHeight: ['70px', '70px', '70px', '70px', '86px'],
          color: 'green1',
          textAlign: 'center',
          fontWeight: 900,
          '@media all and (max-width: 400px)': {
            fontSize: '56px',
          },
        }

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const handleShowNavbar = () => {
      const navbar = document.getElementById('navbar') as HTMLDivElement
      if (!navbar) return
      navbar.style.opacity = '1'
    }
    const handleShowText = () => {
      const textWrapper = document.getElementById('text_wrapper') as HTMLDivElement
      if (!textWrapper) return
      textWrapper.style.opacity = '1'
    }
    setTimeout(() => {
      handleShowText()
    }, 400)
    setTimeout(() => {
      handleShowNavbar()
    }, 2000)
    setMounted(true)
  }, [])

  if (!mounted) return <Box sx={{ width: '100%', height: 1080 }} />

  return (
    <Box
      sx={{
        width: '100%',
        height: [900, 1080],
        position: 'relative',
        overflow: 'hidden',
        // display: mounted ? 'block' : 'none',
      }}
    >
      <Flex
        id="text_wrapper"
        sx={{
          p: 12,
          pt: [120, 180, 180, 180, 134],
          width: '100%',
          height: '100%',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
          opacity: 0,
          overflow: 'hidden',
          transition: '0.5s',
          '@media all and (min-width: 1500px)': {},
        }}
      >
        <TextWrapper
          mb={[20]}
          color="neutral2"
          sx={{
            lineHeight: ['28px', '28px', '28px', '28px', '30px'],
            fontSize: ['18px', '18px', '18px', '18px', '24px'],
            fontWeight: 700,
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
            transform: 'translateX(12px)',
          }}
        >
          <Trans>
            <span>Start your</span>
            <span className="hero_tag">green journey</span>
            <span>with Bonbon</span>
          </Trans>
        </TextWrapper>
        <HeroText sx={heroTextSx}>
          <Trans>EARN</Trans>
        </HeroText>
        <HeroText sx={heroTextSx}>
          <Trans>REDEEM</Trans>
        </HeroText>
        <HeroText sx={heroTextSx}>
          <Trans>CELEBRATE</Trans>
        </HeroText>

        <Box
          mt={12}
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
          mt={2}
          as="a"
          href="#how_it_work"
          sx={{ color: '#679F24', lineHeight: 0, transition: '0.3s', '&:hover': { opacity: 0.8 } }}
        >
          <ArrowCircleDown size={24} />
        </Box>
      </Flex>

      <Decorators />
    </Box>
  )
}
const HeroText = styled(TextWrapper).attrs({ as: 'h2' })(sx)

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
        <FadeInSection
          delay={700}
          style={{
            position: 'absolute',
            top: [500, 600],
            left: '50%',
            '@media all and (min-width: 1500px)': {},
          }}
        >
          <Box id="earth" sx={{ position: 'relative', transform: 'translateX(-50%)' }}>
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
        </FadeInSection>

        <Box
          display={{ _: 'none', xl: 'block' }}
          sx={{
            position: 'absolute',
            top: '30%',
            right: '30%',
          }}
        >
          <StarBold size={21} />
        </Box>
        <Box
          display={{ _: 'none', xl: 'block' }}
          sx={{
            position: 'absolute',
            top: '65%',
            right: '30%',
          }}
        >
          <StarBold size={21} />
        </Box>
        <Box
          display={{ _: 'none', xl: 'block' }}
          sx={{
            position: 'absolute',
            top: '20%',
            left: '30%',
          }}
        >
          <StarBold size={32} />
        </Box>
        <Box
          display={{ _: 'none', xl: 'block' }}
          sx={{
            position: 'absolute',
            top: '54%',
            left: '38%',
          }}
        >
          <StarStroke />
        </Box>

        <Box
          display={{ _: 'none', xl: 'block' }}
          sx={{
            position: 'absolute',
            right: ['-80px', '-80px', '-80px', 0],
            top: [75, 75, 75, 75, 300],
            '@media all and (min-width: 1500px)': {
              top: 550,
              right: 450,
            },
          }}
        >
          <ImageWrapper src={heroCloud3} />
        </Box>

        <Box
          display={{ _: 'none', xl: 'block' }}
          sx={{
            position: 'absolute',
            left: ['-40px', '-40px', '-40px', '-40px', 180],
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
