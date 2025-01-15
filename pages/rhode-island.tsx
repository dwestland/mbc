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
  const camPageTargetType = 'Rhode Island'

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
            Rhode Island's coast beckons with striking views and boundless
            discoveries. In Wakefield, the OceanMist Cam immerses you in the
            pulse of a lively beach town. Wander to nearby gems like Theater By
            The Sea or sip at Whalers Brewing Company. For sailing lovers, the
            Sightsailing Cam in Newport reveals boats drifting across
            Narragansett Bay. Narragansett Beach offers two live streams: Warm
            Winds Surf Supply showcases the surf as it roars ashore, while Aqua
            Blue Hotel frames a sweeping panorama of the beach. These webcams
            unveil real-time weather, surf dynamics, and scenic beauty, ideal
            for planning or wandering virtually.
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
            Rhode Island's shoreline captivates with more than just sights. It's
            where history, nature, and the ocean converge. The OceanMist Cam in
            Wakefield breathes life into the town's rhythm. It frames the ebb
            and pulse of surfers and beachgoers. Nearby, Theater By The Sea
            anchors the town's cultural spirit. Whalers Brewing Company invites
            you to indulge in local brews. Each frame immerses you in the town's
            vibrant atmosphere.
          </p>
          <p>
            In Newport, the Sightsailing Cam unlocks a portal to the bay.
            Sailboats sweep across Narragansett Bay, weaving a tranquil yet
            ever-moving tapestry. Newport is steeped in history and sailing
            traditions. This cam pulls you into that legacy, capturing the
            shifting currents of the bay. If you crave the essence of maritime
            life, this view unveils Rhode Island's seafaring heart.
          </p>
          <p>
            Narragansett Beach beckons surfers and beach enthusiasts alike. The
            Warm Winds Surf Supply Cam seizes the ocean's pulse, showcasing the
            waves in full force. You can witness the tides carve their way onto
            the shore, channeling the Atlantic's raw power. Another cam at Aqua
            Blue Hotel unveils a sweeping view of the entire beach. This vantage
            point stretches along the coastline, enveloping you in a panoramic
            expanse. Narragansett is a haven for those drawn to the surf or the
            serenity of the shore.
          </p>
          <p>
            Each of these webcams transcends mere visuals. They invite you to
            shape your plans or whisk you away to the coast. From the bustling
            beaches to the serene harbor, Rhode Island's coastline enchants and
            stirs. Immerse yourself in these cams for a genuine coastal journey.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Relax on Narragansett Town Beach.</li>
              <li>Stroll along the Cliff Walk in Newport.</li>
              <li>Sail around Newport Harbor.</li>
              <li>Surf at Matunuck Beach in South Kingstown.</li>
              <li>Explore the historic Fort Adams State Park.</li>
              <li>Swim at East Matunuck State Beach.</li>
              <li>Visit the lighthouse at Point Judith.</li>
              <li>Kayak in Ninigret Pond in Charlestown.</li>
              <li>Walk the sandy shores of Misquamicut Beach.</li>
              <li>Fish off the Newport Harbor pier.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitrhodeisland.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Rhode Island
                </a>{' '}
                - Discover attractions, events, and travel guides.
              </li>
              <li>
                <a
                  href="https://www.nps.gov/colo/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colonial National Historical Park
                </a>{' '}
                - Explore historical landmarks and coastal scenery.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/41.3744,-71.5452"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wakefield Weather
                </a>{' '}
                - Check the latest weather and surf conditions.
              </li>
              <li>
                <a
                  href="https://www.sightsailing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SightSailing Newport
                </a>{' '}
                - Book sailing trips and explore Narragansett Bay.
              </li>
              <li>
                <a
                  href="https://www.narragansettri.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Narragansett Town
                </a>{' '}
                - Learn about beach access, local events, and facilities.
              </li>
              <li>
                <a
                  href="https://www.riparks.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rhode Island State Parks
                </a>{' '}
                - Find park information, activities, and reservation details.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/41.4307,-71.4590"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Narragansett Weather
                </a>{' '}
                - View real-time weather and surf updates.
              </li>
              <li>
                <a
                  href="https://www.aquabluehotels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aqua Blue Hotel
                </a>{' '}
                - Explore lodging and beachfront activities at Narragansett
                Beach.
              </li>
              <li>
                <a
                  href="https://www.whalers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whalers Brewing Company
                </a>{' '}
                - Discover local craft beers and brewery tours.
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
    cams = cams.filter((cam) => cam.state === 'Rhode Island')

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
