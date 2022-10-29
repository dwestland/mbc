import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import CamItem from '@/components/CamItem'
import AdLeaderboard from '@/components/AdLeaderboard'
import * as types from '@/utils/types'

const Page = ({ floridaCams }) => {
  const panhandleCams = () => {
    const cams = floridaCams.cams.filter((cam) => cam.area === 'Panhandle')
    const result = cams.map((cam: types.Cams, idx) => {
      if (idx < 7) {
        return <CamItem key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  const northEastCams = () => {
    const cams = floridaCams.cams.filter((cam) => cam.area === 'Northeast')
    const result = cams.map((cam: types.Cams, idx) => {
      if (idx < 7) {
        return <CamItem key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  const eastCentralCams = () => {
    const cams = floridaCams.cams.filter((cam) => cam.area === 'East Central')
    const result = cams.map((cam: types.Cams, idx) => {
      if (idx < 7) {
        return <CamItem key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  const miamiBeachCams = () => {
    const cams = floridaCams.cams.filter((cam) => cam.area === 'Miami Beach')
    const result = cams.map((cam: types.Cams, idx) => {
      if (idx < 7) {
        return <CamItem key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }
  const souteastKeysCams = () => {
    const cams = floridaCams.cams.filter(
      (cam) => cam.area === 'South East Florida and The Keys'
    )
    const result = cams.map((cam: types.Cams, idx) => {
      if (idx < 7) {
        return <CamItem key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  const gulfCoastCams = () => {
    const cams = floridaCams.cams.filter((cam) => cam.area === 'Gulf Coast')
    const result = cams.map((cam: types.Cams, idx) => {
      if (idx < 7) {
        return <CamItem key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  return (
    <Layout
      documentTitle="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      documentDescription="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Miami, Los Angles, Miami, Northeast, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <h1>Florida Beach Cams</h1>
        <h3>Live Webcams from Florida</h3>
        <h2>
          <a href="/florida/miami/">Miami</a> -{' '}
          <a href="/florida/southeast-keys/#fort-lauderdale-beach-cams">
            Fort Lauderdale
          </a>{' '}
          -{' '}
          <a href="/florida/east-central/#daytona-beach-cams">Daytona Beach</a>{' '}
          -{' '}
          <a href="/florida/southeast-keys/#florida-keys-beach-cams">
            Florida Keys
          </a>{' '}
          - <a href="/florida/panhandle/#panama-city-beach-cams">Panama City</a>
        </h2>
        <p>
          Florida has sunny, warm weather year-round in Southern US. Thousands
          of miles of beaches made Florida one of the most popular tourist
          destinations in the United States.
        </p>
        <AdLeaderboard />
        <h2>
          <Link href="/florida/panhandle">Panhandle Beach Cams</Link>
        </h2>
        <p>
          Come see the Florida Panhandle and everything it has to offer. The
          Florida Panhandle is a great place to visit with beautiful ocean and
          beaches and fun activities. Come and explore! Jacksonville Beach and
          the St. Augustine Panhandle is one of the US's most beautiful places
          to visit, come and experience it for yourself. Panhandle Beach Cams
          provide an amazing live streaming experience to those around the world
          who want to watch the beach life at its best.
        </p>
        <div className="cam-container">
          {panhandleCams()}
          <div className="more-cams">
            <Link href="/florida/panhandle">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>PAN HANDLE</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
        <h2>
          <Link href="/florida/northeast/">Northeast Beach Cams</Link>
        </h2>
        <p>
          Northeast Florida, the Sunshine State, has many attractions. Ocean and
          beaches are plentiful, as well as places to see and do. There is so
          much to visit in this part of Florida. Watch live streaming videos of
          the top beaches in Northeast Florida with an interactive map and lots
          more information about attractions, tourist attractions and more!
        </p>
        <div className="cam-container">
          {northEastCams()}
          <div className="more-cams">
            <Link href="/florida/oahu">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>NORTH EAST</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
        <h2>
          <Link href="/florida/east-central">East Central Cams</Link>
        </h2>
        <p>
          East Central Florida is a great place to visit. Ocean and beaches,
          things to do and places to go. See Daytona Beach, Cape Canaveral,
          Space Coast (Cape Kennedy) and New Smyrna Beach. Stay tuned to our
          live streaming webcams and enjoy beautiful beaches.
        </p>
        <div className="cam-container">
          {eastCentralCams()}
          <div className="more-cams">
            <Link href="/florida/east-central">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>EAST CENTRAL</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
        <h2>
          <Link href="/florida/miami/">Miami Beach Cams</Link>
        </h2>
        <p>
          Miami Beach Florida is the world's most famous beach resort, famed for
          its white sand beaches and as a meeting place for celebrities and
          millionaires. Miami Beach is also a popular tourist destination,
          especially among Europeans and South Americans. It has been featured
          in many movies and television shows including Scarface, Cocoon, Miami
          Vice and Baywatch. Watch live streaming webcams of Miami.
        </p>
        <div className="cam-container">
          {miamiBeachCams()}
          <div className="more-cams">
            <Link href="/florida/miami">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>MIAMI</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
        <h2>
          <Link href="/florida/southeast-keys/">
            South East Florida and The Keys Cams
          </Link>
        </h2>
        <p>South East Florida and The Keys Cams.</p>
        <div className="cam-container">
          {souteastKeysCams()}
          <div className="more-cams">
            <Link href="/florida//southeast-keys">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>SOUTH EAST KEYS</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />

        <h2>
          <Link href="/florida/gulf-coast">Gulf Coast Beach Cams</Link>
        </h2>
        <p>Gulf Coast Cams.</p>
        <div className="cam-container">
          {gulfCoastCams()}
          <div className="more-cams">
            <Link href="/florida/gulf-coast">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>GULF COAST</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const moreCamsRes = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/florida`)
  const floridaCams: types.WebcamProps = await moreCamsRes.json()

  return {
    props: {
      floridaCams,
    },
  }
}

export default Page
