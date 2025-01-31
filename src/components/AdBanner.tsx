import { useEffect } from 'react'

interface AdBannerProps {
  'data-ad-slot': string
  'data-ad-format': string
  'data-full-width-responsive': string
}

const AdBanner = (props: AdBannerProps) => {
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      style={{
        display: 'block',
        overflow: 'hidden',
      }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  )
}

export default AdBanner
