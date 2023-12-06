import { SystemStyleObject } from '@styled-system/css'
import { FlattenSimpleInterpolation, css } from 'styled-components/macro'
import { GridProps, TLengthStyledSystem, Theme } from 'styled-system'

export const transition = (
  target: string | undefined = 'all',
  effect: string | undefined = 'ease-in-out',
  time: string | undefined = '0.25s'
): FlattenSimpleInterpolation => {
  return css`
    transition: ${target} ${effect} ${time};
  `
}

export const ellipsisLineClamp = (lineClamp = 2): FlattenSimpleInterpolation => {
  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${lineClamp};
    -webkit-box-orient: vertical;
  `
}

export function overflowEllipsis() {
  const styles: (SystemStyleObject & GridProps<Required<Theme<TLengthStyledSystem>>>) | undefined = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }
  return styles
}
