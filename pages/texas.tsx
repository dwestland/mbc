import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import AdLarge from '@/components/AdLarge'
import CamsPageMap from '@/components/CamsPageMap'
import RenderAreaSections from '@/components/RenderAreaSections'
import data from '@/data/camLocationAreas'
import { findAreas } from '@/utils/common'
import * as types from '@/utils/types'
import ErrorLoadingWebcams from '@/components/ErrorLoadingWebcams'

const StateAreasPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'Texas'

  const pageAreas = findAreas(data, camPageTargetType)
  const pageAreasArray = pageAreas
    ? pageAreas.map((area: { area: string }) => area.area)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Explore live Texas beach webcams from Galveston, South Padre Island, and Rockport for travel planning or entertainment."
    >
      <div className="layout">
        <h1>{camPageTargetType} Webcams</h1>
        <h3 style={{ marginTop: '0' }}>
          Featuring beach webcams from{' '}
          {pageAreasArray.slice(0, -1).join(', ') +
            (pageAreasArray.length > 1
              ? ` and ${pageAreasArray[pageAreasArray.length - 1]}`
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
            Immerse yourself in Texas' captivating coastlines through these live
            webcams. Galveston's sandy shores beckon, while South Padre Island's
            vibrant beaches pulse with energy. Watch the Pleasure Pier jut into
            the Gulf, or catch the Bayou Vista cam as it showcases blazing
            sunsets. On South Padre Island, surfers carve the waves at Isla
            Blanca Beach, and the Queen Isabella Causeway hums with life. Savor
            the serene vistas of Rockport Beach, or witness the dynamic scenes
            unfolding at La Copa Inn. Whether you're plotting your next
            adventure or soaking in the sights, Texas' waterways await your
            exploration!
          </p>
        </ShowMoreText>

        <RenderAreaSections pageAreas={pageAreas ?? []} cams={cams} />

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
            Texas' coastlines promise an extraordinary retreat. From the lively
            shores of Galveston to the serene beaches of South Padre Island,
            each spot uncovers its own allure. In Galveston, the Pleasure Pier
            thrusts into the Gulf, urging visitors to feel the pulse of the
            coast. The live webcam captures the pier's bustling scene, with
            waves crashing and rides whirling along the shore. Down the coast,
            the Bayou Vista cam reveals a calmer vista, where trains thunder
            over bridges and sunsets blaze across the horizon.
          </p>
          <p>
            South Padre Island, a paradise for surfers and beach enthusiasts,
            unfolds endless discoveries. The Isla Blanca Beach cam offers a
            front-row seat to the rolling surf. Watch as surfers carve the waves
            and beachgoers wander the sands. The Queen Isabella Causeway cam
            encapsulates the island's vibrancy, capturing both the quiet beauty
            of the coastline and the steady flow of travelers crossing the
            bridge.
          </p>
          <p>
            At Rockport Beach, gentle waters and powdery sands greet visitors.
            This webcam frames the pier, a perfect spot for casting a line or
            taking a peaceful stroll. Further south, the La Copa Inn cam
            immerses viewers in the lively rhythm of South Padre Island. The
            beach hums with activity, from sun-worshippers basking by the waves
            to the nightlife that ignites the evening.
          </p>
          <p>
            Texas' beaches do more than showcase landscapes—they inspire
            adventure and exploration. Whether you're mapping out your next
            journey or simply indulging in a virtual escape, these webcams
            unveil the heartbeat of the Texas coast. Bask in the beauty, dive
            into the excitement, and let the ocean pull you toward your perfect
            getaway.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Relax on the shores of South Padre Island.</li>
              <li>Explore Pleasure Pier in Galveston.</li>
              <li>Fish from the Rockport Beach pier.</li>
              <li>Take a dolphin tour in Corpus Christi.</li>
              <li>Surf the waves at Isla Blanca Beach.</li>
              <li>Stroll the Seawall Boulevard in Galveston.</li>
              <li>Paddleboard along the Laguna Madre.</li>
              <li>Visit the Texas State Aquarium in Corpus Christi.</li>
              <li>Kayak through the Galveston Bay estuaries.</li>
              <li>Watch the sunset at Bayou Vista.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.galveston.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Galveston.com
                </a>{' '}
                - Discover events, attractions, and local services in Galveston.
              </li>
              <li>
                <a
                  href="https://www.sopadre.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SoPadre.com
                </a>{' '}
                - Plan your visit to South Padre Island with guides, tips, and
                activities.
              </li>
              <li>
                <a
                  href="https://rockport-fulton.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rockport-Fulton Chamber of Commerce
                </a>{' '}
                - Find things to do, places to stay, and events in Rockport.
              </li>
              <li>
                <a
                  href="https://www.visitcorpuschristi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Corpus Christi
                </a>{' '}
                - Explore activities, dining, and accommodations in Corpus
                Christi.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/29.5487,-95.0909"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nassau Bay Weather
                </a>{' '}
                - Get the latest weather updates for Nassau Bay, Texas.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/28.0297,-97.0408"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rockport Beach Weather
                </a>{' '}
                - Stay informed on the current weather conditions at Rockport
                Beach.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/29.2924,-94.7865"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Galveston Beach Weather
                </a>{' '}
                - Check the forecast for Galveston Beach before your trip.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/26.086,-97.1621"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  South Padre Island Weather
                </a>{' '}
                - Stay updated on the conditions at South Padre Island.
              </li>
              <li>
                <a
                  href="https://www.nps.gov/pais/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Padre Island National Seashore
                </a>{' '}
                - Explore the protected coastline, wildlife, and visitor
                activities.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="legend">
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
    cams = cams.filter((cam) => cam.state === 'Texas')

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

export default StateAreasPage
