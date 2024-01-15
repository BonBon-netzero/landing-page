// import { Trans } from '@lingui/macro'
import { ArrowCircleLeft } from '@phosphor-icons/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import phoneBorder from 'assets/images/phone_border.png'
import { Box, Flex, IconBox, TextWrapper } from 'theme/base'

import { ExploreMoreButton } from '../Buttons'
import HowItWorkTitle from './HowItWorkTitle'
import { Config, configs } from './configs'

const SLIDE_HEIGHT = 645

export default function HowItWorkDesktop() {
  // const [mounted, setMounted] = useState(false)
  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  const [currentSlide, setCurrentSlide] = useState(0)
  const domRef = useRef<HTMLDivElement>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    // if (!containerRef.current || !scrollRef.current || !mounted) return
    if (!containerRef.current || !scrollRef.current) return
    const handleScroll = () => {
      if (!containerRef.current) return
      const diff = Math.abs(window.scrollY) - Math.abs(containerRef.current.offsetTop)
      scrollRef.current?.scrollTo?.(0, diff > 0 ? diff : 0)
      const division = diff / SLIDE_HEIGHT
      const quotient = Math.floor(division)
      const remainder = division - quotient
      const slide = quotient + (remainder > 0.8 && remainder < 1.2 ? 1 : 0)
      setCurrentSlide(slide < 0 ? 0 : slide >= configs.length ? configs.length - 1 : slide)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  // }, [mounted])

  // if (!mounted)
  //   return (
  //     <>
  //       <Type.H3 as="h2" mb={64} color="neutral2" sx={{ textAlign: 'center', maxWidth: [300, '100%'] }}>
  //         <Trans>How BonBon works?</Trans>{' '}
  //       </Type.H3>
  //     </>
  //   )

  return (
    <Box ref={containerRef}>
      <Box>
        <Flex sx={{ justifyContent: 'center', height: 70, position: 'relative', zIndex: 2 }}>
          <HowItWorkTitle />
        </Flex>

        <Flex sx={{ width: '100%', bg: '#f8f8f8', px: 100, py: 40, borderRadius: '32px' }} ref={domRef}>
          <Flex flex="1" sx={{ flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ position: 'sticky', top: 90 }}>
              <PhoneSlider currentSlide={currentSlide} />
              <Box height={40} />
              <ExploreMoreButton wrapperSx={{ width: 277, mx: 'auto' }} />
            </Box>
          </Flex>
          <Box
            flex="1"
            sx={{
              pl: 36,
              position: 'relative',
              borderLeft: 'small',
              borderLeftColor: 'stroke',
              overflow: currentSlide === configs.length - 1 ? 'hidden' : 'unset',
            }}
          >
            <Box
              sx={{
                position: 'sticky',
                top: 0,
                left: 0,
                right: 0,
                height: 0,
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 250,
                  background: 'linear-gradient(180deg, #f8f8f8 0%, #f8f8f800 100%)',
                }}
              />
            </Box>
            <Box ref={scrollRef} sx={{ '.main_text': { color: 'primary2' } }}>
              {configs.map((config, index) => {
                return (
                  <Flex
                    key={index}
                    sx={{
                      width: '100%',
                      maxWidth: 440,
                      height: SLIDE_HEIGHT,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box>
                      <IconBox mb={24} icon={<ArrowCircleLeft size={32} />} color="neutral5" />
                      <TextWrapper mb={24} sx={{ fontSize: '48px', lineHeight: '56px', fontWeight: 900 }}>
                        {config.details.title}
                      </TextWrapper>
                      <TextWrapper sx={{ fontSize: '18px', lineHeight: '28px' }}>
                        {config.details.description}
                      </TextWrapper>
                    </Box>
                  </Flex>
                )
              })}
              {/* Offset bottom button */}
              <Box height={60} />
            </Box>
            <Box
              sx={{
                position: 'sticky',
                bottom: 0,
                left: 0,
                right: 0,
                height: 0,
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 250,
                  transform: 'translateY(-100%)',
                  background: 'linear-gradient(0deg, #f8f8f8 0%, #f8f8f800 100%)',
                }}
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

function PhoneSlider({ currentSlide }: { currentSlide: number }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          left: '-15px',
          top: '-15px',
          aspectRatio: '330/675',
          width: 310,
          zIndex: 0,
          '@media all and (min-width: 1500px)': {
            width: 330,
          },
        }}
      >
        <Image src={phoneBorder} fill alt="phone" style={{ objectFit: 'contain' }} />
      </Box>

      <Box
        sx={{
          borderRadius: '40px',
          width: 280,
          aspectRatio: '300/645',
          boxShadow: '0px 48px 52.9px 0px rgba(0, 0, 0, 0.20)',
          position: 'relative',
          '@media all and (min-width: 1500px)': {
            width: 300,
          },
        }}
      >
        {configs.map((config) => (
          <SliderItem key={config.index} config={config} currentSlide={currentSlide} />
        ))}
      </Box>
    </Box>
  )
}

function SliderItem({ currentSlide, config }: { currentSlide: number; config: Config }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 280,
        '@media all and (min-width: 1500px)': {
          width: 300,
        },
        aspectRatio: '300/645',
        overflow: 'hidden',
        borderRadius: '40px',
        opacity: currentSlide === config.index ? 1 : 0,
        transition: '0.3s',
      }}
    >
      <Image src={config.image} fill alt="opt" style={{ objectFit: 'cover' }} />
    </Box>
  )
}
