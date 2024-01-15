import { Trans } from '@lingui/macro'
import { useRouter } from 'next/router'

import StyledButton from 'components/@ui/Buttons/StyledButton'
import ArrowOutIcon from 'components/@ui/Icons/ArrowOutIcon'
import { Box } from 'theme/base'
import { DEMO_LINKS } from 'utils/config/constants'

export function ExploreMoreButton({ wrapperSx, buttonSx }: { wrapperSx?: any; buttonSx?: any }) {
  // const router = useRouter()
  // const locale = router.locale ?? 'en'
  return (
    <Box as="a" target="_blank" href={'/'}>
      <StyledButton wrapperSx={wrapperSx} sx={buttonSx} icon={<ArrowOutIcon />}>
        <Trans>Explore More</Trans>
      </StyledButton>
    </Box>
  )
}

export function DemoButton({ wrapperSx, buttonSx }: { wrapperSx?: any; buttonSx?: any }) {
  const router = useRouter()
  const locale = router.locale ?? 'en'
  return (
    <Box as="a" target="_blank" href={DEMO_LINKS[locale]}>
      <StyledButton wrapperSx={wrapperSx} sx={buttonSx} icon={<ArrowOutIcon />}>
        <Trans>Explore More</Trans>
      </StyledButton>
    </Box>
  )
}
