import { Trans } from '@lingui/macro'
import Image, { StaticImageData } from 'next/image'
import { ReactNode, useState } from 'react'
import Slider, { Settings } from 'react-slick'

import image1 from 'assets/images/how_it_work_1.png'
import partner1 from 'assets/images/partner_1.png'
import partner2 from 'assets/images/partner_2.png'
import partner3 from 'assets/images/partner_3.png'
import partner4 from 'assets/images/partner_4.png'
import partner5 from 'assets/images/partner_5.png'
import phoneBorder from 'assets/images/phone_border.png'
import { HorizontalCarouselWrapper } from 'theme/Carousel/Wrapper'
import { Box, Flex, Type } from 'theme/base'

import DemoButton from './DemoButton'
import Galaxy from './Galaxy'

export default function HowItWorkAndPartners() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const currentContent = configs[currentSlide]
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100%',
        pt: 100,
        pb: 180,
        position: 'relative',
        overflow: 'hidden',
        px: 3,
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
        <Type.H3 as="h2" mb={64}>
          <Trans>How BonBon works? ⚙</Trans>
        </Type.H3>
        <Flex mb={100} sx={{ alignItems: 'center', gap: 40, flexDirection: ['column', 'row'] }}>
          <Box sx={{ position: 'relative' }}>
            <Box sx={{ position: 'absolute', left: '-15px', top: '-15px', width: 330, height: 675, zIndex: 0 }}>
              <Image src={phoneBorder} fill objectFit="contain" alt="phone" />
            </Box>
            <Box
              sx={{
                bg: 'primary2',
                borderRadius: '40px',
                width: 300,
                height: 645,
                position: 'relative',
                zIndex: 1,
                overflow: 'hidden',
              }}
            >
              <HorizontalCarouselWrapper>
                <Slider {...settings} afterChange={(currentSlide) => setCurrentSlide(currentSlide)}>
                  {configs.map((config, index) => (
                    <Box key={index} sx={{ width: 300, height: 645, p: 3 }}>
                      <Box key={index} sx={{ bg: 'primary1', width: '100%', height: '100%', p: 3 }} />
                    </Box>
                    // <SliderItem key={index} {...config} />
                  ))}
                </Slider>
              </HorizontalCarouselWrapper>
            </Box>
          </Box>

          <SliderContent details={currentContent.details} />
        </Flex>

        <Type.H3 as="h2" mb={48}>
          <Trans>Our partners and backers</Trans>
        </Type.H3>
        <Flex
          sx={{
            alignItems: 'center',
            width: '100%',
            maxWidth: 1260,
            mx: 'auto',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 3,
          }}
        >
          {partners.map((image, index) => (
            <PartnerItem key={index} image={image} />
          ))}
        </Flex>
      </Flex>
      <Box sx={{ position: 'absolute', zIndex: 0, left: '50%', top: '-60px', transform: 'translateX(-50%)' }}>
        <Galaxy />
      </Box>
    </Box>
  )
}
const settings: Settings = {
  speed: 500,
  autoplay: false,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
}

function SliderItem({ image }: { image: Config['image'] }) {
  return (
    <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ position: 'relative', width: 300, height: 675 }}>
        <Image src={image} fill objectFit="contain" alt="opt" />
      </Box>
    </Flex>
  )
}
function SliderContent({ details }: { details: Config['details'] }) {
  return (
    <Box variant="card" sx={{ p: 3, width: '100%', maxWidth: 300 }}>
      <Type.Body mb={12} color="primary2">
        {details.step}
      </Type.Body>
      <Type.H5 mb={12}>{details.title}</Type.H5>
      <Type.Body mb={32} color="neutral3" display="block">
        {details.description}
      </Type.Body>
      <DemoButton />
    </Box>
  )
}
function PartnerItem({ image }: { image: StaticImageData }) {
  return <Image src={image} width={image.width / 2} height={image.height / 2} alt="opt" />
}

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
      step: <Trans>Step 1</Trans>,
      title: <Trans>Open App</Trans>,
      description: <Trans>Open the Bonbon app and start your journey</Trans>,
    },
  },
  {
    image: image1,
    details: {
      step: <Trans>Step2</Trans>,
      title: <Trans>Find & use green brands</Trans>,
      description: <Trans>Look for your favorite services and brands that you use frequently.</Trans>,
    },
  },
  {
    image: image1,
    details: {
      step: <Trans>Step 3</Trans>,
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
    image: image1,
    details: {
      step: <Trans>Step 4</Trans>,
      title: <Trans>Open App</Trans>,
      description: <Trans>Open the Bonbon app and start your journey</Trans>,
    },
  },
]

const partners = [partner1, partner2, partner3, partner4, partner5]
