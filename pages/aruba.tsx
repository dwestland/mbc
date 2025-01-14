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
  const camPageTargetType = 'Aruba'

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
            Explore the vibrant beaches of Aruba through our webcams. Famous for
            white sands and clear waters, this island offers stunning views.
            Check out Eagle Beach, perfect for sunbathing and water sports.
            Nearby, Palm Beach is lively with resorts and beachfront cafes. The
            webcams capture every moment, from sunsets to beach life. In
            Oranjestad, cruise ships dock in the harbor. Go on a trip to Baby
            Beach, ideal for snorkeling with calm waters. Each webcam offers a
            window into Aruba's coastal beauty. Plan your trip or simply relax
            and enjoy the scenes from home.
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
            Aruba is a Caribbean paradise, known for its shimmering beaches and
            crystal waters. Eagle Beach stands out with its wide, open
            shoreline. Soft sands stretch far, offering space for quiet walks or
            sunbathing. You'll find water sports here, too, from paddleboarding
            to jet skiing. Nearby, Palm Beach thrives with activity. Resorts
            line the shore, and the beach bustles with life. It's a hotspot for
            dining, with oceanfront cafes steps from the waves. Watch it all
            unfold through our webcams.
          </p>

          <p>
            In Oranjestad, Aruba's capital, the waterfront teems with action.
            Cruise ships pull into port, bringing new visitors daily. It's a
            lively spot full of shops and restaurants. If you love history, take
            in Fort Zoutman, a historic landmark. The live feed captures the
            area's charm and vibrancy.
          </p>

          <p>
            Further down the coast lies Baby Beach. Its calm, shallow waters
            make it perfect for snorkeling. Bright fish and gentle waves create
            a relaxing underwater experience. It's the perfect spot for families
            looking for a tranquil swim. You can also spot kite surfers along
            the horizon, filling the sky with their colorful sails.
          </p>

          <p>
            Aruba's natural beauty goes beyond the beaches. Rocky cliffs rise
            along the northern coast. Natural bridges and rugged landscapes
            offer a dramatic contrast to the soft sands. Whether you're planning
            a visit or just enjoying the view, Aruba's magic is waiting. Tune
            into our webcams for an ever-changing glimpse of paradise.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Relax on the soft sands of Eagle Beach.</li>
              <li>Snorkel at Baby Beach's calm lagoon.</li>
              <li>Explore the natural bridges on the northern coast.</li>
              <li>Watch the sunset at Palm Beach.</li>
              <li>Windsurf along the waves at Hadicurari Beach.</li>
              <li>Stroll the lively Oranjestad waterfront.</li>
              <li>Visit Arikok National Park's coastal cliffs.</li>
              <li>Swim in the calm waters of Mangel Halto.</li>
              <li>Kayak through the Spanish Lagoon mangroves.</li>
              <li>Explore the vibrant reefs at Boca Catalina.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/12.5539,-70.0544"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aruba Weather Forecast
                </a>{' '}
                - Check the latest weather updates for Eagle Beach.
              </li>
              <li>
                <a
                  href="https://www.visitaruba.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Aruba
                </a>{' '}
                - Find top attractions, dining options, and travel tips.
              </li>
              <li>
                <a
                  href="https://www.aruba.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aruba Tourism Authority
                </a>{' '}
                - Learn about Aruba's culture, beaches, and travel itineraries.
              </li>
              <li>
                <a
                  href="https://www.arubaaloe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aruba Aloe Factory
                </a>{' '}
                - Visit the aloe factory and museum for a unique island
                experience.
              </li>
              <li>
                <a
                  href="https://acf.aw/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aruba Conservation Foundation
                </a>{' '}
                - Take care of Aruba's diverse ecosystems, both land and sea.
              </li>
              <li>
                <a
                  href="https://www.depalmtours.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  De Palm Tours
                </a>{' '}
                - Book island tours and water activities, including snorkeling
                and jeep safaris.
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
    cams = cams.filter((cam) => cam.country === 'Aruba')

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
