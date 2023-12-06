import Link from 'next/link'
// components/breadcrumbs/Breadcrumbs.ts
import { Fragment, ReactNode } from 'react'

import { Flex, Type } from 'theme/base'
import { BoxProps } from 'theme/types'

// defining the Props
export type CrumbItem = {
  label: ReactNode // e.g., Python
  path: string // e.g., /development/programming-languages/python
}
export type BreadcrumbsProps = {
  items: CrumbItem[]
}

// ...omitted for brevity
// components/breadcrumbs/Breadcrumbs.ts
const Breadcrumbs = ({ items, sx = {}, ...props }: BreadcrumbsProps & BoxProps) => {
  return (
    <Flex {...props} sx={{ gap: 2, ...sx }} alignItems="center">
      {items.map((crumb, i) => {
        const isLastItem = i === items.length - 1
        if (!isLastItem) {
          return (
            <Fragment key={i}>
              <Link href={crumb.path}>
                <Type.Body
                  color="neutral4"
                  sx={{
                    '&:hover': {
                      color: 'neutral1',
                    },
                  }}
                >
                  {crumb.label}
                </Type.Body>
              </Link>
              {/* separator */}
              <Type.Body color="neutral4">/</Type.Body>
            </Fragment>
          )
        } else {
          return (
            <Type.BodyBold color="primary2" key={i}>
              {crumb.label}
            </Type.BodyBold>
          )
        }
      })}
    </Flex>
  )
}
export default Breadcrumbs
