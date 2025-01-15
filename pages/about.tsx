import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'

const About = () => (
  <Layout
    documentTitle="About MyBeachCams"
    documentDescription="Our collection spans over 800 webcams across Hawaii, California, Florida, and beyond, showcasing beaches from Aruba to Thailand"
  >
    <div className="layout">
      <div className="container">
        <h1>About Page</h1>
        <br />
        <br />
        <p>We are all about Beach Cams.</p>
        <p>
          Our collection spans over 800 webcams across Hawaii, California,
          Florida, and beyond, showcasing beaches from Aruba to Thailand
        </p>
        <p>
          Our mission is to give you the largest directory of beach webcams. If
          you have a webcam at the beach or know of one, please let us know. You
          can messages us on the <Link href="/contact">Contact Us</Link> page.
        </p>
        <p>Thanks!</p>
        <p>The MyBeachCams Team</p>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  </Layout>
)

export default About
