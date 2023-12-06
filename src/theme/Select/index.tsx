// eslint-disable-next-line no-restricted-imports
import { CaretDown } from '@phosphor-icons/react'
import css from '@styled-system/css'
import ReactSelect, { Props } from 'react-select'
import styled from 'styled-components/macro'
import { variant } from 'styled-system'

import { VariantProps } from 'theme/types'
import { FONT_FAMILY } from 'utils/config/constants'

import { styleVariants } from './theme'

export type SelectProps = { error?: any } & VariantProps

const StyledSelect = styled(ReactSelect)<SelectProps>(
  ({ error }) =>
    css({
      border: 'none',
      width: '100%',
      lineHeight: '24px',
      '& .select__control': {
        alignItems: 'center',
        position: 'relative',
        border: 'small',
        borderColor: error ? 'danger2' : 'transparent',
        borderRadius: 'xs',

        bg: 'neutral7',
        '&:hover:not([disabled]), &--is-hovered': {
          bg: 'neutral7',
          borderColor: error ? 'danger2' : 'neutral5',
          boxShadow: 'none',
        },
        '&:focus-within:not([disabled]), &--is-focused': {
          borderColor: 'neutral1',
          boxShadow: 'none',
        },
        '& .select__value-container': {
          px: '14px',
          py: '9px',
          color: 'inherit',
          cursor: 'pointer',
          fontFamily: `${FONT_FAMILY}`,
          fontSize: '16px',
          lineHeight: '24px !important',
          '& .select__input-container': {
            margin: '0',
            padding: '0',
            color: 'inherit',
          },
          '& .select__single-value': {
            color: 'inherit',
          },
        },
        '& .select__indicators': {
          color: 'neutral3',
          cursor: 'pointer',
          '& .select__indicator-separator': {
            bg: 'neutral6',
          },
        },
      },
      '& .select__control--is-disabled': {
        backgroundColor: 'neutral7',
        // borderColor: 'neutral5',
        color: 'neutral4',
        cursor: 'not-allowed',
        '& .select__indicators': {
          color: 'neutral4',
        },
      },
      '& .select__menu-portal': {
        zIndex: 10,
      },
      '& .select__menu': {
        borderRadius: 'xs',
        border: 'small',
        borderColor: 'neutral6',
        boxShadow: 1,
        cursor: 'pointer !important',
        mt: 1,
        p: 0,
        overflow: 'hidden',
        bg: 'neutral8',
        '&-list': {
          mr: '-1px',
          p: 0,
          borderRadius: 0,
          color: 'neutral1',
          overflow: 'hidden scroll',
          '& .select__option': {
            borderRadius: 0,
            px: '14px',
            py: '10px',
            cursor: 'pointer !important',
            '&--is-selected:not([disabled])': {
              bg: 'neutral7',
              color: 'neutral1',
              fontWeight: '600',
            },
            '&--is-focused:not([disabled])': {
              bg: 'neutral7',
              // bg: '#23262F',
            },
            '&--is-selected:not(:hover):not([disabled])': {
              bg: 'neutral8',
              // bg: '#23262F',
            },
          },
        },
      },
    }),
  variant({ variants: styleVariants })
)

const SelectDropdownIndicator = () => {
  return <CaretDown size={16} />
}
const SelectStyles = {
  indicatorSeparator: () => ({ display: 'none' }),
  indicatorsContainer: (providedStyled: any) => ({ ...providedStyled, paddingRight: '16px' }),
  singleValue: (providedStyled: any) => ({ ...providedStyled, fontWeight: 400 }),
}

const Select = (props: Omit<Props, 'theme'> & SelectProps) => {
  return (
    <StyledSelect
      isSearchable
      maxMenuHeight={250}
      noOptionsMessage={() => 'No Data Found'}
      className="select-container"
      classNamePrefix="select"
      styles={SelectStyles}
      components={{ ...(props.components || {}), DropdownIndicator: SelectDropdownIndicator }}
      {...props}
      // menuIsOpen
    />
  )
}

export default Select
