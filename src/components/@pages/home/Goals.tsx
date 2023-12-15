import { Trans } from '@lingui/macro'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import Slider, { Settings } from 'react-slick'

import champion from 'assets/icons/champion.svg'
import earth from 'assets/icons/earth.svg'
import image1 from 'assets/images/goal_1.png'
import image2 from 'assets/images/goal_2.png'
import image3 from 'assets/images/goal_3.png'
import bg2 from 'assets/images/goal_bg_2.png'
import JoinCommunity from 'components/JoinCommunity'
import { HorizontalCarouselWrapper } from 'theme/Carousel/Wrapper'
import { Box, Flex, Type } from 'theme/base'

export default function Goals() {
  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Flex
        sx={{
          px: 24,
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: 1200,
          mx: 'auto',
          minHeight: 'min(100%, 1080px)',
          maxHeight: 'max-content',
          pt: [140, 160],
          pb: [80, 180],
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Type.H3 as="h2" mb={4} color="neutral2" sx={{ textAlign: 'center', verticalAlign: 'bottom' }}>
          <Trans>What if we succeeded?</Trans>{' '}
          <Image
            src={champion}
            width={40}
            height={40}
            style={{ display: 'inline', position: 'relative', transform: 'translateY(4px)' }}
            alt=""
          />
        </Type.H3>
        <Box
          mb={150}
          sx={{ display: ['none', 'none', 'none', 'grid'], gridTemplateColumns: 'repeat(3, 1fr)', gap: 85 }}
        >
          {configs.map((config, index) => (
            <GoalItem key={index} {...config} />
          ))}
        </Box>
        <Box mb={64} sx={{ display: ['block', 'block', 'block', 'none'], width: 300 }}>
          <GoalMobile />
        </Box>

        <Type.H3 as="h2" mb={24} color="neutral2" sx={{ maxWidth: 670, textAlign: 'center' }}>
          <Trans>“Above all, the world will definitely reach the net-zero goal in 2050”</Trans>{' '}
          <Image
            src={earth}
            width={40}
            height={40}
            style={{ display: 'inline', position: 'relative', transform: 'translateY(4px)' }}
            alt=""
          />
        </Type.H3>
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <JoinCommunity />
        </Box>
      </Flex>
      <Decorators />
    </Box>
  )
}

function GoalMobile() {
  return (
    <HorizontalCarouselWrapper>
      <Slider {...settings}>
        {configs.map((config, index) => (
          <GoalItem key={index} {...config} />
        ))}
      </Slider>
    </HorizontalCarouselWrapper>
  )
}

function GoalItem({ image, label, description }: Config) {
  return (
    <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
      <Box mb={24} sx={{ position: 'relative', width: '100%', height: '125px' }}>
        <Image src={image} fill alt="opt" style={{ objectFit: 'contain' }} />
      </Box>
      <Type.H5 mb={2} as="h2" color="neutral2" sx={{ textAlign: 'center' }}>
        {label}
      </Type.H5>
      <Type.Body as="h3" color="neutral4" sx={{ fontWeight: 'normal', textAlign: 'center' }}>
        {description}
      </Type.Body>
    </Flex>
  )
}

const settings: Settings = {
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
}

type Config = {
  image: StaticImageData
  label: ReactNode
  description: ReactNode
}
const configs: Config[] = [
  {
    image: image1,
    label: <Trans>Accelerating humanity&apos;s transition</Trans>,
    description: (
      <Trans>
        By 2050, we will transform the lifestyles of 1 billion people worldwide to be environmentally friendly, and
        prioritizing the use of carbon-neutral products.
      </Trans>
    ),
  },
  {
    image: image2,
    label: <Trans>Promote business apply ESG</Trans>,
    description: (
      <Trans>
        Businesses are driven to transition to green practices and apply ESG more rapidly by consumer choices.
      </Trans>
    ),
  },
  {
    image: image3,
    label: <Trans>Creating global equality</Trans>,
    description: (
      <Trans>
        When reducing 1tCO2 in Europe is equally valuable as in Africa, it will create equity in the fight against
        climate change.
      </Trans>
    ),
  },
]

function Decorators() {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 0,
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          transform: 'translateX(-50%) translateY(-50%)',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          display: 'flex',
        }}
      >
        {Array.from({ length: 8 }, (_, v) => v).map((v) => {
          return (
            <Box
              key={v}
              sx={{
                width: '1px',
                height: '100%',
                opacity: 0.21,
                background:
                  'linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.21) 54.17%, rgba(0, 0, 0, 0.00) 100%)',
              }}
            ></Box>
          )
        })}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 0,
          bottom: 64,
          left: '50%',
          overflow: 'hidden',
          transform: 'translateX(-50%)',
        }}
      >
        <Image src={bg2} width={bg2.width / 2} height={bg2.height / 2} alt="bg2" />
      </Box>
    </>
  )
}
