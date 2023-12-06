import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

import Head from 'components/@pages/Head'
import Buttons from 'components/@pages/SystemDesign/Buttons'
import Dialogs from 'components/@pages/SystemDesign/Dialogs'
import Inputs from 'components/@pages/SystemDesign/Inputs'
import Others from 'components/@pages/SystemDesign/Others'
import Tables from 'components/@pages/SystemDesign/Tables'
import Container from 'components/@ui/Container'
import Tabs, { TabPane } from 'theme/Tab'
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
      <Container style={{ height: '1000px' }}>
        <Tabs defaultActiveKey="5">
          <TabPane key="1" tab="Button" tabCount={5}>
            <Buttons />
          </TabPane>
          <TabPane key="2" tab="Input" tabCount={5}>
            <Inputs />
          </TabPane>
          <TabPane key="3" tab="Dialogs">
            <Dialogs />
          </TabPane>
          <TabPane key="4" tab="Tables">
            <Tables />
          </TabPane>
          <TabPane key="5" tab="Others">
            <Others />
          </TabPane>
        </Tabs>
      </Container>
    </>
  )
}
