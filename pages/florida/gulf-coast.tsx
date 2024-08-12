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

const GulfCoastPage = ({
  cams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  // Next modal SSR
  const CamsMap: any = dynamic(() => import('@/components/CamsMap'), {
    ssr: false,
  })
  const floridaCams: any = cams

  const country = 'USA'
  const state = 'Florida'
  const area = 'Gulf Coast'
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
      documentTitle="Beach Cams on the Florida Gulf Coast from Tampa Bay, Fort Myers, Cape Coral and Clearwater"
      documentDescription="Florida Gulf Coast, surf cam, beach cam, webcam, camera, Clearwater, Tampa Bay, Cape Coral, Fort Myers."
    >
      <div className="layout">
        <h1>Gulf Coast Florida Webcams</h1>
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
            Immerse yourself in the Gulf Coast of Florida wit our live cams.
            From Clearwater to Naples, soak in breathtaking views. Revel in
            white sand beaches, tranquil waters, and fiery sunsets. Observe the
            Don Cesar Inn cam at St. Pete Beach or the Clearwater Beach cams.
            See Sarasota's beauty through live streams from Siesta Key and Bird
            Key. In Fort Myers, gaze upon the coastline at the Pink Shell
            Resort. Naples offers serene glimpses from the Naples Pier and
            Turtle Sunrise cam. These cams unveil the Gulf Coast's allure,
            providing a portal to paradise from Tampa Bay to Naples.
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
              Journey deep into the heart of Florida's Gulf Coast. From Tampa
              Bay's lively shores to Naples' serene beaches, these cams capture
              it all. Each view brings you closer to the coast's wonders.
            </p>

            <p>
              In St. Pete Beach, the Don Cesar Inn cam provides a grand view.
              The iconic pink palace stands tall, overlooking the Gulf. Watch as
              waves lap the shore. The Clearwater Beach cams deliver scenes of
              white sand beaches. Each stream showcases the area's natural
              beauty. Here, the sun paints the sky in vibrant hues.
            </p>
            <p>
              Move south to Anna Maria Island, where the Bimini Bay cam awaits.
              This cam reveals a sheltered bay, perfect for sailing and fishing.
              You can almost feel the ocean breeze. Frenchy's Clearwater Beach
              cam highlights the local charm. Watch as visitors savor seafood at
              this beloved spot. The Gulf's gentle waves create a soothing
              backdrop.
            </p>
            <p>
              Head further down to Sarasota. Siesta Key's live cam shows the
              island's famous quartz sands. The beach here is pure and soft.
              Bird Key Yacht Club cam offers a glimpse of Sarasota Bay. Boats
              drift by, adding a touch of tranquility. These cams provide a
              serene escape.
            </p>
            <p>
              In Fort Myers, the Pink Shell Resort cam invites you to explore.
              Two angles show off the beach and marina. The calm waters are
              ideal for a quiet getaway. The Naples Pier cam offers a historic
              view. This iconic structure has stood since 1888. Nearby, the
              Turtle Sunrise cam captures early morning light. Boats dot the
              water, reflecting the dawn.
            </p>
            <p>
              These webcams let you experience the Gulf Coast's essence. From
              Tampa Bay to Naples, each scene tells a story. Dive in and
              discover the magic of Florida's western shores, where every cam
              connects you to the coast's vibrant life.
            </p>
          </ShowMoreText>
        </div>
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in the Florida Gulf Coast</h3>
            <ol>
              <li>Bask on white sands at Clearwater Beach.</li>
              <li>Walk along the historic Naples Pier.</li>
              <li>Revel in the quartz sand at Siesta Key Beach.</li>
              <li>Gaze at surreal art in the Dali Museum.</li>
              <li>Glide through calm waters at Bimini Bay.</li>
              <li>Angle for a catch at Bokeelia Pier.</li>
              <li>Meander through the Naples Botanical Garden.</li>
              <li>Sail along the coast at Hubbard's Marina.</li>
              <li>Frolic in the surf at Fort Myers Beach.</li>
              <li>Pedal around Anna Maria Island.</li>
            </ol>
          </div>
          <div className="info">
            <h3>Florida Gulf Coast Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitflorida.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Florida
                </a>{' '}
                - Unearth travel tips, attractions, and local events.
              </li>
              <li>
                <a
                  href="https://www.floridastateparks.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Florida State Parks
                </a>{' '}
                - Wander through state parks, uncover activities, and plan your
                outdoor escapades.
              </li>
              <li>
                <a
                  href="https://www.usgulfcoasttravelguide.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gulf Coast Travel Guide
                </a>{' '}
                - Look into local insights and uncover the Gulf Coast's
                treasures.
              </li>
              <li>
                <a
                  href="https://www.clearwaterbeach.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Clearwater Beach Official Site
                </a>{' '}
                - Scout out lodging, dining, and must-see spots at Clearwater
                Beach.
              </li>
              <li>
                <a
                  href="https://www.paradisecoast.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Naples, Marco Island & Everglades CVB
                </a>{' '}
                - Navigate Naples, Marco Island, and the Everglades with
                activity and accommodation tips.
              </li>
              <li>
                <a
                  href="https://www.visitstpeteclearwater.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  St. Petersburg/Clearwater Area Convention & Visitors Bureau
                </a>{' '}
                - Embark on a journey through St. Petersburg and Clearwater with
                this comprehensive guide.
              </li>
              <li>
                <a
                  href="https://www.visitsarasota.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sarasota County Official Website
                </a>{' '}
                - Explore Sarasota's attractions, beaches, and cultural
                landmarks.
              </li>
              <li>
                <a
                  href="https://weather.com/weather/today/l/27.9604,-82.5394"
                  target="_blank"
                  rel="noreferrer"
                >
                  Weather.com
                </a>{' '}
                - Stay tuned to the latest weather updates for the Gulf Coast.
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

export default GulfCoastPage
