import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import AdLarge from '@/components/AdLarge'
import CamsPageMap from '@/components/CamsPageMap'
import RenderStatesSections from '@/components/RenderStatesSections'
import data from '@/data/camLocationAreas'
import { findStates } from '@/utils/common'
import * as types from '@/utils/types'
import ErrorLoadingWebcams from '@/components/ErrorLoadingWebcams'

const CountryStatesPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'Curacao'

  const pageSections = findStates(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((state: { state: string }) => state.state)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Webcams - MyBeachCams`}
      documentDescription={`Explore beach webcams from ${camPageTargetType} including ${
        pageSectionsArray.length === 1
          ? pageSectionsArray[0]
          : `${pageSectionsArray.slice(0, -1).join(', ')} and ${
              pageSectionsArray[pageSectionsArray.length - 1]
            }.`
      }`}
    >
      <div className="layout">
        <h1>{camPageTargetType} Webcams</h1>
        <h3 className="cam-page-subheading">
          Explore beach webcams from {camPageTargetType} including{' '}
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
            Curacao dazzles as a tropical treasure in the Caribbean, celebrated
            for its pristine beaches and storied past. At Mambo Beach, the
            LionsDive Beach Resort cam immerses you in the translucent waters
            and soft, sunlit sands. In Willemstad, the Handelskade & Brionplein
            webcam unveils vibrant colonial facades as boats drift lazily by.
            Klein Curacao's untouched shores beckon explorers seeking solitude,
            with its webcam capturing the island's secluded splendor. At Barbra
            Beach, the Miss Ann Boat Trips cam reveals the gentle embrace of
            tranquil waters. These webcams immerse you in Curacao's coastal
            allure, a world of vivid beauty and serenity.
          </p>
        </ShowMoreText>

        <RenderStatesSections pageSections={pageSections ?? []} cams={cams} />

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
            Curacao presents a captivating fusion of vibrant culture and natural
            splendor. Its beaches are among the most stunning in the Caribbean.
            Mambo Beach, a beloved destination, mesmerizes with its crystalline
            waters and soft, powdery sands. The LionsDive Beach Resort cam
            immerses you in this tropical escape. Watching the waves unfurl
            brings a sense of tranquility, while the beach's lively atmosphere
            beckons sun-seekers.
          </p>
          <p>
            In Willemstad, the Handelskade & Brionplein cam unveils a vivid
            display of Curacao's historical allure. The colorful buildings
            lining the harbor form a striking tableau of Dutch colonial design.
            Boats drift through the waters, creating a picturesque scene that's
            impossible to ignore. Whether you're planning an adventure or just
            exploring from home, this view encapsulates the essence of Curacao's
            dynamic capital.
          </p>
          <p>
            Klein Curacao is a secluded island located 15 miles from the main
            coast. Its beach sprawls in quiet isolation, ideal for those seeking
            a peaceful retreat. The Klein Curacao Beach cam unveils the island's
            raw beauty, with its untouched sands and boundless horizon. Time
            seems to pause here, far removed from the world's bustle.
          </p>
          <p>
            Barbra Beach offers yet another treasure, celebrated for its
            tranquil waters and gentle shores. The Miss Ann Boat Trips cam
            reveals a glimpse into this serene corner. Watching boats come and
            go evokes a feeling of quiet discovery. It's the perfect place to
            recharge and embrace Curacao's soothing charm.
          </p>
          <p>
            Curacao's webcams breathe life into its stunning locations. From
            bustling beaches to peaceful islands, these glimpses stir dreams of
            Caribbean escapes. Each location tells its own story, inviting you
            to experience the island's multifaceted beauty firsthand.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Swim at Mambo Beach and enjoy the clear waters.</li>
              <li>Snorkel at Playa Porto Marie for vibrant marine life.</li>
              <li>Explore the Handelskade in Willemstad's harbor.</li>
              <li>Dive at Blue Bay Beach and explore coral reefs.</li>
              <li>Relax on the quiet shores of Klein Curacao.</li>
              <li>Visit Jan Thiel Beach for a day by the water.</li>
              <li>Kayak through the Spanish Water Lagoon.</li>
              <li>Walk along the sands of Cas Abao Beach.</li>
              <li>Take a boat trip to the Blue Room cave.</li>
              <li>Stroll around the Curacao Sea Aquarium.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.curacao.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Curacao Tourist Board
                </a>{' '}
                - Discover attractions, events, and travel tips.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/12.1696,-68.99"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Curacao Weather
                </a>{' '}
                - Check the latest weather updates for Curacao.
              </li>
              <li>
                <a
                  href="https://www.showmecaribbean.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ShowMeCaribbean
                </a>{' '}
                - Watch live webcams from top Curacao locations.
              </li>
              <li>
                <a
                  href="https://www.tripadvisor.com/Tourism-g147277-Curacao-Vacations.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tripadvisor Curacao
                </a>{' '}
                - Read reviews, find top-rated activities, and plan your stay.
              </li>
              <li>
                <a
                  href="https://www.lonelyplanet.com/aruba-bonaire-and-curacao/curacao"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lonely Planet Curacao
                </a>{' '}
                - Explore Curacao's history, culture, and top sites.
              </li>
              <li>
                <a
                  href="https://www.viator.com/Curacao/d725-ttd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Viator Curacao Tours
                </a>{' '}
                - Book tours and activities for your trip.
              </li>
              <li>
                <a
                  href="https://www.curacao-sea-aquarium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Curacao Sea Aquarium
                </a>{' '}
                - Plan a visit to Curacao's marine life center.
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
    cams = cams.filter((cam) => cam.country === 'Curacao')

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

export default CountryStatesPage
