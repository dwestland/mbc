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
  const camPageTargetType = 'Maine'

  const pageAreas = findAreas(data, camPageTargetType)
  const pageAreasArray = pageAreas
    ? pageAreas.map((area: { area: string }) => area.area)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Explore live Maine beach webcams showcasing scenic coastlines, harbors, and iconic lighthouses. Perfect for travel planning."
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
            Maine's coastline unveils breathtaking vistas and storied maritime
            heritage. From the rugged edges of Appledore Island to the lively
            marina at Boothbay Harbor, each spot reveals a distinct snapshot of
            life by the water. The Lobster Point Lighthouse Cam spotlights
            Ogunquit's craggy cliffs, while the Union Bluff Cam frames York's
            windswept Short Sands Beach. For a tranquil harbor scene, the
            Rockport Harbor Webcam enchants. Watch boats sway gently at
            Moosehead Lake or explore the expansive sands of Higgins Beach in
            Scarborough. These webcams capture Maine's coastal allure, perfect
            for sparking your next journey.
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
            Maine's coastline brims with natural splendor and coastal allure.
            Along its shores, each webcam reveals a distinct view of this
            maritime wonder. Appledore Island's jagged cliffs jut into the
            ocean, showcasing the raw beauty of its untamed rocks. Boothbay
            Harbor's marina buzzes with activity, where boats glide and local
            shops beckon from the docks. This vibrant waterfront scene thrives,
            offering a lively glimpse into the heart of the coastal town.
          </p>
          <p>
            In Ogunquit, the Lobster Point Lighthouse Cam spotlights rugged
            cliffs along Marginal Way. The path snakes along the shore, with
            views stretching toward Perkins Cove. The lighthouse perches like a
            sentinel, casting light on Maine's seafaring past. York's Union
            Bluff Cam embraces Short Sands Beach, a secluded slice of shoreline
            nestled by craggy cliffs. With waves kissing the sand and grassy
            spaces unfolding nearby, it's a haven for beach lovers.
          </p>
          <p>
            The Rockport Harbor Webcam immerses you in serene harbor life. Boats
            sway gently as fishermen navigate these waters, adding to the charm
            of this working harbor. Moosehead Lake offers a contrast, with
            mountain views framing the docks. The Moosehead Lake Cam captures
            the stillness of boats resting, a peaceful refuge from the hustle of
            daily life.
          </p>
          <p>
            Scarborough's Higgins Beach beckons surfers and beachcombers alike.
            Its expansive, sandy shores stretch far, inviting exploration. The
            Higgins Beach Cam perfectly encapsulates the energy of this beloved
            spot. Each webcam transports you to Maine's coastal treasures,
            unveiling its hidden gems and offering the perfect inspiration for
            your next adventure.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Walk along Ogunquit Beach and Marginal Way.</li>
              <li>Explore the rocky shores of Acadia National Park.</li>
              <li>Swim at Higgins Beach in Scarborough.</li>
              <li>Watch boats at Boothbay Harbor Marina.</li>
              <li>Visit Nubble Lighthouse in York.</li>
              <li>Kayak on Moosehead Lake.</li>
              <li>Fish off the pier at Old Orchard Beach.</li>
              <li>Surf the waves at Long Sands Beach.</li>
              <li>Take a ferry to the islands of Casco Bay.</li>
              <li>Explore tidal pools at Popham Beach State Park.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitmaine.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Maine
                </a>{' '}
                - Discover attractions, lodging, and outdoor activities.
              </li>
              <li>
                <a
                  href="https://www.mainelighthousemuseum.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maine Lighthouse Museum
                </a>{' '}
                - Learn about Maine's historic lighthouses.
              </li>
              <li>
                <a
                  href="https://www.maine.gov/dacf/parks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maine State Parks
                </a>{' '}
                - Explore parks, trails, and outdoor recreation options.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/43.2437,-70.5899"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ogunquit Weather
                </a>{' '}
                - Check current weather in Ogunquit, Maine.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/43.5603,-70.2797"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Higgins Beach Weather
                </a>{' '}
                - Get the latest weather for Higgins Beach.
              </li>
              <li>
                <a
                  href="https://www.boothbayharbor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Boothbay Harbor Region
                </a>{' '}
                - Find lodging, events, and things to do in Boothbay.
              </li>
              <li>
                <a
                  href="https://www.yorkparksandrec.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  York Parks and Recreation
                </a>{' '}
                - Plan activities and events in York, Maine.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/45.459,-69.5925"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Moosehead Lake Weather
                </a>{' '}
                - View the current forecast for Moosehead Lake.
              </li>
              <li>
                <a
                  href="https://www.exploremaine.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Maine
                </a>{' '}
                - Discover scenic byways, hiking, and local history.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/43.8446,-69.6259"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Boothbay Harbor Weather
                </a>{' '}
                - Check the weather for Boothbay Harbor.
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
    cams = cams.filter((cam) => cam.state === 'Maine')

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
