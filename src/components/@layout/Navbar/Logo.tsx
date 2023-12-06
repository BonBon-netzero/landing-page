import Image from 'next/image'

import logoWithText from 'assets/logo-with-text.svg'
import logo from 'assets/logo.svg'
import { Box } from 'theme/base'

const Logo = ({ size = 32 }: { size?: number | number[] }) => {
  return (
    <Box height={size} sx={{ aspectRatio: '36/36', position: 'relative' }} as="a" href="/">
      <Image src={logo.src} fill alt="logo" />
    </Box>
  )
}
export const LogoWithText = ({ size = 32 }: { size?: number | number[] }) => {
  return (
    <Box height={size} sx={{ aspectRatio: '134/36', position: 'relative' }} as="a" href="/">
      <Image src={logoWithText.src} fill alt="logo" />
    </Box>
  )
}

export default Logo
