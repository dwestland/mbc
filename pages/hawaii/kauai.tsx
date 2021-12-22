import React from 'react'
import { InferGetStaticPropsType } from 'next'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import CamItem from '@/components/CamItem'

interface KauaiPageProps {
  cams: {}
}

interface Cams {
  id: number
  title: string
  slug: string
  webcamUrl: string
  imageUrl: string
  oldImageUrl: string
  description: string
  country: string
  state: string
  area: string
  subArea: string
  author: string
}

const KauaiPage = ({
  cams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  console.log(
    '%c KauaiPage cams.cams ',
    'background: red; color: white',
    cams.cams
  )
  // const boom: {}[] = cams.cams

  return (
    <Layout
      title="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      description="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <h1>Kauai</h1>
        <p>
          Kauai is one of the most beautiful and lush of the seven Hawaiian
          Islands. Kauai is known as the &#x34;Garden Isle&#x34; because of the
          brilliant flowers, such as wild orchids and birds of paradise that
          grow there. The three most popular resort areas on the Kauai are:
          Princeville on the North Shore, Coconut Plantation, and Poipu Beach to
          the south. Some of the many things that travelers enjoy are the exotic
          flowers, Waimea Canyon, Opaekaa Falls, Mt. Wai&#x27;ale&#x27;ale and
          Hanalei Bay.
        </p>

        <div className="cam-container">
          {cams.cams.map((cam: Cams) => (
            <CamItem key={cam.id} cam={cam} />
          ))}
        </div>

        {/* <h2>Princeville</h2>
        {cams.length === 0 && <h2>No cams to show</h2>}
        <div className="cam-container">
          {princevilleCams.map((cam) => (
            <CamItem key={cam.id} cam={cam} />
          ))}
        </div>

        <h2>Poipu</h2>
        {cams.length === 0 && <h2>No cams to show</h2>}
        <div className="cam-container">
          {poipuCams.map((cam) => (
            <CamItem key={cam.id} cam={cam} />
          ))}
        </div>

        <h2>Lihue</h2>
        {cams.length === 0 && <h2>No cams to show</h2>}
        <div className="cam-container">
          {lihueCams.map((cam) => (
            <CamItem key={cam.id} cam={cam} />
          ))}
        </div>

        <h2>More Kauai Cams</h2>
        {cams.length === 0 && <h2>No cams to show</h2>}
        <div className="cam-container">
          {moreCams.map((cam) => (
            <CamItem key={cam.id} cam={cam} />
          ))}
        </div> */}

        <div className="panel">
          <ShowMoreText
            lines={3}
            more="show more"
            less="show less"
            anchorClass="anchorClass"
            truncatedEndingComponent="... "
          >
            <p>
              Princeville is on Kauai&#x27;s North Shore. It is a beautiful,
              upscale development, set high above the Hanalei Bay. It is home to
              the luxurious Princeville Hotel and 2 championship golf courses.
              There you can also taste sweet harvests at the Guava Kai
              plantation.
            </p>
            <p>
              Just past Princeville, beyond the North Shore, is the &#x34;End of
              the Road&#x34; or Hanalei. The movie South Pacific was filmed at
              the pier. Also, a glance and the stunning, lush Hanalei Valley is
              a must. Hanalei is also where one of the best beaches on Kauai is
              located, Black Pot Beach. This is a 2-mile stretch of sand
              offering some of the best swimming, surfing and bodysurfing. In
              the Hanalei Valley you can tour the lush mountains and travel to
              the amazing Opaekaa Falls, where the Wailua River makes a plunge
              over a high cliff.
            </p>
            <p>
              A must see on Kauai is Waimea Canyon, called &#x34;The Grand
              Canyon of the Pacific&#x34; by Mark Twain. It is approximately 10
              miles long and about 3600 feet deep, surrounded by trees and
              colorful rock. It is truly a beautiful and memorable sight and
              well worth the drive.
            </p>
            <p>
              At the center of Kauai is Mt. Wai&#x27;ale&#x27;ale, considered
              the wettest spot on earth. It averages 485 inches of rain per year
              and is a lush paradise. All of this rainfall creates spectacular
              waterfalls and rivers. Some of the best waterfalls on the island
              are: Opeakaa Falls, Papkalea Falls, Wailua Falls and Kipu Falls.
            </p>

            <p>
              On the west side of the island is the resort area of Coconut
              Coast. There are several hotels and resorts to choose from there.
              Close to the Coconut Coast is the Fern Grotto, accessible by boat
              down the Wailua River. The Wailua River is an 11-mile long, slowly
              meandering river. The river starts at the Wai&#x27;ale&#x27;ale
              Crater and several forks in the river lead to waterfalls. You can
              even rent a kayak and explore the area yourself. Make sure to stop
              and visit the Fern Grotto, a beautiful cave that was at one time
              reserved strictly for Hawaiian Royalty. The Fern Grotto is a
              little paradise, full of ferns and waterfalls. It has become a
              favorite spot for weddings.
            </p>
            <p>
              On the south side of Kauai is the popular beach resort area of
              Poipu Beach. This is the &#x34;dryer&#x34; side of Kauai, as
              compared to the North Shore. It offers excellent beaches,
              especially for body surfing and snorkeling. There are several
              resorts, hotels and timeshares clustered in the Poipu Beach area.
              There are also wonderful shopping areas and great restaurants
              close by.
            </p>
            <p>
              Another beautiful area of Kauai is the Na Pali Coast, with its
              cliffs and hanging valleys. You can hop aboard a chartered
              adventure raft and visit hidden caves and go beneath cascading
              waterfalls. For an added adventure, go ashore and visit an ancient
              fishing village.
            </p>
          </ShowMoreText>
        </div>

        <hr />

        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in Kauai</h3>
            <ol>
              <li>Waimea Canyon (Mini Grand Canyon)</li>
              <li>Visit Waterfalls, (some or all of them)</li>
              <li>Snorkeling on Poipu Beach</li>
              <li>Surfing on Black Pot Beach</li>
              <li>
                Hanalei Valley and its famous &#x34;South Pacific&#x34; pier
              </li>
              <li>Golfing in Princeville and Kiele</li>
              <li>Fern Grotto and the Wailua River</li>
              <li>Mt. Wai&#x27;ale&#x27;ale (the wettest place on earth)</li>
              <li>Hanama&#x27;ulu Ditch (2-mile water ride)</li>
              <li>
                Helicopter flight above the island to get a breathtaking view
              </li>
            </ol>
          </div>
          <div className="info">
            <h3>Kauai Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.gohawaii.com/islands/kauai"
                  rel="noreferrer"
                  target="_blank"
                >
                  Official Tourism Kauai Site
                </a>
                &nbsp; Comprehensive website for planning your Kauai vacation
              </li>
              <li>
                <a
                  href="http://thegardenisland.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Kauai News
                </a>
                &nbsp; Local Island news
              </li>
              <li>
                <a
                  href="http://www.kauai-hawaii.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Official County Tourism Site
                </a>
                &nbsp; Tourism Site of the County of Kauai
              </li>
              <li>
                <a
                  href="http://www.kauai.com/hikes"
                  rel="noreferrer"
                  target="_blank"
                >
                  Kauai Hiking
                </a>
                &nbsp; Information on hiking in Kauai
              </li>
              <li>
                <a
                  href="http://www.hawaiistateparks.org/parks/kauai/"
                  rel="noreferrer"
                  target="_blank"
                >
                  State Parks of Kauai
                </a>
                &nbsp; Descriptions of the different State Parks of Kauai
              </li>
              <li>
                <a
                  href="https://portal.ehawaii.gov/"
                  rel="noreferrer"
                  target="_blank"
                >
                  eHawaii.gov
                </a>
                &nbsp; Connecting You to Hawaii State Government
              </li>
              <li>
                <a
                  href="https://www.gohawaii.com/islands/kauai/things-to-do/land-activities/Golf"
                  rel="noreferrer"
                  target="_blank"
                >
                  Hawaii Golf Network
                </a>
                &nbsp; Lots of information on local golf courses
              </li>
              <li>
                <a
                  href="http://www.polynesia.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Hawaii&#x27;s Polynesian Cultural Center
                </a>
                &nbsp; Hawaii&#x27;s Polynesian Cultural Center
              </li>
              <li>
                <a
                  href="http://www.mayacreations.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Maya Creations
                </a>
                &nbsp; Hand made religious jewelry from Hawaii
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
  const cams: KauaiPageProps = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default KauaiPage

// import { API_URL } from '@/config/index'
// import Link from 'next/link'

// interface KauaiPageProps {
//   id: number
//   title: string
//   webcamUrl: string
//   oldImageUrl: string
//   description: string
//   country: string
//   state: string
//   area: string
//   subArea: string
// }

// select: {
//   id: true,
//   title: true,
//   // slug: true,
//   webcamUrl: true,
//   oldImageUrl: true,
//   description: true,
//   country: true,
//   state: true,
//   area: true,
//   subArea: true,

//   author: {
//     select: {
//       id: true,
//       name: true,
//       email: true,
//     },
//   },
// },

// console.log(id)
// console.log(title)
// console.log(webcamUrl)
// console.log(oldImageUrl)
// console.log(description)
// console.log(country)
// console.log(state)
// console.log(area)
// console.log(subArea)

// const {
//   id,
//   title,
//   webcamUrl,
//   oldImageUrl,
//   description,
//   country,
//   state,
//   area,
//   subArea,
// } = cams
