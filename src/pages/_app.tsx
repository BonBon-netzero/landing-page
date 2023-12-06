// eslint-disable-next-line no-restricted-imports
import { t } from '@lingui/macro'
import { I18nProvider } from '@lingui/react'
import type { AppProps } from 'next/app'
import 'rc-dropdown/assets/index.css'
import 'rc-slider/assets/index.css'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
// eslint-disable-next-line no-restricted-imports
import 'react-toastify/dist/ReactToastify.css'
// eslint-disable-next-line no-restricted-imports
import 'react-tooltip/dist/react-tooltip.css'
import { ThemeProvider } from 'styled-components/macro'
import { setLocale } from 'yup'

import PageScript from 'components/@pages/Script'
import { DialogProvider } from 'hooks/useDialog'
import ThemedGlobalStyle from 'theme/styles'
import theme from 'theme/theme'
import { useLinguiInit } from 'translations/utils'
import { formatNumber } from 'utils/helpers/formatNumber'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
      refetchOnWindowFocus: false,
    },
  },
})

const NAVBAR_HEIGHT = 72
const FOOTER_HEIGHT = 205

export default function MyApp({ Component, pageProps }: AppProps) {
  const i18n = useLinguiInit(pageProps.i18n)
  yupSetLocale()

  return (
    <I18nProvider i18n={i18n}>
      <ThemeProvider theme={theme(false)}>
        <DialogProvider>
          <ThemedGlobalStyle />
          <QueryClientProvider client={queryClient}>
            <div style={{ paddingTop: NAVBAR_HEIGHT, minHeight: `calc(100svh - ${FOOTER_HEIGHT}px)` }}>
              <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
              </Hydrate>
            </div>
          </QueryClientProvider>
        </DialogProvider>
        <PageScript />
      </ThemeProvider>
    </I18nProvider>
  )
}

function yupSetLocale() {
  setLocale({
    mixed: {
      required({ label }) {
        return t`${label} is required`
      },
    },
    number: {
      min({ label, min }) {
        return t`${label} must be greater than or equal to ${formatNumber(min)}`
      },
      max({ label, max }) {
        return t`${label} must be less than or equal to ${formatNumber(max)}`
      },
      integer({ label }) {
        return t`${label} must be an integer`
      },
    },
    string: {
      email({ label }) {
        return t`${label} must be a valid email`
      },
    },
  })
}
