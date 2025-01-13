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
  const camPageTargetType = 'Mississippi'

  const pageAreas = findAreas(data, camPageTargetType)
  const pageAreasArray = pageAreas
    ? pageAreas.map((area: { area: string }) => area.area)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Explore Mississippi beach webcams featuring Biloxi, D'Iberville, and Vicksburg with live views of beaches and rivers."
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
            Mississippi's Gulf Coast brims with lively shores and bustling
            waters. The D'Iberville cam frames the I-110 bridge, channeling
            traffic to Biloxi, where coastlines unfurl in striking beauty. The
            Biloxi Lighthouse cam unveils expansive views of Biloxi Beach, a
            favored haunt for coastal strolls and waterfront dining. Westward,
            the Silver Slipper Casino cam beckons visitors to wander along its
            inviting sands and embrace the sea breeze. Inland, the Mississippi
            River cam at Vicksburg reveals a peaceful scene as barges meander
            downriver, with Louisiana looming across the way, offering a
            tranquil window into river life.
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
            Mississippi's coastline teems with a blend of nature and local
            allure. The D'Iberville cam reveals the I-110 bridge, channeling
            life between D'Iberville and Biloxi. From the Scarlet Pearl Casino,
            the cam unearths sweeping views of Biloxi's shimmering shore. This
            stretch invites visitors to stroll or bask by the Gulf's glistening
            waters, a scene both tranquil and stirring.
          </p>
          <p>
            In Biloxi, the lighthouse cam frames more than just the towering
            landmark. It sweeps across Biloxi Beach, a sandy stretch that
            beckons swimmers and sunbathers. The nearby eateries and shops hum
            with the essence of coastal life, offering a blend of flavors and
            sounds that echo the town's spirited energy. The lighthouse stands
            as a sentinel, casting its gaze over the ever-changing tides and
            vivid sunsets.
          </p>
          <p>
            Further west, the Silver Slipper Casino cam captures the Gulf of
            Mexico's endless blue. Just beyond the casino's doors, the beach
            sprawls out, its sands soft underfoot and inviting to those seeking
            a moment of peace. Many wander the shoreline, lulled by the rhythm
            of the waves. The casino offers a lively contrast, where guests
            revel before returning to the calming embrace of the beach.
          </p>
          <p>
            Inland, the Mississippi River cam in Vicksburg transports viewers to
            a slower rhythm. The river winds past, its surface carved by the
            passage of barges. Louisiana rests on the far bank, its silhouette a
            reminder of the river's quiet dominance. The waterway speaks of
            history and movement, drawing visitors to pause and watch its steady
            flow, connecting the present with the echoes of the past. The
            riverbank offers a retreat from the rush of daily life, where time
            drifts as slowly as the river itself.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Walk along Biloxi Beach.</li>
              <li>Visit the Biloxi Lighthouse.</li>
              <li>Stroll the shores near Silver Slipper Casino.</li>
              <li>Explore Gulf Islands National Seashore.</li>
              <li>Relax on the beaches of Ocean Springs.</li>
              <li>Watch boats pass on the Mississippi River.</li>
              <li>Fish off the Biloxi Bay Bridge.</li>
              <li>Kayak the calm waters of Back Bay.</li>
              <li>Tour the Pascagoula River Preserve.</li>
              <li>Swim at Buccaneer State Park.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitmississippi.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Mississippi
                </a>{' '}
                - Discover local events, attractions, and travel tips.
              </li>
              <li>
                <a
                  href="https://www.gulfcoast.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mississippi Gulf Coast
                </a>{' '}
                - Explore beaches, restaurants, and entertainment on the coast.
              </li>
              <li>
                <a
                  href="https://www.nps.gov/guis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gulf Islands National Seashore
                </a>{' '}
                - Learn about the seashore, its activities, and visitor info.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/30.3944,-88.9012"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Biloxi Weather
                </a>{' '}
                - Check current conditions and forecasts for Biloxi Beach.
              </li>
              <li>
                <a
                  href="https://www.mdwfp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mississippi Department of Wildlife
                </a>{' '}
                - Plan outdoor adventures in state parks and nature areas.
              </li>
              <li>
                <a
                  href="https://www.scarletpearlcasino.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Scarlet Pearl Casino
                </a>{' '}
                - Discover dining, gaming, and entertainment at Scarlet Pearl.
              </li>
              <li>
                <a
                  href="https://www.mscoastcoliseum.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mississippi Coast Coliseum
                </a>{' '}
                - Find upcoming events and shows along the Gulf Coast.
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
    cams = cams.filter((cam) => cam.state === 'Mississippi')

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
