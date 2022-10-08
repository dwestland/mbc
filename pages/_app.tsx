/* eslint-disable react/jsx-props-no-spreading */
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import React from 'react'
import '@/styles/globals.scss'

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={(pageProps as any).session} refetchInterval={0}>
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </SessionProvider>
  )
}
