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
  const camPageTargetType = 'Japan'

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
        <h3 style={{ marginTop: '0' }}>
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
            Japan's coastlines captivate with stunning beauty and rich history.
            From the Sea of Japan to the Pacific Ocean, explore endless charm.
            Nagasaki Port offers views of ships gliding under the Venus-Wing
            Bridge. Beppu Bay reveals vibrant cityscapes and sparkling waters.
            Oita Airport frames the Seto Inland Sea, where planes and nature
            meet. Takamatsu Port hums with ferries and cruises, anchored by the
            Tamamo Lighthouse.
          </p>
          <p>
            Sekiya Beach enchants with serene shores and sunsets, while Sado
            Island looms on clear days. Akita Port showcases bustling terminals
            on Honshu Island. At Oma Fishing Port, fishermen tackle bluefin tuna
            in a dance of tradition and livelihood. Shirahama Ohama Beach
            glistens with white sands, inviting surfers and divers alike.
          </p>
          <p>
            These live webcams offer a window into Japan's coastal allure.
            Perfect for weather checks, travel plans, or pure inspiration.
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
            Japan's shores are a treasure of natural and cultural wonders.
            Nagasaki Port, nestled between mountains and sea, reflects history
            and trade. Watch cruise ships pass under the Venus-Wing Bridge. The
            port connects Japan's past and present, blending tradition with
            modern life.
          </p>
          <p>
            Beppu Bay, in Oita Prefecture, sparkles with activity. The bay is
            lined with bustling cityscapes and stunning coastlines. Route 10
            hugs the shore, offering scenic views of the blue waters. This
            webcam captures the vibrant energy of Beppu's coastal charm.
          </p>
          <p>
            Oita Airport sits near the vast Seto Inland Sea. Here, you can see
            planes take off against a backdrop of tranquil waters. The
            surrounding area blends modern aviation with breathtaking natural
            scenery. This view highlights the harmony of technology and nature.
          </p>
          <p>
            Takamatsu Port is alive with ferries, cruises, and energy. The
            Tamamo Lighthouse stands as a beacon near the pier. This harbor
            connects travelers to Shikoku's hidden gems. It's a hub of movement
            and discovery, captured perfectly on this webcam.
          </p>
          <p>
            Sekiya Beach, along the Sea of Japan, is calm and serene. Golden
            sands meet the gentle waves, creating a peaceful retreat. On clear
            days, Sado Island's silhouette rises on the horizon. This is a
            favorite spot for those seeking tranquility.
          </p>
          <p>
            Akita Port pulses with life on Honshu Island. Ships unload cargo
            while vehicles crisscross the terminal. This webcam offers a glimpse
            into Japan's maritime trade and coastal activity. Oma Fishing Port,
            farther north, is a center for bluefin tuna fishing. The docks buzz
            with the effort of skilled fishermen.
          </p>
          <p>
            Shirahama Ohama Beach in Shimoda gleams with soft white sands. Its
            clear waters attract divers, swimmers, and surfers. This beach is a
            perfect escape for adventure and relaxation. Explore Japan's dynamic
            coastline through these webcams and plan your next journey.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Relax on the sands of Shirahama Ohama Beach.</li>
              <li>Watch ships at Nagasaki Port's Venus-Wing Bridge.</li>
              <li>Stroll along the shores of Beppu Bay.</li>
              <li>Explore the harbor at Takamatsu Port.</li>
              <li>Fish for bluefin tuna at Oma Fishing Port.</li>
              <li>Walk the coastline of Sekiya Beach.</li>
              <li>Spot planes over the Seto Inland Sea near Oita Airport.</li>
              <li>Visit the lighthouse at Tamamo Pier in Takamatsu.</li>
              <li>Watch cargo ships at Akita Port.</li>
              <li>Surf the waves at Shirahama Ohama Beach.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.japan.travel/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Japan National Tourism Organization
                </a>{' '}
                - Explore destinations, culture, and travel tips.
              </li>
              <li>
                <a
                  href="https://www.japan-guide.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Japan Guide
                </a>{' '}
                - Find attractions, itineraries, and local insights.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/32.7399,129.8709"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Weather in Nagasaki
                </a>{' '}
                - Check conditions at Nagasaki Port.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/34.6915,138.9727"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Weather in Shimoda
                </a>{' '}
                - Plan your visit to Shirahama Ohama Beach.
              </li>
              <li>
                <a
                  href="https://japanrailpass.net/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Japan Rail Pass
                </a>{' '}
                - Learn about train routes and passes for easy travel.
              </li>
              <li>
                <a
                  href="https://www.klook.com/en-US/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Klook
                </a>{' '}
                - Book tours, activities, and unique local experiences.
              </li>
              <li>
                <a
                  href="https://www.japantimes.co.jp/travel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Japan Times Travel
                </a>{' '}
                - Read articles on travel destinations and tips.
              </li>
              <li>
                <a
                  href="https://www.jtbusa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JTB Travel
                </a>{' '}
                - Discover packages and services for exploring Japan.
              </li>
              <li>
                <a
                  href="https://www.japanican.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Japanican
                </a>{' '}
                - Reserve hotels, tours, and local experiences.
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
    cams = cams.filter((cam) => cam.country === 'Japan')

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
