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
  const camPageType = 'country'
  console.log('camPageType:', camPageType)
  const camPageTargetType = 'Mexico'

  const pageSections = findStates(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((state: { state: string }) => state.state)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription={`Browse hundreds of beach webcams from ${camPageTargetType}, including ${pageSectionsArray
        .slice(0, 3)
        .join(', ')} and more.`}
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
            See Mexico's coastal gems. Gaze through live webcams in Cancun,
            Tulum, Puerto Vallarta, Playa del Carmen, and Cozumel. Each spot
            teems with its own allure. Cancun dazzles with powdery sands and
            electric nightlife. Tulum whispers of ancient ruins and turquoise
            waves. Puerto Vallarta merges traditional charm with sleek
            modernity. Playa del Carmen invites you to stroll through seaside
            shops and savor local cuisine. Cozumel, a diver's haven, reveals
            vibrant coral wonders. Harness these webcams to glimpse the weather,
            plan your adventure, or simply drift into a seaside reverie. Each
            link pulls you closer to Mexico's radiant shores.
          </p>
        </ShowMoreText>

        <RenderStatesSections pageSections={pageSections ?? []} cams={cams} />

        <ShowMoreText
          lines={4}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="... "
        >
          {/* CUSTOMIZE PAGE 4 of 5 - Add second text ~300 words, */}
          {/* Things to Do and Links and Info */}
          <p>
            Mexico's coastlines lure you into adventure. Immerse yourself in
            these vibrant locations through our webcams. Each spot promises a
            distinct journey. Wander, plan your trip or envision your paradise.
          </p>
          <p>
            Cancun teems with more than just beaches. It's where luxury fuses
            with nature. Roam through the bustling Hotel Zone. Bask in pristine
            sands and translucent waters. Drift to nearby Isla Mujeres. Its
            tranquil beaches cradle the soul, just a short boat ride away.
            Witness the sunsets as they blaze across the sky in vibrant hues.
          </p>
          <p>
            Tulum enthralls with its blend of history and nature. The ancient
            Mayan ruins loom against the horizon. The beaches are sanctuaries of
            powdery sands and azure waves. Dive into the cenotes. These natural
            sinkholes are hidden treasures. Traverse Tulum's eco-parks, where
            nature thrives untouched.
          </p>
          <p>
            Puerto Vallarta melds old-world charm with contemporary grace.
            Saunter along the cobblestone streets of the Zona Romantica. This
            historic district pulses with culture. The Malecon, a seaside
            promenade, pulsates with art and lively entertainment. The beaches
            beckon for relaxation. Discover hidden coves and weave through
            nearby jungle trails.
          </p>
          <p>
            Playa del Carmen invites you to immerse in its vibrant streets.
            Quinta Avenida is the town's beating heart. It's a rich mix of
            shops, cafes, and local markets. The beaches here calm with their
            gentle waves. Cozumel lies just a ferry ride away. There,
            world-class diving spots await exploration.
          </p>
          <p>
            Cozumel mesmerizes divers with its coral reefs teeming with marine
            life. The waters are clear, unveiling underwater wonders in vivid
            detail. Uncover Chankanaab Park. Here, you can snorkel, dive, or
            relax in lush gardens. Cozumel also serves as a gateway to exploring
            a rich underwater world.
          </p>
          <p>
            These webcams offer a gateway into paradise. Use them to map your
            trip or indulge in a virtual retreat. Each location holds something
            exceptional. From ancient ruins to vibrant coral reefs, Mexico's
            coasts are calling. The sun, sea, and sand are just a click away.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Immerse in the Great Maya Reef's depths.</li>
              <li>Unearth ancient ruins in Tulum.</li>
              <li>Meander through Cancun's Hotel Zone.</li>
              <li>Bask on Playa del Carmen's shores.</li>
              <li>Plunge into Cozumel's vibrant reefs.</li>
              <li>Descend into the cenotes near Tulum.</li>
              <li>Saunter along the Malecon in Puerto Vallarta.</li>
              <li>Drift to Isla Mujeres for tranquil sands.</li>
              <li>Browse at Quinta Avenida in Playa del Carmen.</li>
              <li>Savor sunset sails off Cancun's coast.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/21.1619,-86.8515"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cancun Weather
                </a>{' '}
                - Monitor local weather patterns and sculpt your day.
              </li>
              <li>
                <a
                  href="https://www.visitmexico.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Mexico
                </a>{' '}
                - Unearth top attractions, local events, and travel insights.
              </li>
              <li>
                <a
                  href="https://www.lonelyplanet.com/mexico/cancun"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lonely Planet Cancun
                </a>{' '}
                - Delve into expert travel tips and explore must-see locales.
              </li>
              <li>
                <a
                  href="https://www.tripadvisor.com/Tourism-g150807-Cancun_Yucatan_Peninsula-Vacations.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TripAdvisor Cancun
                </a>{' '}
                - Peruse traveler reviews, top eateries, and activity ideas.
              </li>
              <li>
                <a
                  href="https://www.alltrails.com/mexico"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AllTrails Mexico
                </a>{' '}
                - Uncover hiking trails, detailed maps, and outdoor escapades.
              </li>
              <li>
                <a
                  href="https://www.lonelyplanet.com/mexico/yucatan-peninsula/tulum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lonely Planet Tulum
                </a>{' '}
                - Discover local landmarks, hidden wonders, and travel advice.
              </li>
              <li>
                <a
                  href="https://www.cancun.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cancun.com
                </a>{' '}
                - Explore Cancun's best beaches, nightlife, and adventure tours.
              </li>
              <li>
                <a
                  href="https://www.cozumelparks.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cozumel Parks
                </a>{' '}
                - Experience Cozumel’s marine parks, eco-tours, and snorkeling
                spots.
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
    cams = cams.filter((cam) => cam.country === 'Mexico')

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
