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
  const camPageTargetType = 'Delaware'

  const pageAreas = findAreas(data, camPageTargetType)
  const pageAreasArray = pageAreas
    ? pageAreas.map((area: { area: string }) => area.area)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Explore Delaware's coastal charm through live beach webcams, from Rehoboth Beach to Mispillion Harbor's wildlife views."
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
            Delaware's coast teems with scenic beauty and outdoor allure.
            Rehoboth Beach beckons, with its mile-long boardwalk and sweeping
            oceanfront. Glimpse the energy of the shore through the Rehoboth
            Boardwalk Cam, showcasing lively amusements and attractions. For a
            deeper connection with nature, the DuPont Nature Center Mispillion
            Harbor Cam immerses you in a wildlife haven where migratory birds
            thrive. The Mispillion Harbor Cam captures the tranquil waters and
            vibrant birdlife. Whether you're planning a getaway or exploring
            from home, these webcams unveil Delaware's coastal splendor in vivid
            detail.
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
            Delaware's coastline unfolds with a variety of landscapes, perfect
            for those drawn to the ocean and waterways. The Rehoboth Boardwalk
            Cam captures the pulse of the iconic Rehoboth Beach. The boardwalk
            stretches along the shore, revealing oceanfront views and a host of
            attractions. Visitors can savor the vibrant energy, from timeless
            amusements to tucked-away spots along the sand. This camera offers a
            live glimpse into the heart of this beach town, letting you picture
            yourself wandering the coastal path.
          </p>
          <p>
            Further north, the DuPont Nature Center Mispillion Harbor Cam
            immerses you in a serene setting teeming with life. The harbor
            cradles a crucial part of the Delaware Bay ecosystem. It shelters
            migratory birds, particularly during their spring and fall journeys.
            The camera opens a window into this natural world, where birds
            gather in swirling flocks, creating a mesmerizing scene. This haven
            beckons bird watchers and nature enthusiasts eager to witness the
            delicate dance between wildlife and water.
          </p>
          <p>
            The Mispillion Harbor Cam stretches the view across the tranquil
            waters. The still harbor reflects the sky, rippling with the breath
            of wetlands. It's a sanctuary where wildlife flourishes, especially
            shorebirds and other species that make this area their home.
            Watching the harbor through the lens brings a sense of calm, as the
            camera captures the quiet cadence of nature's rhythm.
          </p>
          <p>
            These Delaware webcams channel the coast directly to you. They offer
            a chance to discover the region, whether planning your next escape
            or enjoying the view from afar. Each camera reveals the distinct
            charm and raw beauty of Delaware's coastal landscapes.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Walk along Rehoboth Beach Boardwalk.</li>
              <li>Swim at Bethany Beach.</li>
              <li>Kayak in Delaware Seashore State Park.</li>
              <li>Fish off Cape Henlopen Pier.</li>
              <li>Explore Fenwick Island beaches.</li>
              <li>Birdwatch at Mispillion Harbor.</li>
              <li>Surf at Dewey Beach.</li>
              <li>Visit the Indian River Marina.</li>
              <li>Hike the trails at Cape Henlopen.</li>
              <li>Paddleboard on Rehoboth Bay.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitdelaware.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Delaware
                </a>{' '}
                - Discover attractions, beaches, and travel tips.
              </li>
              <li>
                <a
                  href="https://www.rehoboth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rehoboth.com
                </a>{' '}
                - Find events, dining options, and boardwalk info.
              </li>
              <li>
                <a
                  href="https://www.capewatertaxi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cape Water Tours and Taxi
                </a>{' '}
                - Book scenic cruises and eco tours along the coast.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/38.719,-75.0765"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rehoboth Beach Weather
                </a>{' '}
                - Check live weather for Rehoboth Beach area.
              </li>
              <li>
                <a
                  href="https://www.nps.gov/cahi/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cape Henlopen National Park
                </a>{' '}
                - Learn about history, beaches, and activities.
              </li>
              <li>
                <a
                  href="https://www.delaware-surf-fishing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Delaware Surf Fishing
                </a>{' '}
                - Get fishing reports, tips, and local updates.
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
    cams = cams.filter((cam) => cam.state === 'Delaware')

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
