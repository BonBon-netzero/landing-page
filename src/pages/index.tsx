import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

import Head from 'components/@pages/Head'
import { Box, Type } from 'theme/base'
import { loadCatalog } from 'translations/utils'

export async function getServerSideProps(ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<any>> {
  // some server side logic
  return {
    props: {
      i18n: await loadCatalog(ctx.locale as string),
    },
  }
}

export default function Home() {
  return (
    <>
      <Head />
      <Box>
        <Type.H1>Home Page</Type.H1>
      </Box>
    </>
  )
}
