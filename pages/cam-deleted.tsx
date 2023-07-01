import React from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'

const CamDeleted = () => {
  const router = useRouter()

  return (
    <Layout
      documentTitle="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      documentDescription="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <div className="container">
          <button type="button" className="btn" onClick={() => router.back()}>
            Back
          </button>
          <br />
          <br />
          <h1>Cam Deleted</h1>
          <br />
        </div>
      </div>
    </Layout>
  )
}

export default CamDeleted
