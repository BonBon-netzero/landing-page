/* eslint-disable react/display-name */
import { Eye, EyeSlash, MagnifyingGlass, X } from '@phosphor-icons/react'
import css from '@styled-system/css'
import { ForwardedRef, TextareaHTMLAttributes, forwardRef, useState } from 'react'
import NumericFormat from 'react-number-format'
import styled from 'styled-components/macro'
import { variant } from 'styled-system'

import { Button } from 'theme/Buttons'
import { Box, Flex, sx } from 'theme/base'
import { SxProps } from 'theme/types'

import { InputProps, InputSearchProps, InputWrapperProps, TextareaProps } from './types'

// const ZOOM_INPUT_RATIO = 1 // 16/16
// const SCALE_INPUT_RATIO = 1 // 16/16

export const StyledInput = styled.input`
  background: transparent !important;
  padding: 0;
  border: none;
  font-size: 16px;
  line-height: 24px;
  flex: 1;
  max-width: 100%;
`

const StyledTextarea = styled.textarea`
  background: transparent !important;
  padding: 0;
  border: none;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
`

export const StyledPrefix = styled.div`
  padding-right: 16px;
  height: fit-content;
`

export const StyledSuffix = styled.div`
  padding-left: 8px;
  height: fit-content;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.neutral3};
`

export const InputWrapper = styled(Flex)<InputWrapperProps>(
  (props: InputWrapperProps) =>
    css({
      width: props.block ? '100%' : 'fit-content',
      alignItems: 'center',
      bg: 'neutral7',
      position: 'relative',
      border: props.border ?? 'small',
      borderColor: 'transparent',
      borderRadius: 'xs',

      px: '14px',
      py: '9px',
      color: 'inherit',
      cursor: 'pointer',
      '&:hover:not([disabled])': {
        borderColor: 'neutral5',
      },
      '&:focus:not([disabled])': {
        borderColor: 'neutral1',
      },
      '&:focus-within:not([disabled])': {
        borderColor: 'neutral1',
        bg: 'neutral7',
      },
      '&[disabled]': {
        bg: 'neutral7',
        color: 'neutral4',
        cursor: 'not-allowed',
      },
    }),
  variant({
    variants: {
      error: {
        borderColor: 'danger2',
        '&:hover:not([disabled])': {
          borderColor: 'danger2',
        },
        '&:focus-within:not([disabled])': {
          borderColor: 'danger2',
        },
      },
    },
  }),
  sx
)

const Input = forwardRef(
  (
    { affix, suffix, border = 'small', block, sx, variant, error, ...props }: InputProps & SxProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <InputWrapper
      disabled={props.disabled}
      variant={error ? 'error' : variant}
      block={block}
      sx={sx}
      border={border}
      onClick={({ target }: { target: HTMLDivElement }) => {
        if (target?.querySelector('input')) {
          target?.querySelector('input')?.focus()
        }
      }}
    >
      {!!affix && <StyledPrefix>{affix}</StyledPrefix>}
      <StyledInput {...props} ref={ref}></StyledInput>
      {!!suffix && <StyledSuffix>{suffix}</StyledSuffix>}
    </InputWrapper>
  )
)

const InputNumberContainer = styled.div`
  flex: 1 1 0;
  input {
    background: transparent !important;
    padding: 0;
    border: none;
    font-size: 16px;
    line-height: 24px;
    width: 100%;
  }
`
type InputNumberCommonProps = Partial<
  Pick<InputProps, 'placeholder' | 'affix' | 'suffix' | 'border' | 'block' | 'variant' | 'error' | 'disabled'>
> &
  SxProps & {
    thousandSeparator?: boolean
    name: string
  }
type InputNumberOverload = {
  (props: InputNumberCommonProps & { value: number; onChange: (value: number | undefined) => void }): JSX.Element
  (props: InputNumberCommonProps & { watch: any; setValue: any }): JSX.Element
}
export const InputNumber: InputNumberOverload = ({
  name,
  watch,
  setValue,
  value,
  thousandSeparator = false,
  affix,
  suffix,
  border = 'small',
  block,
  sx,
  variant,
  error,
  disabled,
  placeholder,
  onChange,
}: InputNumberCommonProps & {
  setValue?: any
  watch?: any
  value?: number
  onChange?: (value: number | undefined) => void
}) => {
  const _value = value ?? watch?.(name) ?? 0
  return (
    <InputWrapper
      disabled={disabled}
      variant={error ? 'error' : variant}
      block={block}
      sx={sx}
      border={border}
      onClick={({ target }: { target: HTMLDivElement }) => {
        if (target?.querySelector('input')) {
          target?.querySelector('input')?.focus()
        }
      }}
    >
      {!!affix && <StyledPrefix>{affix}</StyledPrefix>}
      <InputNumberContainer>
        <NumericFormat
          displayType="input"
          disabled={disabled}
          value={_value}
          onValueChange={(v) => {
            setValue?.(name, v.floatValue, { shouldValidate: true, shouldDirty: true, shouldTouch: true })
            onChange?.(v.floatValue)
          }}
          thousandSeparator={thousandSeparator}
          placeholder={placeholder}
        />
      </InputNumberContainer>
      {!!suffix && <StyledSuffix>{suffix}</StyledSuffix>}
    </InputWrapper>
  )
}

export const Textarea = forwardRef(
  (
    { block, sx, variant, ...props }: TextareaProps & SxProps & TextareaHTMLAttributes<HTMLTextAreaElement>,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => (
    <InputWrapper
      disabled={props.disabled}
      variant={variant}
      block={block}
      sx={sx}
      onClick={({ target }: { target: HTMLDivElement }) => {
        if (target?.querySelector('input')) {
          target?.querySelector('input')?.focus()
        }
      }}
    >
      <StyledTextarea {...props} ref={ref}></StyledTextarea>
    </InputWrapper>
  )
)

export const InputPassword = forwardRef(
  (
    { sx, block, variant, allowShowPassword, ...props }: InputProps & SxProps & { allowShowPassword?: boolean },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [showing, show] = useState(allowShowPassword)
    return (
      <InputWrapper
        variant={variant}
        disabled={props.disabled}
        block={block}
        sx={sx}
        onClick={({ target }: { target: HTMLDivElement }) => {
          if (target?.querySelector('input')) {
            target?.querySelector('input')?.focus()
          }
        }}
      >
        <StyledInput {...props} type={showing ? 'text' : 'password'} ref={ref}></StyledInput>
        <Button
          type="button"
          variant="ghost"
          p={0}
          sx={{
            lineHeight: '20px',
            '&>svg': {
              verticalAlign: 'middle',
            },
            '&:hover, &:focus': {
              color: 'inherit !important',
            },
            color: 'neutral4',
          }}
          disabled={props.disabled && !allowShowPassword}
          onClick={() => show((showing) => !showing)}
        >
          {showing ? <EyeSlash weight="bold" size={16} /> : <Eye weight="bold" size={16} />}
        </Button>
      </InputWrapper>
    )
  }
)

export const InputSearch = forwardRef(
  ({ sx, block, variant, onClear, ...props }: InputSearchProps & SxProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <InputWrapper
        variant={variant}
        disabled={props.disabled}
        block={block}
        sx={{
          // border: 'none',
          '& button.search-btn--clear': {
            visibility: 'hidden',
            transition: 'none',
          },
          '&:focus-within:not([disabled]) button.search-btn--clear': {
            visibility: 'visible',
          },
          ...sx,
        }}
        onClick={({ target }: { target: HTMLDivElement }) => {
          if (target?.querySelector('input')) {
            target?.querySelector('input')?.focus()
          }
        }}
      >
        <Box
          color="neutral3"
          sx={{
            display: 'flex',
          }}
        >
          <MagnifyingGlass size={20} />
        </Box>
        <StyledInput {...props} ref={ref} style={{ marginLeft: 8 }} />
        <Button
          type="button"
          variant="ghost"
          color="neutral3"
          className="search-btn--clear"
          p={0}
          sx={{
            minWidth: '20px',
            height: '20px',
            '&>svg': {
              verticalAlign: 'middle',
            },
            color: 'neutral3',
            '&:hover, &:focus': {
              color: 'inherit !important',
            },
          }}
          onClick={onClear}
        >
          <X size={16} />
        </Button>
      </InputWrapper>
    )
  }
)

export default Input
