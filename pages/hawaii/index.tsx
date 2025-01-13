import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import AdLarge from '@/components/AdLarge'
import CamsPageMap from '@/components/CamsPageMap'
// import RenderAreaSections from '@/components/RenderAreaSections'
import data from '@/data/camLocationAreas'
import { findAreas } from '@/utils/common'
import * as types from '@/utils/types'
import ErrorLoadingWebcams from '@/components/ErrorLoadingWebcams'
import MoreMauiCams from '@/components/MoreMauiCams'
import MoreOahuCams from '@/components/MoreOahuCams'
import MoreBigIslandCams from '@/components/MoreBigIslandCams'
import MoreKauaiCams from '@/components/MoreKauaiCams'
import AdLeaderboard from '@/components/AdLeaderboard'

const StateAreasPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'Hawaii'

  const pageAreas = findAreas(data, camPageTargetType)
  const pageAreasArray = pageAreas
    ? pageAreas.map((area: { area: string }) => area.area)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      // TODO:
      documentTitle={`${camPageTargetType} Webcams - MyBeachCams`}
      documentDescription="Explore Hawaii beach webcams for live views of Maui, Oahu, Kauai, and the Big Island. Plan trips or enjoy scenic shores."
    >
      <div className="layout">
        <h1>{camPageTargetType} Webcams</h1>
        <h3 style={{ marginTop: '0' }}>
          Featuring beach webcams from{' '}
          {pageAreasArray.slice(0, -1).join(', ') +
            (pageAreasArray.length > 1
              ? ` and ${pageAreasArray[pageAreasArray.length - 1]}`
              : '')}{' '}
        </h3>
        <div className="links-container">
          <ul>
            <li>
              <Link href="/hawaii/kauai/">
                <a>Kauai Island</a>
              </Link>
            </li>
            <li>
              <Link href="/hawaii/oahu/">
                <a>Oahu Island</a>
              </Link>
            </li>
            <li>
              <Link href="/hawaii/maui/">
                <a>Maui Island</a>
              </Link>
            </li>
            <li>
              <Link href="/hawaii/bigisland/">
                <a>Big Island</a>
              </Link>
            </li>
          </ul>
        </div>
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
            Hawaii offers a blend of stunning beaches, rugged cliffs, and
            tranquil bays. Explore live webcams from Maui, Oahu, Kauai, and the
            Big Island. Maui features Kaanapali's sandy shores and Wailea's
            luxury resorts. On Oahu, Waikiki's bustling beach scene contrasts
            with the North Shore's legendary surf. Kauai's lush landscapes and
            Poipu's calm waters invite relaxation. The Big Island showcases
            volcanic marvels and serene spots like Kona's bays.
          </p>
          <p>
            Each webcam provides a window into Hawaii's beauty. Watch surfers
            ride waves, families enjoy soft sands, or the vivid sunsets over the
            Pacific. Perfect for planning your next trip, checking local
            weather, or escaping to paradise from your screen. Discover Hawaii's
            magic, one live view at a time.
          </p>
        </ShowMoreText>

        <h2>
          <Link href="/hawaii/maui/">Maui Island Webams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            Maui is an island with stunning beaches and clear waters. Kaanapali
            Beach is great for swimming and relaxing. Wailea offers calm shores
            and snorkeling. Visit Haleakalā to see a volcanic crater. Lahaina is
            a historic town with shops and dining. Maui's natural beauty and
            vibrant spots create unforgettable experiences.
          </p>
        </ShowMoreText>
        <MoreMauiCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'Maui').slice(0, 7),
          }}
        />
        <AdLeaderboard />

        <h2>
          <Link href="/hawaii/oahu/">Oahu Island Webams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            Oahu is home to Waikiki Beach and its lively shores. The North Shore
            draws surfers to its giant winter waves. Explore Diamond Head for
            sweeping island views. Visit Pearl Harbor for history and
            remembrance. Honolulu offers dining and vibrant culture. Oahu blends
            natural beauty with exciting urban experiences.
          </p>
        </ShowMoreText>
        <MoreOahuCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'Oahu').slice(0, 7),
          }}
        />
        <AdLeaderboard />

        <h2>
          <Link href="/hawaii/bigisland/">Big Island Webams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            The Big Island offers diverse landscapes and adventures. Kona has
            calm bays and sunny beaches. Visit Hilo for lush gardens and
            waterfalls. Explore Kīlauea's volcanic wonders in Hawai'i Volcanoes
            National Park. Mauna Kea offers stargazing and snowy peaks. The Big
            Island combines natural beauty with unique experiences for every
            traveler.
          </p>
        </ShowMoreText>
        <MoreBigIslandCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'Big Island').slice(0, 7),
          }}
        />
        <AdLeaderboard />

        <h2>
          <Link href="/hawaii/kauai/">Kauai Island Webams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            Kauai is the “Garden Isle” with lush cliffs and valleys. Poipu Beach
            offers calm waters and golden sands. Hanalei Bay is surrounded by
            green mountains. Explore the Na Pali Coast by boat or hike. Visit
            Waimea Canyon for stunning views. Kauai's natural beauty and
            peaceful spots make it unforgettable.
          </p>
        </ShowMoreText>
        <MoreKauaiCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'Kauai').slice(0, 7),
          }}
        />
        <AdLeaderboard />
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
            Hawaii is a treasure trove of natural wonders. Its islands feature
            diverse beaches, dramatic coastlines, and vibrant ocean life. Maui
            offers Kaanapali Beach, where golden sands meet clear waters.
            Nearby, Wailea boasts luxury resorts and serene coves perfect for
            snorkeling. Don't miss Napili Bay for family-friendly swimming and
            relaxing views.
          </p>
          <p>
            On Oahu, explore the world-famous Waikiki Beach. This lively spot
            blends bustling energy with scenic beauty. The island's North Shore
            is a haven for surfers. Winter waves here attract professionals from
            around the world. Waikiki webcams capture the action of city
            beaches, while North Shore cams reveal its raw surf power.
          </p>
          <p>
            Kauai, the "Garden Isle," enchants with lush green cliffs and
            valleys. Poipu Beach on the South Shore offers calm waters ideal for
            swimming. Hanalei Bay, nestled on the North Shore, is surrounded by
            misty mountains. Explore live views of Kauai's shoreline, from
            tranquil lagoons to rugged coasts.
          </p>
          <p>
            The Big Island showcases unique landscapes. Kona is home to quiet
            bays and thriving marine life. Hilo's shores offer views of rolling
            waves and black-sand beaches. Watch live feeds from Keauhou Bay or
            Waikoloa Beach for a glimpse of local charm. Volcano webcams provide
            a rare look at Kīlauea's dramatic activity.
          </p>
          <p>
            Each live cam brings Hawaii to your screen. Witness surfers riding
            waves, beachgoers enjoying soft sands, or sunsets painting the sky.
            These views help you plan adventures or experience the islands from
            afar. Whether you seek calm bays, vibrant beaches, or hidden coastal
            gems, Hawaii delivers.
          </p>
          <p>
            Let these webcams guide your journey. From Maui's golden beaches to
            Kauai's rugged cliffs, Hawaii's beauty is unmatched. Start exploring
            today with live views that inspire and inform.
          </p>
        </ShowMoreText>

        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Relax on Waikiki Beach and enjoy the views.</li>
              <li>Snorkel at Hanauma Bay Nature Preserve.</li>
              <li>Surf the waves on Oahu's North Shore.</li>
              <li>Walk along Kaanapali Beach in Maui.</li>
              <li>Explore tide pools at Poipu Beach in Kauai.</li>
              <li>Swim in the calm waters of Napili Bay.</li>
              <li>Visit Hilo Bay for black-sand beaches.</li>
              <li>Kayak along the Na Pali Coast in Kauai.</li>
              <li>Dive with manta rays off the Big Island.</li>
              <li>Watch the sunset at Wailea Beach in Maui.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.gohawaii.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go Hawaii
                </a>{' '}
                - Find guides, maps, and travel tips for all islands.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/20.7967,-156.3319"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maui Weather
                </a>{' '}
                - Check current weather for planning beach days.
              </li>
              <li>
                <a
                  href="https://www.nps.gov/havo/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hawai'i Volcanoes National Park
                </a>{' '}
                - Discover trails, volcanic sites, and visitor information.
              </li>
              <li>
                <a
                  href="https://www.hawaiibeachsafety.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hawaii Beach Safety
                </a>{' '}
                - Review beach conditions and ocean safety tips.
              </li>
              <li>
                <a
                  href="https://www.surfrider.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Surfrider Foundation
                </a>{' '}
                - Learn about beach conservation and surf-friendly locations.
              </li>
              <li>
                <a
                  href="https://www.hawaiinewsnow.com/traffic/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Honolulu Traffic
                </a>{' '}
                - Monitor live traffic updates for smooth travel.
              </li>
              <li>
                <a
                  href="https://www.hawaiihumpbackwhale.noaa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Humpback Whale Sanctuary
                </a>{' '}
                - Learn about whale watching and ocean life.
              </li>
              <li>
                <a
                  href="https://www.mauivisitorsguide.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maui Visitors Guide
                </a>{' '}
                - Explore activities, beaches, and Maui travel ideas.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      {/* <h2><Link href="/">More Beach Cams</Link></h2>{' '} */}
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
    cams = cams.filter((cam) => cam.state === 'Hawaii')

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

export default StateAreasPage
