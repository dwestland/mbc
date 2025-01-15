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
  const camPageTargetType = 'North Carolina'

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
        <h3 className="cam-page-subheading">
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
            North Carolina's coast beckons with its rich experiences, from the
            rugged allure of the Outer Banks to Wilmington's dynamic shores. The
            webcams immerse you in the region's coastal splendor. Witness the
            Atlantic crash at Bald Head Island or peer into the scenes at
            Johnnie Mercers Fishing Pier. In the Outer Banks, marvel at
            Corolla's untamed beaches and wild horses. Explore history at Kill
            Devil Hills, where the Wright brothers soared. Ocean Crest Pier on
            Oak Island invites anglers to cast a line. Further, Ocean Isle Beach
            and Sunset Beach Pier unveil their expansive beauty. These webcams
            capture North Carolina's coastal essence.
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
            North Carolina's coastline mesmerizes with its boundless allure.
            From the wind-sculpted dunes of the Outer Banks to the tranquil
            shores of Wilmington, each spot unveils a unique experience. On Bald
            Head Island, perched at the southern tip, the Atlantic unfurls
            before you. The beach sprawls endlessly, inviting you to witness the
            tides heave and recede or trek along the island's wild trails.
            Wilmington beckons with Johnnie Mercers Fishing Pier. The live feed
            immerses you in the scene, showing anglers in their element and the
            ocean's ever-moving pulse.
          </p>
          <p>
            In the Outer Banks, Corolla captivates with its untamed beaches and
            wild horses. These majestic creatures roam the coastline, adding a
            sense of raw beauty to this stretch of the shore. The webcam there
            showcases the rhythm of life by the sea, with waves pounding and
            dunes constantly shifting. Nearby, Kill Devil Hills enshrines the
            birthplace of flight. Here, the Wright brothers launched their first
            plane, and the live stream reveals the historic beach where aviation
            took wing.
          </p>
          <p>
            On Oak Island, Ocean Crest Pier lures fishing enthusiasts. Without
            needing a license, visitors can drop a line, making it a beloved
            spot for families. Watch the lively pier scene and imagine your own
            fishing adventure. Ocean Isle Beach, with its calm and sweeping
            shoreline, promises a peaceful escape. Through the webcam, the
            expansive sands unfurl, ideal for those craving a serene beach day.
          </p>
          <p>
            Lastly, Sunset Beach Pier thrusts deep into the Atlantic. The view
            here unveils sweeping ocean vistas, perfect for those who seek
            refuge in the vastness of the sea. These webcams bring North
            Carolina's coastal wonders to life, from bustling piers to quiet,
            windswept beaches.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Stroll along the shores of Wrightsville Beach.</li>
              <li>Explore the wild dunes at Jockey's Ridge State Park.</li>
              <li>Cast a line from Johnnie Mercers Fishing Pier.</li>
              <li>Paddle through the waters of Lake Gaston.</li>
              <li>Watch wild horses in Corolla from the beach.</li>
              <li>Walk the boardwalk at Carolina Beach State Park.</li>
              <li>Swim or surf at Kill Devil Hills.</li>
              <li>Kayak the marshes at Bald Head Island.</li>
              <li>Visit the historic Bodie Island Lighthouse.</li>
              <li>Take a boat tour on the Intracoastal Waterway.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitnc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit North Carolina
                </a>{' '}
                - Discover attractions, events, and travel tips for North
                Carolina.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/36.3719,-75.8228"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Weather in Corolla
                </a>{' '}
                - Get live weather updates for Corolla and plan your beach day.
              </li>
              <li>
                <a
                  href="https://www.outerbanks.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Outer Banks Visitors Guide
                </a>{' '}
                - Explore things to do, dining, and lodging in the Outer Banks.
              </li>
              <li>
                <a
                  href="https://www.ncparks.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  North Carolina State Parks
                </a>{' '}
                - Find parks, hiking trails, and outdoor activities across the
                state.
              </li>
              <li>
                <a
                  href="https://www.wilmingtonandbeaches.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wilmington and Beaches
                </a>{' '}
                - Learn about Wilmington's beaches, local events, and dining
                spots.
              </li>
              <li>
                <a
                  href="https://www.ncdot.gov/travel-maps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  North Carolina Travel Maps
                </a>{' '}
                - View maps, traffic updates, and plan your routes.
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
    cams = cams.filter((cam) => cam.state === 'North Carolina')

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
