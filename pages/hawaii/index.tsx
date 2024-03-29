import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import AdLeaderboard from '@/components/AdLeaderboard'
import * as types from '@/utils/types'
import CamCard from '@/components/CamCard'

const HawaiiPage = ({ hawaiiCams }) => {
  const mauiCams = () => {
    const cams = hawaiiCams.cams.filter((cam) => cam.area === 'Maui')
    const result = cams.map((cam: types.Cams, idx) => {
      if (idx < 7) {
        return <CamCard key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  const oahuCams = () => {
    const cams = hawaiiCams.cams.filter((cam) => cam.area === 'Oahu')
    const result = cams.map((cam: types.Cams, idx) => {
      if (idx < 7) {
        return <CamCard key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  const bigislandCams = () => {
    const cams = hawaiiCams.cams.filter((cam) => cam.area === 'Big Island')
    const result = cams.map((cam: types.Cams, idx) => {
      if (idx < 7) {
        return <CamCard key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  const kauaiCams = () => {
    const cams = hawaiiCams.cams.filter((cam) => cam.area === 'Kauai')
    const result = cams.map((cam: types.Cams, idx) => {
      if (idx < 7) {
        return <CamCard key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  return (
    <Layout
      documentTitle="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      documentDescription="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <h1>Hawaii Webcams</h1>
        <div className="index-page-subheading">
          <h2>
            <span className="no-break">Maui</span>&nbsp;
            <span className="subheading-emoji"> 🌴 </span>&nbsp;
            <span className="no-break">Oahu</span>&nbsp;
            <span className="subheading-emoji"> 🌴 </span>&nbsp;
            <span className="no-break">Kauai</span>&nbsp;
            <span className="subheading-emoji"> 🌴 </span>&nbsp;
            <span className="no-break">Big Island</span>
          </h2>
        </div>
        <p>
          Watch the best Hawaii Beach Cams, featuring live webcams and surf cams
          from Waikiki, Oahu, Lahaina, Maui and all of the top resort areas. We
          also give you comprehensive travel tips, local information, maps and
          links. Enjoy the <em>Hawaii Beach Cams!</em>
        </p>
        <p>
          The island of Maui is one of the most popular vacation destinations,
          featuring the beaches of Kaanapali, Lahaina, Wailea and Kapalua. It
          has 33 miles of exquisite public beaches. Some of these beaches even
          have jewel-toned sand. See the webcams at{' '}
          <Link href="/hawaii/maui/">Maui Beach Cams</Link> to view streaming
          live camera pictures of the amazing natural beauty found on various
          locations on the Island of Maui.
        </p>
        <AdLeaderboard />
        <h2>
          <Link href="/hawaii/maui/">Maui Beach Cams</Link>
        </h2>
        <p>
          The island of Maui is one of the most popular vacation destinations,
          featuring the beaches of Kaanapali, Lahaina, Wailea and Kapalua. It
          has 33 miles of exquisite public beaches. Some of these beaches even
          have jewel-toned sand. See the webcams at{' '}
          <Link href="/hawaii/maui">Maui Beach Cams</Link> to view streaming
          live camera pictures of the amazing natural beauty found on various
          locations on the Island of Maui.
        </p>
        <div className="cam-container">
          {mauiCams()}
          <div className="more-cams">
            <Link href="/hawaii/maui">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>MAUI</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
        <h2>
          <Link href="/hawaii/oahu/">Oahu Beach Cams</Link>
        </h2>
        <p>
          The Island of Oahu is home to World-famous <em>Waikiki Beach</em> and{' '}
          <em>Honolulu</em>. It is the most visited of all the Hawaiian Islands.
          Its famed <em>North Shore</em> draws the top professional surfers in
          the world to ride its 30-foot waves. See the webcams at{' '}
          <Link href="/hawaii/oahu/">Oahu Beach Cams</Link> to view streaming
          live camera pictures of various hot spots on the island.
        </p>
        <div className="cam-container">
          {oahuCams()}
          <div className="more-cams">
            <Link href="/hawaii/oahu">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>OAHU</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
        <h2>
          <Link href="/hawaii/bigisland/">Big Island Beach Cams</Link>
        </h2>
        <p>
          The Island of Hawaii is commonly referred to as "The Big Island." It
          is almost twice as large as all of the other Hawaiian Island combined.
          It is home to some of the most luxurious resort areas including the{' '}
          <em>Kona Coast</em>, <em>Waikoloa Coast</em> and <em>Kailua Kona</em>.
          It's also the home to Kona gourmet coffee. See the webcams at{' '}
          <Link href="/hawaii/bigisland/">Big Island Beach Cams</Link> to view
          streaming live pictures of the amazing sights on the Big Island of
          Hawaii.
        </p>
        <div className="cam-container">
          {bigislandCams()}
          <div className="more-cams">
            <Link href="/hawaii/bigisland">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>BIG ISLAND</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
        <h2>
          <Link href="/hawaii/kauai">Kauai Beach Cams</Link>
        </h2>
        <p>
          Kauai is a lush paradise. It is known as the "Garden Isle" for its
          brilliant flowers. It is also home to the "wettest place on earth" and
          "The Grand Canyon of the Pacific." On its famed North Shore are{' '}
          <em>Princeville</em>, <em>Hanalei Bay</em> and the{' '}
          <em>Na Pali Shoreline</em>. Other top resort areas include{' '}
          <em>Lihue</em> and <em>Poipu</em>. See the webcams at{' '}
          <Link href="/hawaii/kauai/">Kauai Beach Cams</Link> to view streaming
          live pictures of this beautiful and lush island.
        </p>
        <div className="cam-container">
          {kauaiCams()}
          <div className="more-cams">
            <Link href="/hawaii/kauai">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>KAUAI</span>
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
  const moreCamsRes = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/hawaii`)
  const hawaiiCams: types.WebcamProps = await moreCamsRes.json()

  return {
    props: {
      hawaiiCams,
    },
  }
}

export default HawaiiPage
