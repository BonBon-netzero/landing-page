import { Trans } from '@lingui/macro'
import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import { Settings } from 'react-slick'

import image1 from 'assets/images/how_it_work_1.png'
import image2 from 'assets/images/how_it_work_2.png'
import image3 from 'assets/images/how_it_work_3.png'
import image4 from 'assets/images/how_it_work_4.png'

export type Config = {
  image: StaticImageData
  details: {
    step: ReactNode
    title: ReactNode
    description: ReactNode
    actionButton?: ReactNode
  }
  index: number
}
export const configs: Config[] = [
  {
    image: image1,
    details: {
      step: <Trans>STEP 1</Trans>,
      title: (
        <Trans>
          Embark on Your <span className="main_text">Eco-Journey</span>
        </Trans>
      ),
      description: (
        <Trans>
          Launch the Bonbon app to explore a world of green choices. Discover eco-friendly products and services
          tailored to your lifestyle, all at your fingertips.
        </Trans>
      ),
    },
    index: 0,
  },
  {
    image: image2,
    details: {
      step: <Trans>STEP 2</Trans>,
      title: (
        <Trans>
          Choose <span className="main_text">Sustainability</span>
        </Trans>
      ),
      description: (
        <Trans>
          Every selection you make on Bonbon counts. Opt for eco-friendly options and make impactful decisions that
          contribute to a healthier planet.
        </Trans>
      ),
    },
    index: 1,
  },
  {
    image: image3,
    details: {
      step: <Trans>STEP 3</Trans>,
      title: (
        <Trans>
          Rewarding your <span className="main_text">Green Actions</span>
        </Trans>
      ),
      description: (
        <Trans>
          Earn valuable carbon credits with each sustainable choice. Use these credits to offset your carbon footprint
          or trade them within the Bonbon community.
        </Trans>
      ),
    },
    index: 2,
  },
  {
    image: image4,
    details: {
      step: <Trans>STEP 4</Trans>,
      title: (
        <Trans>
          Connect with a <span className="main_text">Global Green Community</span>
        </Trans>
      ),
      description: (
        <Trans>
          Share your journey, learn from others, and join forces with a global network of eco-conscious individuals
          committed to making a difference.
        </Trans>
      ),
    },
    index: 3,
  },
]
export const settings: Settings = {
  speed: 500,
  autoplaySpeed: 8000,
  pauseOnHover: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
}
