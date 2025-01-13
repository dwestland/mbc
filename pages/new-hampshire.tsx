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
  const camPageTargetType = 'New Hampshire'

  const pageAreas = findAreas(data, camPageTargetType)
  const pageAreasArray = pageAreas
    ? pageAreas.map((area: { area: string }) => area.area)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Explore New Hampshire's lakes, harbors, and beaches through live webcams showcasing scenic water views and travel spots."
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
            New Hampshire beckons with mesmerizing waterscapes, from its
            coastline to its lakes. The Winni Marine Cam unveils the majesty of
            Lake Winnipesaukee, ideal for gliding across on boat tours or diving
            into watersports. Witness vessels threading through Portsmouth
            Harbor on the Tugboat Cam, framed by the towering arches of the I-95
            bridge. The Hampton Beach Cam immerses you in the rhythm of waves
            crashing onto the shore of one of the state's most beloved beaches.
            Whether you're drawn to inland lakes or the seacoast, these webcams
            stream the pulse of New Hampshire's waterways, guiding your next
            escape.
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
            New Hampshire's waterways showcase unforgettable scenes, from lakes
            to the coast. Lake Winnipesaukee, the state's crown jewel, lures
            adventurers. The Winni Marine Cam reveals the lake's vast stretch,
            where boats drift, dock, or idle near Weirs Beach. The lake entices
            visitors to paddle, sail, and jet across its sparkling waters. For
            those seeking calm, the shores offer a retreat with panoramic views
            of crystal-clear waters.
          </p>
          <p>
            To the east, the Tugboat Cam captures Portsmouth Harbor's lively
            motion. The harbor bustles with vessels steering through the narrow
            Piscataqua River. Tugboats guide ships, while the towering I-95
            bridge looms in the background, linking New Hampshire to Maine. This
            historic port city buzzes with life, and the cam captures the
            continuous flow of maritime activity.
          </p>
          <p>
            Hampton Beach pulses with a different kind of energy. The Hampton
            Beach Cam streams live from the Ashworth by the Sea Hotel,
            showcasing waves crashing and the vibrant shoreline. This beach is a
            magnet for families, surfers, and sun-seekers. In summer, Hampton
            Beach teems with visitors enjoying festivals, live music, and
            sun-filled days. The cam lets you check the weather and surf, giving
            you a preview before you pack your bags.
          </p>
          <p>
            These webcams immerse you in New Hampshire's aquatic landscapes,
            whether you're planning a visit or seeking a visual escape. From
            serene lakes to bustling harbors and lively coastlines, the state's
            waterways unfold in vivid detail, ready to inspire your next
            adventure.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Relax on the sands of Hampton Beach.</li>
              <li>Take a boat tour on Lake Winnipesaukee.</li>
              <li>Explore Portsmouth Harbor by kayak.</li>
              <li>Watch the waves at Rye Beach.</li>
              <li>Fish from the docks at Weirs Beach.</li>
              <li>Paddleboard on Squam Lake.</li>
              <li>Walk along the shores of Odiorne Point.</li>
              <li>Visit Jenness State Beach for a swim.</li>
              <li>Stroll the boardwalk at Hampton Beach.</li>
              <li>Spot wildlife in Great Bay Estuary.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitnh.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit New Hampshire
                </a>{' '}
                - Discover local attractions and plan your visit.
              </li>
              <li>
                <a
                  href="https://www.hamptonbeach.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hampton Beach Official Site
                </a>{' '}
                - Get updates on events and beach conditions.
              </li>
              <li>
                <a
                  href="https://www.winnipesaukee.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Winnipesaukee Forum
                </a>{' '}
                - Learn about Lake Winnipesaukee activities and events.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/43.6008,-71.4578"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lake Winnipesaukee Weather
                </a>{' '}
                - Check the latest weather for Lake Winnipesaukee.
              </li>
              <li>
                <a
                  href="https://www.cityofportsmouth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portsmouth NH Official Site
                </a>{' '}
                - Explore Portsmouth attractions and visitor info.
              </li>
              <li>
                <a
                  href="https://www.nhstateparks.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New Hampshire State Parks
                </a>{' '}
                - Plan your trip to state parks across New Hampshire.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/42.9134,-70.8096"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hampton Beach Weather
                </a>{' '}
                - Get current weather details for Hampton Beach.
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
    cams = cams.filter((cam) => cam.state === 'New Hampshire')

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
