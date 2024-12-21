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
  const camPageTargetType = 'St. Croix'

  const pageSections = findStates(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((state: { state: string }) => state.state)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Explore St. Croix beach webcams for live views of oceans, beaches, and coastal attractions in real-time."
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
            St. Croix beckons with its breathtaking shorelines and lively seas.
            Witness the surf caress the sands at Cottages by the Sea near
            Frederiksted. Gaze at Cane Bay Beach as the Landing Beach Bar cam
            unveils tranquil ocean vistas. In Christiansted, the Caravelle Hotel
            cam captures boats gliding through the harbor and over golden sands.
            The Live Company House Hotel cam showcases historic landmarks like
            Fort Christiansvaern, standing proud. Mermaid Beach sprawls in front
            of the Buccaneer Beach and Golf Resort, nestled in lush greenery. At
            Tamarind Reef, soak in views of Green Cay and Buck Island as they
            stretch across the horizon.
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
            St. Croix unveils a mesmerizing tapestry of coastal scenes. The
            Cottages by the Sea webcam grants a serene glimpse into the gentle
            waters near Frederiksted. Watch the waves sweep ashore, caressing
            the sandy beach. This cozy beachfront spot invites travelers to
            unwind. Its peaceful aura embraces those seeking tranquility.
          </p>
          <p>
            The Landing Beach Bar cam surveys Cane Bay Beach. The cam captures
            the ocean's ebb and flow, as the waves glide in. Cane Bay Beach is a
            gem for snorkeling and diving. The vivid reefs teem with marine
            life, offering an awe-inspiring underwater journey.
          </p>
          <p>
            In Christiansted, the Caravelle Hotel webcam paints a lively picture
            of the harbor. Boats drift lazily by as visitors meander along the
            boardwalk. Christiansted Harbor buzzes with history. Its vibrant
            buildings and waterfront bustle breathe life into the town. Nearby,
            Fort Christiansvaern looms, a sentinel of St. Croix's colonial
            heritage.
          </p>
          <p>
            The Live Company House Hotel cam provides another lens on
            Christiansted Harbor. From this view, Steeple House Church and
            historic 19th-century architecture rise into focus. The cam unveils
            a tranquil look at daily life in this storied town. It's a quiet
            view where the past and present intertwine.
          </p>
          <p>
            Mermaid Beach, seen from the Buccaneer Beach and Golf Resort cam,
            stretches gracefully. The shoreline, framed by palm trees, invites
            relaxation. This resort offers a lush tropical refuge with sweeping
            views of the sea. It's a sanctuary for those looking to escape.
          </p>
          <p>
            The Tamarind Reef Resort cam reveals an expansive ocean panorama.
            Green Cay and Buck Island sprawl across the horizon. The cam
            immerses viewers in the beauty of untouched nature.
          </p>
          <p>
            St. Croix's beaches and webcams evoke a serene world. Each view
            opens a door to paradise.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Swim at Sandy Point National Wildlife Refuge.</li>
              <li>Snorkel at Cane Bay Beach's vibrant reef.</li>
              <li>Kayak through Salt River Bay National Park.</li>
              <li>Relax on the sands of Rainbow Beach.</li>
              <li>Dive at the Frederiksted Pier for marine life.</li>
              <li>Explore Buck Island Reef's coral gardens.</li>
              <li>Stroll along Christiansted Harbor's boardwalk.</li>
              <li>Paddleboard in the calm waters of Green Cay.</li>
              <li>Sail through the turquoise waters around St. Croix.</li>
              <li>Fish off the coast near Cane Bay Beach.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.gotostcroix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GoToStCroix
                </a>{' '}
                - Discover island attractions, events, and tips for visitors.
              </li>
              <li>
                <a
                  href="https://www.nps.gov/sari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Salt River Bay National Park
                </a>{' '}
                - Learn about the park's history, trails, and water activities.
              </li>
              <li>
                <a
                  href="https://www.bigbeards.com/buck-island/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buck Island Reef National Monument
                </a>{' '}
                - Explore reef conservation, snorkeling tours, and wildlife.
              </li>
              <li>
                <a
                  href="https://www.vi.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  U.S. Virgin Islands Government
                </a>{' '}
                - Get essential travel info, regulations, and permits.
              </li>
              <li>
                <a
                  href="https://weather.com/weather/today/l/17.7461,-64.7025"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Christiansted Weather
                </a>{' '}
                - Check real-time weather for Christiansted Harbor.
              </li>
              <li>
                <a
                  href="https://virginislandsthisweek.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  St. Croix This Week
                </a>{' '}
                - Find local events, dining, shopping, and island news.
              </li>
              <li>
                <a
                  href="https://www.vinow.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VInow
                </a>{' '}
                - Plan activities, ferry schedules, and explore beach guides.
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
    cams = cams.filter((cam) => cam.country === 'St. Croix')

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
