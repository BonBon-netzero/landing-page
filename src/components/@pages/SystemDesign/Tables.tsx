'use client'

import { PaginationWithLimit } from 'theme/Pagination'
import Table from 'theme/Table'
import { ColumnProps } from 'theme/Table/interface'
import { Box } from 'theme/base'

interface MockData {
  title: string
  description: string
}

const DATA: MockData[] = [
  {
    title: 'title 1',
    description: 'description 1',
  },
  {
    title: 'title 2',
    description: 'description 2',
  },
]

const columns: ColumnProps<MockData>[] = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: '30%',
    render: (data: MockData) => <div>{data.title}</div>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: '70%',
    render: (data: MockData) => <div>{data.description}</div>,
  },
]

const Tables = () => {
  return (
    <div>
      <Table columns={columns} dataSource={DATA} />
      <Box mt={3}>
        <PaginationWithLimit
          onLimitChange={() => {}}
          onPageChange={() => {}}
          currentPage={1}
          currentLimit={20}
          apiMeta={{
            limit: 20,
            offset: 0,
            total: 1000,
            totalPages: 50,
          }}
        />
      </Box>
    </div>
  )
}

export default Tables
