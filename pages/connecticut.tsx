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
  const camPageTargetType = 'Connecticut'

  const pageAreas = findAreas(data, camPageTargetType)
  const pageAreasArray = pageAreas
    ? pageAreas.map((area: { area: string }) => area.area)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Connecticut Beach Webcams: Explore live views of coastlines, historic harbors, and seafaring towns across the state."
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
            Connecticut's coastline unveils breathtaking scenes and deep
            history. The Water's Edge Resort Cam in Westbrook reveals the sweep
            of Long Island Sound and Salt Island, ideal for wildlife glimpses.
            The Downtown Mystic Cam immerses you in the heart of this historic
            shipbuilding town, where over 600 vessels once launched. Mystic's
            seafaring past echoes through its streets. In New London, the Custom
            House Maritime Museum Cam overlooks the bustling port, capturing the
            silhouette of a 19th-century fort, a Coast Guard station, and the
            famed submarine factory. Each cam transports you to a distinct
            coastal moment.
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
            Connecticut's coastline beckons travelers with its vibrant scenery.
            The Water's Edge Resort Cam in Westbrook unveils the tranquil
            expanse of Long Island Sound. The view stretches to Salt Island,
            where birds glide and tides ebb. It's a perfect retreat for nature
            enthusiasts, drawing you into Westbrook's coastal embrace, framed by
            the rhythmic pulse of the sea.
          </p>

          <p>
            In Mystic, the Downtown Mystic Cam immerses you in a town deeply
            rooted in maritime history. Mystic once thrived as a shipyard,
            launching hundreds of vessels. The live cam provides a glimpse of
            streets that still echo with the steps of sailors, merchants, and
            shipbuilders. The river meanders through the heart of Mystic,
            connecting its past to its present. This town's rich history,
            centered around the water, is palpable with each glance through the
            cam.
          </p>

          <p>
            Eastward in New London, the Custom House Maritime Museum Cam surveys
            a bustling coastal hub. Perched atop the museum, this cam captures
            the motion of New London's busy harbor. A 19th-century fort stands
            sentinel, a reminder of the area's storied military past. The cam
            sweeps across the US Coast Guard station, where modern sailors
            continue the tradition. Off in the distance, the silhouette of the
            submarine factory hovers, a testament to Connecticut's evolving
            maritime prowess.
          </p>

          <p>
            These Connecticut webcams provide a vivid journey through its
            coastal landscapes. From serene shores to active harbors, each cam
            unveils a slice of life by the water. Whether you're gauging the
            weather, planning an escape, or simply savoring the view,
            Connecticut's coastline enchants and invites discovery.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Stroll along the Westbrook shoreline.</li>
              <li>Explore the Mystic Seaport Museum.</li>
              <li>Relax at Hammonasset Beach State Park.</li>
              <li>Kayak the Connecticut River Estuary.</li>
              <li>Visit the New London Ledge Lighthouse.</li>
              <li>Swim at Ocean Beach Park in New London.</li>
              <li>Sail from the docks of Mystic.</li>
              <li>Fish off the piers at Clinton Town Beach.</li>
              <li>Paddleboard on Long Island Sound.</li>
              <li>Tour the Thimble Islands by boat.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitconnecticut.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Connecticut
                </a>{' '}
                - Discover attractions, events, and travel guides across
                Connecticut.
              </li>
              <li>
                <a
                  href="https://www.mysticseaport.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mystic Seaport Museum
                </a>{' '}
                - Explore maritime history and visit the famous Mystic Seaport.
              </li>
              <li>
                <a
                  href="https://www.ctvisit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connecticut Office of Tourism
                </a>{' '}
                - Plan your Connecticut adventure with travel resources and
                destination highlights.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/41.2796,-72.4374"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Westbrook Weather
                </a>{' '}
                - Check current weather conditions for Westbrook, CT.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/41.3550,-71.9680"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mystic Weather
                </a>{' '}
                - View up-to-date weather for Mystic, CT.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/41.3523,-72.0954"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New London Weather
                </a>{' '}
                - Get local weather forecasts for New London, CT.
              </li>
              <li>
                <a
                  href="https://www.nps.gov/wefa/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Weir Farm National Historical Park
                </a>{' '}
                - Visit Connecticut's only national park and explore its scenic
                beauty.
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
    cams = cams.filter((cam) => cam.state === 'Connecticut')

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
