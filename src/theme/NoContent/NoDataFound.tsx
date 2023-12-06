import { Trans } from '@lingui/macro'
import { ReactNode } from 'react'

import { Flex, Image, Type } from 'theme/base'

import notFound from './not-found.png'

export default function NoDataFound({ message = <Trans>No Data Found</Trans> }: { message?: ReactNode }) {
  return (
    <Flex p={4} sx={{ width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Image src={notFound.src} sx={{ maxWidth: 65, mb: 3 }} alt="no-data-found" />
      <Type.Body color="neutral3" textAlign="center">
        {message}
      </Type.Body>
    </Flex>
  )
}
