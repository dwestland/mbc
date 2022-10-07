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

  const mauiCams = () => {
    const cams = hawaiiCams.cams.filter((cam) => cam.area === 'Maui')
    console.log('%c cams ', 'background: red; color: white', cams)
    const result = cams.map((cam: Cams, idx) => {
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
      documentDescription="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <h1>Hawaii Webcams</h1>

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
          {/* {hawaiiCams.cams.map((cam: Cams, idx) => {
            if (cam.area === 'Maui' && idx > 7) {
              return (
                <CamItem key={cam.id} cam={cam} />
                // <CamItem key={cam.id} cam={cam} refreshData={refreshData} />
              )
            }
            return null
          })} */}
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

        <AdLeaderboard />

        <h2>
          <Link href="/hawaii/kauai/">Kauai Beach Cams</Link>
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
