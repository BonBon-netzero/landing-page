import { SystemStyleObject } from '@styled-system/css'
import { GridProps } from 'styled-system'
import { v4 as uuidv4 } from 'uuid'

import { Box } from 'theme/base'

import { ColumnData, ColumnDataParameter, ColumnExternalSourceParameter } from './types'

export default function TableBody<T = ColumnDataParameter, K = ColumnExternalSourceParameter>({
  data,
  columns,
  sx,
  onClickRow,
  renderRowBackground,
  externalSource,
}: {
  data: T[] | undefined
  columns: ColumnData<T, K>[] | undefined
  sx?: SystemStyleObject & GridProps
  onClickRow: ((data: T) => void) | undefined
  renderRowBackground: ((data: T, index: number) => string | undefined) | undefined
  externalSource: K | undefined
}) {
  return (
    <tbody style={{ overflow: 'hidden' }}>
      {data?.map((data: any, index: number) => {
        const bg = renderRowBackground ? renderRowBackground(data, index) : undefined
        return (
          <Row
            key={index}
            data={data}
            index={index}
            columns={columns}
            onClickRow={onClickRow}
            sx={sx}
            bg={bg}
            externalSource={externalSource}
          />
        )
      })}
    </tbody>
  )
}

function Row<T = ColumnDataParameter, K = ColumnExternalSourceParameter>({
  data,
  index,
  columns,
  onClickRow,
  bg,
  sx = {},
  externalSource,
}: {
  data: T | undefined
  index: number | undefined
  columns: ColumnData<T, K>[] | undefined
  onClickRow: ((data: T) => void) | undefined
  bg: string | undefined
  sx?: SystemStyleObject & GridProps
  externalSource: K | undefined
}) {
  if (!data) return <></>
  return (
    <tr
      onClick={onClickRow ? () => onClickRow(data) : undefined}
      style={{ cursor: !!onClickRow ? 'pointer' : 'default', background: bg, width: '100%' }}
    >
      {columns?.map((column) => {
        const key = column?.key ? column.key : uuidv4()
        return (
          <Box
            as="td"
            key={key.toString()}
            data-table-key={column.key}
            sx={{ minWidth: column.minWidth, ...sx, ...column.style }}
          >
            {column.render({ data, index, externalSource })}
          </Box>
        )
      })}
    </tr>
  )
}
