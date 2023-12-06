import styled from 'styled-components/macro'

import { Box } from 'theme/base'

const Loading = styled(Box)<{ size?: number }>`
  border: 2px solid ${({ theme }) => theme.colors.neutral6};
  border-top: 2px solid ${({ theme }) => theme.colors.primary1};
  border-radius: 50%;
  width: ${({ size }) => size ?? 24}px;
  height: ${({ size }) => size ?? 24}px;
  animation: spin 1s linear infinite;
  margin: 10px auto;
`

export default Loading
