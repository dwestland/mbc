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
  const camPageTargetType = 'Alabama'

  const pageAreas = findAreas(data, camPageTargetType)
  const pageAreasArray = pageAreas
    ? pageAreas.map((area: { area: string }) => area.area)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Explore live Alabama beach webcams, view Gulf Shores, Orange Beach, Mobile Bay, and plan your coastal adventure."
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
            Alabama's coastlines unveil breathtaking vistas and exciting
            activities. Wander Gulf Shores, where expansive white sands meet the
            glistening Gulf. The Beach Club Webcam frames this gem, ideal for
            beachcombing and casting lines near the artificial reefs. Orange
            Beach dazzles from Turquoise Place, offering a glimpse of its
            tranquil shores. In Daphne, the Mobile Bay Delta Cam captures the
            waterways where rivers converge, perfect for paddling. History
            lovers can marvel at the USS Alabama Cam in Mobile, with views from
            this National Historic Landmark. Mobile Bay's sunsets blaze
            brilliantly from the Fairhope Pier, a sight not to be missed.
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
            Alabama's Gulf Coast beckons with its distinctive allure. Gulf
            Shores unfurls with stretches of powdery white sand and pristine
            Gulf waters. The Beach Club Webcam frames this coastal haven, where
            beachcombers meander along the shore. Anglers dot the waters,
            casting lines near the man-made reefs. The Gulf teems with marine
            life, making it a hotspot for both fishing and unwinding.
          </p>
          <p>
            Orange Beach reveals another slice of coastal wonder. The Turquoise
            Place webcams unveil sweeping views of the shoreline. From its
            towering heights, the gentle Gulf waters kiss the sandy shore.
            Orange Beach draws visitors seeking both exhilaration and
            tranquility. Nearby trails and fishing spots add a dash of adventure
            to this serene locale.
          </p>
          <p>
            The Mobile Bay Delta uncovers a wilder side of Alabama's waterways.
            This delta, where the Mobile and Tensaw Rivers entwine, offers a
            vivid display of nature. From the webcam in Daphne, watch the rivers
            carve through verdant wetlands. It's an inviting spot for paddling
            or navigating by boat. The waters pulse with wildlife, offering a
            window into Alabama's untamed beauty.
          </p>
          <p>
            In Mobile, the USS Alabama Battleship Camera brings history into
            sharp focus. The camera from this National Historic Landmark, where
            the battleship stands sentinel in Battleship Memorial Park. It's
            surrounded by vintage aircraft and vessels, anchoring Mobile Bay's
            historical significance. It's a must for anyone exploring the area.
          </p>
          <p>
            Fairhope Pier provides a more tranquil glimpse of Alabama's coast.
            The Fairhope Piercam captures the sun sinking below the horizon,
            painting Mobile Bay in fiery hues. The pier lures strollers,
            fishermen, and those seeking a quiet moment by the water. It's a
            gateway to the peaceful beauty of Alabama's bays.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Walk along Gulf Shores Beach.</li>
              <li>Swim in the clear waters of Orange Beach.</li>
              <li>Explore the Mobile Bay Delta by kayak.</li>
              <li>Fish off Fairhope Pier at sunset.</li>
              <li>Tour the USS Alabama Battleship Memorial Park.</li>
              <li>Play a round of golf at Kiva Dunes Resort.</li>
              <li>Hike the trails at Gulf State Park.</li>
              <li>Relax on the sands of Dauphin Island Beach.</li>
              <li>Watch dolphins from a boat tour in Mobile Bay.</li>
              <li>Visit the Sea N Suds Beachfront Restaurant.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.alabama.travel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alabama Travel
                </a>{' '}
                - Find travel guides, events, and vacation ideas for Alabama.
              </li>
              <li>
                <a
                  href="https://www.orangebeachal.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Orange Beach City Guide
                </a>{' '}
                - Discover local events, beach info, and city services for
                Orange Beach.
              </li>
              <li>
                <a
                  href="https://www.gulfshores.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gulf Shores and Orange Beach Tourism
                </a>{' '}
                - Plan your beach vacation with lodging, dining, and activity
                options.
              </li>
              <li>
                <a
                  href="https://weather.com/weather/today/l/30.2481,-87.6808"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gulf Shores Weather
                </a>{' '}
                - Get the latest weather updates for Gulf Shores and the Alabama
                coast.
              </li>
              <li>
                <a
                  href="https://www.mobile.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Mobile
                </a>{' '}
                - Learn about Mobile's history, attractions, and upcoming
                events.
              </li>
              <li>
                <a
                  href="https://www.alapark.com/parks/gulf-state-park"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gulf State Park
                </a>{' '}
                - Explore camping, hiking, and outdoor activities at Gulf State
                Park.
              </li>
              <li>
                <a
                  href="https://www.acpinfo.com/the-first-time-visitors-guide-to-dauphin-island/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dauphin Island Guide
                </a>{' '}
                - Find beach info and things to do on Dauphin Island.
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
    cams = cams.filter((cam) => cam.state === 'Alabama')

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
