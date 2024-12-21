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
  const camPageTargetType = 'Florida Keys'

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
            Immerse yourself in the splendor of the Florida Keys through our
            live webcams. From the northern shores of Key Largo to the lively
            spirit of Key West, witness it all. Gauge the weather, map out your
            adventure, or simply bask in the breathtaking views.
          </p>
          <p>
            Key Largo teems with marinas and water escapades. Plantation Key
            beckons with fishing and diving thrills. In Islamorada, relish
            Robbie's Marina and its famed Tarpon feeding. Marathon enchants with
            tranquil beaches and a kaleidoscope of marine life. Finally, Key
            West dazzles with historic treasures and bustling streets.
          </p>
          <p>
            These webcams offer you a portal to paradise. Tune in now and let
            the Florida Keys enchant you.
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
            The Florida Keys offer an endless array of experiences. From Key
            Largo to Key West, each island holds its own allure. Our webcams let
            you see these wonders in real-time. Whether you're plotting a trip
            or just intrigued, these views bring the Keys to life.
          </p>
          <p>
            Start in Key Largo, where the ocean beckons. Marinas here throng
            with boats and yachts. The clear waters invite snorkeling and
            diving. Key Largo's coral reefs are world-renowned. Watch live as
            marine life flourishes below the surface.
          </p>
          <p>
            Next, journey to Plantation Key. This island is a haven for fishing
            enthusiasts. The weather cam unveils the pristine waters. Taverns
            and resorts offer a taste of local culture. You might even glimpse a
            fisherman wrestling with a big catch.
          </p>
          <p>
            Islamorada is the next stop, a village of islands. It's famed for
            its sport fishing. Robbie's Marina is a must-see. You can feed the
            tarpon or watch others attempt it. The Cheeca Lodge webcam grants a
            view of luxury nestled in nature. You'll see why Islamorada
            captivates travelers.
          </p>
          <p>
            Marathon is where tranquility presides. It's home to some of the
            most serene beaches in the Keys. The Pigeon Key webcam frames the
            iconic Seven Mile Bridge. Tranquility Bay Resort offers peaceful
            views of white sand and palm trees. Whether it's swimming,
            snorkeling, or sunbathing, Marathon beckons.
          </p>
          <p>
            Finally, Key West calls. It's the cultural heartbeat of the Keys.
            Live webcams spotlight Mallory Square's iconic sunsets. The
            Southernmost Point cam marks the edge of the U.S. Key West also
            pulses with lively streets and historic landmarks. There's always
            something unfolding in this colorful city.
          </p>
          <p>
            These webcams allow you to immerse yourself in the Florida Keys from
            anywhere. Whether for fun or planning, they animate the islands for
            you.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Discover the vibrant coral reefs in Key Largo.</li>
              <li>Wander through Robbie's Marina in Islamorada.</li>
              <li>Traverse the iconic Seven Mile Bridge in Marathon.</li>
              <li>Savor the sunset at Mallory Square in Key West.</li>
              <li>Feed the energetic tarpon at Robbie's Marina.</li>
              <li>Dive into the clear waters at Bahia Honda State Park.</li>
              <li>Stand at the Southernmost Point in Key West.</li>
              <li>Stroll through the historic district of Key West.</li>
              <li>Unwind on the soft sands of Sombrero Beach.</li>
              <li>Encounter marine life at the Key West Aquarium.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.fla-keys.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Florida Keys Official Tourism Site
                </a>{' '}
                - Navigate the ultimate guide to the Florida Keys, with events,
                adventures, and travel insights.
              </li>
              <li>
                <a
                  href="https://www.keywest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Key West Travel Guide
                </a>{' '}
                - Unearth insider tips, maps, and must-visit spots in Key West.
              </li>
              <li>
                <a
                  href="https://bahiahondapark.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bahia Honda State Park
                </a>{' '}
                - Find out about details on beaches, camping, and snorkeling at
                this premier park.
              </li>
              <li>
                <a
                  href="https://www.nps.gov/drto/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dry Tortugas National Park
                </a>{' '}
                - Plan your visit to this remote island park, including ferry
                times and key attractions.
              </li>
              <li>
                <a
                  href="https://www.weather.gov/key/marine"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Florida Keys NOAA Weather
                </a>{' '}
                - Access real-time weather updates and forecasts for the Keys.
              </li>
              <li>
                <a
                  href="https://www.kwahs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Key West Historical Society
                </a>{' '}
                - Journey through Key West's rich history with exhibits and
                tours.
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
    cams = cams.filter((cam) => cam.area === 'Florida Keys')

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
