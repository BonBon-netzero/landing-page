import { ReactNode, useEffect, useRef } from 'react'
import styled from 'styled-components/macro'

import Loading from 'theme/Loading'
import NoDataFound from 'theme/NoContent/NoDataFound'
import { Box, Flex, Type } from 'theme/base'

import TableBody from './TableBody'
import TableHead from './TableHead'
import { TableProps } from './types'

export default function Table<T, K>({
  data,
  columns,
  isLoading,
  footer,
  wrapperSx = {},
  onClickRow,
  renderRowBackground,
  currentSort,
  changeCurrentSort,
  externalSource,
  restrictHeight,
  containerSx = {},
  loadingSx,
  rowSx = {},
  scrollRef,
  isInfiniteLoad = false,
  tableHeadSx,
  tableBodySx,
  tableBodyWrapperSx,
  dataMeta,
}: TableProps<T, K>) {
  const bodyRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const sourceRef = isInfiniteLoad ? scrollRef : bodyRef
    const handleScrollHorizontal = () => {
      if (!sourceRef?.current || !headRef.current) return
      const scrollLeft = sourceRef.current?.scrollLeft
      headRef.current.scrollLeft = scrollLeft
    }
    sourceRef?.current?.addEventListener('scroll', handleScrollHorizontal)
    return () => sourceRef?.current?.removeEventListener('scroll', handleScrollHorizontal)
  }, [isInfiniteLoad, isLoading, scrollRef])
  useEffect(() => {
    if (!isLoading || isInfiniteLoad) return
    bodyRef?.current?.scrollTo(0, 0)
  }, [isInfiniteLoad, isLoading])
  return (
    <Box
      className="table_container"
      flex="auto"
      sx={{
        ...(restrictHeight
          ? {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }
          : {}),
        width: '100%',
        position: 'relative',
        ...containerSx,
      }}
    >
      <TableWrapper
        className="table_wrapper"
        sx={{
          flex: 1,
          ...(restrictHeight
            ? {
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }
            : {}),
          ...wrapperSx,
        }}
      >
        {!!data?.length && (
          <>
            <Box sx={{ width: '100%', overflow: 'hidden', flexShrink: 0, pr: 3 }} ref={headRef}>
              <TableContainer sx={tableHeadSx}>
                <TableHead columns={columns} currentSort={currentSort} changeCurrentSort={changeCurrentSort} />
              </TableContainer>
            </Box>
            <Box
              flex="1 0 0"
              // sx={{ overflow: restrictHeight ? 'auto' : 'unset', ...(tableBodyWrapperSx ?? {}) }}
              sx={{ overflow: 'auto', pr: 3, ...(tableBodyWrapperSx ?? {}) }}
              ref={isInfiniteLoad ? scrollRef : bodyRef}
            >
              <TableContainer sx={tableBodySx}>
                <TableBody
                  data={data}
                  columns={columns}
                  sx={rowSx}
                  onClickRow={onClickRow}
                  renderRowBackground={renderRowBackground}
                  externalSource={externalSource}
                />
              </TableContainer>

              {isInfiniteLoad && !isLoading && (dataMeta?.total ?? 0) === data.length && (
                <Flex
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    bg: 'neutral6',
                    height: 40,
                  }}
                >
                  <Type.Caption color="neutral3">End of list</Type.Caption>
                </Flex>
              )}
            </Box>
          </>
        )}

        {!isInfiniteLoad && isLoading && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(2px)',
              bg: 'modalBG',
            }}
          >
            <Loading />
          </Box>
        )}

        {!isLoading && !!data && data.length === 0 && (
          <Box mb={24} sx={{ bg: 'neutral8', borderRadius: 'sm' }}>
            <NoDataFound />
          </Box>
        )}

        {isInfiniteLoad && isLoading && (
          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3,
              backdropFilter: 'blur(5px)',
              bg: 'modalBG',
              height: 40,
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              ...loadingSx,
            }}
          >
            <Box>
              <Loading size={20} />
            </Box>
            {dataMeta && data && (
              <Type.Caption color="neutral2">
                {data.length} / {dataMeta.total}
              </Type.Caption>
            )}
          </Flex>
        )}

        {!!footer ? <Box sx={{ position: 'sticky', left: 0 }}>{footer}</Box> : null}
      </TableWrapper>
    </Box>
  )
}

export function TableContainer({ sx = {}, children }: { children: ReactNode; sx?: any }) {
  return (
    <Box
      as="table"
      textAlign="left"
      sx={{
        width: '100%',
        borderCollapse: 'separate',
        // '& tbody tr': {
        //   '&:hover': {
        //     background: '#292d40!important',
        //   },
        // },
        // '& th:first-child, td:first-child': {
        //   pl: 3,
        // },
        '& th': { height: 40, verticalAlign: 'middle', fontWeight: 'normal' },
        '& td': { height: 60, borderBottom: 'small', borderColor: 'stroke', verticalAlign: 'middle' },
        '& tr:last-child td': { borderBottom: 'none' },
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export const TableWrapper = styled(Box)`
  color: ${({ theme }) => theme.colors.neutral3};
  overflow: auto;
  padding: 16px;
  padding-right: 0;
  padding-bottom: 0;
  border: 1px solid ${({ theme }) => theme.colors.stroke};
`
