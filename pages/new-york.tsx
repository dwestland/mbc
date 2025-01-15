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
  const camPageTargetType = 'New York'

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
            Immerse yourself in New York's coastal scenes through live webcams.
            Marvel at Lower Manhattan's skyline while ferries slice through the
            East River's shimmering waters. Witness the Statue of Liberty rising
            from the harbor as boats drift past. Overlook the Brooklyn Bridge's
            majestic sprawl, connecting the city's boroughs. Venture east to
            Long Island, where Rogers Beach and Tobay Beach unfurl their sandy
            stretches, inviting you to roam the shore. In Hampton Bays, watch
            the Ponquogue Bridge soar over Shinnecock Bay, while boats bob
            lazily at Shinnecock Fishing Dock. These webcams reveal New York's
            vibrant fusion of cityscape and seaside tranquility.
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
            Unveil New York's vibrant coastal beauty through these dynamic
            webcams. Lower Manhattan's skyline towers over the restless East
            River, a scene that pulses with the city's energy. Ferries carve
            through the water, weaving between the boroughs, while the Statue of
            Liberty ascends in the distance. From Brooklyn, iconic landmarks
            like the Brooklyn Bridge and One World Trade Center rise
            dramatically, framing the harbor.
          </p>
          <p>
            Journey to Long Island, where a quieter, coastal retreat unfolds.
            Tobay Beach's soft sands sprawl across Jones Beach Island, with
            waves lapping at the shore. Beachgoers meander along the water's
            edge, as the ocean stretches into the horizon. Further east, Rogers
            Beach in Westhampton reveals ocean views framed by windswept dunes.
            This peaceful stretch entices visitors to linger, with the
            Atlantic's expanse before them.
          </p>
          <p>
            In Hampton Bays, the Ponquogue Bridge vaults over Shinnecock Bay,
            offering a striking view. Boats glide below, as Beach Road snakes
            off into the distance. Nearby, the Shinnecock Fishing Dock thrums
            with life. Boats rest at anchor, their masts swaying as tides shift.
            This lively scene offers a glimpse into New York's deep-rooted
            fishing culture and coastal allure.
          </p>
          <p>
            These webcams provide a vivid window into New York's diverse mix of
            urban intensity and coastal tranquility. From the gleaming
            skyscrapers of Manhattan to the windswept beaches of Long Island,
            you can traverse these landscapes from your screen. Whether planning
            a trip or simply exploring, these views breathe life into New York's
            unique blend of city and sea.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Stroll along Jones Beach State Park.</li>
              <li>Swim at Long Beach on Long Island.</li>
              <li>Explore Fire Island National Seashore.</li>
              <li>Surf the waves at Rockaway Beach.</li>
              <li>Visit the Statue of Liberty by ferry.</li>
              <li>Kayak in Shinnecock Bay.</li>
              <li>Fish off the docks at Montauk Point.</li>
              <li>Walk the boardwalk at Coney Island Beach.</li>
              <li>Sail from Sag Harbor Marina.</li>
              <li>Take a boat tour around Manhattan Island.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.nycgo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NYC Official Guide
                </a>{' '}
                - Discover attractions, dining, and events in New York City.
              </li>
              <li>
                <a
                  href="https://www.iloveny.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I Love NY
                </a>{' '}
                - Plan your trip, find events, and explore New York's regions.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/40.7128,-74.0060"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Weather in New York
                </a>{' '}
                - Check current weather for New York City and surrounding areas.
              </li>
              <li>
                <a
                  href="https://www.nps.gov/fiis/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fire Island National Seashore
                </a>{' '}
                - Explore the beaches, trails, and visitor services at Fire
                Island.
              </li>
              <li>
                <a
                  href="https://parks.ny.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New York State Parks
                </a>{' '}
                - Discover parks, beaches, and outdoor activities across the
                state.
              </li>
              <li>
                <a
                  href="https://www.longisland.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Long Island Guide
                </a>{' '}
                - Learn about beaches, attractions, and events on Long Island.
              </li>
              <li>
                <a
                  href="https://www.mta.info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MTA New York Transit
                </a>{' '}
                - Navigate the subway, buses, and trains across the city and
                beyond.
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
    cams = cams.filter((cam) => cam.state === 'New York')

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
