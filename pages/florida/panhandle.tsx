import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import AdLarge from '@/components/AdLarge'
import CamsPageMap from '@/components/CamsPageMap'
import RenderSubareaSections from '@/components/RenderSubareaSections'
import data from '@/data/camLocationAreas'
import { findSubareas } from '@/utils/common'
import * as types from '@/utils/types'
import ErrorLoadingWebcams from '@/components/ErrorLoadingWebcams'

const AreaSubareaPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'Panhandle'

  const pageSections = findSubareas(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((area: { subarea: string }) => area.subarea)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription={`Browse beach webcams from ${camPageTargetType}, including ${pageSectionsArray.join(
        ', '
      )}.`}
    >
      <div className="layout">
        <h1>{camPageTargetType} Beach Webcams</h1>
        <h3 style={{ marginTop: '0' }}>
          Featuring webcams from{' '}
          {pageSectionsArray.slice(0, -1).join(', ') +
            (pageSectionsArray.length > 1
              ? ` and ${pageSectionsArray[pageSectionsArray.length - 1]}`
              : '')}{' '}
        </h3>
        <div className="content-and-ad">
          <div className="content">
            <CamsPageMap cams={cams} />
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
          {/* CUSTOMIZE PAGE 3 of 5 - Add opening text ~120 words */}
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

        <RenderSubareaSections pageSections={pageSections ?? []} cams={cams} />

        <ShowMoreText
          lines={4}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          {/* CUSTOMIZE PAGE 4 of 5 - Add second text ~300 words, */}
          {/* Things to Do and Links and Info */}
          <p>
            The Florida Panhandle unfolds a rich tapestry of experiences. Each
            coastal gem along its shoreline unveils something unique.
          </p>

          <p>
            Pensacola Beach towers as a beacon of history and natural beauty.
            The Gulf Pier juts into the water, urging visitors to linger and
            absorb the scenery. The vibrant surf culture, with its rolling waves
            and briny air, enchants those craving adventure. Whether you're
            casting a line from the pier or witnessing the sun sink below the
            horizon, Pensacola Beach embodies the spirit of coastal life.
          </p>

          <p>
            Destin, often dubbed the "World's Luckiest Fishing Village," beckons
            travelers with its immaculate beaches and lively harbor. The sand
            here is soft and white, contrasting with the emerald waters that
            caress the shore. Destin's harbor hums with activity, from fishing
            charters setting sail at dawn to restaurants serving the freshest
            catch. The energy here pulsates, making Destin a must-see for anyone
            drawn to the ocean's embrace.
          </p>

          <p>
            Panama City Beach pulses with a vibrant spirit. Its shores serve as
            a playground for families, with ample space to craft sandcastles or
            wade in the gentle surf. The vistas of the Gulf are nothing short of
            breathtaking, stretching out in an endless expanse of blue. Wander
            along the shore, explore local boutiques, or dive into the lively
            nightlife that defines Panama City Beach.
          </p>

          <p>
            Whether you're captivated by the historic allure of Pensacola, the
            bustling harbor of Destin, or the sun-drenched shores of Panama City
            Beach, the Florida Panhandle entices everyone. These live webcams
            offer a portal into this stunning region, capturing its beauty and
            vitality in real-time. Let these views kindle your next journey.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Ascend Pensacola Lighthouse for sweeping views.</li>
              <li>
                Bask at Gulf Islands National Seashore on untouched beaches.
              </li>
              <li>Cast at Destin Harbor with local charters.</li>
              <li>Dive at Navarre Beach to unearth underwater marvels.</li>
              <li>
                Wander through Historic Fort Pickens and traverse Civil War
                history.
              </li>
              <li>Feast at Palafox Market on fresh local seafood.</li>
              <li>
                Take a Dolphin Tour and witness playful dolphins up close.
              </li>
              <li>Drive at Sandestin on world-class courses.</li>
              <li>Paddle in Choctawhatchee Bay through tranquil waters.</li>
              <li>Saunter Pier Park to browse and soak in the coastal vibe.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitflorida.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VisitFlorida.com
                </a>{' '}
                - Unearth the official travel guide with insights on top
                attractions, accommodations, and events across Florida.
              </li>
              <li>
                <a
                  href="https://www.floridastateparks.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FloridaStateParks.org
                </a>{' '}
                - Plunge into state parks, including activities, trails, and
                visitor services.
              </li>
              <li>
                <a
                  href="https://www.emeraldcoastfl.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EmeraldCoastFL.com
                </a>{' '}
                - Unveil the Emerald Coast's beaches, dining, and local events.
              </li>
              <li>
                <a
                  href="https://www.pensacolabeach.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PensacolaBeach.com
                </a>{' '}
                - Dive into beach activities, lodging, and dining options in
                Pensacola.
              </li>
              <li>
                <a
                  href="https://www.destinchamber.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DestinChamber.com
                </a>{' '}
                - Traverse business directories and visitor information for
                Destin, including dining, shopping, and recreational activities.
              </li>
              <li>
                <a
                  href="https://www.visitpanamacitybeach.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PanamaCityBeach.com
                </a>{' '}
                - Shape your visit with detailed guides to accommodations,
                attractions, and local happenings.
              </li>
              <li>
                <a
                  href="https://www.30a.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  30A.com
                </a>{' '}
                - Immerse in the lifestyle and events along Florida's scenic
                Highway 30A, with local tips and beach guides.
              </li>
              <li>
                <a
                  href="https://weather.com/weather/today/l/30.3935,-86.4958"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Weather.com
                </a>{' '}
                - Check the latest weather conditions for your trip.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <h2>
        <Link href="/hawaii/">More Hawaii Beach Cams</Link>
      </h2>{' '}
      <p style={{ textAlign: 'center' }}>
        <span className="green-dot">&nbsp;</span>MyBeachCam hosted page
      </p>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<
  types.CamsPageProps2
> = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams-all`)

    if (!res.ok) {
      throw new Error(`Failed to fetch, status: ${res.status}`)
    }

    let cams: types.Cams[] = await res.json()

    if (!Array.isArray(cams) || cams.length === 0) {
      throw new Error('Cams object is not valid or empty')
    }

    // CUSTOMIZE PAGE 5 of 5 - Add camPageTargetType
    cams = cams.filter((cam) => cam.area === 'Panhandle')

    return {
      props: {
        cams,
      },
    }
  } catch (error: any) {
    console.error('Error fetching cams:', error)
    return {
      props: {
        cams: [],
        error: error.message || 'An error occurred',
      },
    }
  }
}

export default AreaSubareaPage
