import { Trans } from '@lingui/macro'
import { Minus, Plus } from '@phosphor-icons/react'

import FadeInSection from 'components/@ui/FadeInSection'
import Accordion from 'theme/Accordion'
import { Box, Flex, TextWrapper, Type } from 'theme/base'

export default function QuestionAndAnswers() {
  return (
    <Box px={24} pb={[70, 70, 70, 70, 70]} pt={[32, 32, 32, 70, 70]} sx={{ maxWidth: 1200, mx: 'auto' }}>
      <FadeInSection direction="y" intersectOffset={100}>
        <TextWrapper
          mb={[4]}
          sx={{
            display: 'block',
            textAlign: 'center',
            fontWeight: 900,
            fontSize: ['32px', '32px', '32px', '32px', '40px'],
            lineHeight: ['40px', '40px', '40px', '40px', '48px'],
          }}
        >
          <Trans>We got answers!</Trans>
        </TextWrapper>

        <Box>
          {configs.map((config, index) => {
            return (
              <Accordion
                key={index}
                header={
                  <Flex px={24} py={3}>
                    <Type.Body sx={{ flexShrink: 0, width: 16, fontSize: '16px', mr: 24 }}>{config.icon}</Type.Body>
                    <Type.Body sx={{ lineHeight: '26px' }}>{config.question}</Type.Body>
                  </Flex>
                }
                body={
                  <Box px={24} py={3}>
                    <Type.Body color="neutral4" sx={{ lineHeight: '26px' }}>
                      {config.answer}
                    </Type.Body>
                  </Box>
                }
                wrapperSx={{ mb: 2, border: 'small', borderColor: 'stroke', borderRadius: '16px', overflow: 'hidden' }}
                icon={Plus}
                closeIcon={Minus}
              />
            )
          })}
        </Box>
      </FadeInSection>
    </Box>
  )
}

const configs = [
  {
    icon: <>🌳</>,
    question: <Trans>What is Bonbon and how does it contribute to sustainability?</Trans>,
    answer: (
      <Trans>
        Bonbon is a pioneering social network focused on green and sustainable living. Our platform, powered by
        blockchain technology, connects individuals and businesses committed to reducing their carbon footprint. We
        offer tools and resources to make eco-friendly choices, track their impact, and ensure the integrity of carbon
        credits through blockchain.
      </Trans>
    ),
  },
  {
    icon: <>❓</>,
    question: <Trans>How can I earn carbon credits with Bonbon?</Trans>,
    answer: (
      <Trans>
        Users earn carbon credits on Bonbon by making sustainable choices. These credits are securely tracked and
        verified using blockchain technology, ensuring that every eco-friendly action, from choosing sustainable
        products to reducing energy consumption, is accurately accounted for and rewarded.
      </Trans>
    ),
  },
  {
    icon: <>🚗</>,
    question: <Trans>What makes Bonbon different from other sustainability apps?</Trans>,
    answer: (
      <Trans>
        Bonbon stands out by integrating a social networking platform with a blockchain-based carbon credit system. This
        unique combination not only fosters a community of eco-conscious individuals but also provides a transparent and
        secure way to reward sustainable living.
      </Trans>
    ),
  },
  {
    icon: <>🍀</>,
    question: <Trans>Can businesses participate in Bonbon?</Trans>,
    answer: (
      <Trans>
        Yes, businesses play a crucial role in Bonbon. They can showcase their green initiatives, connect with
        eco-conscious consumers, and acquire blockchain- verified carbon credits to offset their environmental impact,
        contributing to collective sustainability goals.
      </Trans>
    ),
  },
  {
    icon: <>✋</>,
    question: <Trans>Is Bonbon available worldwide?</Trans>,
    answer: (
      <Trans>
        Bonbon is currently available in specific regions, with plans to expand globally. Our mission is to build a
        worldwide network of individuals and businesses committed to net-zero carbon emissions by 2050, supported by our
        blockchain technology.
      </Trans>
    ),
  },
  {
    icon: <>🤔</>,
    question: <Trans>How does Bonbon ensure the credibility of carbon credits?</Trans>,
    answer: (
      <Trans>
        Bonbon uses blockchain technology to ensure the credibility of carbon credits. This technology provides a
        transparent, immutable ledger for tracking the origin, transfer, and use of each credit, guaranteeing their
        authenticity and impact.
      </Trans>
    ),
  },
  {
    icon: <>📖</>,
    question: <Trans>How can I join the Bonbon community?</Trans>,
    answer: (
      <Trans>
        Joining Bonbon is straightforward. Sign up for our waitlist on our website, and you&apos;ll be notified when the
        app becomes available in your region. Start your sustainable journey with our global community, backed by the
        reliability of blockchain technology.
      </Trans>
    ),
  },
]
