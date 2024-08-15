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

const FloridaKeysPage = ({
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
  const area = 'Florida Keys'
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
        id: cam.id,
      }
      vectors.push(vector)
    }
    return null
  })

  return (
    <Layout
      documentTitle="Beach Cams in South East Florida - Fort Lauderdale, Palm Beach and Florida Keys"
      documentDescription="Best web cams in South East Florida with surf cams at Fort Lauderdale, West Palm Beach, Boca Raton and Key Largo."
    >
      <div className="layout">
        <h1>Florida Keys Webcams</h1>

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
              The Florida Keys offer an endless array of experiences. From Key
              Largo to Key West, each island holds its own allure. Our webcams
              let you see these wonders in real-time. Whether you're plotting a
              trip or just intrigued, these views bring the Keys to life.
            </p>
            <p>
              Start in Key Largo, where the ocean beckons. Marinas here throng
              with boats and yachts. The clear waters invite snorkeling and
              diving. Key Largo's coral reefs are world-renowned. Watch live as
              marine life flourishes below the surface.
            </p>
            <p>
              Next, journey to Plantation Key. This island is a haven for
              fishing enthusiasts. The weather cam unveils the pristine waters.
              Taverns and resorts offer a taste of local culture. You might even
              glimpse a fisherman wrestling with a big catch.
            </p>
            <p>
              Islamorada is the next stop, a village of islands. It's famed for
              its sport fishing. Robbie's Marina is a must-see. You can feed the
              tarpon or watch others attempt it. The Cheeca Lodge webcam grants
              a view of luxury nestled in nature. You'll see why Islamorada
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
              These webcams allow you to immerse yourself in the Florida Keys
              from anywhere. Whether for fun or planning, they animate the
              islands for you.
            </p>
          </ShowMoreText>
        </div>
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in the Florida Keys</h3>
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
            <h3>Florida Keys Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.fla-keys.com/"
                  target="_blank"
                  rel="noreferrer"
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
                  rel="noreferrer"
                >
                  Key West Travel Guide
                </a>{' '}
                - Unearth insider tips, maps, and must-visit spots in Key West.
              </li>
              <li>
                <a
                  href="https://bahiahondapark.com/"
                  target="_blank"
                  rel="noreferrer"
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
                  rel="noreferrer"
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
                  rel="noreferrer"
                >
                  Florida Keys NOAA Weather
                </a>{' '}
                - Access real-time weather updates and forecasts for the Keys.
              </li>
              <li>
                <a
                  href="https://www.kwahs.org/"
                  target="_blank"
                  rel="noreferrer"
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

export default FloridaKeysPage
