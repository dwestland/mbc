import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import AdLarge from '@/components/AdLarge'
import CamsPageMap from '@/components/CamsPageMap'
import RenderSubareaSections from '@/components/RenderSubareaSections'
import data from '@/data/camLocationAreas'
import { findSubareas } from '@/utils/common'
import * as types from '@/utils/types'
import ErrorLoadingWebcams from '@/components/ErrorLoadingWebcams'

const AreaSubareaPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'Miami Beach'

  const pageSections = findSubareas(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((area: { subarea: string }) => area.subarea)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription={`Browse beach webcams from ${camPageTargetType}, including ${pageSectionsArray.join(
        ', '
      )}.`}
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
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          {/* CUSTOMIZE PAGE 3 of 5 - Add opening text ~120 words */}
          <p>
            Immerse yourself in the exciting Miami area with our live beach
            webcams. From the pristine shores of West Palm Beach to the bustling
            streets of Miami, you'll uncover a range of captivating views.
            Marvel at the tranquil waters of Jupiter Inlet or venture to Boca
            Raton to glimpse its iconic surf spots. In Fort Lauderdale, observe
            boats gliding along New River or soak in the spirited energy of the
            Elbo Room. Miami's famous South Beach beckons with thrilling beach
            volleyball, while the Port of Miami cams reveal the bustling
            choreography of cruise ships. Curate your perfect getaway with
            real-time updates from our webcams!
          </p>
        </ShowMoreText>

        <RenderSubareaSections pageSections={pageSections ?? []} cams={cams} />

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
            Discover the Miami area through our comprehensive collection of
            webcams. Each location reveals a distinct slice of South Florida's
            charm. Begin your adventure in the north, where the tranquil waters
            of Stuart embrace you. Here, you can witness cars driving through
            the serene Downtown Stuart.
          </p>

          <p>
            Venture south to Jupiter Inlet, where the waves caress the shore.
            This peaceful beach beckons those seeking solitude. The nearby
            Jupiter Reef Club unveils breathtaking beach views, nestled away
            from the city's hustle. You can almost feel the sand beneath your
            feet as you watch the sun shimmer on the water.
          </p>

          <p>
            In Palm Beach, the iconic Lake Worth Inlet encapsulates the allure
            of the Atlantic. The Palm Beach Earth Cam frames the golden coast,
            with waves crashing in a rhythmic dance against the shore. This spot
            is ideal for those who savor life's finer moments. Picture yourself
            strolling along the coast, the sea breeze weaving through your hair.
          </p>

          <p>
            As you journey further south, Boca Raton entices you with its famed
            surf spots. The Boca Raton Inlet Cam provides a sweeping view of the
            waves. Whether you're a surfer or an ocean admirer, this spot is a
            must-experience. The nearby Deerfield Beach Pier offers a
            contrasting scene. The live cams showcase fishermen casting their
            lines, and sun-seekers basking in the warmth.
          </p>

          <p>
            Fort Lauderdale is where the energy surges. The New River streaming
            webcam animates the city's waterway. Watch as yachts, kayaks, and
            rowboats glide through the river. The Elbo Room cam captures the
            vibrant beachfront spectacle, a place where the city's pulse truly
            resonates.
          </p>

          <p>
            Lastly, Miami's South Beach dazzles with its electric atmosphere.
            The volleyball courts hum with action, and the Port of Miami bustles
            with life. Whether planning a visit or simply daydreaming, our
            webcams infuse Miami's excitement directly to you.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Stroll along South Beach.</li>
              <li>Wander through Vizcaya Museum and Gardens.</li>
              <li>Dive into the Miami Seaquarium.</li>
              <li>Sail around Biscayne Bay.</li>
              <li>Roam the Wynwood Walls.</li>
              <li>Splash at Crandon Park Beach.</li>
              <li>Uncover the Art Deco Historic District.</li>
              <li>Browse Bayside Marketplace.</li>
              <li>Explore the Miami Zoo.</li>
              <li>Paddle in Oleta River State Park.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.miamiandbeaches.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Greater Miami Convention & Visitors Bureau
                </a>{' '}
                - Uncover Miami's top attractions, events, and accommodations.
              </li>
              <li>
                <a
                  href="https://www.miamiherald.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Miami Herald
                </a>{' '}
                - Dive into the latest news and happenings in Miami.
              </li>

              <li>
                <a
                  href="https://www.tripadvisor.com/Tourism-g34438-Miami_Florida-Vacations.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TripAdvisor Miami Travel Guide
                </a>{' '}
                - Discover reviews and tips for hotels, restaurants, and
                attractions in Miami.
              </li>
              <li>
                <a
                  href="https://www.wynwoodmiami.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wynwood Miami
                </a>{' '}
                - Wander through the vibrant Wynwood Arts District, known for
                its street art, galleries, and dining.
              </li>

              <li>
                <a
                  href="https://www.miami.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Miami.com
                </a>{' '}
                - Explore the best things to do, see, and taste in Miami.
              </li>
              <li>
                <a
                  href="https://www.miami-airport.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Miami International Airport
                </a>{' '}
                - Navigate essential information for travelers flying to and
                from Miami.
              </li>
              <li>
                <a
                  href="https://weather.com/weather/today/l/25.77,-80.19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Miami Weather - The Weather Channel
                </a>{' '}
                - Monitor the latest weather conditions and forecasts for Miami.
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
    cams = cams.filter((cam) => cam.area === 'Miami Beach')

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

export default AreaSubareaPage
