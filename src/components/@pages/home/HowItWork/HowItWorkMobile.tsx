import { Trans } from '@lingui/macro'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import Image from 'next/image'
import { RefObject, useEffect, useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick'

import phoneBorder from 'assets/images/phone-border.png'
import { useResponsive } from 'hooks/helpers/useResponsive'
import { HorizontalCarouselWrapper } from 'theme/Carousel/Wrapper'
import { Box, Flex, TextWrapper, Type } from 'theme/base'

import { ExploreMoreButton } from '../Buttons'
import HowItWorkTitle from './HowItWorkTitle'
import { Config, configs, settings } from './configs'

export default function HowItWorkMobile() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const [ref, setRef] = useState<any>([undefined, undefined])
  const sliderRef = useRef<Slider>(null)
  const mobileNavSliderRef = useRef<Slider>(null)
  const domRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!mounted) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (sliderRef.current) {
              sliderRef.current.slickPlay?.()
            }
            if (mobileNavSliderRef.current) {
              mobileNavSliderRef.current.slickPlay?.()
            }
          }, 100)
        }
      })
    })
    if (domRef.current) observer.observe(domRef.current)
    setRef([sliderRef.current, mobileNavSliderRef.current])
  }, [mounted])

  const { md } = useResponsive() ?? {}

  if (!mounted)
    return (
      <>
        <Type.H3 as="h2" mb={64} color="neutral2" sx={{ textAlign: 'center', maxWidth: [300, '100%'] }}>
          <Trans>How Bonbon works?</Trans>{' '}
        </Type.H3>
      </>
    )

  return (
    <>
      <Flex sx={{ justifyContent: 'center', height: 60, position: 'relative', zIndex: 2, px: 3 }}>
        <HowItWorkTitle />
      </Flex>
      <Box
        sx={{
          width: '100%',
          mx: 'auto',
          position: 'relative',
          zIndex: 1,
          px: 3,
          pt: 48,
          pb: 32,
          '@media all and (max-width: 376px)': { bg: 'transparent' },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            px: 3,
            bg: '#f8f8f8',
            borderRadius: 32,
            pt: 4,
          }}
          ref={domRef}
        >
          <Box mx="auto" width="max-content" sx={{ position: 'relative', zIndex: 1 }}>
            <PhoneSlider
              swipe={md}
              asNavFor={ref[1]}
              // afterChange={(currentSlide) => setCurrentSlide(currentSlide)}
              sliderRef={sliderRef}
            />
          </Box>

          <Box
            sx={{
              position: 'absolute',
              left: 12,
              right: 12,
              top: 460,
              display: 'flex',
              justifyContent: 'center',
              zIndex: 2,
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <ContentSlider asNavFor={ref[0]} sliderRef={mobileNavSliderRef} />
            </Box>
          </Box>
          {/* Correct the height by absolute position */}
          <Box height={220} />
        </Box>
      </Box>
    </>
  )
}

function PhoneSlider({ sliderRef, ...sliderProps }: Settings & { sliderRef: RefObject<Slider> }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ position: 'absolute', left: '-15px', top: '-15px', width: 330, aspectRatio: '664/1323', zIndex: 2 }}>
        <Image src={phoneBorder} fill alt="phone" style={{ objectFit: 'contain' }} />
      </Box>

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          borderRadius: '40px',
          width: 300,
          height: 645,
          boxShadow: '0px 48px 52.9px 0px rgba(0, 0, 0, 0.20)',
        }}
      >
        <HorizontalCarouselWrapper
          sx={{
            '& .slick-list': { borderRadius: '40px !important', overflow: 'hidden !important', bg: 'primary2' },
          }}
        >
          <Slider {...settings} {...sliderProps} ref={sliderRef}>
            {configs.map((config, index) => (
              <SliderItem key={index} {...config} />
            ))}
          </Slider>
        </HorizontalCarouselWrapper>
      </Box>
    </Box>
  )
}

function SliderItem({ image }: { image: Config['image'] }) {
  return (
    <Box sx={{ position: 'relative', width: 300, height: 645, overflow: 'hidden' }}>
      <Image src={image} fill alt="opt" style={{ objectFit: 'cover' }} />
    </Box>
  )
}

function ContentSlider({ sliderRef, ...sliderProps }: Settings & { sliderRef: RefObject<Slider> }) {
  return (
    <HorizontalCarouselWrapper
      sx={{
        borderRadius: '16px',
        bg: 'white',
        height: 410,
        overflow: 'hidden',
        '.slick-dots': {
          bottom: 'auto !important',
          top: 1,
        },
        '.slick-prev, .slick-next': {
          top: '8px !important',
          transform: 'none !important',
          border: 'none !important',
          '& *': {
            bg: 'transparent !important',
          },
        },
      }}
    >
      <Slider
        {...settings}
        swipe
        nextArrow={<ArrowRight size={20} />}
        prevArrow={<ArrowLeft size={20} />}
        arrows
        {...sliderProps}
        ref={sliderRef}
      >
        {configs.map((config, index) => (
          <Box key={index} sx={{ height: 410 }}>
            <ContentSliderItem key={index} {...config} details={config.details} sx={{ boxShadow: 'none', pt: 40 }} />
          </Box>
        ))}
      </Slider>
    </HorizontalCarouselWrapper>
  )
}
function ContentSliderItem({ details, sx }: { details: Config['details']; sx?: any }) {
  return (
    <Box
      // variant="card"
      sx={{
        p: 3,
        width: '100%',
        height: '100%',
        // borderRadius: '16px',
        textAlign: ['center', 'center', 'left'],
        display: 'flex',
        flexDirection: 'column',
        ...(sx || {}),
        '.main_text': { color: 'primary2' },
      }}
    >
      <TextWrapper mt={2} mb={[2, 2, 12]} sx={{ fontWeight: 900, fontSize: '28px', lineHeight: '32px' }}>
        {details.title}
      </TextWrapper>
      <TextWrapper mb={3} color="neutral3" display="block" sx={{ flex: '1', fontSize: '18px', lineHeight: '28px' }}>
        {details.description}
      </TextWrapper>
      <ExploreMoreButton wrapperSx={{ width: '100%' }} buttonSx={{ justifyContent: 'center' }} />
    </Box>
  )
}
