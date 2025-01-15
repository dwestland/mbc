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
  const camPageTargetType = 'Oregon'

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
          <p>
            Discover Oregon's coastline and waterways through these captivating
            webcams. Witness the hustle at the Oregon State University Ship
            Operations Pier, where ships dock and depart. In Lincoln City, the
            Chinook Winds Casino Cam unveils the vast stretch of beach, nestled
            near the Salmon River, drawing visitors throughout the year. The
            Oregon Coast Aquarium Cam in Newport gazes over Yaquina Bay,
            showcasing the area's thriving marine life. At the Boones Ferry
            Marina, the webcam surveys boats as they glide along the Willamette
            River. Each of these webcams immerses you in Oregon's distinct
            coastal and riverfront landscapes.
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
            Oregon's coastline and waterways brim with stunning sights and rich
            ecosystems. The Oregon State University Ship Operations Pier webcam
            presents a vivid glimpse of the dock's bustling activity. Ships
            drift in and out, while construction reshapes the area. The
            ever-changing scene offers a snapshot of the dynamic maritime life
            that defines this port.
          </p>
          <p>
            In Lincoln City, the Chinook Winds Casino Cam unfurls expansive
            views of the sweeping shoreline. Set near the Salmon River, the
            camera reveals where the tides merge with the sand. Lincoln City, a
            year-round magnet for visitors, boasts beaches that beckon those
            seeking tranquility or adventure along the coast.
          </p>
          <p>
            The Oregon Coast Aquarium Cam, perched in Newport, peers over
            Yaquina Bay. The bay, alive with marine life, unfolds before your
            eyes. The aquarium, a hub for exploring local ecosystems, offers a
            glimpse of the waters surrounding it. You'll see boats carving paths
            through the bay and, at times, spot marine creatures drifting by.
          </p>
          <p>
            Further inland, the Boones Ferry Marina Webcam surveys the lively
            Willamette River. The marina hums with activity, particularly during
            the boating season. Boats slide off the docks, cutting through the
            water, creating a scene of constant movement. The Willamette River,
            one of Oregon's vital waterways, becomes a stage for boaters,
            anglers, and onlookers.
          </p>
          <p>
            These webcams invite you into Oregon's vibrant rivers and coastal
            scenes. Each location showcases something distinctive, from animated
            docks to peaceful shorelines, making it an essential experience for
            travelers and virtual explorers alike.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Walk along Cannon Beach's sandy shores.</li>
              <li>Explore the tide pools at Haystack Rock.</li>
              <li>Kayak through the serene waters of Nehalem Bay.</li>
              <li>Visit the Oregon Coast Aquarium in Newport.</li>
              <li>Surf the waves at Oswald West State Park.</li>
              <li>Fish from the pier at Depoe Bay.</li>
              <li>Hike the coastal trails at Cape Perpetua.</li>
              <li>Watch seals at the Sea Lion Caves near Florence.</li>
              <li>Picnic by the Salmon River in Lincoln City.</li>
              <li>Ride the dunes at Sand Master Park in Florence.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.traveloregon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Travel Oregon
                </a>{' '}
                - Plan your Oregon adventures with guides, tips, and trip ideas.
              </li>
              <li>
                <a
                  href="https://www.oregonstateparks.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oregon State Parks
                </a>{' '}
                - Explore Oregon's state parks and discover outdoor activities.
              </li>
              <li>
                <a
                  href="https://www.visittheoregoncoast.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit The Oregon Coast
                </a>{' '}
                - Find the best coastal destinations, events, and travel guides.
              </li>
              <li>
                <a
                  href="https://www.nps.gov/crla/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Crater Lake National Park
                </a>{' '}
                - Learn about Crater Lake and plan your visit to this iconic
                park.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/44.9979,-124.0097"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lincoln City Weather
                </a>{' '}
                - Check the weather for Lincoln City before you head out.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/44.6185,-124.0512"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Newport Weather
                </a>{' '}
                - Get real-time weather updates for Newport.
              </li>
              <li>
                <a
                  href="https://www.tripcheck.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oregon TripCheck
                </a>{' '}
                - View road conditions and travel alerts across Oregon.
              </li>
              <li>
                <a
                  href="https://www.eugenecascadescoast.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eugene, Cascades & Coast
                </a>{' '}
                - Plan your trip to Eugene and the surrounding areas.
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
    cams = cams.filter((cam) => cam.state === 'Oregon')

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
