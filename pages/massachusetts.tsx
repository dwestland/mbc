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
  const camPageTargetType = 'Massachusetts'

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
            Massachusetts unveils its coastal charm through captivating
            waterfront scenes. The Woods Hole Harbor Cam in Falmouth displays
            ferry journeys bound for Martha's Vineyard, drawing in explorers.
            Over in Barnstable Harbor, the Cape Cod Cam showcases the bustle of
            dockside life, with boats gliding past and diners savoring meals at
            Mattakeese Wharf. In Nahant, the Ocean House Surf Cam catches waves
            crashing onto Nahant Beach. The Merrimack River Cam in Newburyport
            frames the Salisbury Beach Jetty, where boats drift and local shops
            hum with life. These webcams transport you to Massachusetts' iconic
            waterways, revealing their dynamic pulse.
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
            Massachusetts reveals its coastal splendor through vibrant, living
            landscapes. The Woods Hole Harbor Cam in Falmouth brings the ferry
            terminal into view, unveiling boats as they embark on voyages to
            Martha's Vineyard. This harbor pulses with energy, as ferries ferry
            travelers across the sound. Falmouth, with its rich maritime
            heritage, brims with history, where the sea and town intertwine.
          </p>
          <p>
            Further north, the Merrimack River Cam in Newburyport captures where
            the Merrimack River merges with the Atlantic. From here, the
            Salisbury Beach Jetty unfolds along with the scenic Plum Island. The
            area thrives with boating, and the nearby downtown bustles with
            shops and dining. The river's gentle flow contrasts the vibrant
            activity along the shore.
          </p>
          <p>
            On Cape Cod, the Cape Cod Cam streams Barnstable Harbor in full
            motion. Barnstable, with its deep maritime roots, hums with life.
            From Mattakeese Wharf, you glimpse boats docking and setting sail,
            creating a scene of constant movement. Diners enjoy fresh seafood,
            surrounded by the sights and sounds of a busy harbor.
          </p>
          <p>
            In Nahant, the Ocean House Surf Cam captures the crashing waves of
            Nahant Beach. This camera, hosted by Ocean House Surf & Skate Shop,
            showcases the surf as it rolls into the shore. Nahant's beach is
            small but draws surfers and beach lovers seeking the thrill of the
            ocean's edge.
          </p>
          <p>
            These webcams across Massachusetts not only show views but immerse
            you in the essence of its waterside life. They expose the dynamic
            pulse of activity and the serene beauty that defines the coastlines,
            connecting you to the heart of the state's waterways.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Relax on Nahant Beach and enjoy the surf.</li>
              <li>Visit Cape Cod and explore Barnstable Harbor.</li>
              <li>Take a ferry ride from Woods Hole to Martha's Vineyard.</li>
              <li>Stroll the shores of Plum Island in Newburyport.</li>
              <li>Watch boats sail from Falmouth's bustling harbor.</li>
              <li>Kayak the calm waters of the Merrimack River.</li>
              <li>Surf the waves along the coast at Nahant.</li>
              <li>Dine at Mattakeese Wharf with harbor views.</li>
              <li>Fish from the Salisbury Beach Jetty.</li>
              <li>Walk the sandy beaches of Cape Cod.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.capecodchamber.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cape Cod Chamber of Commerce
                </a>{' '}
                - Discover Cape Cod events, dining, and travel tips.
              </li>
              <li>
                <a
                  href="https://www.mvy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Martha's Vineyard Chamber of Commerce
                </a>{' '}
                - Explore activities, lodging, and travel guides for Martha's
                Vineyard.
              </li>
              <li>
                <a
                  href="https://www.visit-massachusetts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Massachusetts
                </a>{' '}
                - Plan your trip with attractions, beach guides, and lodging.
              </li>
              <li>
                <a
                  href="https://www.massvacation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Massachusetts Office of Travel and Tourism
                </a>{' '}
                - Browse local events, beaches, and travel guides across the
                state.
              </li>
              <li>
                <a
                  href="https://www.nps.gov/caco/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cape Cod National Seashore
                </a>{' '}
                - Explore hiking trails, beaches, and historic sites along Cape
                Cod.
              </li>
              <li>
                <a
                  href="https://www.whales.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whale and Dolphin Conservation
                </a>{' '}
                - Learn about whale watching tours and conservation efforts in
                Massachusetts.
              </li>
              <li>
                <a
                  href="https://www.massaudubon.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mass Audubon
                </a>{' '}
                - Discover birdwatching spots, nature reserves, and coastal
                habitats.
              </li>
              <li>
                <a
                  href="https://www.bostonharborislands.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Boston Harbor Islands
                </a>{' '}
                - Plan visits to the islands, with ferry schedules, hikes, and
                beaches.
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
    cams = cams.filter((cam) => cam.state === 'Massachusetts')

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
