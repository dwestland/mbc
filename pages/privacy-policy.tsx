import React from 'react'
import Layout from '@/components/Layout'

const PrivacyPolicy = () => {
  console.log('%c Privacy Policy Page ', 'background: red; color: white')

  return (
    <Layout
      documentTitle="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      documentDescription="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <div className="container">
          <h1>Privacy Policy Page</h1>
          <br />
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPolicy
