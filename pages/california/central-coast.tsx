import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import AdLarge from '@/components/AdLarge'
import CamsPageMap from '@/components/CamsPageMap'
import RenderSubareaSections from '@/components/RenderSubareaSections'
import data from '@/data/camLocationAreas'
import { renderError, findSubareas } from '@/utils/common'
import * as types from '@/utils/types'

const AreaSubareaPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return renderError()
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'Central Coast'

  const pageSections = findSubareas(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((area: { subarea: string }) => area.subarea)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription={`Browse beach webcams from ${camPageTargetType}, including ${pageSectionsArray.join(
        ', '
      )}.`}
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
          truncatedEndingComponent="... "
        >
          {/* CUSTOMIZE PAGE 3 of 5 - Add opening text ~120 words */}
          <p>
            Along the California coast between Los Angeles and San Francisco are
            several resort towns well worth visiting. Between San Luis Obispo
            and San Francisco is the scenic coastal route of Highway 1, famous
            for its winding roads and bridges and stunning views overlooking the
            crashing waves below. These areas include Santa Barbara, Los Olivos,
            San Luis Obispo, Big Sur, Carmel, Pebble Beach and Monterey. It is
            fun to take a 3 or 4 day drive up the coast from Los Angeles and
            visit a couple of these quaint towns. You can stop by for lunch or
            dinner, or spend the night in one of the many lovely hotels. If you
            don't like driving there is an airport in a couple of the cities, as
            well as a passenger train that goes all the way up the coast. Check
            on-line or with your travel agent for travel-packages and discounts.
          </p>
        </ShowMoreText>

        <RenderSubareaSections pageSections={pageSections ?? []} cams={cams} />

        <ShowMoreText
          lines={4}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="... "
        >
          {/* CUSTOMIZE PAGE 4 of 5 - Add second text ~300 words, */}
          {/* Things to Do and Links and Info */}
          <p>xxxx</p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Visit Santa Barbara Mission</li>
              <li>Wine Tasting in Los Olivos/Santa Ynez Valley</li>
              <li>Visit the San Luis Obispo Mission</li>
              <li>Walk around the Morro Bay Rock</li>
              <li>
                Take the coastal drive on Highway 1 between Cambria and Monterey
              </li>
              <li>Take a tour of Hearst’s Castle</li>
              <li>Take a stroll though Carmel</li>
              <li>Play golf in Pebble Beach</li>
              <li>Take the "17-Mile Drive" on the Monterey Peninsula</li>
              <li>See the Monterey Aquarium</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="http://www.sbmm.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Santa Barbara Maritime Museum
                </a>{' '}
                Navigate to a Voyage of Discovery
              </li>
              <li>
                <a
                  href="http://www.santabarbaraca.gov/Government/Departments/Parks_and_Recreation/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Santa Barbara City Parks and Recreation
                </a>{' '}
                Official City Website for Parks and Recreation
              </li>
              <li>
                <a
                  href="http://www.newspress.com/Top/index.jsp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Santa Barbara News Press
                </a>{' '}
                Local Santa Barbara news and information
              </li>
              <li>
                <a
                  href="http://www.sbnature.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Santa Barbara Museum of Natural History
                </a>{' '}
                Life-size Blue Whale skeleton, a planetarium, an antique natural
                and a history art gallery
              </li>
              <li>
                <a
                  href="https://www.nps.gov/chis/index.htm"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Cannel Islands National Park
                </a>{' '}
                Channel Islands National Park is home to a wide variety natural
                and cultural resources
              </li>
              <li>
                <a
                  href="http://slocountyparks.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  San Luis Obispo County Parks
                </a>{' '}
                Hike, camp, swim, fish, and golf
              </li>
              <li>
                <a
                  href="http://visitslo.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visitor San Luis Obispo Info
                </a>{' '}
                A service of the San Luis Obispo Chamber of Commerce
              </li>
              <li>
                <a
                  href="http://www.topix.net/city/san-luis-obispo-ca"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  San Luis Obispo News
                </a>{' '}
                Local news for San Luis Obispo
              </li>
              <li>
                <a
                  href="https://www.amtrak.com/home"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Amtrak
                </a>{' '}
                Amtrak offers daily service into San Luis Obispo County
              </li>
              <li>
                <a
                  href="http://www.hearstcastle.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Hearst Castle
                </a>{' '}
                The official web site of Hearst Castle with information,
                historical sketches and news
              </li>
              <li>
                <a
                  href="http://www.morro-bay.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Morro Bay Guide
                </a>{' '}
                A guide to Nature, Education and Responsible Recreation
              </li>
              <li>
                <a
                  href="http://www.morro-bay.net/index.htm"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Morro Bay
                </a>{' '}
                Everything about Morro Bay
              </li>
              <li>
                <a
                  href="https://www.parks.ca.gov/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  California State Parks
                </a>{' '}
                California's official State Park website
              </li>
              <li>
                <a
                  href="http://mchsmuseum.com/salinas/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Monterey History Website
                </a>{' '}
                Local History from the Monterey County Historical Society
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
    cams = cams.filter((cam) => cam.area === 'Central Coast')

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

export default AreaSubareaPage
