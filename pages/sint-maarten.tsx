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
  const camPageTargetType = 'Sint Maarten'

  const pageSections = findStates(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((state: { state: string }) => state.state)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Live Sint Maarten beach webcams featuring Maho Beach and Great Bay. Watch planes, beaches, and vibrant island life."
    >
      <div className="layout">
        <h1>{camPageTargetType} Webcams</h1>
        <h3 style={{ marginTop: '0' }}>
          Featuring beach webcams from{' '}
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
            Sint Maarten unveils its stunning beaches and vibrant coastal life.
            At Maho Beach, planes skim just above the sand as they land at
            Princess Juliana Airport, a thrilling sight captured live on the
            webcam. In Philipsburg, the Great Bay Beach Boardwalk pulses with
            energy, and the roaming live cam sweeps across its lively shores.
            Bask in the rhythm of the waves while imagining your next visit to
            the nearby shops and cafés. Sint Maarten's webcams transport you
            straight to the heart of its charm. Gaze at the weather, immerse
            yourself in the scenery, and start planning your escape.
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
            Sint Maarten dazzles in the Caribbean, its shores luring travelers
            from across the globe. Maho Beach, perched at the edge of Princess
            Juliana Airport's runway, offers a spectacle like no other. Visitors
            swarm here to witness planes dip boldly over the sands. The live
            Maho Beach webcam captures this daring display in breathtaking
            clarity, offering a front-row glimpse to beach lovers and aviation
            enthusiasts alike. Whether you're plotting a visit or just curious,
            this webcam lets you immerse yourself in the thrill of Maho Beach
            without ever leaving home.
          </p>

          <p>
            On the opposite side of the island, Philipsburg serves up a
            contrasting vibe. Great Bay Beach hums with energy, its Boardwalk
            lined with shops, cafés, and buildings painted in vibrant hues. It's
            a gathering point where locals and tourists mingle to soak in the
            island's allure. The Boardwalk Live Cam opens a portal to this
            dynamic scene. Watch as people amble by or gaze at the shimmering
            waters of Great Bay Beach. If you're dreaming of a getaway, this cam
            lets you envision strolling the Boardwalk and basking in the local
            flavor.
          </p>

          <p>
            Thw webcams offer a rare window into Sint Maarten's beaches. From
            the heart-pounding drama of planes over Maho Beach to the bustling
            rhythm of Philipsburg's Boardwalk, you'll glimpse what makes this
            island pulse with life. These webcams don't just reveal the scenery;
            they pull you into the island's flow. Watch the sun melt into the
            ocean or start planning your next adventure. Whether seeking travel
            inspiration or simple joy, Sint Maarten's webcams are your gateway
            to the island's soul.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Relax on Maho Beach and watch planes fly overhead.</li>
              <li>Snorkel at Simpson Bay and explore marine life.</li>
              <li>Walk the Boardwalk at Great Bay Beach in Philipsburg.</li>
              <li>Swim at Dawn Beach with views of Saint-Barthélemy.</li>
              <li>Explore Cupecoy Beach and its unique rock formations.</li>
              <li>Kayak in the calm waters of Oyster Pond.</li>
              <li>Scuba dive at Proselyte Reef and discover shipwrecks.</li>
              <li>Sail around Simpson Bay Lagoon for island views.</li>
              <li>Visit the white sands of Orient Bay for sunbathing.</li>
              <li>Paddleboard in the clear waters of Little Bay Beach.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/18.0403,-63.1207"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Weather.com - Maho Beach
                </a>{' '}
                - Check current weather at Maho Beach for trip planning.
              </li>
              <li>
                <a
                  href="https://www.sintmaartengov.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sint Maarten Government
                </a>{' '}
                - Find official travel updates, guidelines, and local news.
              </li>
              <li>
                <a
                  href="https://www.showmecaribbean.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show Me Caribbean
                </a>{' '}
                - Watch live webcams from popular beaches and explore the
                island.
              </li>
              <li>
                <a
                  href="https://www.tripadvisor.com/Tourism-g147346-St_Martin_St_Maarten-Vacations.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TripAdvisor - Sint Maarten
                </a>{' '}
                - Read reviews and recommendations for activities and dining.
              </li>
              <li>
                <a
                  href="https://www.sxmairport.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Princess Juliana Airport
                </a>{' '}
                - Find flight information and airport services for your trip.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="legend">
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
    cams = cams.filter((cam) => cam.country === 'Sint Maarten')

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
