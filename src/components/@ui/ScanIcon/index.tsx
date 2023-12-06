import Image from 'next/image'

import ActiveIcon from 'assets/icons/ic-scan-active.png'
import InactiveIcon from 'assets/icons/ic-scan-inactive.png'
import { Box } from 'theme/base'

const ScanIcon = () => {
  return (
    <Box
      width={20}
      height={20}
      sx={{
        position: 'relative',
        '.normal': {
          opacity: 1,
        },
        '.hover': {
          opacity: 0,
        },
        '& img': {
          position: 'absolute',
          top: 0,
          left: 0,
        },
        '&:hover': {
          '.normal': {
            opacity: 0,
          },
          '.hover': {
            opacity: 1,
          },
        },
      }}
    >
      <Image src={InactiveIcon.src} width={20} height={20} alt="scan-inative" className="normal" />
      <Image src={ActiveIcon.src} width={20} height={20} alt="scan-inative" className="hover" />
    </Box>
  )
}

export default ScanIcon
