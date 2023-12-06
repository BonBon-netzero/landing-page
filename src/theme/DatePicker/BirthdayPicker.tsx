import { Calendar } from '@phosphor-icons/react'
import dayjs from 'dayjs'
import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import NumberFormat from 'react-number-format'
import styled from 'styled-components/macro'

import DatePickerWrapper from 'theme/DatePicker/styled'
import { InputWrapper, StyledInput, StyledSuffix } from 'theme/Input'
import { InputProps } from 'theme/Input/types'
import { SxProps } from 'theme/types'
import { dateFormatReverse } from 'utils/helpers/formatDate'

type DatePickerProps = {
  onChange: (date: Date) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void
  block?: boolean
  showTimeSelect?: boolean
  error?: any
  selected?: Date
  dateFormat?: string
  placeholderText?: string
}

const PickerInput = styled(StyledInput)`
  font-weight: normal;
`

// eslint-disable-next-line react/display-name
const BirthdayInput = ({
  suffix,
  block,
  sx,
  variant,
  error,
  onFocus,
  placeholder,
  onDateChange,
  value,
  ...props
}: InputProps & SxProps & { onDateChange: (date: Date) => void }) => {
  const [ref, setRef] = useState<HTMLInputElement | null>(null)
  return (
    <InputWrapper
      disabled={props.disabled}
      variant={error ? 'error' : variant}
      block={block}
      sx={sx}
      onClick={() => {
        ref?.focus()
      }}
    >
      <NumberFormat
        customInput={PickerInput}
        format="##/##/####"
        onFocus={onFocus}
        value={value as string}
        mask={['d', 'd', 'm', 'm', 'y', 'y', 'y', 'y']}
        onValueChange={(v: any) => {
          if (v.value.length === 8) {
            const dateObject = dateFormatReverse(v.formattedValue)
            if (onDateChange) {
              onDateChange(new Date(dateObject))
            }
          }
        }}
        onBlur={props.onBlur}
        placeholder={placeholder}
        getInputRef={(r: HTMLInputElement) => {
          setRef(r)
        }}
      ></NumberFormat>

      {!!suffix && <StyledSuffix>{suffix}</StyledSuffix>}
    </InputWrapper>
  )
}

const StyledCalendarIcon = styled(Calendar)`
  color: ${({ theme }) => theme.colors.primary2};
`

// eslint-disable-next-line react/display-name
const BirthdayPicker = ({
  onChange,
  onBlur,
  showTimeSelect,
  dateFormat = 'dd/MM/yyyy - HH:mm',
  block,
  selected,
  error,
  placeholderText,
}: DatePickerProps) => {
  return (
    <DatePickerWrapper>
      <ReactDatePicker
        adjustDateOnChange={false}
        strictParsing={false}
        dateFormat={dateFormat}
        showTimeSelect={showTimeSelect}
        selected={selected}
        onChange={onChange}
        onBlur={onBlur}
        customInput={
          <BirthdayInput
            error={error}
            block={block}
            suffix={<StyledCalendarIcon size={24} display="block" />}
            onDateChange={onChange}
            placeholder={dateFormat}
            onBlur={onBlur}
            sx={{ py: 10 }}
          />
        }
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={dayjs().year() - dayjs('1900').year()}
        placeholderText={placeholderText}
        maxDate={new Date()}
        minDate={dayjs('1900-01-01').toDate()}
      />
    </DatePickerWrapper>
  )
}
export default BirthdayPicker
