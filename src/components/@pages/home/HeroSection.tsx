import { Trans } from '@lingui/macro'
import { Fragment, ReactNode } from 'react'

import { Box, Flex, Type } from 'theme/base'

import DemoButton from './DemoButton'

export default function HeroSection() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!document) return
  //     const videoElement = document.getElementById('background_video') as HTMLVideoElement
  //     console.log(videoElement)
  //     if (!videoElement) return
  //     videoElement.play()
  //   }, 1000)
  // }, [])
  return (
    <Box sx={{ width: '100%', height: '100%', minHeight: 600, position: 'relative' }}>
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
        <Box sx={{ width: '100%', maxWidth: [300, 400] }}>
          <Type.Hero sx={{ textAlign: 'center' }}>
            <Trans>
              BonBon <br /> To Netzero
            </Trans>
          </Type.Hero>
          <Type.H5 mt={3} mb={24} as="h2" sx={{ textAlign: 'center', fontWeight: 400 }}>
            <Trans>Our mission is help the world reach the net-zero goal in 2050</Trans>
          </Type.H5>
          <Box mx="auto" width="max-content">
            <DemoButton />
          </Box>
        </Box>
      </Flex>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <Box
          as="video"
          id="background_video"
          muted
          autoPlay
          sx={{
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '100%',
            aspectRatio: '1920 / 1080',
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4"></source>
        </Box>
      </Box>
      <Decorators />
    </Box>
  )
}

function Decorators() {
  return (
    <Box
      sx={{ width: '100%', height: '300px', overflow: 'hidden', position: 'relative', transform: 'translateY(-80px)' }}
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
          transform: 'rotate(4deg)',
        }}
      >
        <ChainText text="NETZERO" color="white" />
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
          transform: 'rotate(-4deg)',
        }}
      >
        <ChainText text="BONBON" color="neutral3" />
      </Flex>
    </Box>
  )
}

function ChainText({ text, color }: { text: ReactNode; color: string }) {
  return (
    <Flex sx={{ alignItems: 'center', gap: 3 }}>
      {Array.from({ length: 20 }, (_, v) => v).map((v) => {
        return (
          <Fragment key={v}>
            <Box sx={{ width: '6px', height: '6px', bg: color, fontWeight: 500, flexShrink: 0 }} />
            <Type.H5 color={color} sx={{ flexShrink: 0 }}>
              {text}
            </Type.H5>
          </Fragment>
        )
      })}
    </Flex>
  )
}
