import React from 'react'
import Layout from '@/components/Layout'
import { useSession } from 'next-auth/react'
// import Link from 'next/link'

const About = () => {
  const { data: session } = useSession()
  return (
    <Layout
      documentTitle="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      documentDescription="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
      nofollow
    >
      <div className="layout">
        <div className="container">
          <h1>Login/Logout Page</h1>
          <br />
          <br />
          {session ? <h2>Welcome aboard!</h2> : <h2>Please sign in!</h2>}
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </Layout>
  )
}

export default About
