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
  const camPageTargetType = 'Big Island'
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
        <h3 style={{ marginTop: '0' }}>
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
          {/* CUSTOMIZE PAGE 3 of 5 - Add opening text ~120 words */}
          <p>
            The Island of Hawaii is referred to as the "Big Island" because at
            nearly twice the size of all the other Hawaiian Islands put
            together. The Big Island is a traveler's paradise and offers an
            array of activities from swimming and snorkeling to horseback riding
            and exploring. Most of the resorts on the island are located on the
            western coast; from Hapuna Bay and Waikoloa to the north on the
            Kohala Coast, down through Kailua Kona, then to Keauhou Kona toward
            the south. Here you will find some of the most luxurious resorts in
            all of Hawaii. Other interesting areas to visit are Hilo and Volcano
            National Park near the Kiluaea Crater.
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
            In the interior of the island, you can take a drive up the famous
            Mauna Kea, the world's highest mountain if measured from the ocean
            floor, rising more that 33,000 feet. It has an elevation of 13,796
            feet above sea level. At the volcano's summit you can see a
            brilliant and clear sky. This is one of the best places for
            astronomers to scan the skies with powerful telescopes. However, be
            sure to bring a jacket. Mauna Kea can be snowcapped in the winter!
            (Yes, real snow in Hawaii).
          </p>
          <p>
            Agriculture is a large part of the economy on the Big Island.
            Oranges, papayas and macadamia nuts are grown, as well as gourmet
            coffee in the Kona region. There are around 600 coffee farms
            overlooking the Kona Coast. Every year they produce over 2 million
            pounds of coffee, including the famous 100% Kona Coffee. You can go
            inside and visit some of these coffee farms, have free samples, and
            buy fresh coffee directly from them.
          </p>
          <p>
            The Big Island is the birth place of King Kamehameha the Great. He
            was the first king of Hawaii. He was a fierce and very tall warrior
            who, in 1810, united the Islands of Hawaii. You can visit the
            original Kamehameha statue, temple ruins and the royal compound
            while in the Kona area.
          </p>
          <p>
            On the northern end of the island is the Waipi'o Valley. It is a
            magical place to experience "Old Hawaii." This remote valley is
            accessed by a scenic road filled with lush flowers, waterfalls, wild
            horses and a black-sand beach.
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
            For the golfers, a trip to the Big Island is not complete without a
            round of golf. There are several spectacular courses on the Big
            Island to choose from, including the Big Island Country Club and the
            famed course at the Mauna Kea Hotel. Rolling fairways, water hazards
            and an island green are some of the fantastic elements you will
            find.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
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
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.gohawaii.com/islands/hawaii-big-island"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Official Tourism Hawaii Big Island Site
                </a>{' '}
                - Comprehensive website for planning your Big Island vacation
              </li>
              <li>
                <a
                  href="https://hawaiistateparks.org/parks/hawaii/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  State Parks of the Big Island
                </a>{' '}
                - Descriptions of the different State Parks of Big Island
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
                  href="https://www.gohawaii.com/islands/hawaii-big-island/things-to-do/land-activities/golf"
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
                  Hawaii's Polynesian Cultural Center
                </a>{' '}
                - Hawaii's Polynesian Cultural Center
              </li>
              <li>
                <a
                  href="https://www.nps.gov/havo/index.htm"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Hawaii Volcanoes National Park
                </a>{' '}
                - 70 million years in the making, explore the volcanoes of the
                Big Island
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

    // CUSTOMIZE PAGE 5 of 5 - Add camPageTargetType
    cams = cams.filter((cam) => cam.area === 'Big Island')

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
