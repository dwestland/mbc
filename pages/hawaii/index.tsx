import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
import Link from 'next/link'
import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'
import * as types from '@/utils/types'
import CamCard from '@/components/CamCard'
import ShowMoreText from 'react-show-more-text'

const HawaiiPage = ({ hawaiiCams }) => {
  const CamsMap: any = dynamic(() => import('@/components/CamsMap'), {
    ssr: false,
  })

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

  // Create vectors for map
  const vectors = []
  hawaiiCams.cams.map((cam: types.Cams) => {
    if (cam.lat !== null && cam.lng !== null) {
      const vector = {
        name: cam.title,
        lat: cam.lat,
        lng: cam.lng,
        id: cam.id,
        imageName: cam.imageName,
      }
      vectors.push(vector)
    }
    return null
  })

  return (
    <Layout
      documentTitle="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      documentDescription="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <h1>Hawaii Webcams</h1>
        <div className="index-page-subheading">
          <h2>
            <span className="no-break">
              <Link href="/hawaii/maui/">
                <a>Maui</a>
              </Link>
            </span>
            &nbsp;
            <span className="subheading-emoji"> 🌴 </span>&nbsp;
            <span className="no-break">
              <Link href="/hawaii/oahu/">
                <a>Oahu</a>
              </Link>
            </span>
            &nbsp;
            <span className="subheading-emoji"> 🌴 </span>&nbsp;
            <span className="no-break">
              <Link href="/hawaii/kauai">
                <a>Kauai</a>
              </Link>
            </span>
            &nbsp;
            <span className="subheading-emoji"> 🌴 </span>&nbsp;
            <span className="no-break">
              <Link href="/hawaii/bigisland/">
                <a>Big Island</a>
              </Link>
            </span>
          </h2>
        </div>
        <div className="content-and-ad">
          <div className="content">
            <CamsMap vectors={vectors} />
          </div>
          <div className="ad">
            <AdLarge />
          </div>
        </div>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            Watch the best Hawaii Beach Cams, featuring live webcams and surf
            cams from Waikiki, Oahu, Lahaina, Maui and all of the top resort
            areas. We also give you comprehensive travel tips, local
            information, maps and links. Enjoy the Hawaii Beach Cams!
          </p>
          <p>
            The island of Maui is one of the most popular vacation destinations,
            featuring the beaches of Kaanapali, Lahaina, Wailea and Kapalua. It
            has 33 miles of exquisite public beaches. Some of these beaches even
            have jewel-toned sand. See the webcams at{' '}
            <Link href="/hawaii/maui/">
              <a>Maui Beach Cams</a>
            </Link>{' '}
            to view streaming live camera pictures of the amazing natural beauty
            found on various locations on the Island of Maui.
          </p>
        </ShowMoreText>
        <AdLeaderboard />
        <h2>
          <Link href="/hawaii/maui/">
            <a>Maui Beach Cams</a>
          </Link>
        </h2>
        <p>
          The island of Maui is one of the most popular vacation destinations,
          featuring the beaches of Kaanapali, Lahaina, Wailea and Kapalua. It
          has 33 miles of exquisite public beaches. Some of these beaches even
          have jewel-toned sand. See the webcams at{' '}
          <Link href="/hawaii/maui/">
            <a>Maui Beach Cams</a>
          </Link>{' '}
          to view streaming live camera pictures of the amazing natural beauty
          found on various locations on the Island of Maui.
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
          <Link href="/hawaii/oahu/">
            <a>Oahu Beach Cams</a>
          </Link>
        </h2>
        <p>
          The Island of Oahu is home to World-famous <em>Waikiki Beach</em> and{' '}
          <em>Honolulu</em>. It is the most visited of all the Hawaiian Islands.
          Its famed <em>North Shore</em> draws the top professional surfers in
          the world to ride its 30-foot waves. See the webcams at{' '}
          <Link href="/hawaii/oahu/">
            <a>Oahu Beach Cams</a>
          </Link>{' '}
          to view streaming live camera pictures of various hot spots on the
          island.
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
          <Link href="/hawaii/bigisland/">
            <a>Big Island Beach Cams</a>
          </Link>
        </h2>
        <p>
          The Island of Hawaii is commonly referred to as "The Big Island." It
          is almost twice as large as all of the other Hawaiian Island combined.
          It is home to some of the most luxurious resort areas including the{' '}
          Kona Coast, Waikoloa Coast and Kailua Kona. It's also the home to Kona
          gourmet coffee. See the webcams at{' '}
          <Link href="/hawaii/bigisland/">
            <a>Big Island Beach Cams</a>
          </Link>{' '}
          to view streaming live pictures of the amazing sights on the Big
          Island of Hawaii.
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
          <Link href="/hawaii/kauai">
            <a>Kauai Beach Cams</a>
          </Link>
        </h2>
        <p>
          Kauai is a lush paradise. It is known as the "Garden Isle" for its
          brilliant flowers. It is also home to the "wettest place on earth" and
          "The Grand Canyon of the Pacific." On its famed North Shore are
          Princeville, Hanalei Bay and the Na Pali Shoreline. Other top resort
          areas include Lihue and Poipu. See the webcams at
          <Link href="/hawaii/kauai/">
            <a>Kauai Beach Cams</a>
          </Link>{' '}
          to view streaming live pictures of this beautiful and lush island.
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
