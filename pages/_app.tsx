/* eslint-disable react/jsx-props-no-spreading */
import { SessionProvider } from 'next-auth/react'
// import { Provider } from 'next-auth/client'
import { AppProps } from 'next/app'
import React from 'react'
import '@/styles/globals.scss'

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={(pageProps as any).session} refetchInterval={0}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
