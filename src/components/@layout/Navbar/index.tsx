import { useLingui } from '@lingui/react'
import debounce from 'lodash/debounce'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef } from 'react'
import styled from 'styled-components/macro'

import flagEn from 'assets/ldp/flag_en.svg'
import flagVn from 'assets/ldp/flag_vn.svg'
import { LogoWithText } from 'components/@ui/Logo'
import SocialLinks from 'components/@ui/SocialLinks'
import JoinCommunity from 'components/JoinCommunity'
import Dropdown, { DropdownItem } from 'theme/Dropdown'
import { Box, Flex } from 'theme/base'
import { MEDIA_WIDTHS } from 'theme/theme'
import zIndex from 'utils/config/zIndex'

export default function Navbar() {
  const { i18n } = useLingui()
  const scrollYRef = useRef(0)

  const handleScroll = useMemo(() => {
    return debounce(() => {
      if (!window || !document) return
      const navbar = document.getElementById('navbar') as HTMLDivElement
      if (!navbar) return
      const bgDesktop = window.scrollY > 100 ? 'white' : 'transparent'
      const bgMobile = window.scrollY > 100 ? 'white' : '#ffffff80'
      const boxShadow = scrollY > 900 ? '0px 3px 5px 0px rgba(0, 0, 0, 0.04)' : 'none'
      navbar.style.boxShadow = boxShadow
      if (window.innerWidth < MEDIA_WIDTHS.upToLarge) {
        navbar.style.backgroundColor = `${bgMobile}`
      } else {
        navbar.style.backgroundColor = `${bgDesktop}`
      }
      if (window.scrollY > scrollYRef.current && window.scrollY > 100) {
        navbar.style.opacity = '0'
      } else {
        navbar.style.opacity = '1'
      }
      scrollYRef.current = window.scrollY
    }, 100)
  }, [])

  useEffect(() => {
    const handleShow = () => {
      if (!window || !document) return
      const navbar = document.getElementById('navbar') as HTMLDivElement
      if (!navbar) return
      navbar.style.opacity = '1'
    }
    setTimeout(() => handleShow(), 2000)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box
      id="navbar"
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
        borderColor: 'neutral7',
        opacity: 0,
        backdropFilter: ['blur(5px)', 'blur(5px)', 'blur(5px)', 'blur(5px)', 'none'],
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
        <LogoWithText size={[32, 44]} />
        <Flex sx={{ alignItems: 'center', gap: 3 }}>
          {/* <a href={LINKS.docs} rel="noreferrer" target="_blank">
            <Type.Body color={'neutral1'}>
              <Trans>Document</Trans>
            </Type.Body>
          </a> */}
          <Box display={{ _: 'none', md: 'flex' }} sx={{ alignItems: 'center', gap: 24 }}>
            <SocialLinks isLight />
            <JoinCommunity placeholderKey="registerYourEmail" onlyButton />
          </Box>

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
  max-width: 2640px;
  margin: 0 auto;
`
