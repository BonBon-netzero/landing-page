import { Trans } from '@lingui/macro'
import { FacebookLogo, TelegramLogo, TwitterLogo } from '@phosphor-icons/react'
import { ReactNode } from 'react'

import CopyButton from 'theme/Buttons/CopyButton'
import IconButton from 'theme/Buttons/IconButton'
import Modal from 'theme/Modal'
import { Box, Flex } from 'theme/base'
import { shortenAddress } from 'utils/helpers/formatString'

interface Props {
  link: string
  isOpen: boolean
  onDismiss: () => void
  title?: ReactNode
}

const FACEBOOK_SHARE_URL = 'https://www.facebook.com/sharer/sharer.php'
const TWITTER_SHARE_URL = 'https://twitter.com/share'
const TELEGRAM_SHARE_URL = 'https://telegram.me/share/'

const ShareSocialModal = ({ title, link, isOpen, onDismiss }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onDismiss={onDismiss}
      hasClose
      title={title ?? <Trans>Share</Trans>}
      maxWidth="500px"
      dangerouslyBypassFocusLock
    >
      <Box p={4} pt={3}>
        <Flex flexDirection="column">
          <Flex justifyContent="center" mb={4}>
            {/* need a quote */}
            <IconButton
              variant="outline"
              width={40}
              icon={<FacebookLogo size={24} />}
              as="a"
              target="_blank"
              href={`${FACEBOOK_SHARE_URL}?u=${link}&quote=`}
            />
            <IconButton
              mx={40}
              width={40}
              variant="outline"
              icon={<TwitterLogo size={24} />}
              as="a"
              target="_blank"
              href={`${TWITTER_SHARE_URL}?url=${link}&text=`}
            />
            <IconButton
              width={40}
              variant="outline"
              icon={<TelegramLogo size={24} />}
              as="a"
              target="_blank"
              href={`${TELEGRAM_SHARE_URL}?url=${link}&text=`}
            />
          </Flex>
          <CopyButton
            type="button"
            value={link}
            size="sm"
            py="2px"
            px={12}
            width="fit-content"
            mx="auto"
            sx={{ color: 'neutral1' }}
          >
            {shortenAddress(link, 10)}
          </CopyButton>
        </Flex>
      </Box>
    </Modal>
  )
}

export default ShareSocialModal
