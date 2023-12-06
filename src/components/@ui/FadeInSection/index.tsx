import { ReactNode, useEffect, useRef, useState } from 'react'
import styled from 'styled-components/macro'

import { Box } from 'theme/base'

const FadeInSectionWrapper = styled(Box)<{
  isVisible: boolean
  delay?: number
  direction?: 'x1' | 'x2' | 'y'
}>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible, direction }) =>
    isVisible
      ? 'none'
      : direction === 'x1'
      ? 'translateX(10vw)'
      : direction === 'x2'
      ? 'translateX(-10vw)'
      : 'translateY(10vh)'};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 1200ms ease-out, transform 600ms ease-out, visibility 1200ms ease-out;
  ${({ delay }) => delay != null && `transition-delay: ${delay}ms;`}
  will-change: opacity, transform, visibility;
`

export type AnimationDirection = 'x1' | 'x2' | 'y'
const FadeInSection = (props: {
  delay?: number
  children: ReactNode
  direction?: AnimationDirection
  style?: any
  intersectOffset?: number
}) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting)
        }
      })
    })
    if (domRef.current) observer.observe(domRef.current)
  }, [])
  return (
    <>
      {!!props.intersectOffset && (
        <div
          ref={domRef}
          style={{
            width: 0,
            height: 0,
            transform: `translateY(${props.intersectOffset}px)`,
          }}
        />
      )}
      <FadeInSectionWrapper isVisible={isVisible} delay={props?.delay} direction={props.direction} sx={props.style}>
        {props.children}
      </FadeInSectionWrapper>
      {!props.intersectOffset && (
        <div
          ref={domRef}
          style={{
            width: 0,
            height: 0,
          }}
        />
      )}
    </>
  )
}

export default FadeInSection
