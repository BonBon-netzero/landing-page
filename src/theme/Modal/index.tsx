import { XCircle } from '@phosphor-icons/react'
import { DialogContent, DialogOverlay } from '@reach/dialog'
import { useGesture } from '@use-gesture/react'
import { ReactNode, RefObject } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import styled, { DefaultTheme, css } from 'styled-components/macro'

import useIsMobile from 'theme/@hooks/useIsMobile'
import IconButton from 'theme/Buttons/IconButton'
import { Box, Flex, Type } from 'theme/base'
import { Colors } from 'theme/types'

const AnimatedDialogOverlay = animated(DialogOverlay)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledDialogOverlay = styled(AnimatedDialogOverlay)<{ mode?: ModalProps['mode'] }>`
  ${({ theme, mode }) => `
    &[data-reach-dialog-overlay] {
      z-index: 9998;
      width: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      display: flex;
      align-items: ${mode === 'right' ? 'flex-start' : 'center'};
      justify-content: ${mode === 'right' ? 'right' : 'center'};
      background-color: ${theme.colors.modalBG};
      backdrop-filter: blur(5px);
    }
  `}
`

const AnimatedDialogContent = animated(DialogContent)
// destructure to not pass custom props to Dialog DOM element

// eslint-disable-next-line
const StyledDialogContent = styled(({ background, minHeight, maxHeight, maxWidth, mobile, isOpen, mode, ...rest }) => (
  <AnimatedDialogContent {...rest} />
)).attrs({
  'aria-label': 'dialog',
})`
  overflow-y: visible;
  &[data-reach-dialog-content] {
    margin: ${({ mode }) => (mode === 'right' ? '16px' : '0 0 2rem 0')};
    padding: 0;
    position: relative;
    background: ${({ theme, background }: { theme: DefaultTheme; background?: keyof Colors }) =>
      background ? (theme.colors[background] as string) : theme.colors.neutral8};
    border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors.neutral5};
    box-shadow: ${({ theme }: { theme: DefaultTheme }) => theme.shadows[4]};
    width: ${({ width }) => width ?? '50vw'};
    align-self: ${({ mobile, mode }) =>
      mode === 'right' ? 'flex-start' : mobile && mode === 'bottom' ? 'flex-end' : 'center'};
    ${({ maxWidth }) => css`
      max-width: ${maxWidth || '420px'};
    `}
    ${({ maxHeight }) =>
      maxHeight &&
      css`
        max-height: ${maxHeight};
      `}
    ${({ minHeight }) =>
      minHeight &&
      css`
        min-height: ${minHeight};
      `}
    display: flex;
    border-radius: 16px;
    ${({ theme }) => theme.mediaWidth.upToMedium`
      width: 65vw;
    `}
    ${({ theme, mobile, mode }) => theme.mediaWidth.upToSmall`
    width:  90vw;
      ${
        !!mobile &&
        css`
          width: 100vw;
          border-radius: 20px;
          ${mode === 'bottom' &&
          `
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          `}
        `
      }
    `}
  }
`
const StyledDialogBody = styled.div`
  padding: 0;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1 1 auto;
`

export interface ModalProps {
  isOpen: boolean
  isOverflown?: boolean
  mode?: 'center' | 'bottom' | 'right'
  onDismiss?: () => void
  dismissable?: boolean
  width?: string
  maxWidth?: string
  minHeight?: string | false
  maxHeight?: string
  hasClose?: boolean
  initialFocusRef?: RefObject<any>
  footer?: ReactNode
  children?: ReactNode
  title?: ReactNode
  background?: keyof Colors | string
  dangerouslyBypassFocusLock?: boolean
}

export default function Modal({
  isOpen,
  onDismiss,
  width,
  maxWidth,
  mode = 'center',
  minHeight = mode === 'right' ? 'calc(100svh - 32px)' : false,
  dismissable = true,
  maxHeight = 'calc(100svh - 32px)',
  title,
  hasClose,
  initialFocusRef,
  background,
  footer,
  children,
  dangerouslyBypassFocusLock = false,
}: ModalProps) {
  const fadeTransition = useTransition(isOpen, {
    config: { duration: 200 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const isMobile = useIsMobile()

  const onDismissRequest = onDismiss ?? (() => null)

  const [{ y }, set] = useSpring(() => ({ y: 0, config: { mass: 1, tension: 210, friction: 20 } }))
  const bind = useGesture({
    onDrag: (state) => {
      set({
        y: state.down ? state.movement[1] : 0,
      })
      if (state.movement[1] > 300 || (state.velocity[0] > 3 && state.direction[1] > 0)) {
        onDismissRequest()
      }
    },
  })

  return (
    <>
      {fadeTransition(
        (props, item) =>
          item && (
            <StyledDialogOverlay
              style={props}
              onDismiss={() => dismissable && onDismissRequest()}
              initialFocusRef={initialFocusRef}
              mode={mode}
              dangerouslyBypassFocusLock={dangerouslyBypassFocusLock}
            >
              <StyledDialogContent
                mode={mode}
                {...(isMobile && mode === 'bottom'
                  ? {
                      ...bind(),
                      style: {
                        transform: y.interpolate((y) => `translateY(${(y as number) > 0 ? y : 0}px)`),
                      },
                    }
                  : {})}
                minHeight={minHeight}
                maxHeight={maxHeight}
                maxWidth={maxWidth}
                aria-label="dialog content"
                mobile={isMobile}
                width={width}
                background={background}
              >
                {/* prevents the automatic focusing of inputs on mobile by the reach dialog */}
                {!initialFocusRef && isMobile ? <div tabIndex={1} /> : null}
                <Flex flexDirection="column" width="100%">
                  {isMobile && mode === 'bottom' && (
                    <Box width={80} height={5} sx={{ borderRadius: '0px' }} bg="neutral1" mx="auto" mb={3} mt={1}></Box>
                  )}
                  {(Boolean(title) || hasClose) && (
                    <Flex alignItems="center" justifyContent={hasClose ? 'flex-end' : 'flex-start'} py={3} px={24}>
                      {Boolean(title) && (
                        <Flex flex="1 1 auto">
                          <Type.H5>{title}</Type.H5>
                        </Flex>
                      )}
                      {hasClose && (
                        <IconButton
                          variant="ghost"
                          onClick={() => onDismissRequest()}
                          icon={<XCircle size={24} />}
                          width={24}
                        />
                      )}
                    </Flex>
                  )}

                  <StyledDialogBody>{children}</StyledDialogBody>
                  {!!footer && (
                    <Flex sx={{ flex: '1 1 auto', pt: 2 }} justifyContent={'flex-end'} px={2}>
                      {footer}
                    </Flex>
                  )}
                </Flex>
              </StyledDialogContent>
            </StyledDialogOverlay>
          )
      )}
    </>
  )
}
