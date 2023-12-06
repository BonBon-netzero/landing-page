import { Trans } from '@lingui/macro'
import { CaretCircleLeft, CaretCircleRight, CaretLeft, CaretRight, DotsThree } from '@phosphor-icons/react'
import { useEffect, useRef } from 'react'
import styled from 'styled-components/macro'

import { ApiMeta } from 'apis/api.d'
import { Button } from 'theme/Buttons'
import ButtonWithIcon from 'theme/Buttons/ButtonWithIcon'
import IconButton from 'theme/Buttons/IconButton'
import Dropdown, { DropdownItem } from 'theme/Dropdown'
import Input from 'theme/Input'
import { DOTS, usePagination } from 'theme/Pagination/usePagination'
import { Flex, Type } from 'theme/base'
import { BoxProps } from 'theme/types'
import { DEFAULT_LIMIT_VALUES } from 'utils/config/constants'

export type PaginationProps = {
  currentPage: number
  totalPage: number
  onPageChange: (page: number) => void
  siblingCount?: number
  hideArrows?: boolean
}

const DottedButton = styled(ButtonWithIcon)`
  padding: 4px;
  border: none;
  width: 24px;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: auto;
  pointer-events: none;

  background-color: transparent;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: transparent;
    & > div:first-child svg {
      opacity: 0;
    }
    & > :not(:first-child) {
      opacity: 1;
    }
  }
  & > :not(:first-child) {
    transition: all 0.2s ease-in-out;

    opacity: 0;
    position: absolute;
    top: 10px;
    right: 12px;
  }
`

const Pagination = ({
  currentPage,
  totalPage,
  onPageChange,
  siblingCount = 1 /*, hideArrows = false */,
  ...props
}: PaginationProps & BoxProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalPage,
    siblingCount,
  })

  const handleOnClick = (page: number) => {
    onPageChange(page)
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  if (totalPage <= 1) return <></>

  return (
    <Flex {...props}>
      <IconButton
        icon={<CaretLeft size={24} />}
        mr={1}
        borderRadius="md"
        width={24}
        sx={{
          px: 1,
          py: '4px',
          borderRadius: '4px',
          '&[disable]': {
            opacity: 0.5,
          },
          color: 'neutral1',
        }}
        disabled={currentPage === 1}
        onClick={onPrevious}
      />
      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return <DottedButton key={`${DOTS}${i + 1}`} icon={<DotsThree size={14} />} sx={{ color: 'neutral6' }} />
        }

        return (
          <Button
            key={pageNumber}
            onClick={() => handleOnClick(Number(pageNumber))}
            size="xs"
            type="button"
            mr={1}
            p={1}
            sx={{
              border: 'none',
              bg: 'neutral6',
              borderRadius: '4px',
              minWidth: 24,
              color: pageNumber === currentPage ? 'neutral1' : 'neutral3',
              fontWeight: pageNumber === currentPage ? '600' : '400',
              fontSize: '14px',
            }}
          >
            {pageNumber}
          </Button>
        )
      })}
      <IconButton
        icon={<CaretRight size={24} />}
        borderRadius="md"
        width={24}
        sx={{
          px: 1,
          py: '4px',
          borderRadius: '4px',
          '&[disable]': {
            opacity: 0.5,
          },
          color: 'neutral1',
        }}
        disabled={!lastPage || currentPage === lastPage}
        onClick={onNext}
      />
    </Flex>
  )
}

export default Pagination

export function PaginationWithLimit({
  currentPage,
  currentLimit,
  onPageChange,
  onLimitChange,
  defaultLimit,
  apiMeta,
  menuPosition,
  ...props
}: {
  currentPage: number
  currentLimit: number
  defaultLimit?: number | number[]
  onPageChange: (page: number) => void
  onLimitChange: (limit: number) => void
  apiMeta?: ApiMeta
  menuPosition?: 'top' | 'bottom'
} & BoxProps) {
  const { total = 0, totalPages = 0 } = apiMeta ?? {}
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.value = currentPage.toString()
  }, [currentPage])

  if (totalPages === 0) return <></>
  const { sx = {}, ...rest } = props ?? {}

  const limitValues =
    defaultLimit != null
      ? typeof defaultLimit === 'number'
        ? Array.from({ length: 3 }, (_, v) => Math.pow(2, v) * defaultLimit)
        : defaultLimit
      : DEFAULT_LIMIT_VALUES

  return (
    <Flex
      flexDirection={['column', 'column', 'row']}
      alignItems={['flex-start', 'flex-start', 'center']}
      sx={{ columnGap: 2, rowGap: 2, justifyContent: 'space-between', px: 3, ...sx }}
      {...rest}
    >
      <Flex sx={{ gap: [2, 3], alignItems: 'center' }}>
        <Type.Caption>
          <Trans>Show per page</Trans>
        </Type.Caption>
        <Dropdown
          menuPosition={menuPosition}
          buttonSx={{
            bg: 'neutral7',
            borderColor: 'stroke',
            px: 2,
          }}
          iconSize={12}
          menuSx={{ minWidth: 'auto', width: '52px', bg: 'neutral8' }}
          menu={
            <>
              {limitValues.map((v: number) => {
                return (
                  <DropdownItem
                    key={v}
                    role="button"
                    onClick={() => onLimitChange(v)}
                    sx={{ py: '4px !important', color: 'neutral1' }}
                    isActive={v === currentLimit}
                  >
                    {v}
                  </DropdownItem>
                )
              })}
            </>
          }
        >
          <Type.Caption fontWeight={400}>{currentLimit}</Type.Caption>
        </Dropdown>
        <Type.Caption>
          <Trans>of {total} records</Trans>
        </Type.Caption>
      </Flex>
      {/* <Box display={['none', 'none', 'block']} sx={{ flexShrink: 0, width: '1px', height: 32, bg: 'neutral6' }} /> */}
      <PaginationWithSelect currentPage={currentPage} apiMeta={apiMeta} onPageChange={onPageChange} />
    </Flex>
  )
}

export function PaginationWithSelect({
  currentPage,
  onPageChange,
  apiMeta,
  sx = {},
}: {
  currentPage: number
  onPageChange: (page: number) => void
  apiMeta?: ApiMeta
  sx?: any
}) {
  const { totalPages = 0 } = apiMeta ?? {}
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.value = currentPage.toString()
  }, [currentPage])

  if (totalPages === 0) return <></>

  return (
    <Flex sx={{ gap: [2, 3], alignItems: 'center', ...sx }}>
      <Type.Caption>
        <Trans>Go to page</Trans>
      </Type.Caption>
      <Input
        ref={inputRef}
        type="number"
        sx={{
          width: '44px',
          px: 2,
          borderColor: 'transparent',
          appearance: 'none',
        }}
        // value={currentPage}
        disabled={!totalPages || totalPages === 1}
        defaultValue={currentPage}
        onBlur={(e) => {
          e.target.value = currentPage.toString()
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            let newPage = 1
            const input = e.target as HTMLInputElement
            const value = Number(input.value)
            if (isNaN(value)) return
            if (value % 1 !== 0) return
            newPage = value
            if (value < 1) newPage = 1
            if (value > totalPages) newPage = totalPages
            onPageChange(newPage)
            setTimeout(() => input.blur(), 0)
          }
        }}
      />
      <Flex
        sx={{
          alignItems: 'center',
          gap: 2,
          border: 'small',
          borderColor: 'transparent',
          borderRadius: 'sm',
        }}
      >
        <IconButton
          icon={<CaretCircleLeft size={20} weight="thin" />}
          borderRadius="md"
          width={20}
          variant="ghost"
          sx={{ p: 0, borderRadius: '50%' }}
          disabled={!totalPages || currentPage === 1}
          onClick={() => onPageChange(currentPage === 1 ? 1 : currentPage - 1)}
        />
        <Type.Caption>
          {currentPage}/{totalPages}
        </Type.Caption>
        <IconButton
          icon={<CaretCircleRight size={20} weight="thin" />}
          borderRadius="md"
          width={20}
          variant="ghost"
          sx={{ p: 0, borderRadius: '50%' }}
          disabled={!totalPages || currentPage === totalPages}
          onClick={() => onPageChange(currentPage === totalPages ? totalPages : currentPage + 1)}
        />
      </Flex>
    </Flex>
  )
}
