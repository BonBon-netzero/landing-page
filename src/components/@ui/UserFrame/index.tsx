import { CheckCircle } from '@phosphor-icons/react'
import { SystemStyleObject } from '@styled-system/css'
import Link from 'next/link'
import { ReactNode, useCallback } from 'react'
import { GridProps } from 'styled-system'

import Avatar from 'components/@ui/Avatar'
import { UserData } from 'entities/user.d'
import { Box, Flex, IconBox, TextProps, Type } from 'theme/base'
import ROUTES from 'utils/config/routes'
import { shortenText } from 'utils/helpers/formatString'
import { parseImageUrl } from 'utils/helpers/transform'

const overflowSx: SystemStyleObject & GridProps = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}

const UserFrame = ({
  user,
  size = 48,
  textDecoration = Type.BodyBold,
  shouldDisplayName = true,
  shouldShorten = true,
  description,
  headlineMode = false,
  shouldLink = false,
  onAvatarError = undefined,
}: {
  user: Partial<UserData>
  size?: number
  textDecoration?: (props: TextProps) => JSX.Element
  shouldDisplayName?: boolean
  shouldShorten?: boolean
  shouldLink?: boolean
  headlineMode?: boolean
  description?: ReactNode
  price?: string | number
  onAvatarError?: (e: any) => void
  shouldShowVerify?: boolean
}) => {
  const Wrapper = useCallback(
    ({ children }: { children: ReactNode }) => {
      if (!shouldLink) return <Box>{children}</Box>
      return <Link href={`${ROUTES.PROFILE.path_prefix}/${user?.id}`}>{children}</Link>
    },
    [shouldLink, user]
  )
  const text = user?.fullName ?? user?.email
  return (
    <Wrapper>
      <Flex sx={{ position: 'relative' }} alignItems="center">
        <Box width={size} height={size} flex={`0 0 ${size}px`}>
          <Avatar size={size} url={parseImageUrl(user?.avatar)} onError={onAvatarError} />
        </Box>
        {shouldDisplayName && (
          <>
            <Flex
              ml={2}
              flexDirection={headlineMode ? 'column-reverse' : 'column'}
              justifyContent={!!description ? 'flex-start' : 'center'}
              alignItems={!!description && 'flex-start'}
              color="neutral1"
            >
              <Flex alignItems="center" width="100%">
                {textDecoration({
                  sx: overflowSx,
                  children: shouldShorten ? shortenText(text) : text,
                })}
                <IconBox icon={<CheckCircle size={24} weight="fill" />} color="primary2" sx={{ flexShrink: 0 }} />
              </Flex>
              <Type.Caption width="100%" sx={overflowSx}>
                {description}
              </Type.Caption>
            </Flex>
          </>
        )}
      </Flex>
    </Wrapper>
  )
}

export default UserFrame
