import { useRef } from 'react'
import { Controller } from 'react-hook-form'
import NumericFormat from 'react-number-format'

import { InputWrapper, StyledInput, StyledPrefix, StyledSuffix } from 'theme/Input'
import { SxProps } from 'theme/types'
import { formatNumber } from 'utils/helpers/formatNumber'

import { InputProps, NumberInputProps } from './types'

const NumberInput = ({
  affix,
  suffix,
  block,
  sx,
  variant,
  error,
  control,
  isAllowed,
  isInteger,
  rules,
  onInputChange,
  inputHidden = false,
  thousandSeparator = true,
  ...props
}: NumberInputProps & InputProps & SxProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const valueStringRef = useRef('')
  const valueRef = useRef<number>()
  return (
    <InputWrapper
      disabled={props.disabled}
      variant={error ? 'error' : variant}
      block={block}
      sx={{ ...sx, ...(inputHidden ? { '& input': { opacity: 0 } } : {}) }}
    >
      {!!affix && <StyledPrefix>{affix}</StyledPrefix>}
      <Controller
        name={props.name || ''}
        control={control}
        rules={rules}
        defaultValue={props.defaultValue as string | number | undefined}
        render={({ field: { onChange, value, onBlur } }) => {
          let _valueString = valueStringRef.current
          if (value !== valueRef.current)
            _valueString = typeof value === 'undefined' ? '' : thousandSeparator ? formatNumber(value, 18) : value
          if (!value && inputRef.current) {
            setTimeout(() => {
              try {
                inputRef.current?.focus()
                inputRef.current?.setSelectionRange(_valueString.length, _valueString.length)
              } catch {}
            }, 100)
          }
          return (
            <NumericFormat
              getInputRef={inputRef}
              disabled={props.disabled}
              value={_valueString}
              thousandSeparator={thousandSeparator}
              decimalScale={isInteger ? 0 : undefined}
              isNumericString
              isAllowed={isAllowed}
              placeholder={props.placeholder}
              customInput={StyledInput}
              onBlur={onBlur}
              onValueChange={(v) => {
                valueRef.current = v.floatValue
                valueStringRef.current = v.formattedValue
                const value = v.floatValue ?? 0
                onChange(value)
                onInputChange && onInputChange(value)
              }}
            />
          )
        }}
      />

      {!!suffix && <StyledSuffix>{suffix}</StyledSuffix>}
    </InputWrapper>
  )
}

export default NumberInput
