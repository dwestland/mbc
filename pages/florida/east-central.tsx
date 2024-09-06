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
  const camPageTargetType = 'East Central'

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
            See our Central Florida webcam page, where coastal splendor and deep
            history intertwine. This stretch from Ormond Beach to Jupiter
            reveals a vibrant array of scenes. Wander through Daytona Beach's
            white sands, watch surfers catch waves at Cocoa Beach, or bask in
            the serenity of Sebastian Inlet. Each webcam unveils a unique view,
            perfect for shaping your next trip or savoring the landscape from
            afar. Whether you're drawn to the lively rhythm of Port Canaveral or
            the relaxed ambiance of Ormond Beach, these live streams transport
            you to the very essence of Florida's Atlantic coast.
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
            Unveil the enchantment of East Central Florida, where each beach
            narrates its own tale. This region, stretching from Ormond Beach to
            Jupiter, offers more than just sun and surf. It's an odyssey through
            dynamic coastal towns, each brimming with its unique allure.
          </p>
          <p>
            Commence in Ormond Beach, a peaceful counterpoint to its lively
            neighbor, Daytona. Here, you'll encounter tranquil expanses of sand,
            ideal for a serene retreat. The live webcams capture this stillness,
            offering a lens into its untouched splendor. It's a place where
            nature reigns supreme, perfect for those seeking solace by the
            shore.
          </p>
          <p>
            Venture south to Daytona Beach, where vibrancy and exhilaration
            pulse through the atmosphere. Renowned for its expansive, drivable
            beaches, Daytona pulses with activity. Watch surfers conquer the
            waves, or glimpse beachgoers basking in the sun. The webcams here
            present a front-row view of the energy, letting you savor the
            excitement of this legendary locale.
          </p>
          <p>
            Descend further along the coast to Cocoa Beach, the heart of the
            Space Coast. Famed for its surf culture, Cocoa Beach beckons both
            wave riders and space aficionados. The Cocoa Beach Pier stands as a
            landmark, offering breathtaking views and a slice of local life.
            Through the webcams, witness surfers navigating the swells and
            beachgoers meandering along the pier. It's a lively snapshot of
            coastal living.
          </p>
          <p>
            Traverse to Sebastian Inlet, where nature enthusiasts can plunge
            into untouched surroundings. This area is a sanctuary for fishing,
            surfing, and wildlife watching. The live cams reveal its raw beauty,
            from rolling waves to the occasional dolphin sighting. It's a prime
            spot for those yearning to engage with Florida's wild side.
          </p>
          <p>
            Conclude your journey in Jupiter, a town rich in history and natural
            wonder. Here, the Jupiter Inlet Lighthouse rises as a symbol of the
            past, while the beaches invite exploration and relaxation. The
            webcams here expose a blend of history and coastal charm, offering a
            glimpse into a place where the past intertwines with the present.
          </p>
          <p>
            East Central Florida transcends being just a destination; it's a
            journey. With these live webcams, you can delve into the beauty and
            vibrancy of this region anytime, anywhere. Whether planning your
            next adventure or dreaming of the coast, these views breathe life
            into East Central Florida.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Wander Daytona Beach's boardwalk and pier.</li>
              <li>Uncover the wonders of Kennedy Space Center.</li>
              <li>Carve the waves at Cocoa Beach.</li>
              <li>Ascend the Jupiter Inlet Lighthouse.</li>
              <li>Roam the historic streets of New Smyrna Beach.</li>
              <li>Cast a line off Sebastian Inlet's pier.</li>
              <li>Glide on a paddleboard through Indian River Lagoon.</li>
              <li>Witness a rocket launch from the Space Coast.</li>
              <li>Sink into the sands of Ormond Beach.</li>
              <li>Encounter marine life at the Marine Science Center.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitflorida.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VisitFlorida.com
                </a>{' '}
                - See Florida's official tourism site, brimming with travel
                guides and local events.
              </li>
              <li>
                <a
                  href="https://www.daytonabeach.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DaytonaBeach.com
                </a>{' '}
                - Unearth everything Daytona Beach, from attractions to events
                and must-see spots.
              </li>
              <li>
                <a
                  href="https://www.spacecoastlaunches.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SpaceCoastLaunches.com
                </a>{' '}
                - Track upcoming rocket launches with schedules and insider info
                from the Space Coast.
              </li>
              <li>
                <a
                  href="https://www.cocoabeach.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CocoaBeach.com
                </a>{' '}
                - Navigate Cocoa Beach's local gems, including attractions,
                dining, and surf reports.
              </li>
              <li>
                <a
                  href="https://www.floridastateparks.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FloridaStateParks.org
                </a>{' '}
                - Explore the natural wonders of East Central Florida's state
                parks, with details on activities and amenities.
              </li>
              <li>
                <a
                  href="https://www.visitorlando.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VisitOrlando.com
                </a>{' '}
                - Chart your course through Orlando's nearby attractions,
                dining, and day trip options.
              </li>
              <li>
                <a
                  href="https://weather.com/weather/today/l/28.5383,-81.3792"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check the Weather
                </a>{' '}
                - Get up-to-date weather information for your trip to East
                Central Florida.
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
    cams = cams.filter((cam) => cam.area === 'East Central')

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
