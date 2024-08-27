import React from 'react'
import { InferGetStaticPropsType } from 'next'
import ShowMoreText from 'react-show-more-text'
import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
import CamCard from '@/components/CamCard'
import data from '@/data/camLocationAreas'
import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'
import { getSixDigitRandom } from '@/utils/common'
import MoreHawaiiCams from '@/components/MoreHawaiiCams'
import Link from 'next/link'
import * as types from '@/utils/types'

const MexicoPage = ({
  cams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  // Ensure cams and cams.cams are defined
  if (!cams || !cams.cams || cams.cams.length === 0) {
    return (
      <Layout
        documentTitle="Beach Cams in Miami and South Beach Florida"
        documentDescription="Best live web cams and surf cams at Miami Beach and South Beach in Florida."
      >
        <div className="layout">
          <h1>No cams available</h1>
        </div>
      </Layout>
    )
  }

  // Next modal SSR
  const CamsMap: any = dynamic(() => import('@/components/CamsMap'), {
    ssr: false,
  })
  const hawaiiCams: any = cams

  const country = 'Mexico'
  const countryObject = data.countries.find((ele) => ele.country === country)

  if (!countryObject) {
    return null
  }

  const states = countryObject.states || []

  // Create vectors for map
  const vectors = cams.cams
    .filter((cam: types.Cams) => cam.lat !== null && cam.lng !== null)
    .map((cam: types.Cams) => ({
      name: cam.title,
      lat: cam.lat,
      lng: cam.lng,
      id: cam.id,
      imageName: cam.imageName,
    }))

  const stateSections = states.map((stateObj) => {
    const stateCams = cams.cams.filter(
      (cam: types.Cams) => cam.state === stateObj.state
    )

    if (stateCams.length === 0) {
      return null
    }

    return (
      <div key={getSixDigitRandom()}>
        <AdLeaderboard />
        <h2>{stateObj.state} Webcams</h2>
        <div className="cam-container">
          {stateCams.map((cam: types.Cams) => (
            <CamCard key={cam.id} cam={cam} />
          ))}
        </div>
      </div>
    )
  })

  return (
    <Layout
      documentTitle="Beach webcams in Mexico - MyBeachCams.com"
      documentDescription="See Mexico's prime beaches through our live webcams. Encounter Cancun, Tulum, Cozumel, and more."
    >
      <div className="layout">
        <h1>Mexico Beach Webcams</h1>
        <div className="content-and-ad">
          <div className="content">
            <CamsMap vectors={vectors} />
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
          truncatedEndingComponent=" ... "
        >
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
        {stateSections}
        <div className="panel">
          <ShowMoreText
            lines={4}
            more="show more"
            less="show less"
            anchorClass="anchorClass"
            truncatedEndingComponent=" ... "
          >
            <p>
              <p>
                Mexico's coastlines lure you into adventure. Immerse yourself in
                these vibrant locations through our webcams. Each spot promises
                a distinct journey. Wander, plan your trip or envision your
                paradise.
              </p>

              <p>
                Cancun teems with more than just beaches. It's where luxury
                fuses with nature. Roam through the bustling Hotel Zone. Bask in
                pristine sands and translucent waters. Drift to nearby Isla
                Mujeres. Its tranquil beaches cradle the soul, just a short boat
                ride away. Witness the sunsets as they blaze across the sky in
                vibrant hues.
              </p>

              <p>
                Tulum enthralls with its blend of history and nature. The
                ancient Mayan ruins loom against the horizon. The beaches are
                sanctuaries of powdery sands and azure waves. Dive into the
                cenotes. These natural sinkholes are hidden treasures. Traverse
                Tulum's eco-parks, where nature thrives untouched.
              </p>

              <p>
                Puerto Vallarta melds old-world charm with contemporary grace.
                Saunter along the cobblestone streets of the Zona Romantica.
                This historic district pulses with culture. The Malecon, a
                seaside promenade, pulsates with art and lively entertainment.
                The beaches beckon for relaxation. Discover hidden coves and
                weave through nearby jungle trails.
              </p>

              <p>
                Playa del Carmen invites you to immerse in its vibrant streets.
                Quinta Avenida is the town's beating heart. It's a rich mix of
                shops, cafes, and local markets. The beaches here calm with
                their gentle waves. Cozumel lies just a ferry ride away. There,
                world-class diving spots await exploration.
              </p>

              <p>
                Cozumel mesmerizes divers with its coral reefs teeming with
                marine life. The waters are clear, unveiling underwater wonders
                in vivid detail. Uncover Chankanaab Park. Here, you can snorkel,
                dive, or relax in lush gardens. Cozumel also serves as a gateway
                to exploring a rich underwater world.
              </p>

              <p>
                These webcams offer a gateway into paradise. Use them to map
                your trip or indulge in a virtual retreat. Each location holds
                something exceptional. From ancient ruins to vibrant coral
                reefs, Mexico's coasts are calling. The sun, sea, and sand are
                just a click away.
              </p>
            </p>
          </ShowMoreText>
        </div>
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in Mexico</h3>
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
            <h3>Mexico Links and Local Information</h3>
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
      </h2>
      <MoreHawaiiCams cams={hawaiiCams} />
      <p style={{ textAlign: 'center' }}>
        <span className="green-dot">&nbsp;</span>MyBeachCam hosted page
      </p>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/mexico`)
  const cams: types.CamPageProps = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default MexicoPage
