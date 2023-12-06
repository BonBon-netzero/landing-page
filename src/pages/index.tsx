import { Trans } from '@lingui/macro'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

import Head from 'components/@pages/Head'
import { Button } from 'theme/Buttons'
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
      <Box m={0} p={0}>
        <Box sx={{ width: '100%', maxWidth: 1296, margin: 'auto' }}>
          <Box mx={{ _: 0, md: 24, lg: 80 }} pt={{ _: 40, lg: 82 }} textAlign={'center'}>
            <Box>
              <Type.Hero>
                <Trans>
                  Bonbon
                  <br />
                  To Net Rero
                </Trans>
              </Type.Hero>
            </Box>
            <Type.Large mt={3}>
              <Trans>Our mission is help the world reach the net-zero goal in 2050</Trans>
            </Type.Large>
            <Box>
              <Button>Live Demo</Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            transform: 'rotate(2.58deg)',
            height: 60,
            bg: 'secondary2',
            width: '110%',
            position: 'relative',
            zIndex: 1,
            left: '-10px',
          }}
        />
        <Box
          sx={{
            transform: 'rotate(-4deg)',
            height: 60,
            bg: 'secondary1',
            width: '110%',
            position: 'relative',
            zIndex: 1,
            left: '-10px',
            top: '-65px',
          }}
        />
      </Box>
    </>
  )
}
