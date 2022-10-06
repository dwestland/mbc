import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import CamItem from '@/components/CamItem'
import AdLeaderboard from '@/components/AdsenseLeaderboard'

interface WebcamProps {
  hawaiiCams: { title: string }[]
}

const HawaiiPage = ({ hawaiiCams }) => {
  console.log('%c HawaiiPage Page ', 'background: red; color: white')

  return (
    <Layout
      documentTitle="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      documentDescription="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <h1>MyBeachCams.com</h1>
        <h2>
          Live Webcams from <a href="/hawaii/">Hawaii</a>,{' '}
          <a href="/florida/">Florida</a> and{' '}
          <a href="/california/">California</a>
        </h2>

        <p>
          Use this website to find over 120 Beach Cams in Florida, California
          and Hawaii. You will find webcams with live, streaming video from
          these top resort areas. In Hawaii we bring you web cams from such
          happening areas as Waikiki, Kaanapali, Kona, and Lahaina. California
          webcam locations include Los Angeles, San Francisco, San Diego and the
          Central Coast. Also from Florida at Miami, Fort Lauderdale, West Palm
          Beach and Key Largo. Along with the web cams, there are comprehensive
          travel information to give you the scoop on the area's main
          attractions and top sights, including hard-to-find local links. The
          world's best beaches are just a click away.
        </p>

        <p>
          Watch the best Hawaii Beach Cams, featuring live webcams and surf cams
          from Waikiki, Oahu, Lahaina, Maui and all of the top resort areas. We
          also give you comprehensive travel tips, local information, maps and
          links. Enjoy the <em>Hawaii Beach Cams!</em>
        </p>

        <AdLeaderboard />

        <h3>
          <a href="/hawaii/">Hawaii Beach Cams</a>
        </h3>
        <p>
          Hawaii is a tropic travel destination within the United States and is
          one of the top choices for vacations. For US travelers, you can get to
          paradise without needing a passport and you pay in US dollars. Foreign
          travelers also appreciate the Hawaii Islands, especially those from
          Asia. MyBeachCams.com lets you see any the paradise from anywhere in
          the world at anytime the sun is shining on the islands. Explore the
          beautiful beaches and tropical flora that make Hawaii extraordinary
          place to visit from the comfort of your own computer.
        </p>

        {/* <aMapped Webcams */}

        <AdLeaderboard />

        <h3>
          <a href="/california/">California Beach Cams</a>
        </h3>
        <p>
          California is a mostly sunny state with hundreds of miles of gorgeous
          beaches. Known affectionately as the "Left Coast" for its liberal
          leaning ways, it is known for anything loose in the US has a way of
          moving to California. You don't need to live in California to enjoy
          the beaches with the over 70 webcams on MyBeachCams.com.
        </p>

        {/* <aMapped Webcams */}

        <AdLeaderboard />

        <h3>
          <a href="/california/">Florida Beach Cams</a>
        </h3>
        <p>Something about Florida.</p>

        {/* <aMapped Webcams */}

        <AdLeaderboard />
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const moreCamsRes = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/hawaii`)
  const hawaiiCams: WebcamProps = await moreCamsRes.json()

  return {
    props: {
      hawaiiCams,
    },
  }
}

export default HawaiiPage
