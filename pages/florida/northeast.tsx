import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import AdLarge from '@/components/AdLarge'
import CamsPageMap from '@/components/CamsPageMap'
import RenderSubareaSections from '@/components/RenderSubareaSections'
import data from '@/data/camLocationAreas'
import { renderError, findSubareas } from '@/utils/common'
import * as types from '@/utils/types'

const AreaSubareaPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return renderError()
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'Northeast'

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
          truncatedEndingComponent="... "
        >
          {/* CUSTOMIZE PAGE 3 of 5 - Add opening text ~120 words */}
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

        <RenderSubareaSections pageSections={pageSections ?? []} cams={cams} />

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
            Immerse yourself in Northeast Florida's coastal splendors through
            our live webcams. This region, sweeping from Amelia Island to
            Flagler Beach, unfolds a diverse tapestry of natural beauty,
            historic marvels, and vibrant local culture. Each location
            encapsulates the spirit of Florida's Atlantic coast, from untouched
            beaches to bustling piers and storied landmarks.
          </p>
          <p>
            Amelia Island, a true treasure, is celebrated for its pristine
            beaches and lush maritime forests. Here, you can witness the serene
            dance of the waves as they caress the shore. The webcams offer a
            live portal into this tranquil setting, allowing you to bask in the
            peaceful aura of Amelia Island's beaches. Whether you're envisioning
            a day of repose on the sand or a sunset wander along the coast,
            these webcams animate it all.
          </p>
          <p>
            Further south, Jacksonville Beach pulses with energy. The
            Jacksonville Beach Pier buzzes with activity, as surfers carve
            through the waves, anglers cast their lines, and beachgoers soak in
            the sun. Our webcams capture this lively activity, enabling you to
            plunge into the action from anywhere. The pier also presents
            breathtaking sunrise vistas, perfect for early risers eager to greet
            the day with a stunning view.
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
            tranquil, laid-back beach scene, where nature's rhythms take center
            stage. It's an ideal retreat for those who savor a quieter coastal
            experience.
          </p>
          <p>
            These webcams do more than just display views; they capture the very
            essence of Northeast Florida. Whether you're plotting your next
            adventure or indulging in a virtual getaway, our webcams forge a
            direct connection to these captivating locations.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
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
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitstaugustine.com"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
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
    cams = cams.filter((cam) => cam.area === 'Northeast')

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
