import { Trans } from '@lingui/macro'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import Image, { StaticImageData } from 'next/image'
import { ReactNode, useEffect, useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick'
import styled from 'styled-components/macro'

import gear from 'assets/icons/gear.svg'
import image1 from 'assets/images/how_it_work_1.png'
import image2 from 'assets/images/how_it_work_2.png'
import image3 from 'assets/images/how_it_work_3.png'
import image4 from 'assets/images/how_it_work_4.png'
import partner1 from 'assets/images/partner_1.png'
import partner2 from 'assets/images/partner_2.png'
import partner3 from 'assets/images/partner_3.png'
import partner4 from 'assets/images/partner_4.png'
import partner5 from 'assets/images/partner_5.png'
import phoneBorder from 'assets/images/phone_border.png'
import { useResponsive } from 'hooks/helpers/useResponsive'
import { HorizontalCarouselWrapper } from 'theme/Carousel/Wrapper'
import { Box, Flex, Type } from 'theme/base'

import DemoButton from './DemoButton'
import Galaxy from './Galaxy'

export default function HowItWorkAndPartners() {
  return (
    <Box
      sx={{
        width: '100%',
        pt: [40, 100],
        pb: [40, 180],
        minHeight: 'min(100%, 1080px)',
        maxHeight: 'max-content',
        position: 'relative',
        overflow: 'hidden',
        px: 24,
      }}
    >
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <HowItWork />
        <Box mb={[180, 180, 150, 150, 100]} />
        <Partners />
      </Flex>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 0,
          left: '50%',
          top: ['-60px', '-60px', 40, 40, '-60px'],
          transform: 'translateX(-50%)',
        }}
      >
        <Galaxy />
      </Box>
    </Box>
  )
}

function HowItWork() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const [currentSlide, setCurrentSlide] = useState(0)
  const currentContent = configs[currentSlide]
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
          <Trans>How BonBon works?</Trans>{' '}
        </Type.H3>
      </>
    )

  return (
    <>
      <Type.H3 as="h2" mb={64} color="neutral2" sx={{ textAlign: 'center', maxWidth: [300, '100%'] }}>
        <Trans>How BonBon works?</Trans>{' '}
        <Image
          src={gear}
          width={40}
          height={40}
          alt=""
          style={{ position: 'relative', transform: 'translateY(4px)' }}
        />
      </Type.H3>
      <Flex
        sx={{
          alignItems: 'center',
          gap: 40,
          flexDirection: ['column', 'column', 'row'],
          position: 'relative',
          width: ['100%', '100%', 'auto'],
        }}
        ref={domRef}
      >
        <Box sx={{ position: 'relative' }}>
          <Box sx={{ position: 'absolute', left: '-15px', top: '-15px', width: 330, height: 675, zIndex: 0 }}>
            <Image src={phoneBorder} fill alt="phone" style={{ objectFit: 'contain' }} />
          </Box>

          <Box
            sx={{
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
              <Slider
                {...settings}
                swipe={md}
                asNavFor={ref[1]}
                afterChange={(currentSlide) => setCurrentSlide(currentSlide)}
                ref={sliderRef}
              >
                {configs.map((config, index) => (
                  <SliderItem key={index} {...config} />
                ))}
              </Slider>
            </HorizontalCarouselWrapper>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            maxWidth: 400,
            display: ['block', 'block', 'none'],
            position: 'absolute',
            bottom: '-130px',
          }}
        >
          <HorizontalCarouselWrapper
            sx={{
              '.slick-dots': {
                bottom: 'auto',
                top: 1,
              },
              '.slick-prev, .slick-next': {
                top: '36px !important',
                transform: 'none !important',
                border: 'none !important',
              },
            }}
          >
            <Slider
              {...settings}
              swipe={md}
              nextArrow={<ArrowRight size={20} />}
              prevArrow={<ArrowLeft size={20} />}
              asNavFor={ref[0]}
              arrows={!md}
              afterChange={(currentSlide) => setCurrentSlide(currentSlide)}
              ref={mobileNavSliderRef}
            >
              {configs.map((config, index) => (
                <Box key={index} sx={{ height: 300 }}>
                  <SliderContent key={index} {...config} details={config.details} sx={{ boxShadow: 'none', pt: 40 }} />
                </Box>
              ))}
            </Slider>
          </HorizontalCarouselWrapper>
        </Box>

        <Box
          sx={{
            display: ['none', 'none', 'block'],
            height: 310,
            width: ['100%', '100%', 300],
            maxWidth: 400,
            position: ['absolute', 'absolute', 'relative'],
            bottom: ['-32px', '-32px', 'auto'],
            left: ['50%', '50%', 0],
            transform: ['translateX(-50%)', 'translateX(-50%)', 'none'],
          }}
        >
          <SliderContent details={currentContent.details} />
        </Box>
      </Flex>
    </>
  )
}
const settings: Settings = {
  speed: 500,
  autoplaySpeed: 8000,
  pauseOnHover: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
}
function SliderItem({ image }: { image: Config['image'] }) {
  return (
    <Box sx={{ position: 'relative', width: 300, height: 645, overflow: 'hidden' }}>
      <Image src={image} fill alt="opt" style={{ objectFit: 'cover' }} />
    </Box>
  )
}
function SliderContent({ details, sx }: { details: Config['details']; sx?: any }) {
  return (
    <Box
      variant="card"
      sx={{
        p: 3,
        width: '100%',
        height: '100%',
        borderRadius: '16px',
        textAlign: ['center', 'center', 'left'],
        display: 'flex',
        flexDirection: 'column',
        ...(sx || {}),
      }}
    >
      <Type.Body
        mb={[2, 2, 12]}
        color="primary2"
        sx={{ fontWeight: '500', fontSize: ['14px', '14px', '16px'], lineHeight: ['24px', '24px', '16px'] }}
      >
        {details.step}
      </Type.Body>
      <Type.H5
        mb={[2, 2, 12]}
        sx={{ fontWeight: '600', fontSize: ['18px', '18px', '24px'], lineHeight: ['28px', '28px', '32px'] }}
      >
        {details.title}
      </Type.H5>
      <Type.Body
        mb={3}
        color="neutral3"
        display="block"
        sx={{ flex: '1', fontSize: ['14px', '14px', '16px'], lineHeight: ['24px', '24px', '24px'] }}
      >
        {details.description}
      </Type.Body>
      <DemoButton wrapperSx={{ width: '100%' }} buttonSx={{ justifyContent: 'center' }} />
    </Box>
  )
}

function Partners() {
  return (
    <>
      <Type.H3 as="h2" mb={[32, 48]} color="neutral2" sx={{ textAlign: 'center', maxWidth: [250, 500] }}>
        <Trans>Our partners and backers</Trans>
      </Type.H3>
      <Box
        sx={{
          display: ['none', 'none', 'none', 'none', 'flex'],
          alignItems: 'center',
          width: '100%',
          maxWidth: 1260,
          mx: 'auto',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 3,
        }}
      >
        {partners.map((config, index) => (
          <PartnerItem key={index} {...config} />
        ))}
      </Box>
      <Box
        sx={{
          display: ['flex', 'flex', 'flex', 'flex', 'none'],
          alignItems: 'center',
          width: '100%',
          justifyContent: ['center', 'center', 'center', 'space-between'],
          flexWrap: 'wrap',
          gap: 40,
        }}
      >
        {partners.map((config, index) => (
          <PartnerItemMobile key={index} {...config} />
        ))}
      </Box>
    </>
  )
}
function PartnerItem({ image, link }: PartnerConfig) {
  const height = 36
  const width = (height * (image.width / 2)) / (image.height / 2)
  return (
    <ItemWrapper as="a" href={link} target="_blank">
      <Image src={image} width={width} height={height} alt="opt" />
    </ItemWrapper>
  )
}
function PartnerItemMobile({ image, link }: PartnerConfig) {
  const height = 32
  const width = (height * (image.width / 2)) / (image.height / 2)
  return (
    <ItemWrapper as="a" href={link} target="_blank">
      <Image src={image} width={width} height={height} alt="opt" />
    </ItemWrapper>
  )
}
const ItemWrapper = styled(Box)`
  line-height: 0;
  transition: 0.3s;
  &:hover {
    filter: brightness(80%);
    transform: scale(1.1);
    transform-origin: 50%;
  }
`

type Config = {
  image: StaticImageData
  details: {
    step: ReactNode
    title: ReactNode
    description: ReactNode
    actionButton?: ReactNode
  }
}
const configs: Config[] = [
  {
    image: image1,
    details: {
      step: <Trans>STEP 1</Trans>,
      title: <Trans>Open App</Trans>,
      description: <Trans>Open the BonBon app and start your journey.</Trans>,
    },
  },
  {
    image: image2,
    details: {
      step: <Trans>STEP 2</Trans>,
      title: <Trans>Find & use green brands</Trans>,
      description: <Trans>Look for your favorite services and brands that you use frequently.</Trans>,
    },
  },
  {
    image: image3,
    details: {
      step: <Trans>STEP 3</Trans>,
      title: <Trans>Received rewards</Trans>,
      description: (
        <Trans>
          When use green-services, you are helping to reduce emission. The amount of CER token you will receive is equal
          to the amount reduce emissions accordingly.
        </Trans>
      ),
    },
  },
  {
    image: image4,
    details: {
      step: <Trans>STEP 4</Trans>,
      title: <Trans>Your carbon profile</Trans>,
      description: <Trans>Statistics and showcase your net-zero journey.</Trans>,
    },
  },
]

type PartnerConfig = {
  link: string
  image: StaticImageData
}
const partners: PartnerConfig[] = [
  {
    link: 'https://unsplash.com/',
    image: partner1,
  },
  {
    link: 'https://notion.so/',
    image: partner2,
  },
  {
    link: 'https://www.intercom.com/',
    image: partner3,
  },
  {
    link: 'https://www.descript.com/',
    image: partner4,
  },
  {
    link: 'https://www.grammarly.com/',
    image: partner5,
  },
]
