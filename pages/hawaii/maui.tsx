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
import MoreHawaiiCams from '@/components/MoreHawaiiCams'
import Link from 'next/link'
import * as types from '@/utils/types'

const MauiPage = ({
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
  const hawaiiCams: any = cams

  const country = 'USA'
  const state = 'Hawaii'
  const area = 'Maui'
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
        imageName: cam.imageName,
      }
      vectors.push(vector)
    }
    return null
  })

  return (
    <Layout
      documentTitle="Beach Cams of Maui, Hawaii - Webcams at Kaanapali, Lahaina, Wailea and Kapalua"
      documentDescription="Best Beach Cams and Surf Cams on Maui, Hawaii with webcams at Kaanapali, Lahaina, Wailea and Kapalua."
    >
      <div className="layout">
        <h1>Maui Webcams</h1>
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
            The island of Maui is one of Hawaii's most popular destinations for
            vacations and holidays. Maui has over 33 miles of exquisite public
            beaches. Some of these beaches have jewel-toned sand, in such colors
            as red, gold, green, black and white. The most popular resort areas
            on Maui are Kapalua, Kaanapali, Lahaina, Wailea and Makena. These
            resort areas are on the western, or leeward shore and offer the
            traveler spectacular beaches. There is also the lovely, tropical
            village of Hana, with its world-famous "Road to Hana." On this
            special island surfing, scuba diving, snorkeling and spectacular
            sunsets create a serenely gorgeous way of life.
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
              One of the best and most popular beaches on Maui is Kaanapali
              Beach. It stretches 4-miles long and is lined with hotels,
              resorts, open-air restaurants and the Whalers Village shopping
              center. A paved walk along the coast makes strolling from your
              hotel to these shops and restaurants a breeze. Kaanapali beach is
              also known for its Black Rock. This is a beautiful sandy beach
              with the famous Black Rock at the north end. It is one of the best
              snorkeling spots on the island.
            </p>
            <p>
              Maui offers travelers a range of accommodations to fit their
              budget, from modest condos to 5-star luxury resorts such as the
              Four Seasons and Ritz-Carlton, to even a luxury cruise. A travel
              professional or web surfing can help you arrange flights, lodging,
              cruises or even travel-packages. There are also many discounted
              vacations and holiday travel packages available on travel sites.
            </p>
            <p>
              One of the best and most popular beaches on Maui is Kaanapali
              Beach. It stretches 4-miles long and is lined with hotels,
              resorts, open-air restaurants and the Whalers Village shopping
              center. A paved walk along the coast makes strolling from your
              hotel to these shops and restaurants a breeze. Kaanapali beach is
              also known for its Black Rock. This is a beautiful sandy beach
              with the famous Black Rock at the north end. It is one of the best
              snorkeling spots on the island.
            </p>
            <p>
              Just 2-miles south of Kaanapali is the historic fishing village of
              Lahaina. With its hip eateries along Front Street, colorful
              boutiques, historic museums and contemporary art galleries,
              Lahaina is a great place to hang out in the evenings. Further
              south along the coast is the resort oasis of Wailea. Wailea is a
              favored area for the well-healed traveler. With its luxury hotels,
              7 golf courses and upscale "Shops at Wailea," visitors can relax
              and shop and never need to leave the area.
            </p>
            <p>
              Inland from Wailea, one can travel to the base of the Haleakala
              Crater and then drive up 10,000 feet to the summit. You can drive
              up to the summit in your own car or there are several popular
              tours to choose from, such as a downhill bike ride. Many people
              prefer to do to the summit very early in the morning to watch the
              sun rise over Haleakala. You might also consider taking a day or
              two and make the spectacular drive to Hana. The "road to Hana" is
              a 50-mile drive full of magnificent landscapes, such as
              waterfalls, botanical gardens and lush rainforests. It's well
              worth the drive!
            </p>
            <p>
              Maui is also home to one of the best snorkeling spots in the USA.
              Just off the southern coast is the Molokini Crater. This is a
              half-submerged extinct volcano crater where hundreds of beautiful
              tropical fish and rare marine life like to gather, and it makes
              for a wonderful day adventure.
            </p>
          </ShowMoreText>
        </div>

        <hr />

        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in Maui</h3>
            <ol>
              <li>Go to a colored-sand beach</li>
              <li>Take in a beach luau</li>
              <li>Visit the Haleakala Crater</li>
              <li>Visit a real plantation, The Maui Tropical Plantation</li>
              <li>Go snorkeling (Molokini Crater or Black Rock)</li>
              <li>Relax at a luxurious spa</li>
              <li>Drive the "Road to Hana"</li>
              <li>Golf at Wailea</li>
              <li>Visit art galleries and dine in Lahaina</li>
              <li>
                Rent a sailboat, take a day sail or an evening sunset cruise
              </li>
            </ol>
          </div>
          <div className="info">
            <h3>Maui Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.gohawaii.com/islands/maui"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Official Tourism Maui Site
                </a>{' '}
                - Comprehensive website for planning your Maui vacation
              </li>
              <li>
                <a
                  href="http://www.mauinews.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  The Maui News
                </a>{' '}
                - Maui's newspaper since 1900
              </li>
              <li>
                <a
                  href="https://hawaiistateparks.org/parks/maui/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  State Parks of Maui
                </a>{' '}
                - Descriptions of the different State Parks of Maui
              </li>
              <li>
                <a
                  href="http://www.mauimarathon.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Maui Marathon
                </a>{' '}
                - Run a marathon next time you come to Maui
              </li>
              <li>
                <a
                  href="http://www.polynesia.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Hawaii's Polynesian Cultural Center
                </a>{' '}
                - Hawaii's Polynesian Cultural Center
              </li>
              <li>
                <a
                  href="http://mauimapp.com/information/hiking.htm"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Maui Hiking Trails
                </a>{' '}
                - Maps of hikes all over Maui
              </li>
              <li>
                <a
                  href="https://portal.ehawaii.gov/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  eHawaii.gov
                </a>{' '}
                - Connecting You to Hawaii State Government
              </li>
              <li>
                <a
                  href="http://www.mauifilmfestival.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Maui Film Festival{' '}
                </a>{' '}
                - Hawaii's Premiere Film Festival
              </li>
              <li>
                <a
                  href="https://www.gohawaii.com/islands/maui/things-to-do/land-activities/Golf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Maui Golf
                </a>{' '}
                - Where to golf at Maui
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <h2>
        <Link href="/hawaii/">More Hawaii Beach Cams</Link>
      </h2>
      <MoreHawaiiCams cams={hawaiiCams} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/hawaii`)
  const cams: types.CamPageProps = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default MauiPage
