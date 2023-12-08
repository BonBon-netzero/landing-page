import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

import Head from 'components/@pages/Head'
import Goals from 'components/@pages/home/Goals'
import HeroSection from 'components/@pages/home/HeroSection'
import HowItWorkAndPartners from 'components/@pages/home/HowItWorkAndPartners'
import { Box } from 'theme/base'
import { loadCatalog } from 'translations/utils'

export async function getServerSideProps(ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<any>> {
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
      <HeroSection />
      <Goals />
      <Box sx={{ height: '16px', boxShadow: '0px 3px 5px 0px rgba(0, 0, 0, 0.04)' }} />
      <HowItWorkAndPartners />
    </>
  )
}
