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
  // Ensure cams and cams.cams are defined
  if (!cams || !cams.cams || cams.cams.length === 0) {
    return (
      <Layout
        documentTitle="Beach Cams in Miami and South Beach Florida"
        documentDescription="Best live web cams and surf cams at Miami Beach and South Beach in Florida."
      >
        <div className="layout">
          <h1>No cams available</h1>
        </div>
      </Layout>
    )
  }

  // Next modal SSR
  const CamsMap: any = dynamic(() => import('@/components/CamsMap'), {
    ssr: false,
  })
  const floridaCams: any = cams

  const country = 'USA'
  const state = 'Florida'
  const area = 'Panhandle'

  const countryObject = data.countries.filter((ele) => ele.country === country)
  if (countryObject.length === 0) {
    // Handle the case where the country is not found
    return null
  }

  const stateObject = countryObject[0].states.find(
    (ele) => ele.state === state
  ) || { state: '', areas: [] }

  if (!stateObject.areas) {
    stateObject.areas = []
  }

  if (!stateObject) {
    // Handle the case where the state is not found
    return null
  }

  const areaObject = stateObject.areas.filter((ele) => ele.area === area)
  if (areaObject.length === 0) {
    // Handle the case where the area is not found
    return null
  }

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
        id: cam.id,
        imageName: cam.imageName,
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
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="... "
        >
          <p>
            Immerse yourself in the captivating beauty of the Florida Panhandle
            through live webcams that showcase its coastal treasures. From the
            emerald waters of Destin to the tranquil shores of Pensacola, this
            region entices every traveler. Pensacola Beach mesmerizes with its
            historic Gulf Pier and dynamic surf culture. Destin, celebrated as
            the “World's Luckiest Fishing Village,” gleams with sugar-white
            sands and a bustling harbor. Panama City Beach sparkles with its
            colorful atmosphere and breathtaking views of the Gulf. Whether
            planning your next escape or simply daydreaming, these webcams bring
            the Florida Panhandle's allure directly to your screen.
          </p>
        </ShowMoreText>
        {camSections}
        {moreCams()}
        <div className="panel">
          <ShowMoreText
            lines={4}
            more="show more"
            less="show less"
            anchorClass="anchorClass"
            truncatedEndingComponent="... "
          >
            <p>
              The Florida Panhandle unfolds a rich tapestry of experiences. Each
              coastal gem along its shoreline unveils something unique.
            </p>

            <p>
              Pensacola Beach towers as a beacon of history and natural beauty.
              The Gulf Pier juts into the water, urging visitors to linger and
              absorb the scenery. The vibrant surf culture, with its rolling
              waves and briny air, enchants those craving adventure. Whether
              you're casting a line from the pier or witnessing the sun sink
              below the horizon, Pensacola Beach embodies the spirit of coastal
              life.
            </p>

            <p>
              Destin, often dubbed the "World's Luckiest Fishing Village,"
              beckons travelers with its immaculate beaches and lively harbor.
              The sand here is soft and white, contrasting with the emerald
              waters that caress the shore. Destin's harbor hums with activity,
              from fishing charters setting sail at dawn to restaurants serving
              the freshest catch. The energy here pulsates, making Destin a
              must-see for anyone drawn to the ocean's embrace.
            </p>

            <p>
              Panama City Beach pulses with a vibrant spirit. Its shores serve
              as a playground for families, with ample space to craft
              sandcastles or wade in the gentle surf. The vistas of the Gulf are
              nothing short of breathtaking, stretching out in an endless
              expanse of blue. Wander along the shore, explore local boutiques,
              or dive into the lively nightlife that defines Panama City Beach.
            </p>

            <p>
              Whether you're captivated by the historic allure of Pensacola, the
              bustling harbor of Destin, or the sun-drenched shores of Panama
              City Beach, the Florida Panhandle entices everyone. These live
              webcams offer a portal into this stunning region, capturing its
              beauty and vitality in real-time. Let these views kindle your next
              journey.
            </p>
          </ShowMoreText>
        </div>
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in the Panhandle</h3>
            <ol>
              <li>
                <p>Ascend Pensacola Lighthouse for sweeping views.</p>
              </li>
              <li>
                <p>
                  Bask at Gulf Islands National Seashore on untouched beaches.
                </p>
              </li>
              <li>
                <p>Cast at Destin Harbor with local charters.</p>
              </li>
              <li>
                <p>Dive at Navarre Beach to unearth underwater marvels.</p>
              </li>
              <li>
                <p>
                  Wander through Historic Fort Pickens and traverse Civil War
                  history.
                </p>
              </li>
              <li>
                <p>Feast at Palafox Market on fresh local seafood.</p>
              </li>
              <li>
                <p>
                  Take a Dolphin Tour and witness playful dolphins up close.
                </p>
              </li>
              <li>
                <p>Drive at Sandestin on world-class courses.</p>
              </li>
              <li>
                <p>Paddle in Choctawhatchee Bay through tranquil waters.</p>
              </li>
              <li>
                <p>Saunter Pier Park to browse and soak in the coastal vibe.</p>
              </li>
            </ol>
          </div>
          <div className="info">
            <h3>Panhandle Links and Local Information</h3>
            <ul>
              <li>
                <p>
                  <a
                    href="https://www.visitflorida.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VisitFlorida.com
                  </a>{' '}
                  - Unearth the official travel guide with insights on top
                  attractions, accommodations, and events across Florida.
                </p>
              </li>

              <li>
                <p>
                  <a
                    href="https://www.floridastateparks.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FloridaStateParks.org
                  </a>{' '}
                  - Plunge into state parks, including activities, trails, and
                  visitor services.
                </p>
              </li>

              <li>
                <p>
                  <a
                    href="https://www.emeraldcoastfl.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EmeraldCoastFL.com
                  </a>{' '}
                  - Unveil the Emerald Coast's beaches, dining, and local
                  events.
                </p>
              </li>

              <li>
                <p>
                  <a
                    href="https://www.pensacolabeach.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PensacolaBeach.com
                  </a>{' '}
                  - Dive into beach activities, lodging, and dining options in
                  Pensacola.
                </p>
              </li>

              <li>
                <p>
                  <a
                    href="https://www.destinchamber.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DestinChamber.com
                  </a>{' '}
                  - Traverse business directories and visitor information for
                  Destin, including dining, shopping, and recreational
                  activities.
                </p>
              </li>

              <li>
                <p>
                  <a
                    href="https://www.visitpanamacitybeach.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PanamaCityBeach.com
                  </a>{' '}
                  - Shape your visit with detailed guides to accommodations,
                  attractions, and local happenings.
                </p>
              </li>

              <li>
                <p>
                  <a
                    href="https://www.30a.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    30A.com
                  </a>{' '}
                  - Immerse in the lifestyle and events along Florida's scenic
                  Highway 30A, with local tips and beach guides.
                </p>
              </li>

              <li>
                <p>
                  <a
                    href="https://weather.com/weather/today/l/30.3935,-86.4958"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Weather.com
                  </a>{' '}
                  - Check the latest weather conditions for your trip.
                </p>
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
