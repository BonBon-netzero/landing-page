import { Calendar } from '@phosphor-icons/react'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'

import Input from 'theme/Input'
import { Box } from 'theme/base'

import DatePickerWrapper from './styled'

type DatePickerProps = {
  block?: boolean
  error?: any
} & ReactDatePickerProps

const DatePicker = ({ block, error, ...props }: DatePickerProps) => {
  return (
    <DatePickerWrapper>
      <ReactDatePicker
        dateFormat={'dd/MM/yyyy - HH:mm'}
        {...props}
        customInput={
          <Input
            error={error}
            block={block}
            suffix={
              <Box verticalAlign="middle" lineHeight="16px" color="neutral5">
                <Calendar />
              </Box>
            }
          />
        }
      />
    </DatePickerWrapper>
  )
}

export default DatePicker
