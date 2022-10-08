import React from 'react'
import { InferGetStaticPropsType } from 'next'
import ShowMoreText from 'react-show-more-text'
// import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { getSixDigitRandom } from '@/utils/formUtils'
import Layout from '@/components/Layout'
import CamItem from '@/components/CamItem'
import data from '@/data/camLocationAreas'
import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'

interface PageProps {
  cams: {}[]
}

interface Cams {
  id: number
  title: string
  webcamUrl: string
  imageName: string
  description: string
  country: string
  state: string
  area: string
  subarea: string
  lat: number
  lng: number
}

const OahuPage = ({
  cams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  // Next modal SSR
  const CamsMap: any = dynamic(() => import('@/components/CamsMap'), {
    ssr: false,
  })

  const country = 'USA'
  const state = 'Hawaii'
  const area = 'Oahu'
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
      .map((cam: Cams) => cam.subarea)
      .filter((ele) => ele === subarea).length
    if (camCount === 0) {
      return null
    }

    return (
      <div key={getSixDigitRandom()}>
        <AdLeaderboard />
        <h2>{subarea} Webcams</h2>
        <div key={subarea} className="cam-container">
          {cams.cams.map((cam: Cams) => {
            if (cam.subarea === subarea) {
              return (
                <CamItem key={cam.id} cam={cam} />
                // <CamItem key={cam.id} cam={cam} refreshData={refreshData} />
              )
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
      (cam: Cams) => cam.area === area && cam.subarea === ''
    )

    if (subareaCams.length === 0) {
      return null
    }

    const result = subareaCams.map((cam: Cams) => (
      <CamItem key={cam.id} cam={cam} />
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
  cams.cams.map((cam: Cams) => {
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
      documentTitle="Beach Cams of Oahu, Hawaii - Webcams at Waikiki Beach, Honolulu and North Shore"
      documentDescription="Best Beach Cams and Surf Cams in Oahu, Hawaii with webcams in Waikiki Beach, Honolulu and the North Shore."
    >
      <div className="layout">
        <h1>Oahu Webcams</h1>
        <div className="content-and-ad">
          <div className="content">
            <CamsMap vectors={vectors} />
          </div>
          <div className="ad">
            <AdLarge />
          </div>
        </div>
        <p>
          Oahu is considered the "Heart of Hawaii" and is the most visited of
          all of the Hawaiian Islands. Oahu is also home to the world-famous
          Waikiki beach. Oahu offers more restaurants, shops and nightlife than
          all of the other Hawaiian Islands combined. 80% of Hawaiians live in
          Oahu. There are all types of different hotels, motels, resorts,
          timeshares and condos that you can stay at depending on your budget.
          The most popular resort areas are Waikiki, Turtle Bay, Kahala and
          Diamond Head. There are many discount travel packages available, some
          that include car, hotel and airfare. In addition to lodging, there are
          several cruise ships that can take you around all of the Hawaiian
          Islands. Oahu is a great place to begin your Hawaiian vacation or
          holiday.
        </p>

        {camSections}
        {moreCams()}

        <div className="panel">
          <ShowMoreText
            lines={3}
            more="show more"
            less="show less"
            anchorClass="anchorClass"
            truncatedEndingComponent="... "
          >
            <p>
              On the North Shore of Oahu, the beaches attract the top
              professional surfers. Sunset Beach, Waimea Bay, Ehukai Beach,
              Ali'i Beach and Banzai Pipeline are some of the legendary spots
              along this amazing shoreline. In the winter, waves can reach as
              high as 30 feet! These white-sandy beaches are also filled with
              body-boarders, body-surfers and sun-worshipers as well.
            </p>
            <p>
              Located near the North Shore is the remarkable Polynesian Cultural
              Center, set in a 42-acre lagoon part, You can spend the entire day
              there visiting the 7-island villages, canoe riders and enjoying
              over 100 performers.
            </p>
            <p>
              On the southern side of Oahu Island is world-famous Waikiki Beach.
              Its boardwalks are jam-packed with hotels, bars and restaurants.
              It is a popular and convenient location to stay while on vacation.
              Waikiki is known for its long, endless days of sun, fine golden
              sand, excellent surfing and a sandy lagoon ideal for swimming.
              It's a great place to hang out day and night. It is also a very
              popular honeymoon destination.
            </p>
            <p>
              A short drive from Waikiki is Diamond Head. Diamond Head is the
              awesome volcano crater on Oahu's south side. It got its name in
              the late 1700's when British seamen saw calcite crystals sparkling
              in the sunshine and thought they had found diamonds. Take a hike
              up Diamond Head for panoramic views of Waikiki.
            </p>
            <p>
              Close to Diamond Head is Hanauma Bay, which is considered the best
              snorkeling in Hawaii. The safe, clam waters are protected by an
              offshore reef. It is a great place to go for swimming, snorkeling,
              or just sunbathing.
            </p>
            <p>
              On the other side of Waikiki is the USS Arizona Memorial and Pearl
              Harbor. This memorial commemorates the servicemen and women who
              died in 1941 during the Japanese attack on Pearl Harbor. The USS
              Missouri battleship is also there and houses a museum.
            </p>
          </ShowMoreText>
        </div>

        <hr />

        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in Oahu</h3>
            <ol>
              <li>
                Check out the huge waves and professional surfers on the North
                Shore Beaches
              </li>
              <li>Visit the USS Arizona Memorial and Pearl Harbor</li>
              <li>Visit World-famous Waikiki Beach</li>
              <li>Take a hike up Diamond Head Crater</li>
              <li>Snorkel in Hanauma Bay</li>
              <li>Take a picture in front of the King Kamehameha statue</li>
              <li>Visit the Dole Plantation</li>
              <li>Visit the Polynesian Cultural Center</li>
              <li>
                Take a surfing lesson (or just go swimming) in that beautiful
                water
              </li>
              <li>Go to a Luau and watch the hula dancers</li>
            </ol>
          </div>
          <div className="info">
            <h3>Oahu Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.gohawaii.com/islands/oahu"
                  rel="noreferrer"
                  target="_blank"
                >
                  Oahu Visitors Bureau
                </a>{' '}
                The official website of the Island of Oahu
              </li>
              <li>
                <a
                  href="https://www.gohawaii.com/oahu/plan-a-trip"
                  rel="noreferrer"
                  target="_blank"
                >
                  Official Tourism Oahu Site
                </a>{' '}
                Comprehensive website for planning your Oahu vacation
              </li>
              <li>
                <a
                  href="https://hawaiistateparks.org/parks/oahu/"
                  rel="noreferrer"
                  target="_blank"
                >
                  State Parks of Oahu
                </a>{' '}
                Descriptions of the different State Parks of Oahu
              </li>
              <li>
                <a
                  href="https://portal.ehawaii.gov/"
                  rel="noreferrer"
                  target="_blank"
                >
                  eHawaii.gov
                </a>{' '}
                Connecting You to Hawaii State Government
              </li>
              <li>
                <a
                  href="https://www.gohawaii.com/islands/oahu/things-to-do/land-activities/Golf"
                  rel="noreferrer"
                  target="_blank"
                >
                  Oahu Golf
                </a>{' '}
                Lots of information on local golf courses
              </li>
              <li>
                <a
                  href="http://www.rcarchive.com/hhg/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Oahu Hiking Gallery
                </a>{' '}
                A collection of pictures and write ups from various hikes in
                Oahu
              </li>
              <li>
                <a
                  href="http://www.mayacreations.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Maya Creations
                </a>{' '}
                Hand made religious jewelry from Hawaii
              </li>
              <li>
                <a
                  href="http://www.polynesia.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Hawaii's Polynesian Cultural Center
                </a>{' '}
                Hawaii's Polynesian Cultural Center
              </li>
              <li>
                <a
                  href="http://www.honolulumarathon.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  The Honolulu Marathon
                </a>{' '}
                If you like running marathons, check out this site
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/hawaii`)
  const cams: PageProps = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default OahuPage
