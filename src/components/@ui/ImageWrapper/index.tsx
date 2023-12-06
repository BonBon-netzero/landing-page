import styled from 'styled-components/macro'

import { Box } from 'theme/base'

const ImageWrapper = styled(Box)<{ shape: 'square' | 'circle' }>`
  display: inline-block;
  vertical-align: middle;
  border-radius: ${({ shape }) => (shape === 'square' ? 'xs' : '50%')};
  overflow: hidden;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.neutral7};
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
export default ImageWrapper
