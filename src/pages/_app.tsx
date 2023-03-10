import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from '@/state/store'
import { NextIntlProvider } from 'next-intl'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider>
      <Provider store={store}>
        <NextIntlProvider messages={pageProps.messages}>
          <Component {...pageProps} />
        </NextIntlProvider>
      </Provider>
    </ChakraProvider>
  )
}
