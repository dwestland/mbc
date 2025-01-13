import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import AdLarge from '@/components/AdLarge'
import CamsPageMap from '@/components/CamsPageMap'
// import RenderAreaSections from '@/components/RenderAreaSections'
import data from '@/data/camLocationAreas'
import { findAreas } from '@/utils/common'
import * as types from '@/utils/types'
import ErrorLoadingWebcams from '@/components/ErrorLoadingWebcams'
import MoreLosAngelesCams from '@/components/MoreLosAngelesCams'
import MoreSanDiegoCams from '@/components/MoreSanDiegoCams'
import MoreCentralCoastCams from '@/components/MoreCentralCoastCams'
import MoreSanFranciscoCams from '@/components/MoreSanFranciscoCams'
import AdLeaderboard from '@/components/AdLeaderboard'

const StateAreasPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'California'

  const pageAreas = findAreas(data, camPageTargetType)
  const pageAreasArray = pageAreas
    ? pageAreas.map((area: { area: string }) => area.area)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      // TODO:
      documentTitle={`${camPageTargetType} Webcams - MyBeachCams`}
      documentDescription="Best beach webcams in California featuring San Diego, Los Angeles, Central Coast and San Francisco and more."
    >
      <div className="layout">
        <h1>{camPageTargetType} Webcams</h1>
        <h3 style={{ marginTop: '0' }}>
          Featuring beach webcams from{' '}
          {pageAreasArray.slice(0, -1).join(', ') +
            (pageAreasArray.length > 1
              ? ` and ${pageAreasArray[pageAreasArray.length - 1]}`
              : '')}{' '}
        </h3>
        <div className="links-container">
          <ul>
            <li>
              <Link href="/california/san-diego/">
                <a>San Diego</a>
              </Link>
            </li>
            <li>
              <Link href="/california/los-angeles/">
                <a>Los Angeles</a>
              </Link>
            </li>
            <li>
              <Link href="/california/central-coast/">
                <a>Central Coast</a>
              </Link>
            </li>
            <li>
              <Link href="/california/san-francisco/">
                <a>San Francisco</a>
              </Link>
            </li>
          </ul>
        </div>
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
            California's coast offers endless adventures and stunning views.
            From San Diego to San Francisco, explore diverse beaches and
            bustling harbors through live webcams. In San Diego, enjoy sweeping
            views of Mission Bay, Coronado Beach, and Ocean Beach, catch surfers
            at Scripps Pier, or watch marine life at Birch Aquarium's kelp
            forest cam. Los Angeles brings iconic spots like Santa Monica Pier,
            Venice Beach, and the serene shores of Catalina Island, with lively
            boardwalks and Pacific views from Long Beach Harbor. Head to the
            Central Coast for Pismo Beach, Big Sur's cliffs, and Pebble Beach's
            famous golf course, while Carpinteria and Cambria webcams showcase
            tranquil settings and vibrant sunsets. In San Francisco, webcams
            capture the Golden Gate Bridge, Muir Beach's cove, and the Mendocino
            coast. Whether planning a trip or enjoying the views, California's
            webcams connect you to its coastal magic.
          </p>
        </ShowMoreText>

        <h2>
          <Link href="/california/los-angeles/">Los Angeles Webcams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            Los Angeles offers iconic beaches and ocean views. Visit Venice
            Beach for art and street performers. Santa Monica Pier is a favorite
            spot. Long Beach features a lively harbor. Explore Catalina Island's
            scenic shores. Pacific Palisades has stunning cliffs and surf. LA's
            coastline is a mix of relaxation and vibrant activity.
          </p>
        </ShowMoreText>
        <MoreLosAngelesCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'Los Angeles').slice(0, 7),
          }}
        />
        <AdLeaderboard />

        <h2>
          <Link href="/california/san-diego/">San Diego Webcams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            San Diego is known for its sunny beaches and bays. Visit Coronado
            Beach for soft sands and ocean views. Mission Bay is perfect for
            water sports. La Jolla offers tide pools and marine life. Ocean
            Beach has a lively pier and boardwalk. San Diego's coast blends
            beauty and adventure.
          </p>
        </ShowMoreText>
        <MoreSanDiegoCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'San Diego').slice(0, 7),
          }}
        />
        <AdLeaderboard />

        <h2>
          <Link href="/california/central-coast/">Central Coast Webcams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            The Central Coast features stunning cliffs and quiet beaches. Big
            Sur offers rugged views and scenic trails. Pismo Beach is great for
            sunsets and clamming. Monterey Bay is home to diverse marine life.
            Pebble Beach showcases iconic golf courses. Carpinteria and Cambria
            provide peaceful escapes. The Central Coast is a haven for nature
            lovers.
          </p>
        </ShowMoreText>
        <MoreCentralCoastCams
          cams={{
            cams: cams
              .filter((cam) => cam.area === 'Central Coast')
              .slice(0, 7),
          }}
        />
        <AdLeaderboard />

        <h2>
          <Link href="/california/san-francisco/">San Francisco Webcams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            San Francisco blends city life with coastal beauty. The Golden Gate
            Bridge towers over the bay. Ocean Beach offers wide sandy stretches.
            Muir Beach has a quiet cove and trails. The Mendocino coast is
            rugged and scenic. Explore the bay's waterfronts and iconic
            landmarks. San Francisco's coast is rich with sights and
            experiences.
          </p>
        </ShowMoreText>
        <MoreSanFranciscoCams
          cams={{
            cams: cams
              .filter((cam) => cam.area === 'San Francisco')
              .slice(0, 7),
          }}
        />
        <AdLeaderboard />
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
            California's coastline is a treasure of natural beauty. From sandy
            beaches to dramatic cliffs, this state has it all. With live
            webcams, you can explore it from anywhere.
          </p>
          <p>
            In San Diego, experience the charm of Mission Bay and its calm
            waters. Watch boats glide past on the Coronado cam or surfers ride
            waves at Ocean Beach. The Scripps Pier cam shows sea life and ocean
            conditions. Visit the Birch Aquarium cam for a glimpse beneath the
            waves.
          </p>
          <p>
            Los Angeles offers iconic spots and vibrant beaches. The Santa
            Monica Pier cam showcases the bustling boardwalk. Venice Beach
            brings a mix of art, surf, and sun. From Catalina Island, enjoy
            breathtaking views of Avalon Harbor or Two Harbors. Long Beach
            Harbor provides a serene backdrop of the Pacific.
          </p>
          <p>
            The Central Coast offers peace and scenic vistas. Pismo Beach is
            perfect for sunsets and clam digging. Big Sur's webcam reveals
            rugged cliffs and the vast ocean. Pebble Beach Golf Links shows the
            18th green against a coastal backdrop. Carpinteria Beach is a hidden
            gem with quiet shores and views of Santa Barbara.
          </p>
          <p>
            In San Francisco, webcams highlight the city's iconic landmarks. The
            Golden Gate Bridge dominates the skyline. Ocean Beach offers endless
            sandy stretches south of the bridge. Muir Beach is a tranquil escape
            with its lagoon and quiet cove. Mendocino's Headlands cam captures
            the beauty of Northern California's rugged coast.
          </p>
          <p>
            Whether planning a trip or exploring virtually, these webcams
            provide a window to California's dynamic shores. Witness its diverse
            landscapes and vibrant coastal life. Each cam offers a unique
            perspective, connecting you to the magic of the Golden State. From
            San Diego to San Francisco, every location has a story to tell.
          </p>
        </ShowMoreText>
        {/* <hr /> */}
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Walk along the Santa Monica Pier.</li>
              <li>Watch surfers at Venice Beach.</li>
              <li>Explore tide pools in La Jolla.</li>
              <li>Visit Mission Bay for paddleboarding.</li>
              <li>Take a ferry to Catalina Island.</li>
              <li>Relax on Coronado Beach's sandy shores.</li>
              <li>Hike the trails at Big Sur.</li>
              <li>Stroll the boardwalk at Ocean Beach.</li>
              <li>View wildlife at Monterey Bay Aquarium.</li>
              <li>Watch sunsets from Pismo Beach.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitcalifornia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit California
                </a>{' '}
                - Discover travel tips, events, and attractions across the
                state.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/34.0161,-118.4996"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Santa Monica Weather
                </a>{' '}
                - Get real-time weather updates for Santa Monica Pier.
              </li>
              <li>
                <a
                  href="https://www.nps.gov/state/ca/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Park Service
                </a>{' '}
                - Plan visits to California's national parks and preserves.
              </li>
              <li>
                <a
                  href="https://www.sandiego.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  San Diego Tourism Authority
                </a>{' '}
                - Find activities, dining options, and beach guides in San
                Diego.
              </li>
              <li>
                <a
                  href="https://www.visitcatalinaisland.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Catalina Island
                </a>{' '}
                - Learn about ferry schedules, island attractions, and local
                events.
              </li>
              <li>
                <a
                  href="https://www.bigsurcalifornia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Big Sur Visitors Guide
                </a>{' '}
                - Explore hiking trails, scenic drives, and local landmarks.
              </li>
              <li>
                <a
                  href="https://aqicn.org/map/los-angeles/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Los Angeles Air Quality
                </a>{' '}
                - Check air quality conditions for outdoor activities in LA.
              </li>
              <li>
                <a
                  href="https://www.sfgate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SF Gate
                </a>{' '}
                - Stay informed on San Francisco's weather, news, and local
                happenings.
              </li>
              <li>
                <a
                  href="https://www.californiabeaches.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  California Beaches
                </a>{' '}
                - Explore detailed guides to beaches and coastal activities.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      {/* <h2>
        <Link href="/">More Beach Cams</Link>
      </h2>{' '} */}
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
    cams = cams.filter((cam) => cam.state === 'California')

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
