import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
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
  const camPageTargetType = 'Kauai'
  const state = cams[0]?.state || ''
  const pageSections = findSubareas(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((area: { subarea: string }) => area.subarea)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType}, ${state} Webcams - MyBeachCams`}
      documentDescription={`Explore beach webcams from ${camPageTargetType}, ${state} including ${
        pageSectionsArray.length === 1
          ? pageSectionsArray[0]
          : `${pageSectionsArray.slice(0, -1).join(', ')} and ${
              pageSectionsArray[pageSectionsArray.length - 1]
            }.`
      }`}
    >
      <div className="layout">
        <h1>
          {camPageTargetType}, {state} Webcams
        </h1>
        <h3 className="cam-page-subheading">
          Explore beach webcams from {camPageTargetType}, {state} including{' '}
          {pageSectionsArray.length === 1
            ? pageSectionsArray[0]
            : `${pageSectionsArray.slice(0, -1).join(', ')} and ${
                pageSectionsArray[pageSectionsArray.length - 1]
              }`}
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
          {/* CUSTOMIZE PAGE 2 of 4 - Add opening text ~120 words */}
          <p>
            Kauai is one of the most beautiful and lush of the seven Hawaiian
            Islands. Kauai is known as the "Garden Isle" because of the
            brilliant flowers, such as wild orchids and birds of paradise that
            grow there. The three most popular resort areas on the Kauai are:
            Princeville on the North Shore, Coconut Plantation, and Poipu Beach
            to the south. Some of the many things that travelers enjoy are the
            exotic flowers, Waimea Canyon, Opaekaa Falls, Mt. Wai'ale'ale and
            Hanalei Bay.
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
          {/* CUSTOMIZE PAGE 3 of 4 - Add second text ~300 words, */}
          {/* Things to Do and Links and Info */}
          <p>
            Princeville is on Kauai's North Shore. It is a beautiful, upscale
            development, set high above the Hanalei Bay. It is home to the
            luxurious Princeville Hotel and 2 championship golf courses. There
            you can also taste sweet harvests at the Guava Kai plantation.
          </p>
          <p>
            Just past Princeville, beyond the North Shore, is the "End of the
            Road" or Hanalei. The movie South Pacific was filmed at the pier.
            Also, a glance and the stunning, lush Hanalei Valley is a must.
            Hanalei is also where one of the best beaches on Kauai is located,
            Black Pot Beach. This is a 2-mile stretch of sand offering some of
            the best swimming, surfing and bodysurfing. In the Hanalei Valley
            you can tour the lush mountains and travel to the amazing Opaekaa
            Falls, where the Wailua River makes a plunge over a high cliff.
          </p>
          <p>
            A must see on Kauai is Waimea Canyon, called "The Grand Canyon of
            the Pacific" by Mark Twain. It is approximately 10 miles long and
            about 3600 feet deep, surrounded by trees and colorful rock. It is
            truly a beautiful and memorable sight and well worth the drive.
          </p>
          <p>
            At the center of Kauai is Mt. Wai'ale'ale, considered the wettest
            spot on earth. It averages 485 inches of rain per year and is a lush
            paradise. All of this rainfall creates spectacular waterfalls and
            rivers. Some of the best waterfalls on the island are: Opeakaa
            Falls, Papkalea Falls, Wailua Falls and Kipu Falls.
          </p>
          <p>
            On the west side of the island is the resort area of Coconut Coast.
            There are several hotels and resorts to choose from there. Close to
            the Coconut Coast is the Fern Grotto, accessible by boat down the
            Wailua River. The Wailua River is an 11-mile long, slowly meandering
            river. The river starts at the Wai'ale'ale Crater and several forks
            in the river lead to waterfalls. You can even rent a kayak and
            explore the area yourself. Make sure to stop and visit the Fern
            Grotto, a beautiful cave that was at one time reserved strictly for
            Hawaiian Royalty. The Fern Grotto is a little paradise, full of
            ferns and waterfalls. It has become a favorite spot for weddings.
          </p>
          <p>
            On the south side of Kauai is the popular beach resort area of Poipu
            Beach. This is the "dryer" side of Kauai, as compared to the North
            Shore. It offers excellent beaches, especially for body surfing and
            snorkeling. There are several resorts, hotels and timeshares
            clustered in the Poipu Beach area. There are also wonderful shopping
            areas and great restaurants close by.
          </p>
          <p>
            Another beautiful area of Kauai is the Na Pali Coast, with its
            cliffs and hanging valleys. You can hop aboard a chartered adventure
            raft and visit hidden caves and go beneath cascading waterfalls. For
            an added adventure, go ashore and visit an ancient fishing village.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Waimea Canyon (Mini Grand Canyon)</li>
              <li>Visit Waterfalls, (some or all of them)</li>
              <li>Snorkeling on Poipu Beach</li>
              <li>Surfing on Black Pot Beach</li>
              <li>Hanalei Valley and its famous "South Pacific" pier</li>
              <li>Golfing in Princeville and Kiele</li>
              <li>Fern Grotto and the Wailua River</li>
              <li>Mt. Wai'ale'ale (the wettest place on earth)</li>
              <li>Hanama'ulu Ditch (2-mile water ride)</li>
              <li>
                Helicopter flight above the island to get a breathtaking view
              </li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.gohawaii.com/islands/kauai"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Official Tourism Kauai Site
                </a>{' '}
                - Comprehensive website for planning your Kauai vacation
              </li>
              <li>
                <a
                  href="http://thegardenisland.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Kauai News
                </a>{' '}
                - Local Island news
              </li>
              <li>
                <a
                  href="http://www.kauai-hawaii.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Official County Tourism Site
                </a>{' '}
                - Tourism Site of the County of Kauai
              </li>
              <li>
                <a
                  href="http://www.kauai.com/hikes"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Kauai Hiking
                </a>{' '}
                - Information on hiking in Kauai
              </li>
              <li>
                <a
                  href="http://www.hawaiistateparks.org/parks/kauai/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  State Parks of Kauai
                </a>{' '}
                - Descriptions of the different State Parks of Kauai
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
                  href="https://www.gohawaii.com/islands/kauai/things-to-do/land-activities/Golf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Hawaii Golf Network
                </a>{' '}
                - Lots of information on local golf courses
              </li>
              <li>
                <a
                  href="http://www.polynesia.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Hawaii&#x27;s Polynesian Cultural Center
                </a>{' '}
                - Hawaii&#x27;s Polynesian Cultural Center
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="legend">
        <span className="green-dot">&nbsp;</span>MyBeachCams hosted page
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

    // CUSTOMIZE PAGE 4 of 4 - Add camPageTargetType
    cams = cams.filter((cam) => cam.area === 'Kauai')

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
