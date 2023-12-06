import { v4 as uuidv4 } from 'uuid'

import SortAscIcon from 'components/@ui/Icons/SortAscIcon'
import SortDefaultIcon from 'components/@ui/Icons/SortDefaultIcon'
import SortDescIcon from 'components/@ui/Icons/SortDescIcon'
import { Box, Flex, Type } from 'theme/base'
import { SortTypeEnum } from 'utils/config/enums'

import { ColumnData, ColumnDataParameter, ColumnExternalSourceParameter, TableSortProps } from './types'

export default function TableHead<T = ColumnDataParameter, K = ColumnExternalSourceParameter>({
  currentSort,
  changeCurrentSort,
  columns,
}: {
  currentSort: TableSortProps<T> | undefined
  changeCurrentSort: ((sort: TableSortProps<T> | undefined) => void) | undefined
  columns: ColumnData<T, K>[] | undefined
}) {
  const handleChangeSort = (columnSortBy: TableSortProps<T>['sortBy'] | undefined) => {
    if (!changeCurrentSort) return
    const isCurrentSort = !!currentSort && currentSort?.sortBy === columnSortBy
    if (!columnSortBy) return
    if (!isCurrentSort) {
      changeCurrentSort({
        sortBy: columnSortBy,
        sortType: SortTypeEnum.DESC,
      })
    }
    if (isCurrentSort && currentSort.sortType === SortTypeEnum.DESC) {
      changeCurrentSort({
        sortBy: columnSortBy,
        sortType: SortTypeEnum.ASC,
      })
    }
    if (isCurrentSort && currentSort.sortType === SortTypeEnum.ASC) {
      changeCurrentSort(undefined)
    }
  }

  return (
    <thead style={{ position: 'relative', width: '100%' }}>
      <tr>
        {columns?.map((column) => {
          const key = column?.key ? column.key : uuidv4()
          const isCurrentSort = currentSort?.sortBy === column.sortBy
          const allowedSort = column?.sortBy && !!changeCurrentSort
          return (
            <Box
              as="th"
              key={key.toString()}
              sx={{ minWidth: column.minWidth, ...column.style }}
              data-table-key={column.key}
            >
              <Box
                role={allowedSort ? 'button' : 'none'}
                onClick={() => {
                  handleChangeSort(column?.sortBy)
                }}
                sx={{
                  color: allowedSort && isCurrentSort ? 'neutral4' : 'neutral4',
                  '&:hover': {
                    color: allowedSort ? 'neutral3' : 'neutral4',
                  },
                }}
              >
                {allowedSort ? (
                  <Type.Caption fontWeight={isCurrentSort ? 'bold' : 'normal'}>
                    <Flex alignItems="center">
                      {column.title}
                      {isCurrentSort ? (
                        currentSort?.sortType === SortTypeEnum.DESC ? (
                          <SortDescIcon />
                        ) : (
                          <SortAscIcon />
                        )
                      ) : (
                        <SortDefaultIcon />
                      )}
                    </Flex>
                  </Type.Caption>
                ) : (
                  <Type.Caption>{column.title}</Type.Caption>
                )}
              </Box>
            </Box>
          )
        })}
      </tr>
    </thead>
  )
}
