import React from 'react'
import { InferGetStaticPropsType } from 'next'
import ShowMoreText from 'react-show-more-text'
// import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { getSixDigitRandom } from '@/utils/formUtils'
import Layout from '@/components/Layout'
import CamItem from '@/components/CamItem'
import data from '@/data/camLocationAreas'

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

const BigIslandPage = ({
  cams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  // Next modal SSR
  const CamsMap: any = dynamic(() => import('@/components/CamsMap'), {
    ssr: false,
  })

  const country = 'USA'
  const state = 'Hawaii'
  const area = 'Big Island'
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
        <div
          style={{
            height: '100px',
            background: 'lightblue',
            paddingLeft: '10px',
          }}
        >
          <h3>Adsense</h3>
        </div>
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
  const moreCams = (
    <>
      <div
        style={{
          background: 'lightblue',
          height: '100px',
          paddingLeft: '10px',
        }}
      >
        <h3>Adsense</h3>
      </div>
      <h2>{area} Webcams</h2>
      <div className="cam-container">
        {cams.cams.map((cam: Cams) => {
          if (cam.area === area && cam.subarea === '') {
            return <CamItem key={cam.id} cam={cam} />
            // return <CamItem key={cam.id} cam={cam} refreshData={refreshData} />
          }
          return null
        })}
      </div>
    </>
  )

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
      title="Beach Cams of the Big Island, Hawaii - Webcams at the Kona Coast, Waikoloa and Kailua Kona"
      description="Best Beach Cams and Surf Cams on the Big Island of Hawaii with webcams on the Kona Coast, Waikoloa and Kailua Kona."
    >
      <div className="layout">
        <h1>Big Island Webcams</h1>
        <div className="content-and-ad" style={{ border: '1px solid red' }}>
          <div className="content">
            <CamsMap vectors={vectors} />
          </div>
          <div className="ad">
            <div
              style={{
                background: 'lightblue',
                height: '100%',
                overflow: 'hidden',
                paddingLeft: '10px',
                width: '100%',
              }}
            >
              <h3>Adsense</h3>
            </div>
          </div>
        </div>
        <p>
          The Island of Hawaii is referred to as the "Big Island" because at
          nearly twice the size of all the other Hawaiian Islands put together.
          The Big Island is a traveler's paradise and offers an array of
          activities from swimming and snorkeling to horseback riding and
          exploring. Most of the resorts on the island are located on the
          western coast; from Hapuna Bay and Waikoloa to the north on the Kohala
          Coast, down through Kailua Kona, then to Keauhou Kona toward the
          south. Here you will find some of the most luxurious resorts in all of
          Hawaii. Other interesting areas to visit are Hilo and Volcano National
          Park near the Kiluaea Crater.
        </p>

        {camSections}
        {moreCams}

        <div className="panel">
          <ShowMoreText
            lines={3}
            more="show more"
            less="show less"
            anchorClass="anchorClass"
            truncatedEndingComponent="... "
          >
            <p>
              In the interior of the island, you can take a drive up the famous
              Mauna Kea, the world's highest mountain if measured from the ocean
              floor, rising more that 33,000 feet. It has an elevation of 13,796
              feet above sea level. At the volcano's summit you can see a
              brilliant and clear sky. This is one of the best places for
              astronomers to scan the skies with powerful telescopes. However,
              be sure to bring a jacket. Mauna Kea can be snowcapped in the
              winter! (Yes, real snow in Hawaii).
            </p>
            <p>
              Agriculture is a large part of the economy on the Big Island.
              Oranges, papayas and macadamia nuts are grown, as well as gourmet
              coffee in the Kona region. There are around 600 coffee farms
              overlooking the Kona Coast. Every year they produce over 2 million
              pounds of coffee, including the famous 100% Kona Coffee. You can
              go inside and visit some of these coffee farms, have free samples,
              and buy fresh coffee directly from them.
            </p>
            <p>
              The Big Island is the birth place of King Kamehameha the Great. He
              was the first king of Hawaii. He was a fierce and very tall
              warrior who, in 1810, united the Islands of Hawaii. You can visit
              the original Kamehameha statue, temple ruins and the royal
              compound while in the Kona area.
            </p>
            <p>
              On the northern end of the island is the Waipi'o Valley. It is a
              magical place to experience "Old Hawaii." This remote valley is
              accessed by a scenic road filled with lush flowers, waterfalls,
              wild horses and a black-sand beach.
            </p>
            <p>
              Take a day or two of your trip and drive to the other side of the
              island and visit the Kilauea Volcano. This is a once-in-a-lifetime
              adventure. Spend the day driving around the Volcano National Park
              and the 11-mile crater rim drive of the Kilauea Caldera. At night,
              you may be able to walk over and see the bright red/orange lava
              flowing into the ocean. Be sure and bring a flashlight with you.
              There is lodging in the Volcano Village area. A helicopter ride
              above the volcano while it's erupting is another fantastic way to
              see this incredible hot lava flow into the cool ocean, creating
              plumes of steam.
            </p>
            <p>
              For the golfers, a trip to the Big Island is not complete without
              a round of golf. There are several spectacular courses on the Big
              Island to choose from, including the Big Island Country Club and
              the famed course at the Mauna Kea Hotel. Rolling fairways, water
              hazards and an island green are some of the fantastic elements you
              will find.
            </p>
          </ShowMoreText>
        </div>

        <hr />

        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do on the Big Island</h3>
            <ol>
              <li>Drive to the Mauna Kea Summit</li>
              <li>Swim and snorkel in Honaunau Bay or Hapuna Bay</li>
              <li>Visit Kilauea Volcano and Volcano National Park</li>
              <li>
                Take a tour of a Kona Coffee Farm and buy some fresh coffee
              </li>
              <li>Take a sailboat ride or fishing trip</li>
              <li>Visit the birthplace of King Kamehameha</li>
              <li>Go Golfing</li>
              <li>Visit the Hawaiian Tropical Botanical Gardens</li>
              <li>Visit Akaka Falls State Park near Hilo</li>
              <li>
                Have a special seafood dining at one of the many fine
                restaurants
              </li>
            </ol>
          </div>
          <div className="info">
            <h3>Big Island Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.gohawaii.com/islands/hawaii-big-island"
                  rel="noreferrer"
                  target="_blank"
                >
                  Official Tourism Hawaii Big Island Site
                </a>{' '}
                Comprehensive website for planning your Big Island vacation
              </li>
              <li>
                <a
                  href="https://hawaiistateparks.org/parks/hawaii/"
                  rel="noreferrer"
                  target="_blank"
                >
                  State Parks of the Big Island
                </a>{' '}
                Descriptions of the different State Parks of Big Island
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
                  href="https://www.gohawaii.com/islands/hawaii-big-island/things-to-do/land-activities/golf"
                  rel="noreferrer"
                  target="_blank"
                >
                  Hawaii Golf Network
                </a>{' '}
                Lots of information on local golf courses
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
                  href="https://www.nps.gov/havo/index.htm"
                  rel="noreferrer"
                  target="_blank"
                >
                  Hawaii Volcanoes National Park
                </a>{' '}
                70 million years in the making, explore the volcanoes of the Big
                Island
              </li>
              <li>
                <a
                  href="http://www.konaweb.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  KonaWeb
                </a>{' '}
                Online Magazine about The Big Island of Hawaii
              </li>
              <li>
                <a
                  href="http://luremakingkonastyle.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Weekly Kona Fishing Report
                </a>{' '}
                Fishing advice, reports, tips and stories updated weekly
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

export default BigIslandPage