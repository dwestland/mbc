import React, { useEffect } from 'react'

const AdLarge = () => {
  useEffect(() => {
    try {
      // Check if adsbygoogle is defined
      if (typeof window !== 'undefined') {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (err) {
      console.error('AdSense error:', err)
    }

    // Cleanup function
    return () => {
      // Clean up ad if needed during unmount
      const ad = document.querySelector('.adsbygoogle')
      if (ad) {
        ad.innerHTML = ''
      }
    }
  }, []) // Empty dependency array means this runs once on mount

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-6144099935579862"
      data-ad-slot="8478674170"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}

export default AdLarge
