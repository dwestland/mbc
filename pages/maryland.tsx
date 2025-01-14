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
  const camPageTargetType = 'Maryland'

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
        <h3 style={{ marginTop: '0' }}>
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
          <p>
            Maryland's beaches beckon with a blend of serenity and adventure.
            Ocean City unfurls over 10 miles of pristine sands, while the
            Commander Hotel Cam streams live views of the stunning coastline.
            Wander along the boardwalk or plunge into the Atlantic's embrace.
            The Quality Inn Cam captures vibrant beachfront scenes, urging
            visitors to roam the nearby shops and eateries. Inland, the Hertrich
            Cam in Easton reveals the winding Tred Avon River, ideal for those
            setting sail or gliding along the water. These webcams transport
            Maryland's coastal charm directly to your screen.
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
            Maryland's coastal gems offer more than just sand and surf. Ocean
            City, with its 10-mile stretch of shoreline, lures visitors with its
            natural splendor and lively boardwalk. The Commander Hotel Cam
            immerses you in the heart of this vibrant beach town. It captures
            sweeping vistas of the Atlantic and its bustling shores. Visitors
            can meander along the boardwalk, absorbing the rhythm of the
            crashing waves while exploring local shops and eateries. The Quality
            Inn Cam delivers a striking view of the beach, where surfers carve
            the waves and sunbathers bask in the glow.
          </p>

          <p>
            For those seeking a slower tempo, head inland to Easton. The
            Hertrich Cam unveils a serene view of the Tred Avon River. This
            winding waterway entices boaters and sailors to glide along its
            gentle current. Its calm flow draws those looking to paddle or drift
            in peaceful solitude. Visitors often anchor here for fishing or to
            simply watch boats pass by. Easton's riverbanks host parks and
            marinas, offering ample spaces to roam and discover.
          </p>

          <p>
            These webcams reveal Maryland's coastal essence in vivid detail.
            From the animated beaches of Ocean City to the tranquil rivers of
            Easton, there is something for every traveler. Whether you're
            planning a trip or exploring from afar, these live feeds invite you
            to witness Maryland's natural wonders firsthand. Let these webcams
            transport you to the edge of the coast, wherever you may be.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Walk the Ocean City Boardwalk.</li>
              <li>Swim at Assateague Island beaches.</li>
              <li>Watch wild ponies at Assateague Island.</li>
              <li>Sail along the Tred Avon River.</li>
              <li>Fish from the Ocean City Pier.</li>
              <li>Explore Sandy Point State Park beaches.</li>
              <li>Kayak through the Chesapeake Bay.</li>
              <li>Visit North Beach for a seaside stroll.</li>
              <li>Catch waves at Fenwick Island State Park.</li>
              <li>Paddleboard on the Tred Avon River.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitmaryland.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Maryland
                </a>{' '}
                - Discover attractions, dining, and events across Maryland.
              </li>
              <li>
                <a
                  href="https://www.nps.gov/asis/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Assateague Island National Seashore
                </a>{' '}
                - Learn about wild ponies, camping, and beach activities.
              </li>
              <li>
                <a
                  href="https://www.oceancity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ocean City Maryland
                </a>{' '}
                - Find beach events, local dining, and accommodations in Ocean
                City.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/38.3441,-75.0784"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ocean City Weather
                </a>{' '}
                - Get real-time weather updates for Ocean City beaches.
              </li>
              <li>
                <a
                  href="https://www.northbeachmd.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  North Beach Maryland
                </a>{' '}
                - Explore local events, dining, and outdoor activities at North
                Beach.
              </li>
              <li>
                <a
                  href="https://chesapeakebay.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chesapeake Bay Program
                </a>{' '}
                - Learn about environmental efforts and activities around the
                Chesapeake Bay.
              </li>
              <li>
                <a
                  href="https://www.eastonmd.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Easton Maryland
                </a>{' '}
                - Find dining, arts, and recreation around Easton and the Tred
                Avon River.
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
    cams = cams.filter((cam) => cam.state === 'Maryland')

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
