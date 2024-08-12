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

const NorthEastPage = ({
  cams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  // Next modal SSR
  const CamsMap: any = dynamic(() => import('@/components/CamsMap'), {
    ssr: false,
  })
  const floridaCams: any = cams

  const country = 'USA'
  const state = 'Florida'
  const area = 'Northeast'
  const countryObject = data.countries.filter((ele) => ele.country === country)
  const stateObject = countryObject[0].states.filter(
    (ele) => ele.state === state
  )
  const areaObject = stateObject[0].areas.filter((ele) => ele.area === area)

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
      }
      vectors.push(vector)
    }
    return null
  })

  return (
    <Layout
      documentTitle="Beach Cams in Northeast Florida from St. Augustine, Jacksonville Beach and Fernandina Beach"
      documentDescription="Best web cams from Northeast Florida with surf cams at St. Augustine, Jacksonville Beach and Fernandina Beach."
    >
      <div className="layout">
        <h1>Northeast Florida Webcams</h1>
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
            See the allure of Northeast Florida through our live beach webcams.
            From Amelia Island to Flagler Beach, this stretch of coastline
            merges history, nature, and sun-drenched shores. Soak in the
            tranquil beauty of Amelia Island's barrier beaches, or immerse
            yourself in the vibrant energy at Jacksonville Beach Pier. Each cam
            unlocks a portal to the area's distinct spots, like the historic St.
            Augustine, where ancient forts embrace modern surf culture. Whether
            you're crafting a getaway, gauging the weather, or seeking a virtual
            retreat, these webcams broadcast real-time glimpses of Northeast
            Florida's most captivating coastal scenes.{' '}
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
              Immerse yourself in Northeast Florida's coastal splendors through
              our live webcams. This region, sweeping from Amelia Island to
              Flagler Beach, unfolds a diverse tapestry of natural beauty,
              historic marvels, and vibrant local culture. Each location
              encapsulates the spirit of Florida's Atlantic coast, from
              untouched beaches to bustling piers and storied landmarks.
            </p>
            <p>
              Amelia Island, a true treasure, is celebrated for its pristine
              beaches and lush maritime forests. Here, you can witness the
              serene dance of the waves as they caress the shore. The webcams
              offer a live portal into this tranquil setting, allowing you to
              bask in the peaceful aura of Amelia Island's beaches. Whether
              you're envisioning a day of repose on the sand or a sunset wander
              along the coast, these webcams animate it all.
            </p>
            <p>
              Further south, Jacksonville Beach pulses with energy. The
              Jacksonville Beach Pier buzzes with activity, as surfers carve
              through the waves, anglers cast their lines, and beachgoers soak
              in the sun. Our webcams capture this lively activity, enabling you
              to plunge into the action from anywhere. The pier also presents
              breathtaking sunrise vistas, perfect for early risers eager to
              greet the day with a stunning view.
            </p>
            <p>
              St. Augustine, the nation's oldest city, intertwines history with
              modern coastal life. The webcams here unveil iconic landmarks like
              the Castillo de San Marcos and the Bridge of Lions. You can also
              observe the dynamic surf culture that defines this historic beach
              town. Whether you're captivated by the past or drawn to the surf,
              St. Augustine offers a rich tapestry of experiences.
            </p>
            <p>
              Flagler Beach, at the southern fringe of our coverage, exudes a
              relaxed, natural charm. The Flagler Beach webcam reveals a more
              tranquil, laid-back beach scene, where nature's rhythms take
              center stage. It's an ideal retreat for those who savor a quieter
              coastal experience.
            </p>
            <p>
              These webcams do more than just display views; they capture the
              very essence of Northeast Florida. Whether you're plotting your
              next adventure or indulging in a virtual getaway, our webcams
              forge a direct connection to these captivating locations.
            </p>
          </ShowMoreText>
        </div>
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in Northeast Florida</h3>
            <ol>
              <li>Wander through Castillo de San Marcos in St. Augustine.</li>
              <li>Saunter along Jacksonville Beach Pier.</li>
              <li>Gaze upon the Amelia Island Lighthouse.</li>
              <li>Drift on a river cruise in Fernandina Beach.</li>
              <li>Uncover treasures on St. George Street.</li>
              <li>Trek the trails at Fort Clinch State Park.</li>
              <li>Marvel at the architecture of Flagler College.</li>
              <li>Carve waves at Vilano Beach.</li>
              <li>Unwind at Crescent Beach.</li>
              <li>Savor the sunset at Vilano Pier.</li>
            </ol>
          </div>
          <div className="info">
            <h3>Northeast Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitstaugustine.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit St. Augustine
                </a>{' '}
                - Delve into St. Augustine's attractions, events, and local
                culture.
              </li>
              <li>
                <a
                  href="https://www.ameliaisland.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Amelia Island Visitors Guide
                </a>{' '}
                - Unearth Amelia Island travel tips, accommodations, and
                activities.
              </li>
              <li>
                <a
                  href="https://www.visitjacksonville.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jacksonville Beach Tourism
                </a>{' '}
                - Navigate Jacksonville Beach with event calendars, dining
                options, and beach guides.
              </li>
              <li>
                <a
                  href="https://www.floridastateparks.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Florida State Parks
                </a>{' '}
                - Roam parks like Fort Clinch and Anastasia State Park with this
                resource.
              </li>
              <li>
                <a
                  href="https://www.historiccoastculture.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Historic Coast Culture
                </a>{' '}
                - Immerse yourself in the rich history and culture of Northeast
                Florida, especially St. Augustine.
              </li>
              <li>
                <a
                  href="https://www.visitflagler.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Flagler County Tourism
                </a>{' '}
                - Chart your visit to Flagler Beach and surrounding areas with
                this local guide.
              </li>
              <li>
                <a
                  href="https://www.floridascenichighways.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Florida's Scenic Highways
                </a>{' '}
                - Traverse scenic drives and points of interest along Florida's
                coastal highways.
              </li>
              <li>
                <a
                  href="https://weather.com/weather/today/l/30.3322,-81.6557"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jacksonville Weather
                </a>{' '}
                - Check the latest weather updates for Jacksonville.
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

export default NorthEastPage
