import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'

const About = () => {
  console.log('%c About Page ', 'background: red; color: white')

  return (
    <Layout
      documentTitle="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      documentDescription="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <div className="container">
          <h1>About Page</h1>
          <br />
          <br />
          <p>We are all about Beach Cams.</p>
          <p>
            Our mission is to give you largest directory of webcams at the
            beach. If you have a webcam at the beach or know of one, please let
            us know. You can messages us on the{' '}
            <Link href="/contact">Contact Us</Link> page.
          </p>
          <p>Thnaks!</p>
          <p>The MyBeachCams.com Team</p>
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
