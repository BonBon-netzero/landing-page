// eslint-disable-next-line no-restricted-imports
import { Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components/macro'

import flagEn from 'assets/ldp/flag_en.svg'
import flagVn from 'assets/ldp/flag_vn.svg'
import { LogoWithText } from 'components/@ui/Logo'
import Dropdown, { DropdownItem } from 'theme/Dropdown'
import { Box, Flex, Type } from 'theme/base'
import zIndex from 'utils/config/zIndex'

export default function Navbar() {
  // const { show, scrollY } = useScrollVisible({ byDirection: true });
  // const [isVisible, setIsVisible] = useState(true)
  // useEffect(() => {
  //   let timeout = setTimeout(() => {
  //     setIsVisible(true);
  //   }, DELAY_INITIAL_LOAD);
  //   return () => clearTimeout(timeout);
  // }, []);
  const { i18n } = useLingui()
  console.log('locale', i18n.locale)

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        px: [3, 3, 3, 72],
        py: 3,
        zIndex: zIndex.navBar,
        overflow: 'hidden',
        transition: '0.3s',
        bg: 'white',
        borderBottom: '1px solid',
        borderColor: 'neutral7',
        // opacity: isVisible ? 1 : 0,
      }}
      height={72}
    >
      {/*<NavbarWrapper display={{ _: 'flex', md: 'none' }}>*/}
      {/*  <Logo size={24} />*/}
      {/*  <Box>*/}
      {/*    <MobileMenu>*/}
      {/*      <Flex sx={{ flexDirection: 'column', gap: 3, alignItems: 'center' }}>a</Flex>*/}
      {/*    </MobileMenu>*/}
      {/*  </Box>*/}
      {/*</NavbarWrapper>*/}

      <NavbarWrapper display={{ _: 'flex', md: 'flex' }}>
        <LogoWithText size={[24, 44]} />
        <Flex sx={{ alignItems: 'center', gap: 36 }}>
          <a href={'https://docs.excarbon.co'}>
            <Type.Body color={'neutral1'}>
              <Trans>Document</Trans>
            </Type.Body>
          </a>

          <Dropdown
            menuSx={{
              minWidth: 'fit-content',
              width: 'fit-content',
            }}
            menu={
              i18n.locale == 'vi' ? (
                <Link href="/" locale="en">
                  <DropdownItem>
                    <Box height={24} sx={{ aspectRatio: '36/36', position: 'relative' }}>
                      <Image src={flagEn.src} fill alt="flagEn" />
                    </Box>
                  </DropdownItem>
                </Link>
              ) : (
                <Link href="/" locale="vi">
                  <DropdownItem>
                    <Box height={24} sx={{ aspectRatio: '36/36', position: 'relative' }}>
                      <Image src={flagVn.src} fill alt="flagVn" />
                    </Box>
                  </DropdownItem>
                </Link>
              )
            }
            buttonSx={{
              border: 'none',
              py: 1,
              px: [1, 2],
              '&:hover,&:focus,&:active': {
                bg: 'neutral7',
              },
            }}
          >
            <Box height={24} sx={{ aspectRatio: '36/36', position: 'relative' }}>
              <Image src={i18n.locale == 'vi' ? flagVn.src : flagEn.src} fill alt="flagEn" />
            </Box>
          </Dropdown>
        </Flex>
      </NavbarWrapper>
    </Box>
  )
}

const NavbarWrapper = styled(Box)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`
