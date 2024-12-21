import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import AdLarge from '@/components/AdLarge'
import CamsPageMap from '@/components/CamsPageMap'
import RenderStatesSections from '@/components/RenderStatesSections'
import data from '@/data/camLocationAreas'
import { findStates } from '@/utils/common'
import * as types from '@/utils/types'
import ErrorLoadingWebcams from '@/components/ErrorLoadingWebcams'

const CountryStatesPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'Bermuda'
  console.log('%c cams ', 'background: red; color: white', cams)
  const pageSections = findStates(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((state: { state: string }) => state.state)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Explore live Bermuda beach webcams showcasing harbors, beaches, and city views for travel planning or virtual escape."
    >
      <div className="layout">
        <h1>{camPageTargetType} Beach Webcams</h1>
        <h3 style={{ marginTop: '0' }}>
          Featuring webcams from{' '}
          {pageSectionsArray.slice(0, -1).join(', ') +
            (pageSectionsArray.length > 1
              ? ` and ${pageSectionsArray[pageSectionsArray.length - 1]}`
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
            Bermuda, a haven of turquoise waters and pink sand beaches, beckons
            through its scenic webcams. See the boats drifting by the Royal
            Hamilton Amateur Dinghy Club, or immerse yourself in the bustling
            harbor from the Port of Bermuda. Wander through live views of
            Hamilton, the lively capital, brimming with dining and nightlife.
            The Pembroke cam spans sweeping vistas from the Royal Navy Dockyard
            to St. George's Island. Marvel at the Flats Village cams, capturing
            still glimpses of serene coastal waters. These webcams unveil
            Bermuda's splendor, guiding your travel plans or providing a
            momentary escape.
          </p>
        </ShowMoreText>

        <RenderStatesSections pageSections={pageSections ?? []} cams={cams} />

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
            Bermuda's natural beauty mesmerizes, and these webcams unveil it
            all. The Royal Hamilton Amateur Dinghy Club cam reveals boats
            gliding across Hamilton's Inner Harbour. Whether embarking on a
            journey or returning to port, this cam immerses you in Bermuda's
            nautical life. The port of Bermuda cam paints a vivid scene of the
            bustling harbor where grand cruise ships frequently dock. You can
            glimpse the clear waters stretching to the horizon and witness ships
            gliding in and out. This cam animates the island's vibrant coastal
            pulse.
          </p>

          <p>
            In Hamilton, the live streaming cam captures the city's heartbeat.
            As you watch, the dynamic blend of modern life and island culture
            unfolds. Hamilton thrives as a center of business, but it's also
            brimming with eateries, boutiques, and nightlife. This cam unveils
            the city's daily rhythm, from tranquil mornings to bustling
            evenings. It's a rich resource for travelers planning their visit or
            for those simply curious about the vibrant cityscape.
          </p>

          <p>
            Farther along Bermuda's north shore, the Pembroke cam sweeps over
            the picturesque coastline. It stretches from the Royal Navy Dockyard
            to St. George's Island. Rolling waves and passing ships punctuate
            this expansive view of Bermuda's waters. The cam captures a
            fascinating perspective of the island, blending natural beauty with
            its storied maritime past.
          </p>

          <p>
            Finally, the Flats Village cams deliver serene snapshots of
            Bermuda's calm coastal waters. These tranquil views offer a soothing
            retreat, perfect for anyone seeking a quiet moment with nature.
            Together, these webcams let you dive into Bermuda's captivating
            scenery from various perspectives, each offering its own unique and
            stunning view of this island gem.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Swim at Horseshoe Bay Beach.</li>
              <li>Snorkel in Tobacco Bay.</li>
              <li>Explore Crystal Caves.</li>
              <li>Relax at Elbow Beach.</li>
              <li>Kayak along Shelly Bay.</li>
              <li>Visit Warwick Long Bay.</li>
              <li>Dive at the Blue Hole.</li>
              <li>Sail around Hamilton Harbour.</li>
              <li>Stroll on Clearwater Beach.</li>
              <li>Paddleboard in Somerset Long Bay.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/32.2911,-64.7741"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Weather in Bermuda
                </a>{' '}
                - Check the latest Bermuda weather.
              </li>
              <li>
                <a
                  href="https://www.gotobermuda.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go To Bermuda
                </a>{' '}
                - Discover Bermuda travel tips, hotels, and things to do.
              </li>
              <li>
                <a
                  href="https://www.bermuda.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bermuda.com
                </a>{' '}
                - Find guides to local attractions, dining, and tours.
              </li>
              <li>
                <a
                  href="https://boards.cruisecritic.com/topic/146491-while-in-port-shore-excursions/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cruise Critic - Bermuda
                </a>{' '}
                - Get insights on Bermuda's cruise port and activities.
              </li>
              <li>
                <a
                  href="https://bernews.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bernews
                </a>{' '}
                - Stay updated on local Bermuda news and events.
              </li>
              <li>
                <a
                  href="https://www.gotobermuda.com/plan/getting-around-bermuda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Getting Around Bermuda
                </a>{' '}
                - 21 square-miles. endless ways to explore.
              </li>
              <li>
                <a
                  href="https://www.bnt.bm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bermuda National Trust
                </a>{' '}
                - Learn about Bermuda's heritage sites and conservation efforts.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <h2>
        <Link href="/hawaii/">More Hawaii Beach Cams</Link>
      </h2>{' '}
      <p style={{ textAlign: 'center' }}>
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
    cams = cams.filter((cam) => cam.country === 'Bermuda')

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

export default CountryStatesPage
