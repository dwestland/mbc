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
  const camPageTargetType = 'Thailand'

  const pageSections = findStates(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((state: { state: string }) => state.state)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Explore live Thailand beach webcams showcasing Chaweng and Lamai beaches, ocean views, and vibrant beach life."
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
            Koh Samui, Thailand, dazzles with its blend of lively and tranquil
            beaches. The Lost Beach Bar Cam on Chaweng Beach beckons with
            sweeping ocean vistas. Nearby, Kaif Sauna Cam unveils the Gulf of
            Thailand, where you can immerse yourself in the warmth of poolside
            serenity. Journey south to Lamai Beach, a haven of calm waters and
            dynamic energy. The No Stress Restaurant and Black Pearl Restaurant
            webcams capture the pulse of beach life along this picturesque
            stretch. Further north, the FitKoh Beach Cam reveals waves kissing
            white sands in a tranquil dance. Experience Thailand's beachscapes
            live!
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
            Koh Samui unveils a rich mosaic of beach experiences. The Lost Beach
            Bar Cam grants a direct view of Chaweng Beach. This bustling stretch
            is famed for its translucent waters and lively beach bars. Visitors
            can relish the tropical landscape while savoring local dishes. The
            webcam lets you immerse yourself in the pulse of this popular
            destination.
          </p>
          <p>
            The Kaif Sauna Cam exposes a tranquil scene of the Gulf of Thailand.
            Nestled in Chaweng, it captures a serene poolside oasis. The Gulf's
            turquoise waters sprawl into the horizon. This spot beckons those
            seeking rest after a day in the sun. Nearby saunas and dining
            further enrich the experience.
          </p>

          <p>
            Lamai Beach, a true treasure, is unveiled through several webcams.
            The Teddy Weed Beach Club Cam spotlights Lamai's soft sands and
            vibrant cabanas. Beachgoers lounge by the water, soaking in the
            tropical sun. Here, you can witness Thailand's diverse flavors and
            spirited culture. The No Stress Restaurant Cam offers a peek into
            the lively, relaxed energy of the beach. Lamai strikes a perfect
            balance between serene escape and bustling nightlife.
          </p>
          <p>
            Not far off, the Black Pearl Restaurant Cam frames Lamai's
            breathtaking coast. This area is renowned for its golden sands and
            thriving resorts. From the webcam, you can watch tourists strolling
            along the beach, reveling in the rhythmic waves.
          </p>
          <p>
            Further north, the FitKoh Beach Cam reveals a more secluded
            shoreline. The waves gently caress the shore, setting a calm,
            meditative tone. It's the ideal hideaway for those seeking solitude.
          </p>
          <p>
            Koh Samui's webcams transport you to a realm of tropical wonders,
            each one painting a vivid picture of Thailand's dynamic beach life.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Stroll along Chaweng Beach's white sands.</li>
              <li>Snorkel in the clear waters of Lamai Beach.</li>
              <li>Sail around the stunning Ang Thong Marine Park.</li>
              <li>Paddleboard across the calm Gulf of Thailand.</li>
              <li>Swim beneath the Na Muang Waterfall.</li>
              <li>Explore the coral reefs at Koh Tao.</li>
              <li>Unwind at a beach bar on Lamai Beach.</li>
              <li>Kayak through the mangroves near Koh Phangan.</li>
              <li>Discover hidden coves on a boat tour of Koh Samui.</li>
              <li>Wade through the shallow waters of Silver Beach.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.tourismthailand.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tourism Thailand
                </a>{' '}
                - Discover travel tips, destinations, and cultural highlights.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/9.5255,100.0601"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chaweng Beach Weather
                </a>{' '}
                - Check current weather conditions for Chaweng Beach.
              </li>
              <li>
                <a
                  href="https://kohsamui.tours/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Koh Samui Tourism
                </a>{' '}
                - Find hotel deals, dining options, and event calendars.
              </li>
              <li>
                <a
                  href="https://www.lonelyplanet.com/thailand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lonely Planet Thailand
                </a>{' '}
                - Browse travel guides and discover hidden gems in Thailand.
              </li>
              <li>
                <a
                  href="https://www.thaizer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Thaizer
                </a>{' '}
                - Learn about Thai culture, festivals, and travel tips.
              </li>
              <li>
                <a
                  href="https://www.12go.asia/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  12Go Asia
                </a>{' '}
                - Plan travel routes across Thailand by ferry, bus, and train.
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
    cams = cams.filter((cam) => cam.country === 'Thailand')

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
