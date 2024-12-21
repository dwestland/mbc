import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
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
  const camPageTargetType = 'Louisiana'

  const pageAreas = findAreas(data, camPageTargetType)
  const pageAreasArray = pageAreas
    ? pageAreas.map((area: { area: string }) => area.area)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Explore Louisiana's live beach and street webcams, showcasing scenic coastlines, rivers, and vibrant city views."
    >
      <div className="layout">
        <h1>{camPageTargetType} Beach Webcams</h1>
        <h3 style={{ marginTop: '0' }}>
          Featuring webcams from{' '}
          {pageAreasArray.slice(0, -1).join(', ') +
            (pageAreasArray.length > 1
              ? ` and ${pageAreasArray[pageAreasArray.length - 1]}`
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
            Louisiana beckons with vibrant coastal scenes and hidden treasures.
            The Grand Isle Beach Cam reveals sweeping Gulf vistas from the
            state's sole inhabited barrier island, a haven for wildlife and
            outdoor adventure. Along the Mississippi, the Hale Boggs Bridge Cam
            frames an iconic span that connects communities. In New Orleans, the
            Street View Cam immerses viewers in the lively pulse of the city.
            These webcams pull you into the rich tapestry of Louisiana's
            waterside landscapes. Discover the rhythms, sights, and flavors of
            this captivating coastal state through every lens.
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
            Louisiana's coastline and waterways teem with scenic and cultural
            gems. Grand Isle, the state's only inhabited barrier island, merges
            beach life with untamed nature. The Grand Isle Beach Cam unveils the
            serene expanse of Gulf shoreline. Visitors can wander miles of sand,
            while anglers and birdwatchers revel in the island's thriving
            wildlife. The Coastal Realty Cam frames this bustling community,
            where fishing and shrimping anchor daily life. The charm of this
            Gulf haven beckons those seeking solitude and beauty.
          </p>
          <p>
            Inland, the Hale Boggs Bridge Cam captures a commanding view of one
            of Louisiana's vital river crossings. This span over the Mississippi
            River stitches together communities and industries. Situated near
            the St. Charles Sheriff's Office, the cam presents a close-up of the
            river's flow, a lifeblood of the region. It showcases the steady
            march of traffic and riverboats, illustrating the river's role in
            sustaining local life.
          </p>
          <p>
            In New Orleans, the Street View Cam plunges into the vibrant pulse
            of the French Quarter. Hosted by the Cats Meow Karaoke Bar, it
            reveals the energetic streets where music, food, and culture
            collide. New Orleans, with its storied history, beckons exploration.
            This cam immerses viewers in the lively rhythm of this iconic city
            from afar.
          </p>
          <p>
            From the tranquil stretches of Grand Isle to the electric streets of
            New Orleans, Louisiana's webcams beckon you to explore its waters,
            culture, and landscapes. These glimpses into everyday life, nature,
            and cityscapes reveal the state's deep-rooted connection to its
            waterways. Whether you're planning a trip or simply curious,
            Louisiana's coastal vistas fascinate and draw you in.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Stroll along Grand Isle's sandy beaches.</li>
              <li>Fish from the Grand Isle Fishing Pier.</li>
              <li>Explore the marshes by kayak in Barataria Preserve.</li>
              <li>Visit Holly Beach for shell collecting.</li>
              <li>Take a boat tour of the Atchafalaya Basin Swamp.</li>
              <li>Swim in the Gulf waters at Grand Isle Beach.</li>
              <li>Watch sunsets over Lake Pontchartrain.</li>
              <li>Walk the shorelines of Cypremort Point State Park.</li>
              <li>Spot wildlife at Rockefeller Wildlife Refuge.</li>
              <li>View the Mississippi River from the Hale Boggs Bridge.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.louisianatravel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Louisiana Travel
                </a>{' '}
                - Discover attractions, plan trips, and explore the best of
                Louisiana.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/29.2273,-90.0036"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Grand Isle Weather
                </a>{' '}
                - Check current weather conditions at Grand Isle Beach.
              </li>
              <li>
                <a
                  href="https://www.crt.state.la.us/louisiana-state-parks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Louisiana State Parks
                </a>{' '}
                - Explore state parks, find camping options, and outdoor
                activities.
              </li>
              <li>
                <a
                  href="https://www.neworleans.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New Orleans Tourism
                </a>{' '}
                - Plan your visit to New Orleans, find events, and dining spots.
              </li>
              <li>
                <a
                  href="https://www.lafourchechamber.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lafourche Chamber of Commerce
                </a>{' '}
                - Find local businesses, events, and guides for the Lafourche
                area.
              </li>
              <li>
                <a
                  href="https://www.cajuncoast.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cajun Coast
                </a>{' '}
                - Explore events, dining, and outdoor activities along
                Louisiana's Cajun Coast.
              </li>
              <li>
                <a
                  href="https://www.nola.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NOLA.com
                </a>{' '}
                - Stay updated on New Orleans news, events, and local
                happenings.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <h2>
        <Link href="/">More Beach Cams</Link>
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
    cams = cams.filter((cam) => cam.state === 'Louisiana')

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
