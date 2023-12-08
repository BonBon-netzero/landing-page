import { Box, Flex } from 'theme/base'
import { LINKS } from 'utils/config/constants'

import GithubIcon from './Icons/GithubIcon'
import TwitterIcon from './Icons/TwitterIcon'

export default function SocialLinks() {
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
        {links.map((config, index) => {
          return (
            <Box
              key={index}
              as="a"
              href={config.link}
              target="_blank"
              sx={{ lineHeight: 0, bg: 'neutral1', borderRadius: '50%', p: '2px' }}
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
  { link: LINKS.github, icon: <GithubIcon size={20} /> },
  { link: LINKS.twitter, icon: <TwitterIcon size={20} /> },
]
