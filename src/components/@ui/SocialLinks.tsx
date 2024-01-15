import { Box, Flex, IconBox } from 'theme/base'
import { LINKS } from 'utils/config/constants'

import GithubIcon from './Icons/GithubIcon'
import TwitterIcon from './Icons/TwitterIcon'
import ZaloIcon from './Icons/ZaloIcon'

const COLOR_LIGHT = 'white'
const COLOR = 'neutral1'

const BG_LIGHT = 'neutral1'
const BG = 'neutral5'

export default function SocialLinks({ isLight = false }: { isLight?: boolean }) {
  const _links = isLight ? linksLight : links
  const _bg = isLight ? BG_LIGHT : BG
  return (
    <>
      <Flex
        sx={{
          alignItems: 'center',
          color: 'white',
          gap: 3,
          '& a': {
            color: 'inherit',
            '&:hover': {
              color: 'neutral8',
            },
          },
        }}
      >
        {_links.map((config, index) => {
          return (
            <Box
              key={index}
              as="a"
              href={config.link}
              target="_blank"
              sx={{ lineHeight: 0, bg: _bg, borderRadius: '50%' }}
            >
              {config.icon}
            </Box>
          )
        })}
      </Flex>
    </>
  )
}

const links = [
  { link: LINKS.github, icon: <IconBox color={COLOR} icon={<GithubIcon size={20} />} sx={{ p: '2px' }} /> },
  { link: LINKS.twitter, icon: <IconBox color={COLOR} icon={<TwitterIcon size={20} />} sx={{ p: '2px' }} /> },
  { link: LINKS.zalo, icon: <ZaloIcon /> },
]

const linksLight = [
  { link: LINKS.github, icon: <IconBox color={COLOR_LIGHT} icon={<GithubIcon size={20} />} sx={{ p: '2px' }} /> },
  { link: LINKS.twitter, icon: <IconBox color={COLOR_LIGHT} icon={<TwitterIcon size={20} />} sx={{ p: '2px' }} /> },
  { link: LINKS.zalo, icon: <ZaloIcon isLight /> },
]
