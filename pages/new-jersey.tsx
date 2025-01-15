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
  const camPageTargetType = 'New Jersey'

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
            New Jersey's beaches beckon with vibrant activity along the
            Atlantic. Avalon Fishing Pier rises from Seven Mile Island, where
            visitors wander its serene sands. In Ocean City, webcams unveil the
            bustling boardwalk and the Fishing Pier, a sanctuary for anglers.
            The Sea Isle City Beach Patrol cam reveals the pulse of Ludlam
            Island, where water sports flourish. Margate Fishing Pier juts into
            the surf, offering sweeping views of the beach and pier. For a dash
            of urban energy, traverse the Atlantic City Boardwalk, renowned for
            its lively four-mile stretch along the shore.
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
            New Jersey's coast unfolds an unforgettable journey through diverse
            landscapes. Avalon, perched on Seven Mile Island, beckons visitors
            to wander its pristine shores. The Avalon Fishing Pier webcam
            captures both the tranquil beaches and the bustling pier. It's a
            prime spot for fishing enthusiasts and beachcombers alike. Seven
            Mile Island also hosts a lively boardwalk, perfect for a leisurely
            stroll with stunning coastal views.
          </p>

          <p>
            In Ocean City, the pier at 14th Street draws anglers and sightseers.
            The Ocean City Fishing Pier webcam unveils the charm of this seaside
            town. The boardwalk stretches along the shore, teeming with local
            shops, eateries, and beachgoers. The Ocean City Music Pier cam
            offers a sweeping view of the coastline while the sounds of
            entertainment and music fill the air.
          </p>
          <p>
            Further south, the Sea Isle City Beach Patrol cam showcases the
            vibrant beaches of Ludlam Island. This spot pulses with energy,
            making it ideal for kayaking and paddleboarding. Thrill-seekers can
            dive into water sports while others lounge by the waves. The Sea
            Isle boardwalk tempts with adventure and relaxation, offering scenic
            views and quaint shops.
          </p>
          <p>
            Margate Fishing Pier thrusts into the Atlantic, delivering
            breathtaking ocean views. The webcam captures the serene yet
            animated beach scene. Margate's peaceful shores offer a calm escape
            from the bustling boardwalks.
          </p>
          <p>
            Lastly, Atlantic City's Boardwalk cam reveals the famed four-mile
            stretch. Visitors can meander along this iconic path, feeling the
            ocean breeze while soaking up the vibrant nightlife. From casinos to
            restaurants, this energetic stretch offers something for everyone,
            blending the pulse of the city with the calming sea.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Relax on the sands of Hampton Beach.</li>
              <li>Take a boat tour on Lake Winnipesaukee.</li>
              <li>Explore Portsmouth Harbor by kayak.</li>
              <li>Watch the waves at Rye Beach.</li>
              <li>Fish from the docks at Weirs Beach.</li>
              <li>Paddleboard on Squam Lake.</li>
              <li>Walk along the shores of Odiorne Point.</li>
              <li>Visit Jenness State Beach for a swim.</li>
              <li>Stroll the boardwalk at Hampton Beach.</li>
              <li>Spot wildlife in Great Bay Estuary.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/39.3581,-74.4229"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Weather in Atlantic City
                </a>{' '}
                - Check local forecasts before hitting the beach.
              </li>
              <li>
                <a
                  href="https://visitnj.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit New Jersey
                </a>{' '}
                - Discover things to do, places to stay, and attractions.
              </li>
              <li>
                <a
                  href="https://oceancityvacation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ocean City Vacation
                </a>{' '}
                - Plan your trip to Ocean City with event listings and guides.
              </li>
              <li>
                <a
                  href="https://www.atlanticcitynj.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Atlantic City Tourism
                </a>{' '}
                - Learn about top attractions, events, and local tips.
              </li>
              <li>
                <a
                  href="https://www.capemay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cape May Guide
                </a>{' '}
                - Explore Cape May's beaches, restaurants, and activities.
              </li>
              <li>
                <a
                  href="https://www.visitavalonnj.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Avalon
                </a>{' '}
                - Find dining spots, events, and outdoor activities in Avalon.
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
    cams = cams.filter((cam) => cam.state === 'New Jersey')

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
