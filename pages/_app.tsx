/* eslint-disable react/jsx-props-no-spreading */
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import React from 'react'
import Script from 'next/script'
import '@/styles/globals.scss'

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  const GA_MEASUREMENT_ID = 'G-C3QDQFZBDD'

  return (
    <SessionProvider session={(pageProps as any).session} refetchInterval={0}>
      {/* This loads the main Google Analytics script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      {/* This sets up the dataLayer */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
      {/* This loads the Google Ads script */}
      {/* <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
        strategy="lazyOnload"
        crossOrigin="anonymous"
      /> */}
      <Component {...pageProps} />
    </SessionProvider>
  )
}
