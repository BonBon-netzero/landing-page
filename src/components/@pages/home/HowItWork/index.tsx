import { Box } from 'theme/base'

import HowItWorkDesktop from './HowItWorkDesktop'
import HowItWorkMobile from './HowItWorkMobile'

export default function HowItWork() {
  return (
    <Box
      id="how_it_work"
      sx={{
        width: '100%',
        maxWidth: 1200,
        mx: 'auto',
        pt: [80, 80, 80, 80, 70],
        pb: [80, 80, 80, 80, 70],
        minHeight: 'min(100%, 1080px)',
        maxHeight: 'max-content',
      }}
    >
      <Box display={{ _: 'none', xl: 'block' }}>
        <HowItWorkDesktop />
      </Box>
      <Box display={{ _: 'block', xl: 'none' }}>
        <HowItWorkMobile />
      </Box>
    </Box>
  )
}
