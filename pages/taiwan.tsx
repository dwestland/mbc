import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
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
  const camPageTargetType = 'Taiwan'

  const pageSections = findStates(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((state: { state: string }) => state.state)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Webcams - MyBeachCams`}
      documentDescription={`Explore beach webcams from ${camPageTargetType} including ${
        pageSectionsArray.length === 1
          ? pageSectionsArray[0]
          : `${pageSectionsArray.slice(0, -1).join(', ')} and ${
              pageSectionsArray[pageSectionsArray.length - 1]
            }.`
      }`}
    >
      <div className="layout">
        <h1>{camPageTargetType} Webcams</h1>
        <h3 style={{ marginTop: '0' }}>
          Explore beach webcams from {camPageTargetType} including{' '}
          {pageSectionsArray.length === 1
            ? pageSectionsArray[0]
            : `${pageSectionsArray.slice(0, -1).join(', ')} and ${
                pageSectionsArray[pageSectionsArray.length - 1]
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
            Explore Taiwan's vibrant coastal treasures through live webcams.
            From Yongan Fishing Harbor's iconic Seaview Bridge to the bustling
            Nanfang'ao First Fishing Port, discover Taiwan's maritime charm.
            Watch boats glide near Neipi Beach and Tofu Cape, a paradise for
            seafood lovers. Dashshibi Hill offers sweeping ocean views, tranquil
            trails, and scenic pavilions that captivate visitors.
          </p>

          <p>
            At Duoliang Train Station in Taitung, witness trains racing beside
            the Pacific's endless blue. Dongshi Fisherman's Wharf in Chiayi
            County reveals a lively waterfront and historic charm. Taiwan's
            beaches, harbors, and hilltop views paint a vivid picture of island
            life. Plan your next adventure or savor the serene beauty of
            Taiwan's shores from anywhere.
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
            Taiwan's coastline is a tapestry of natural beauty and culture.
            Yongan Fishing Harbor, at Shezu Creek's estuary, is a lively spot.
            Its Seaview Bridge shines after dark, drawing visitors to its glow.
            The lobster-shaped market nearby offers fresh seafood and local
            crafts.
          </p>

          <p>
            Nanfang'ao First Fishing Port reflects Taiwan's rich traditions. The
            port bustles with fishing boats and market life. Close by, the
            Nantian Temple stands as a tribute to Mazu, the sea goddess. The
            Second Fishing Port adds charm with views of Neipi Beach. Tofu Cape,
            a haven for seafood lovers, is a short distance away.
          </p>

          <p>
            Dashshibi Hill is a quiet escape along the coast. The hill provides
            stunning ocean vistas and peaceful walking paths. Pavilions dot the
            area, perfect for resting and enjoying the view. It's a serene spot
            for visitors seeking a break from city life.
          </p>

          <p>
            Duoliang Train Station in Taitung offers a unique scene. Trains
            thunder past as the Pacific stretches to the horizon. The mix of
            mountains, ocean, and railways is breathtaking. It's a must-see for
            travelers exploring Taiwan's eastern shores.
          </p>

          <p>
            Dongshi Fisherman's Wharf in Chiayi County brings a mix of history
            and energy. Its vibrant waterfront is alive with culture and trade.
            The wharf's scenic beaches and fresh seafood draw locals and
            tourists alike. The area feels timeless yet full of life.
          </p>

          <p>
            Each webcam reveals a slice of Taiwan's coastal wonder. Whether
            planning a trip or exploring virtually, these views inspire.
            Taiwan's shores invite you to discover their unique charm, blending
            natural beauty with cultural richness.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Stroll along Fulong Beach's golden sands.</li>
              <li>Visit Kenting National Park's coastal trails.</li>
              <li>Explore the seafood markets at Nanfang'ao.</li>
              <li>Take a boat tour around Penghu Archipelago.</li>
              <li>Relax at Baishawan Beach's clear waters.</li>
              <li>Walk the wooden paths at Dongshi Fisherman's Wharf.</li>
              <li>Snorkel at Green Island's coral reefs.</li>
              <li>Enjoy views from Dashshibi Hill's pavilions.</li>
              <li>Watch the sunset at Tofu Cape's rocky shore.</li>
              <li>Catch waves at Jialeshui's surf-friendly beach.</li>{' '}
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://eng.taiwan.net.tw/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Taiwan Tourism Bureau
                </a>{' '}
                - Explore Taiwan's attractions, cultural highlights, and travel
                tips.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/23.6975,120.9605"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Taiwan Weather
                </a>{' '}
                - Get real-time weather updates for your trip.
              </li>
              <li>
                <a
                  href="https://www.lonelyplanet.com/taiwan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lonely Planet Taiwan
                </a>{' '}
                - Get travel advice, guides, and inspiration.
              </li>
              <li>
                <a
                  href="https://www.taoyuan-airport.com/?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Taoyuan Airport
                </a>{' '}
                - Find flight info and travel services in Taiwan.
              </li>
              <li>
                <a
                  href="https://www.taiwannews.com.tw/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Taiwan News
                </a>{' '}
                - Stay updated with Taiwan's latest news and events.
              </li>
              <li>
                <a
                  href="https://www.taipeitimes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Taipei Times
                </a>{' '}
                - Read comprehensive news coverage from Taiwan and beyond.
              </li>
              <li>
                <a
                  href="https://www.taiwanstartshere.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Taiwan Starts Here
                </a>{' '}
                - Access travel guides and tips for exploring Taiwan.
              </li>
              <li>
                <a
                  href="https://www.taiwanobsessed.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Taiwan Obsessed
                </a>{' '}
                - Discover in-depth articles and travel itineraries for Taiwan.
              </li>
              <li>
                <a
                  href="https://www.nomadicmatt.com/travel-guides/taiwan-travel-guide/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nomadic Matt's Taiwan Guide
                </a>{' '}
                - Find budget travel advice and destination information.
              </li>
              <li>
                <a
                  href="https://www.taiwan-panorama.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Taiwan Panorama
                </a>{' '}
                - Learn about Taiwan's culture, society, and lifestyle.
              </li>
              <li>
                <a
                  href="https://www.taiwan.gov.tw/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Taiwan Government Portal
                </a>{' '}
                - Find official information and services for visitors.
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
    cams = cams.filter((cam) => cam.country === 'Taiwan')

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
