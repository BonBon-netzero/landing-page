import { CSSProperties } from 'react'
import styled from 'styled-components/macro'

import defaultAvatar from 'assets/images/avatar_default.png'
import { Box, Image } from 'theme/base'
import { BoxProps } from 'theme/types'

const ImageWrapper = styled<any>(Box)`
  display: inline-block;
  vertical-align: middle;
  width: ${({ size }: { size: number }) => size}px;
  height: ${({ size }: { size: number }) => size}px;
  border-radius: ${({ shape }) => (shape === 'square' ? '6px' : '50%')};
  overflow: hidden;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.neutral7};
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

interface Props extends BoxProps {
  size: number
  url?: string
  shape?: 'square' | 'circle'
  style?: CSSProperties
  onError?: (e: any) => void
}

const Avatar = ({ size, url, onError = (e: any) => (e.target.src = defaultAvatar.src), ...rest }: Props) => {
  return (
    <ImageWrapper size={size} {...rest}>
      <Image src={url && Boolean(url !== '') ? url : defaultAvatar.src} alt="avatar" onError={onError} />
    </ImageWrapper>
  )
}

export default Avatar
