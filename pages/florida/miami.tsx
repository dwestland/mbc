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
import MoreFloridaCams from '@/components/MoreFloridaCams'
import Link from 'next/link'
import * as types from '@/utils/types'

const MiamiPage = ({
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
  const floridaCams: any = cams

  const country = 'USA'
  const state = 'Florida'
  const area = 'Miami Beach'

  const countryObject = data.countries.filter((ele) => ele.country === country)
  if (countryObject.length === 0) {
    // Handle the case where the country is not found
    return null
  }

  const stateObject = countryObject[0].states.find(
    (ele) => ele.state === state
  ) || { state: '', areas: [] }

  if (!stateObject.areas) {
    stateObject.areas = []
  }

  if (!stateObject) {
    // Handle the case where the state is not found
    return null
  }

  const areaObject = stateObject.areas.filter((ele) => ele.area === area)
  if (areaObject.length === 0) {
    // Handle the case where the area is not found
    return null
  }

  const subareaObjects = areaObject[0].subareas
  const subareaArray = subareaObjects.map((ele) => ele.subarea)

  // Display cams WITH subareas
  const camSections = subareaArray.map((subarea) => {
    // check if subarea cams exist
    const camCount = cams.cams
      .map((cam: types.Cams) => cam.subarea)
      .filter((ele) => ele === subarea).length
    if (camCount === 0) {
      return null
    }

    return (
      <div key={getSixDigitRandom()}>
        <AdLeaderboard />
        <h2>{subarea} Webcams</h2>
        <div key={subarea} className="cam-container">
          {cams.cams.map((cam: types.Cams) => {
            if (cam.subarea === subarea) {
              return <CamCard key={cam.id} cam={cam} />
            }
            return null
          })}
        </div>
      </div>
    )
  })

  // Display cams WITHOUT subareas
  const moreCams = () => {
    const subareaCams = cams.cams.filter(
      (cam: types.Cams) => cam.area === area && cam.subarea === ''
    )

    if (subareaCams.length === 0) {
      return null
    }

    const result = subareaCams.map((cam: types.Cams) => (
      <CamCard key={cam.id} cam={cam} />
    ))

    return (
      <>
        <AdLeaderboard />
        <h2>{area} Webcams</h2>
        <div className="cam-container">{result}</div>
      </>
    )
  }

  // Create vectors for map
  const vectors = []
  cams.cams.map((cam: types.Cams) => {
    if (cam.area === area && cam.lat !== null && cam.lng !== null) {
      const vector = {
        name: cam.title,
        lat: cam.lat,
        lng: cam.lng,
        id: cam.id,
        imageName: cam.imageName,
      }
      vectors.push(vector)
    }
    return null
  })

  return (
    <Layout
      documentTitle="Beach Cams in Miami and South Beach Florida"
      documentDescription="Best live web cams and surf cams at Miami Beach and South Beach in Florida."
    >
      <div className="layout">
        <h1>Miami Beach Florida Webcams</h1>
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
          truncatedEndingComponent="... "
        >
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
        {camSections}
        {moreCams()}
        <div className="panel">
          <ShowMoreText
            lines={4}
            more="show more"
            less="show less"
            anchorClass="anchorClass"
            truncatedEndingComponent="... "
          >
            <p>
              Discover the Miami area through our comprehensive collection of
              webcams. Each location reveals a distinct slice of South Florida's
              charm. Begin your adventure in the north, where the tranquil
              waters of Stuart embrace you. Here, you can witness cars driving
              through the serene Downtown Stuart.
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
              with waves crashing in a rhythmic dance against the shore. This
              spot is ideal for those who savor life's finer moments. Picture
              yourself strolling along the coast, the sea breeze weaving through
              your hair.
            </p>

            <p>
              As you journey further south, Boca Raton entices you with its
              famed surf spots. The Boca Raton Inlet Cam provides a sweeping
              view of the waves. Whether you're a surfer or an ocean admirer,
              this spot is a must-experience. The nearby Deerfield Beach Pier
              offers a contrasting scene. The live cams showcase fishermen
              casting their lines, and sun-seekers basking in the warmth.
            </p>

            <p>
              Fort Lauderdale is where the energy surges. The New River
              streaming webcam animates the city's waterway. Watch as yachts,
              kayaks, and rowboats glide through the river. The Elbo Room cam
              captures the vibrant beachfront spectacle, a place where the
              city's pulse truly resonates.
            </p>

            <p>
              Lastly, Miami's South Beach dazzles with its electric atmosphere.
              The volleyball courts hum with action, and the Port of Miami
              bustles with life. Whether planning a visit or simply daydreaming,
              our webcams infuse Miami's excitement directly to you.
            </p>
          </ShowMoreText>
        </div>
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in Miami</h3>
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
            <h3>Miami Links and Local Information</h3>
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
        <Link href="/florida/">More Florida Beach Cams</Link>
      </h2>
      <MoreFloridaCams cams={floridaCams} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/florida`)
  const cams: types.CamPageProps = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default MiamiPage
