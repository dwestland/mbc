import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
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
  const camPageTargetType = 'Jamaica'

  const pageSections = findStates(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((state: { state: string }) => state.state)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Explore live Jamaica beach webcams in Kingston, Negril, and Montego Bay. View coastal scenery and plan your trip."
    >
      <div className="layout">
        <h1>{camPageTargetType} Beach Webcams</h1>
        <h3 style={{ marginTop: '0' }}>
          Featuring webcams from{' '}
          {pageSectionsArray.slice(0, -1).join(', ') +
            (pageSectionsArray.length > 1
              ? ` and ${pageSectionsArray[pageSectionsArray.length - 1]}`
              : '')}{' '}
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
            Jamaica's beaches unveil sights that linger long after. The Kingston
            Harbour Cam frames a vast natural harbour, where ships and yachts
            glide across sapphire waters. In Negril, Rick's Cafe Cam captures
            the pulse of the coast, with daring cliff dives carved into the West
            End Cliffs. The Cross Roads Camera in Kingston sweeps through
            bustling streets, with the Blue Mountains looming like sentinels on
            the horizon. These webcams immerse you in Jamaica's vibrant coastal
            energy, whether you're crafting your travel plans or savoring the
            island's striking beauty from afar.
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
            Jamaica's coastline reveals endless wonders waiting to be
            discovered. In Kingston, the Harbour Cam sweeps across one of the
            largest natural harbours in the world. Anchored at the Royal Jamaica
            Yacht Club, this camera showcases ships, ferries, and yachts as they
            drift through the deep waters. The busy port merges with the city's
            vibrant pulse, creating a striking contrast between maritime life
            and urban movement.
          </p>

          <p>
            The Cross Roads Camera unfolds a different scene. Set high above
            Kingston's core, it captures the city's busiest streets in motion.
            The rugged Blue Mountains soar to the north, casting their imposing
            shadow over the city. To the south, the Kingston Harbour gleams,
            with the Palisadoes stretching along the edge like a natural barrier
            between land and sea. This camera brings the city to life, framed by
            Jamaica's dramatic landscape.
          </p>

          <p>
            In Negril, the Rick's Cafe Cam immerses you in the island's rugged
            western shore. Perched on the iconic West End Cliffs, the camera
            frames fearless cliff divers as they plunge into the sparkling
            waters below. The cliffs stand tall, carved by time, while the
            endless sea stretches to the horizon. Visitors gather at Rick's
            Cafe, drawn by the daring dives and the view that seems to expand
            forever.
          </p>

          <p>
            These webcams open a window into Jamaica's diverse landscapes.
            Whether you're captivated by the lively streets of Kingston, the
            serene expanse of the harbour, or the raw beauty of Negril's cliffs,
            each scene offers something unique. Let these views spark your next
            adventure or transport you to Jamaica's stunning coasts, wherever
            you may be.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Swim at Seven Mile Beach in Negril.</li>
              <li>Snorkel at Doctor's Cave Beach in Montego Bay.</li>
              <li>Explore the Blue Lagoon in Port Antonio.</li>
              <li>Relax on Frenchman's Cove Beach.</li>
              <li>Kayak in the waters of Rio Grande.</li>
              <li>Watch the sunset at Rick's Cafe in Negril.</li>
              <li>Surf the waves at Boston Bay Beach.</li>
              <li>Dive into the waters at Kingston Harbour.</li>
              <li>Take a boat tour of Black River.</li>
              <li>Visit the Pelican Bar off Parottee Bay.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitjamaica.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Jamaica
                </a>{' '}
                - Discover destinations, culture, and events across Jamaica.
              </li>
              <li>
                <a
                  href="https://www.jamaica-gleaner.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jamaica Gleaner
                </a>{' '}
                - Stay updated with the latest local news and happenings.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/17.9926,-76.7888"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kingston Weather
                </a>{' '}
                - Check the current weather in Kingston for your trip.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/18.2540,-78.3632"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Negril Weather
                </a>{' '}
                - Get the latest weather forecast for Negril.
              </li>
              <li>
                <a
                  href="https://www.tripadvisor.com/Tourism-g147311-Montego_Bay_Vacations.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tripadvisor - Montego Bay
                </a>{' '}
                - Explore reviews, activities, and travel tips for Montego Bay.
              </li>
              <li>
                <a
                  href="https://www.lonelyplanet.com/jamaica"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lonely Planet - Jamaica
                </a>{' '}
                - Find travel guides, places to visit, and local tips for
                Jamaica.
              </li>
              <li>
                <a
                  href="https://www.jamaicaexperiences.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jamaica Experiences
                </a>{' '}
                - Browse cultural insights and travel experiences in Jamaica.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <h2>
        <Link href="/hawaii/">More Hawaii Beach Cams</Link>
      </h2>{' '}
      <p style={{ textAlign: 'center' }}>
        <span className="green-dot">&nbsp;</span>MyBeachCam hosted page
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
    cams = cams.filter((cam) => cam.country === 'Jamaica')

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
