import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ReactElement } from 'react'
import { ServerStyleSheet } from 'styled-components/macro'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(): ReactElement {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          {/* <link rel="preload" href="/fonts/AeonikPro-Bold.otf" as="font" type="font/otf" crossOrigin="" />
          <link rel="preload" href="/fonts/AeonikPro-Medium.otf" as="font" type="font/otf" crossOrigin="" />
          <link rel="preload" href="/fonts/AeonikPro-Regular.otf" as="font" type="font/otf" crossOrigin="" />
          <link rel="preload" href="/fonts/AeonikPro-Bolder.otf" as="font" type="font/otf" crossOrigin="" /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
