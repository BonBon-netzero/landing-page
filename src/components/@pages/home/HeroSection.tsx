import { Trans } from '@lingui/macro'
import { Fragment, ReactNode, useEffect } from 'react'
import Marquee from 'react-fast-marquee'

import { Box, Flex, Type } from 'theme/base'
import { MEDIA_WIDTHS } from 'theme/theme'

import DemoButton from './DemoButton'

export default function HeroSection() {
  return (
    <Box sx={{ width: '100%', height: '100%', minHeight: 600, maxHeight: 1080, position: 'relative' }}>
      <Flex
        sx={{
          p: 24,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <Type.Hero color="neutral2" sx={{ textAlign: 'center', width: '100%', maxWidth: [300, 400] }}>
          <Trans>
            BonBon <br /> to net-zero
          </Trans>
        </Type.Hero>
        <Type.H5
          mt={3}
          mb={24}
          as="h2"
          color="neutral2"
          sx={{ textAlign: 'center', fontWeight: 'normal', width: '100%', maxWidth: [300, 480] }}
        >
          <Trans>Our mission is help the world reach the net-zero goal in 2050</Trans>
        </Type.H5>
        <Box mx="auto" width="max-content">
          <DemoButton />
        </Box>
      </Flex>

      <Decorators />
    </Box>
  )
}

function Decorators() {
  return (
    <>
      <VideoDecorator />
      <Box
        sx={{
          width: '100%',
          height: '300px',
          overflow: 'hidden',
          position: 'relative',
          transform: 'translateY(-80px)',
        }}
      >
        <Flex
          sx={{
            alignItems: 'center',
            height: [35, 60],
            bg: 'secondary2',
            width: '110%',
            position: 'absolute',
            zIndex: 1,
            top: 72,
            left: '-5%',
            transform: 'rotate(2.8deg)',
          }}
        >
          <Marquee speed={20} delay={1} direction="right" style={{ alignItems: 'center', gap: 3 }}>
            <ChainText text="NETZERO" color="white" />
          </Marquee>
        </Flex>
        <Flex
          sx={{
            alignItems: 'center',
            height: [35, 60],
            bg: 'secondary1',
            width: '110%',
            position: 'absolute',
            zIndex: 1,
            left: '-5%',
            top: 72,
            transform: 'rotate(-2.8deg)',
          }}
        >
          <Marquee speed={20} delay={1} style={{ alignItems: 'center', gap: 3 }}>
            <ChainText text="BONBON" color="neutral3" />
          </Marquee>
        </Flex>
      </Box>
    </>
  )
}
function VideoDecorator() {
  useEffect(() => {
    if (!document || !window) return
    const videoElement = document.getElementById('background_video') as HTMLVideoElement
    const videoLoopElement = document.getElementById('background_video_loop') as HTMLVideoElement
    const mainBgElement = document.getElementById('background_main') as HTMLVideoElement

    if (window.innerWidth <= MEDIA_WIDTHS.upToMedium) {
      if (!videoLoopElement) return
      videoLoopElement.play()
      videoLoopElement.style.display = 'block'
    } else {
      if (!videoElement || !videoLoopElement || !mainBgElement) return
      videoElement.play()
      videoElement.style.display = 'block'
      videoLoopElement.style.display = 'block'
      setTimeout(() => {
        mainBgElement.style.backgroundImage = 'url(/images/hero_bg.jpg)'
      }, 2000)
      videoElement.addEventListener('ended', () => {
        setTimeout(() => {
          videoLoopElement.play()
          videoElement.style.display = 'none'
        }, 0)
      })
    }

    const handleResize = () => {
      if (window.innerWidth >= MEDIA_WIDTHS.upToLarge && window.innerWidth / window.innerHeight >= 16 / 9) {
        mainBgElement.style.backgroundSize = '100% auto'
        videoElement.style.width = '100%'
        videoElement.style.height = 'auto'
        videoLoopElement.style.width = '100%'
        videoLoopElement.style.height = 'auto'
      } else {
        mainBgElement.style.backgroundSize = 'auto 100%'
        videoElement.style.width = 'auto'
        videoElement.style.height = '100%'
        videoLoopElement.style.width = 'auto'
        videoLoopElement.style.height = '100%'
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
        backgroundImage: [
          'url(/images/hero_bg.jpg)',
          'url(/images/hero_bg.jpg)',
          'url(/images/hero_bg.jpg)',
          'url(/images/hero_bg.jpg)',
          'none',
        ],
        backgroundSize: ['auto 100%', 'auto 100%', 'auto 100%', 'auto 100%', '100% auto'],
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
      }}
      id="background_main"
    >
      <Box
        as="video"
        id="background_video_loop"
        muted
        playsInline
        loop
        sx={{ zIndex: 1, ...videoSx }}
        poster="url(/images/hero_bg.jpg)"
      >
        <source src="/videos/hero2.mp4" type="video/mp4"></source>
      </Box>
      <Box as="video" id="background_video" muted playsInline sx={{ zIndex: 2, ...videoSx }}>
        <source src="/videos/hero.mp4" type="video/mp4"></source>
      </Box>
    </Box>
  )
}
const videoSx: any = {
  display: 'none',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  width: ['auto', 'auto', 'auto', 'auto', '100%'],
  height: ['100%', '100%', '100%', '100%', 'auto'],
  aspectRatio: '1920 / 1080',
  objectFit: 'cover',
  userSelect: 'none',
}

function ChainText({ text, color }: { text: ReactNode; color: string }) {
  return (
    <Flex sx={{ alignItems: 'center', gap: 3, ml: 3, height: 24 }}>
      {Array.from({ length: 20 }, (_, v) => v).map((v) => {
        return (
          <Fragment key={v}>
            <Box sx={{ width: '6px', height: '6px', bg: color, fontWeight: 'medium', flexShrink: 0 }} />
            <Type.H5
              color={color}
              sx={{ flexShrink: 0, fontSize: ['16px', '24px'], lineHeight: ['16px', '30px'], height: [13, 24] }}
            >
              {text}
            </Type.H5>
          </Fragment>
        )
      })}
    </Flex>
  )
}
