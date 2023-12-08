import { Trans } from '@lingui/macro'
import Image from 'next/image'
import Link from 'next/link'

import { Flex, Type } from 'theme/base'

import image404 from './not-found.png'

const NotFound = ({ message }: { message?: React.ReactNode }) => {
  return (
    <>
      <Flex
        sx={{
          width: '100%',
          px: 48,
          py: 96,
        }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={image404} alt="not-found" height={300} />
        <Type.H5 mb={16} mt={48}>
          {message ? message : <Trans>Looks Like You&#39;ve Hit a Dead End.</Trans>}
        </Type.H5>
        <Type.Body>
          <Trans>
            Go to our <Link href="/">homepage</Link> and start fresh.
          </Trans>
        </Type.Body>
      </Flex>
    </>
  )
}

export default NotFound
