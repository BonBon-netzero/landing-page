import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

import Head from 'components/@pages/Head'
import ContactSection from 'components/@pages/home/ContactSection'
import Goals from 'components/@pages/home/Goals'
import HeroSection from 'components/@pages/home/HeroSection'
import HowItWork from 'components/@pages/home/HowItWork'
import QuestionAndAnswers from 'components/@pages/home/QuestionAndAnswers'
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
      <Box>
        <Goals />
        <HowItWork />
        <QuestionAndAnswers />
        <ContactSection />
      </Box>
    </>
  )
}
