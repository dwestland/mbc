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
  const camPageTargetType = 'Georgia'

  const pageAreas = findAreas(data, camPageTargetType)
  const pageAreasArray = pageAreas
    ? pageAreas.map((area: { area: string }) => area.area)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Explore Georgia beach webcams, featuring live views from Tybee Island and St. Simons Island for trip planning and weather updates."
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
            Georgia's coastline teems with life and coastal allure. Tybee
            Island, captured by Hotel Tybee's webcam, beckons with sandy shores
            and laid-back seaside vibes. Wander the historic Tybee Lighthouse or
            cast a line from the pier. Just down the coast, St. Simons Island,
            seen through the King and Prince Beach Resort's webcam, draws
            visitors to stroll its expansive beaches or paddle through lush salt
            marshes. These webcams reveal the pulse of ocean life, helping you
            craft travel plans or simply drink in the scenery from afar.
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
            Georgia's coastline unfurls across islands and shores, offering a
            diverse array of landscapes. On Tybee Island, Hotel Tybee's live
            webcam reveals a sweeping view of the sandy shoreline. This island
            serves as a portal to oceanfront adventures. Visitors can ascend the
            iconic Tybee Lighthouse or meander along the beach at dusk. The
            island's long pier beckons anglers and sightseers to cast lines or
            watch the ocean's slow rhythm. As waves lap the shore, the vibrant
            marine life and quiet coastal allure emerge.
          </p>
          <p>
            Further south, St. Simons Island unfolds through the King and Prince
            Beach Resort's webcam. This island is celebrated for its peaceful
            beaches and lush canopies. The broad, sandy expanses invite
            sunbathers, while the surrounding marshes cradle kayakers seeking
            adventure. The historic Christ Church and the towering St. Simons
            Lighthouse enrich the island's coastal charm. Stroll along its
            tree-lined paths or lose yourself in the calming embrace of the
            shoreline.
          </p>
          <p>
            Tybee and St. Simons together capture Georgia's coastal heartbeat.
            The webcams offer a portal into life by the sea, making them
            indispensable for beachgoers planning their next escape. Visitors
            can gauge weather, track tides, or simply immerse themselves in the
            island's daily rhythm. These webcams don't just capture scenery—they
            forge a connection with the ocean's energy.
          </p>
          <p>
            For those yearning for a coastal retreat or ocean adventure, these
            beaches offer rich experiences. Whether casting from the pier or
            wandering through history at the lighthouse, Georgia's shores
            provide something for every traveler. The webcams pull the coast
            closer, sparking curiosity and helping you chart your next journey
            or savor the moment.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Walk along Tybee Island's sandy shoreline.</li>
              <li>Climb the historic Tybee Lighthouse.</li>
              <li>Kayak through St. Simons Island's marshes.</li>
              <li>Fish from the pier on Tybee Island.</li>
              <li>Swim in the ocean at East Beach, St. Simons.</li>
              <li>Visit the St. Simons Island Lighthouse Museum.</li>
              <li>Paddleboard along the coast of Tybee Island.</li>
              <li>Explore Fort Pulaski near Tybee Island.</li>
              <li>Relax on the shores of Driftwood Beach, Jekyll Island.</li>
              <li>Take a boat tour around Georgia's Golden Isles.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.exploregeorgia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Georgia
                </a>{' '}
                - Discover attractions, activities, and travel tips across
                Georgia.
              </li>
              <li>
                <a
                  href="https://visittybee.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Tybee
                </a>{' '}
                - Plan your trip to Tybee Island with local guides and event
                details.
              </li>
              <li>
                <a
                  href="https://goldenisles.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Golden Isles
                </a>{' '}
                - Learn about St. Simons, Jekyll Island, and more in Georgia's
                Golden Isles.
              </li>
              <li>
                <a
                  href="https://www.nps.gov/fopu/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fort Pulaski National Monument
                </a>{' '}
                - Explore history, guided tours, and outdoor activities near
                Tybee Island.
              </li>
              <li>
                <a
                  href="https://www.jekyllisland.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jekyll Island
                </a>{' '}
                - Find lodging, attractions, and event information for Jekyll
                Island.
              </li>
              <li>
                <a
                  href="https://weather.com/weather/today/l/31.1393,-81.3788"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  St. Simons Weather
                </a>{' '}
                - Check real-time weather conditions on St. Simons Island.
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
    cams = cams.filter((cam) => cam.state === 'Georgia')

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
