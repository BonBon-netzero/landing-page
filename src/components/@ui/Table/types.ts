import { SystemStyleObject } from '@styled-system/css'
import { ReactNode, RefObject } from 'react'
import { GridProps } from 'styled-system'

import { ApiMeta } from 'apis/api'
import { SortTypeEnum } from 'utils/config/enums'

export interface TableSortProps<T> {
  sortBy: keyof T
  sortType: SortTypeEnum
}

export type ColumnData<T = Record<string, any>, K = unknown> = {
  title: ReactNode
  key: keyof T | undefined
  style?: Record<string, any>
  render: (args: { data: T; index?: number; externalSource?: K }) => ReactNode
  sortBy?: keyof T
  minWidth: number | string
}
type ExtractDataType<Type> = Type extends ColumnData<infer T> ? T : never
type ExtractExternalSourceType<Type> = Type extends ColumnData<any, infer K> ? K : never
export type ColumnDataParameter = ExtractDataType<ColumnData>
export type ColumnExternalSourceParameter = ExtractExternalSourceType<ColumnData>
export interface TableProps<T, K> {
  data: T[] | undefined
  dataMeta?: ApiMeta
  isLoading: boolean
  columns: ColumnData<T, K>[]
  footer?: ReactNode
  wrapperSx?: any
  borderWrapperSx?: any
  onClickRow?: (data: T) => void
  renderRowBackground?: (data: T, index: number) => string
  currentSort?: TableSortProps<T>
  changeCurrentSort?: (sort: TableSortProps<T> | undefined) => void
  externalSource?: K
  restrictHeight?: boolean
  containerSx?: any
  scrollRef?: RefObject<HTMLDivElement> | null
  loadingSx?: any
  rowSx?: SystemStyleObject & GridProps
  isInfiniteLoad?: boolean
  tableHeadSx?: any
  tableBodySx?: any
  tableBodyWrapperSx?: any
}
export type InfiniteTableProps<T, K> = Omit<TableProps<T, K>, 'data'> & { data: T[] | undefined }
