import React from 'react'
import { InferGetStaticPropsType } from 'next'
import ShowMoreText from 'react-show-more-text'
import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
import CamCard from '@/components/CamCard'
import data from '@/data/camLocationAreas'
import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'
import { getSixDigitRandom } from '@/utils/common'
import MoreFloridaCams from '@/components/MoreFloridaCams'
import Link from 'next/link'
import * as types from '@/utils/types'

const PanhandlePage = ({
  cams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  // Next modal SSR
  const CamsMap: any = dynamic(() => import('@/components/CamsMap'), {
    ssr: false,
  })
  const floridaCams: any = cams

  const country = 'USA'
  const state = 'Florida'
  const area = 'Panhandle'
  const countryObject = data.countries.filter((ele) => ele.country === country)
  const stateObject = countryObject[0].states.filter(
    (ele) => ele.state === state
  )
  const areaObject = stateObject[0].areas.filter((ele) => ele.area === area)

  const subareaObjects = areaObject[0].subareas
  const subareaArray = subareaObjects.map((ele) => ele.subarea)

  // Display cams WITH subareas
  const camSections = subareaArray.map((subarea) => {
    // check if subarea cams exist
    const camCount = cams.cams
      .map((cam: types.Cams) => cam.subarea)
      .filter((ele) => ele === subarea).length
    if (camCount === 0) {
      return null
    }

    return (
      <div key={getSixDigitRandom()}>
        <AdLeaderboard />
        <h2>{subarea} Webcams</h2>
        <div key={subarea} className="cam-container">
          {cams.cams.map((cam: types.Cams) => {
            if (cam.subarea === subarea) {
              return <CamCard key={cam.id} cam={cam} />
            }
            return null
          })}
        </div>
      </div>
    )
  })

  // Display cams WITHOUT subareas
  const moreCams = () => {
    const subareaCams = cams.cams.filter(
      (cam: types.Cams) => cam.area === area && cam.subarea === ''
    )

    if (subareaCams.length === 0) {
      return null
    }

    const result = subareaCams.map((cam: types.Cams) => (
      <CamCard key={cam.id} cam={cam} />
    ))

    return (
      <>
        <AdLeaderboard />
        <h2>{area} Webcams</h2>
        <div className="cam-container">{result}</div>
      </>
    )
  }

  // Create vectors for map
  const vectors = []
  cams.cams.map((cam: types.Cams) => {
    if (cam.area === area && cam.lat !== null && cam.lng !== null) {
      const vector = {
        name: cam.title,
        lat: cam.lat,
        lng: cam.lng,
      }
      vectors.push(vector)
    }
    return null
  })

  return (
    <Layout
      documentTitle="Beach Cams - Florida Panhandle - Panama City, Pensacola and Destin Beach"
      documentDescription="Web Cams on the Florida Panhandle with surf cams at Panama City, Pensacola and Destin Beach."
    >
      <div className="layout">
        <h1>Florida Panhandle Webcams</h1>
        <div className="content-and-ad">
          <div className="content">
            <CamsMap vectors={vectors} />
          </div>
          <div className="ad">
            <AdLarge />
          </div>
        </div>
        <p>paragraph 1</p>
        {camSections}
        {moreCams()}
        <div className="panel">
          <ShowMoreText
            lines={3}
            more="show more"
            less="show less"
            anchorClass="anchorClass"
            truncatedEndingComponent="... "
          >
            <p>paragraph 2</p>
          </ShowMoreText>
        </div>
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in the Florida Panhandle</h3>
            <ol>
              <li>
                {' '}
                Beaches: The Florida Panhandle has beautiful beaches, including
                Panama City Beach and Destin. Great for swimming, sunbathing,
                and water sports.
              </li>
              <li>
                State parks: The Panhandle offers state parks for hiking,
                biking, and nature watching. Topsail Hill Preserve State Park
                and Grayton Beach State Park are popular.
              </li>
              <li>
                Fishing: The Panhandle has a variety of fish species and offers
                fishing charters for both novice and experienced anglers.
              </li>
              <li>
                Dolphin watching: The Gulf of Mexico has bottlenose dolphins,
                and boat tours allow visitors to see them up close.
              </li>
              <li>
                Museums and historic sites: The Panhandle has museums and
                historic sites exploring the area's history and culture, like
                the Pensacola Lighthouse and Museum and the Indian Temple Mound
                Museum.
              </li>
              <li>
                Outdoor adventures: The Panhandle has nature preserve and state
                forests for activities like hiking, biking, and birdwatching.
                Blackwater River State Forest and Choctawhatchee Bay are
                popular.
              </li>
              <li>
                Shopping and dining: The Panhandle has shopping and dining
                options, including local artisan markets and famous seafood.
              </li>
              <li>
                Wineries: The Panhandle has wineries offering tastings and
                tours, like Chautauqua Winery and Grayton Beer Company.
              </li>
              <li>
                Boat tours: The Panhandle's Forgotten Coast is only accessible
                by boat and offers tours.
              </li>
              <li>
                Farmers markets: The Panhandle has farmers markets featuring
                locally grown produce and handmade crafts.
              </li>
            </ol>
          </div>
          <div className="info">
            <h3>Florida Panhandle Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitflorida.com/places-to-go/northwest/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Visit Florida
                </a>
                &nbsp; Official tourism website for the state of Florida
              </li>
              <li>
                <a
                  href="https://www.floridastateparks.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Florida State Parks
                </a>
                &nbsp; Information on state parks in the Florida Panhandle
              </li>
              <li>
                <a
                  href="https://www.floridasgreatnorthwest.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Florida's Great Northwest
                </a>
                &nbsp; Official tourism website for the Panhandle region
              </li>
              <li>
                <a
                  href="https://www.floridapanhandlebeaches.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Florida Panhandle Beaches
                </a>
                &nbsp; Information on the beaches and coastal communities in the
                Panhandle
              </li>
              <li>
                <a
                  href="https://www.floridapanhandlebirdingtrail.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Florida Panhandle Birding and Wildlife Trail
                </a>
                &nbsp; Website on the Panhandle Birding and Wildlife Trail
              </li>
              <li>
                <a
                  href="https://www.floridascenichighway.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Florida Panhandle Scenic Highway
                </a>
                &nbsp; Florida Panhandle 450-mile Scenic Highway
              </li>
              <li>
                <a
                  href="https://www.floridapanhandle.com/shipwreck-trail/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Florida Panhandle Shipwreck Trail
                </a>
                &nbsp; Provides information on the Panhandle Shipwreck Trail,
                with shipwrecks and underwater artifacts
              </li>
              <li>
                <a
                  href="https://www.panhandlepioneer.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Panhandle Pioneer Settlement
                </a>
                &nbsp; The Pioneer Settlement is a living history museum
              </li>
              <li>
                <a
                  href="https://www.panhandlebutterflyhouse.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Panhandle Butterfly House
                </a>
                &nbsp; A nature center for butterflies
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <h2>
        <Link href="/florida/">More Florida Beach Cams</Link>
      </h2>
      <MoreFloridaCams cams={floridaCams} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/florida`)
  const cams: types.CamPageProps = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default PanhandlePage
