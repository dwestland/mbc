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
  const camPageTargetType = 'Oahu'
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
          {/* CUSTOMIZE PAGE 2 of 4 - Add opening text ~120 words */}
          <p>
            Oahu is considered the "Heart of Hawaii" and is the most visited of
            all of the Hawaiian Islands. Oahu is also home to the world-famous
            Waikiki beach. Oahu offers more restaurants, shops and nightlife
            than all of the other Hawaiian Islands combined. 80% of Hawaiians
            live in Oahu. There are all types of different hotels, motels,
            resorts, timeshares and condos that you can stay at depending on
            your budget. The most popular resort areas are Waikiki, Turtle Bay,
            Kahala and Diamond Head. There are many discount travel packages
            available, some that include car, hotel and airfare. In addition to
            lodging, there are several cruise ships that can take you around all
            of the Hawaiian Islands. Oahu is a great place to begin your
            Hawaiian vacation or holiday.
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
          {/* CUSTOMIZE PAGE 3 of 5 - Add opening text ~120 words */}
          <p>
            On the North Shore of Oahu, the beaches attract the top professional
            surfers. Sunset Beach, Waimea Bay, Ehukai Beach, Ali'i Beach and
            Banzai Pipeline are some of the legendary spots along this amazing
            shoreline. In the winter, waves can reach as high as 30 feet! These
            white-sandy beaches are also filled with body-boarders, body-surfers
            and sun-worshipers as well.
          </p>
          <p>
            Located near the North Shore is the remarkable Polynesian Cultural
            Center, set in a 42-acre lagoon part, You can spend the entire day
            there visiting the 7-island villages, canoe riders and enjoying over
            100 performers.
          </p>
          <p>
            On the southern side of Oahu Island is world-famous Waikiki Beach.
            Its boardwalks are jam-packed with hotels, bars and restaurants. It
            is a popular and convenient location to stay while on vacation.
            Waikiki is known for its long, endless days of sun, fine golden
            sand, excellent surfing and a sandy lagoon ideal for swimming. It's
            a great place to hang out day and night. It is also a very popular
            honeymoon destination.
          </p>
          <p>
            A short drive from Waikiki is Diamond Head. Diamond Head is the
            awesome volcano crater on Oahu's south side. It got its name in the
            late 1700's when British seamen saw calcite crystals sparkling in
            the sunshine and thought they had found diamonds. Take a hike up
            Diamond Head for panoramic views of Waikiki.
          </p>
          <p>
            Close to Diamond Head is Hanauma Bay, which is considered the best
            snorkeling in Hawaii. The safe, clam waters are protected by an
            offshore reef. It is a great place to go for swimming, snorkeling,
            or just sunbathing.
          </p>
          <p>
            On the other side of Waikiki is the USS Arizona Memorial and Pearl
            Harbor. This memorial commemorates the servicemen and women who died
            in 1941 during the Japanese attack on Pearl Harbor. The USS Missouri
            battleship is also there and houses a museum.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
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
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Oahu Visitors Bureau
                </a>{' '}
                - The official website of the Island of Oahu
              </li>
              <li>
                <a
                  href="https://www.gohawaii.com/oahu/plan-a-trip"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Official Tourism Oahu Site
                </a>{' '}
                - Comprehensive website for planning your Oahu vacation
              </li>
              <li>
                <a
                  href="https://hawaiistateparks.org/parks/oahu/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  State Parks of Oahu
                </a>{' '}
                - Descriptions of the different State Parks of Oahu
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
                  href="https://www.gohawaii.com/islands/oahu/things-to-do/land-activities/Golf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Oahu Golf
                </a>{' '}
                - Lots of information on local golf courses
              </li>
              <li>
                <a
                  href="http://www.rcarchive.com/hhg/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Oahu Hiking Gallery
                </a>{' '}
                - A collection of pictures and write ups from various hikes in
                Oahu
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
                  href="http://www.honolulumarathon.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  The Honolulu Marathon
                </a>{' '}
                - If you like running marathons, check out this site
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
    cams = cams.filter((cam) => cam.area === 'Oahu')

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
