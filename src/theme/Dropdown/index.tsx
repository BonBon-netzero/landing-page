/* eslint-disable react/display-name */
import { CaretDown, CaretUp, Check } from '@phosphor-icons/react'
import css, { SystemStyleObject } from '@styled-system/css'
import RcDropdown from 'rc-dropdown'
import { FC, ReactNode, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import styled from 'styled-components/macro'
import { GridProps, LayoutProps } from 'styled-system'

import { Button, ButtonVariant } from 'theme/Buttons'
import { Box, Flex, IconBox, Type } from 'theme/base'
import { BoxProps, Colors } from 'theme/types'

type DropdownProps = {
  children: ReactNode
  menu: ReactNode
  upIcon?: ReactNode
  downIcon?: ReactNode
  menuSx?: any
  disabled?: boolean
  hasArrow?: boolean
  hoveringMode?: boolean
  dismissable?: boolean
  button?: any
  overlayStyle?: React.CSSProperties
  sx?: SystemStyleObject & GridProps
  buttonSx?: SystemStyleObject & GridProps
  buttonVariant?: ButtonVariant
  placement?: 'bottom' | 'top' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
  handleScroll?: (e: any) => void
  onSubmit?: () => void
  onReset?: () => void
  resetText?: string
  submitText?: string
  iconColor?: keyof Colors
  menuPosition?: 'top' | 'bottom'
  iconSize?: number
  menuDismissable?: boolean
}
const ToggleButton = styled(Button)(({ sx }: { sx: SystemStyleObject & GridProps }) =>
  css({
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'inherit',
    color: 'neutral1',
    py: '9px',
    px: '12px',
    '&:hover:not([disabled])': {
      borderColor: 'neutral3',
      color: 'neutral2',
    },
    '&[disabled]': {
      bg: 'transparent !important',
      borderColor: 'neutral2',
      color: 'neutral4',
      cursor: 'not-allowed',
    },
    ...sx,
  })
)

const Menu = styled(Box)<BoxProps>(({ sx }: BoxProps) =>
  css({
    minWidth: '120px',
    bg: 'neutral8',
    boxShadow: 1,
    borderRadius: 'xs',
    border: 'small',
    borderColor: 'neutral6',
    ...sx,
  })
)

const Dropdown: FC<LayoutProps & DropdownProps> = ({
  children,
  menu,
  disabled,
  hoveringMode = false,
  hasArrow = true,
  dismissable = true,
  handleScroll,
  placement,
  width,
  sx = {},
  menuSx = {},
  buttonSx = {},
  overlayStyle = {},
  buttonVariant = 'outline',
  iconColor = 'neutral3',
  iconSize = 16,
  upIcon = <CaretUp size={iconSize} />,
  downIcon = <CaretDown size={iconSize} />,
  menuPosition = 'bottom',
  onSubmit,
  onReset,
  resetText = 'Reset',
  submitText = 'Submit',
  menuDismissable = false,
}: DropdownProps & LayoutProps) => {
  const [showing, show] = useState(false)

  return (
    <Box sx={sx}>
      <RcDropdown
        placement={placement}
        onOverlayClick={(e: any) => {
          e.stopPropagation()
          if (dismissable) show(false)
        }}
        onVisibleChange={show}
        trigger={hoveringMode ? ['hover', 'click'] : ['click']}
        visible={showing}
        overlayStyle={{ ...overlayStyle }}
        overlay={
          <Menu
            width={width}
            sx={{ ...(menuPosition === 'top' ? { bottom: '4px' } : { top: '4px' }), overflow: 'hidden', ...menuSx }}
            {...(!!handleScroll && { onScroll: handleScroll })}
          >
            <Box
              sx={
                menuSx?.maxHeight
                  ? {
                      margin: '-8px -8px -8px 0',
                      maxHeight: menuSx.maxHeight,
                      overflow: 'hidden scroll',
                    }
                  : {}
              }
            >
              {menuDismissable ? (
                <OutsideClickHandler onOutsideClick={() => show(false)}>{menu}</OutsideClickHandler>
              ) : (
                menu
              )}
            </Box>
            <Flex alignItems="center" justifyContent="end">
              {onReset && (
                <Button
                  mr={1}
                  variant="ghost"
                  onClick={() => {
                    onReset()
                    show(false)
                  }}
                >
                  <Type.Caption color="neutral1">{resetText}</Type.Caption>
                </Button>
              )}
              {onSubmit && (
                <Button
                  variant="ghostPrimary"
                  onClick={() => {
                    onSubmit()
                    show(false)
                  }}
                >
                  {submitText}
                </Button>
              )}
            </Flex>
          </Menu>
        }
      >
        <ToggleButton
          variant={buttonVariant}
          type="button"
          disabled={disabled}
          // onClick={(e: any) => !hoveringMode && toggleDropdown(e)}
          width={width}
          sx={{
            ...buttonSx,
          }}
        >
          <Type.CaptionBold flex="1 1 auto" textAlign="left">
            {children}
          </Type.CaptionBold>
          {hasArrow && <IconBox color={iconColor} ml="6px" icon={showing ? upIcon : downIcon} />}
        </ToggleButton>
      </RcDropdown>
    </Box>
  )
}

export const DropdownItem = styled(Button)<{ isActive?: boolean }>((props) =>
  css({
    maxWidth: '100%',
    height: 'auto',
    p: 12,
    width: '100%',
    textAlign: 'left',
    borderRadius: 0,
    border: 'none',
    fontWeight: props.isActive ? 'medium' : 'normal',
    color: 'neutral1',
    bg: 'transparent',
    '&:hover': {
      bg: 'neutral7',
    },
  })
)

DropdownItem.defaultProps = {
  variant: 'ghost',
}

export const CheckableDropdownItem = ({
  onClick,
  selected,
  children,
  iconSx,
  iconSize,
  textSx,
  disabled,
}: {
  onClick: any
  selected: boolean
  children: ReactNode
  iconSx?: SystemStyleObject & GridProps
  textSx?: SystemStyleObject & GridProps
  iconSize?: number
  disabled?: boolean
}) => {
  return (
    <DropdownItem disabled={disabled} onClick={onClick}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box color={selected ? 'primary2' : 'neutral1'} fontWeight={selected ? 'medium' : 'normal'} sx={{ ...textSx }}>
          {children}
        </Box>
        {selected && <IconBox color="primary2" ml={2} sx={{ ...iconSx }} icon={<Check size={iconSize || 16} />} />}
      </Flex>
    </DropdownItem>
  )
}

export default Dropdown
