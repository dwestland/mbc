import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
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
  const camPageTargetType = 'South Carolina'

  const pageAreas = findAreas(data, camPageTargetType)
  const pageAreasArray = pageAreas
    ? pageAreas.map((area: { area: string }) => area.area)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Webcams - MyBeachCams`}
      documentDescription={`Explore beach webcams from ${camPageTargetType} including ${
        pageAreasArray.length === 1
          ? pageAreasArray[0]
          : `${pageAreasArray.slice(0, -1).join(', ')} and ${
              pageAreasArray[pageAreasArray.length - 1]
            }.`
      }`}
    >
      <div className="layout">
        <h1>{camPageTargetType} Webcams</h1>
        <h3 style={{ marginTop: '0' }}>
          Explore beach webcams from {camPageTargetType} including{' '}
          {pageAreasArray.length === 1
            ? pageAreasArray[0]
            : `${pageAreasArray.slice(0, -1).join(', ')} and ${
                pageAreasArray[pageAreasArray.length - 1]
              }`}
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
            South Carolina's coast beckons with vibrant beach towns and serene
            seaside escapes. Myrtle Beach dazzles, with webcams unveiling scenes
            from resorts like Breakers and Ocean Creek. Visitors savor the
            Atlantic's crashing waves, soft sands, and bustling boardwalks. At
            Surfside Beach, the 800-foot pier thrusts into the ocean, offering
            stunning views and engaging activities. Journey to Charleston for a
            glimpse of the historic harbor and the Cooper River's winding
            allure. Pawleys Island unveils a tranquil retreat, where dunes roll
            gently along the shoreline. These webcams deliver a live window into
            South Carolina's most captivating coastal spots.
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
            South Carolina's coastline brims with diverse beach experiences.
            Myrtle Beach, famed for its vibrant energy, sprawls along the Grand
            Strand's 60-mile stretch. The webcams here unveil sweeping vistas of
            the Atlantic from places like Breakers Resort and Cherry Grove
            Beach. At Cherry Grove, beach houses cling to the shore, offering a
            window into coastal living. The Myrtle Beach boardwalk, streamed
            live, pulses with life. Volleyball courts and piers pierce the
            horizon, framed by the endless ocean.
          </p>
          <p>
            Farther south, Surfside Beach delivers a more tranquil experience.
            The Garden City Realty webcam reveals a picturesque view from the
            River City Café. The 800-foot pier thrusts into the ocean, a hub for
            fishing and leisurely walks. Surfside's gentle waters and immaculate
            sands entice families looking for relaxation. Not far off, Hilton
            Head's resort town unfurls some of South Carolina's most stunning
            coastal views. The Hilton Head Beach Club cam offers a pristine look
            at waves rolling across sandy shores.
          </p>
          <p>
            In Charleston, the storied harbor lures visitors with its deep
            maritime history. The Charleston Harbor webcam captures the placid
            waters of the Cooper River and nearby historic landmarks. The river
            winds through the city, offering serene views of the waterfront's
            timeless charm.
          </p>
          <p>
            Pawleys Island, tucked farther south, evokes calm and solitude. Its
            webcam unveils rolling dunes and untouched beaches. This barrier
            island calls out to those in search of quiet beauty. South
            Carolina's coast brims with hidden gems, and these webcams open a
            live window into the state's coastal wonders, revealing the varied
            and rich landscape along its shores.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Walk along the Myrtle Beach Boardwalk.</li>
              <li>Explore the historic Charleston Harbor.</li>
              <li>Swim at Surfside Beach's calm shores.</li>
              <li>Fish off the Garden City Pier.</li>
              <li>Paddleboard at Hilton Head Island.</li>
              <li>Relax on the sands of Pawleys Island.</li>
              <li>Visit the Myrtle Beach SkyWheel.</li>
              <li>Kayak through the Waccamaw River.</li>
              <li>Stroll the beaches at Cherry Grove.</li>
              <li>Tour the lighthouse at Hunting Island.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitmyrtlebeach.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Myrtle Beach
                </a>{' '}
                - Discover Myrtle Beach attractions, hotels, and events.
              </li>
              <li>
                <a
                  href="https://www.charlestoncvb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Charleston Visitors Bureau
                </a>{' '}
                - Plan your trip to Charleston, explore tours, dining, and
                history.
              </li>
              <li>
                <a
                  href="https://www.hiltonheadisland.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hilton Head Island
                </a>{' '}
                - Find information on resorts, activities, and island events.
              </li>
              <li>
                <a
                  href="https://www.southcarolinaparks.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  South Carolina State Parks
                </a>{' '}
                - Explore parks, campsites, and hiking in South Carolina.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/33.6891,-78.8867"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Myrtle Beach Weather
                </a>{' '}
                - Check current weather conditions for Myrtle Beach.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/32.7765,-79.9311"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Charleston Weather
                </a>{' '}
                - View the latest weather updates for Charleston.
              </li>
              <li>
                <a
                  href="https://www.pawleysisland.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pawleys Island
                </a>{' '}
                - Learn about Pawleys Island beaches, lodging, and dining.
              </li>
              <li>
                <a
                  href="https://www.scetv.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  South Carolina ETV
                </a>{' '}
                - Watch videos and read stories about South Carolina culture.
              </li>
              <li>
                <a
                  href="https://www.gardencityrealty.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Garden City Realty
                </a>{' '}
                - Explore vacation rentals and properties at Garden City Beach.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="legend">
        <span className="green-dot">&nbsp;</span>MyBeachCams hosted page
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
    cams = cams.filter((cam) => cam.state === 'South Carolina')

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
