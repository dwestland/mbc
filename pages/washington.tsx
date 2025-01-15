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
  const camPageTargetType = 'Washington'

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
          Washington unveils its coastal splendor with captivating landmarks and
          riverside retreats. At Friday Harbor, the marina beckons visitors to
          meander along the docks, savor meals at nearby eateries, and gaze at
          the tranquil bay. Kalama's riverfront hums with the passage of ships
          along the Columbia River, its peaceful beaches waiting for a quiet
          escape. In Seattle, the Space Needle webcam showcases sweeping views
          of the skyline and Lake Washington, while UW Tower's cam frames the
          distant Cascades. On the coast, Chateau Westport reveals the Pacific
          Ocean's relentless waves. Washington's shores and waterways teem with
          discovery and wonder.
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
            Washington's coastal gems unveil a blend of tranquil waters and
            vibrant cityscapes. Friday Harbor, nestled in the San Juan Islands,
            invites you to amble through its 500-slip marina. Here, you can
            linger by the docks and relish the nearby restaurants, shops, and
            parks. The Port of Kalama, perched along the Columbia River, is a
            prime spot to watch ships glide past. Its waterfront boasts parks,
            sandy stretches, and access to the marina. It's a place to bask in
            the serene flow of the river.
          </p>
          <p>
            In Seattle, the Space Needle cam captures breathtaking glimpses of
            the city. From over 500 feet high, it surveys sweeping views of the
            skyline, the Cascade Mountains, and Lake Washington's gleaming
            waters. Nearby, the UW Tower cam frames another vantage point,
            revealing the university district and more mountain backdrops. Both
            webcams offer a fresh window into this dynamic city and its natural
            surroundings.
          </p>
          <p>
            Out west, Chateau Westport stands sentinel on the edge of the
            Pacific. The live cam showcases the ocean's crashing waves and the
            ever-shifting shoreline. Westport draws those in search of surf,
            sand, and sea. A short distance away, the historic New Dungeness
            Lighthouse proudly endures. Its two still cams capture this
            steadfast lighthouse, surrounded by the waters of the Strait of Juan
            de Fuca.
          </p>
          <p>
            Washington's shores, rivers, and islands brim with possibilities.
            Whether you crave lively city scenes, quiet marinas, or the untamed
            ocean, there's something to stir every traveler. The state's
            waterways create ideal settings for discovery and contemplation.
            From Seattle's soaring skyline to the wild shores of the Pacific,
            these webcams beckon you to uncover Washington's natural and urban
            wonders.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Stroll along Alki Beach in Seattle.</li>
              <li>Explore the tide pools at Ruby Beach.</li>
              <li>Kayak on Lake Union in Seattle.</li>
              <li>Watch ships pass at the Port of Kalama.</li>
              <li>Swim in the calm waters of Friday Harbor.</li>
              <li>Hike the Dungeness Spit near Sequim.</li>
              <li>Surf the waves at Westport Beach.</li>
              <li>Tour the New Dungeness Lighthouse.</li>
              <li>Visit Deception Pass State Park.</li>
              <li>Fish along the Columbia River's banks.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.experiencewa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Experience WA
                </a>{' '}
                - Discover Washington's attractions and events.
              </li>
              <li>
                <a
                  href="https://www.visitseattle.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Seattle
                </a>{' '}
                - Plan your trip to Seattle and explore local hotspots.
              </li>
              <li>
                <a
                  href="https://parks.state.wa.us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Washington State Parks
                </a>{' '}
                - Explore parks, campgrounds, and outdoor activities.
              </li>
              <li>
                <a
                  href="https://www.wsdot.wa.gov/ferries"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Washington State Ferries
                </a>{' '}
                - Check ferry schedules and plan your island trips.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/47.608013,-122.335167"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Seattle Weather
                </a>{' '}
                - View up-to-date weather forecasts for Seattle.
              </li>
              <li>
                <a
                  href="https://www.sanjuanisland.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  San Juan Islands
                </a>{' '}
                - Find lodging, activities, and travel information.
              </li>
              <li>
                <a
                  href="https://portofkalama.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Port of Kalama
                </a>{' '}
                - Learn about the port, parks, and river access.
              </li>
              <li>
                <a
                  href="https://www.wta.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Washington Trails Association
                </a>{' '}
                - Plan hikes and outdoor adventures across the state.
              </li>
              <li>
                <a
                  href="https://www.whidbeycamanoislands.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whidbey and Camano Islands
                </a>{' '}
                - Explore island attractions and travel tips.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/46.8807,-124.1158"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Westport Weather
                </a>{' '}
                - Check current conditions for Westport Beach.
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
    cams = cams.filter((cam) => cam.state === 'Washington')

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
