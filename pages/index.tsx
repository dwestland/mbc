import React from 'react'
import Layout from '@/components/Layout'

const IndexPage = () => {
  console.log('%c Home Page ', 'background: red; color: white')

  return (
    <Layout
      title="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      description="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <div className="container">
          <h1>Welcome to MyBeachCams.com</h1>
          <br />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
