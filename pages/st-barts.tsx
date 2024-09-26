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
  const camPageTargetType = 'St. Barts'

  const pageSections = findStates(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((state: { state: string }) => state.state)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Explore St. Barts through live beach webcams showcasing stunning shores, vibrant ports, and breathtaking landscapes."
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
            St. Barts dazzles with its pristine beaches and crystalline waters.
            Planes swoop over the golden sands of St. Jean Beach on the Gustaf
            III Airport webcams. Discover Flamands Beach, where surfers carve
            the waves, and the shore unfurls endlessly. St. Jean Bay, split by
            the legendary Eden Rock, reveals shimmering waters and opulent
            villas. For a taste of island life, the Gustavia Port cam unveils
            the bustling marina in this ultra-exclusive enclave. These webcams
            offer a portal into the vibrant essence of St. Barts, ideal for
            crafting travel plans or indulging in a virtual getaway.
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
            St. Barts shines as a jewel of the Caribbean, with each beach
            offering its own allure. The webcams here grant a captivating view
            of this striking island. At St. Jean Beach, planes sweep over the
            sand, skimming down to land at Gustaf III Airport. Tucked close to
            the water, this airport is renowned for its thrilling approaches.
            The webcams capture both the thrill of flight and the calm of the
            beach, making it a top spot for visitors to experience.
          </p>

          <p>
            Flamands Beach paints a different picture. Its vast, sweeping
            shoreline beckons surfers and sun-seekers alike. The Flamands Beach
            webcam lets you witness the waves colliding with the sand. It's a
            place where the ocean unfurls endlessly, and the sunsets dazzle the
            horizon. This webcam offers a window into the more tranquil side of
            St. Barts, where nature dominates.
          </p>

          <p>
            St. Jean Bay is another unmissable treasure. The bay is cleaved by
            Eden Rock, a luxury hotel perched dramatically on a rocky outcrop.
            The St. Jean Bay webcam reveals both the raw beauty of the bay and
            the grandeur of those who flock here. The water gleams, and the
            beach is dotted with elegant villas, creating a perfect balance of
            wildness and opulence.
          </p>

          <p>
            In Gustavia, the port cam uncovers a lively marina teeming with
            yachts. Gustavia is famed as one of the priciest destinations on the
            globe. The webcam exposes the pulse of the port, from the ships
            arriving to the vibrant energy along the docks. Whether you're
            planning a visit or savoring a virtual escape, the webcams of St.
            Barts open a vivid portal into this island's heartbeat.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Stroll along the white sands of St. Jean Beach.</li>
              <li>Snorkel in the crystal waters of Colombier Bay.</li>
              <li>Sail around the island's scenic coastline.</li>
              <li>Hike to the summit of Morne de Vitet.</li>
              <li>Explore the vibrant Gustavia harbor.</li>
              <li>Paddleboard across the serene waters of Grand Cul-de-Sac.</li>
              <li>Swim in the calm lagoons of Lorient Beach.</li>
              <li>Scuba dive at the coral reefs of Pain de Sucre.</li>
              <li>Relax at the quiet shores of Flamands Beach.</li>
              <li>Wade through the shallow waters of Gouverneur Beach.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.sbhonline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SBH Online
                </a>{' '}
                - Discover local events, restaurants, and beach updates.
              </li>
              <li>
                <a
                  href="https://www.saintbarth-tourisme.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  St. Barth Tourism
                </a>{' '}
                - Official guide for planning trips, including hotels and tours.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/17.8972,-62.8491"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Weather in Gustavia
                </a>{' '}
                - Check current weather conditions in Gustavia, St. Barts.
              </li>
              <li>
                <a
                  href="https://www.st-barths.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  St. Barts Visitor Guide
                </a>{' '}
                - Explore hotels, dining, and activities across the island.
              </li>
              <li>
                <a
                  href="https://www.stbarth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  St. Barth Properties
                </a>{' '}
                - Find villas, resorts, and vacation rentals with a luxury
                touch.
              </li>
              <li>
                <a
                  href="https://www.wimco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WIMCO Villas
                </a>{' '}
                - Discover luxury villa rentals and travel services in St.
                Barts.
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
    cams = cams.filter((cam) => cam.country === 'St. Barts')

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
