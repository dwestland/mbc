import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import AdLarge from '@/components/AdLarge'
import CamsPageMap from '@/components/CamsPageMap'
import * as types from '@/utils/types'
import ErrorLoadingWebcams from '@/components/ErrorLoadingWebcams'
import MoreHawaiiCams from '@/components/MoreHawaiiCams'
import MoreCaliforniaCams from '@/components/MoreCaliforniaCams'
import MoreFloridaCams from '@/components/MoreFloridaCams'
import AdLeaderboard from '@/components/AdLeaderboard'

const CountryStatesPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'USA'

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Explore live U.S. beach webcams showcasing coastlines, ocean views, landmarks, and travel planning resources at MyBeachCams.com."
    >
      <div className="layout">
        <h1>US Beach Webcams</h1>
        <div className="links-container">
          <ul>
            <li>
              <Link href="/alabama/">Alabama</Link>
            </li>
            <li>
              <Link href="/california/">California</Link>
            </li>
            <li>
              <Link href="/connecticut/">Connecticut</Link>
            </li>
            <li>
              <Link href="/delaware/">Delaware</Link>
            </li>
            <li>
              <Link href="/florida/">Florida</Link>
            </li>
            <li>
              <Link href="/georgia/">Georgia</Link>
            </li>
            <li>
              <Link href="/hawaii/">Hawaii</Link>
            </li>
            <li>
              <Link href="/louisiana/">Louisiana</Link>
            </li>
            <li>
              <Link href="/maine/">Maine</Link>
            </li>
            <li>
              <Link href="/maryland/">Maryland</Link>
            </li>
            <li>
              <Link href="/massachusetts/">Massachusetts</Link>
            </li>
            <li>
              <Link href="/mississippi/">Mississippi</Link>
            </li>
            <li>
              <Link href="/new-hampshire/">New Hampshire</Link>
            </li>
            <li>
              <Link href="/new-jersey/">New Jersey</Link>
            </li>
            <li>
              <Link href="/new-york/">New York</Link>
            </li>
            <li>
              <Link href="/north-carolina/">North Carolina</Link>
            </li>
            <li>
              <Link href="/oregon/">Oregon</Link>
            </li>
            <li>
              <Link href="/rhode-island/">Rhode Island</Link>
            </li>
            <li>
              <Link href="/south-carolina/">South Carolina</Link>
            </li>
            <li>
              <Link href="/texas/">Texas</Link>
            </li>
            <li>
              <Link href="/washington/">Washington</Link>
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
            Explore the beauty of the U.S. coastline with live beach webcams.
            From the golden sands of Hawaii to the lush shores of Florida, each
            camera brings the ocean closer to you. Watch waves crash against
            volcanic cliffs or palms sway along pristine shores, capturing
            Hawaii's untamed beauty in every moment. Watch the surfers ride
            waves in Venice Beach or the sunrise over Miami's beaches. Dive into
            underwater wonders with San Diego's kelp forest cam or enjoy
            panoramic views of iconic landmarks like the Southernmost Point in
            Key West. These webcams showcase bustling boardwalks, tranquil bays,
            and vibrant coastal towns. Perfect for checking the weather,
            planning your next trip, or simply escaping to the sound of waves.
            Discover your favorite spots through MyBeachCams.com today.
          </p>
        </ShowMoreText>
      </div>

      <h2>
        <Link href="/hawaii/">Hawaii Beach Cams</Link>
      </h2>
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
      <MoreHawaiiCams
        cams={{
          cams: cams.filter((cam) => cam.state === 'Hawaii').slice(0, 7),
        }}
      />
      <AdLeaderboard />

      <h2>
        <Link href="/california/">California Beach Cams</Link>
      </h2>
      <div className="links-container">
        <ul>
          <li>
            <Link href="/california/san-diego/">
              <a>San Diego</a>
            </Link>
          </li>
          <li>
            <Link href="/california/los-angeles/">
              <a>Los Angeles</a>
            </Link>
          </li>
          <li>
            <Link href="/california/central-coast/">
              <a>Central Coast</a>
            </Link>
          </li>
          <li>
            <Link href="/california/san-francisco/">
              <a>San Francisco</a>
            </Link>
          </li>
        </ul>
      </div>
      <MoreCaliforniaCams
        cams={{
          cams: cams.filter((cam) => cam.state === 'California').slice(0, 7),
        }}
      />
      <AdLeaderboard />

      <h2>
        <Link href="/florida/">Florida Beach Cams</Link>
      </h2>
      <div className="links-container">
        <ul>
          <li>
            <Link href="/florida/miami/">
              <a>Miami Beach</a>
            </Link>
          </li>
          <li>
            <Link href="/florida/florida-keys/">
              <a>Florida Keys</a>
            </Link>
          </li>
          <li>
            <Link href="/florida/gulf-coast/">
              <a>Gulf Coast</a>
            </Link>
          </li>
          <li>
            <Link href="/florida/east-central/">
              <a>East Central</a>
            </Link>
          </li>
          <li>
            <Link href="/florida/panhandle/">
              <a>Panhandle</a>
            </Link>
          </li>
          <li>
            <Link href="/florida/northeast/">
              <a>Northeast</a>
            </Link>
          </li>
        </ul>
      </div>
      <MoreFloridaCams
        cams={{
          cams: cams.filter((cam) => cam.state === 'Florida').slice(0, 7),
        }}
      />
      <AdLeaderboard />

      <p style={{ textAlign: 'center' }}>
        <span className="green-dot">&nbsp;</span>MyBeachCam hosted page
      </p>
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
          The United States offers endless coastal beauty. From the Pacific to
          the Atlantic, each shore tells a unique story. California webcams
          reveal vibrant beaches like Venice and Coronado. Venice Beach
          showcases its boardwalk, surfers, and scenic views. Coronado Beach
          offers a historic setting with Victorian charm. Further north, explore
          the rugged coastline of Mori Point or the marine life at San Diego's
          kelp forest.
        </p>
        <p>
          Hawaii's webcams unveil paradise with vivid scenes. Waikiki Beach
          frames Diamond Head and surfers carving waves. Oahu's North Shore
          spotlights Pipeline and Sunset Beach. Maui reveals Ka'anapali Beach
          and the winding Road to Hana. The Big Island showcases black sand
          shores and flowing lava fields. Kauai presents Hanalei Bay and Poipu
          Beach. Discover Hawaii's allure.
        </p>
        <p>
          Florida's beaches bring a mix of tropical warmth and cultural charm.
          Watch stunning sunsets in the Florida Keys or explore the Gulf Coast.
          The Mallory Square cams in Key West capture nightly celebrations. The
          Panama City Beach cameras highlight white sands and clear waters.
          Jacksonville Beach Pier combines relaxing ocean views with bustling
          activity nearby.
        </p>
        <p>
          The Gulf states add their own unique character. Alabama's shores are
          known for soft sand and family-friendly spots. Louisiana offers a
          blend of wetlands and coastal beauty. Mississippi's beaches provide a
          peaceful escape, perfect for unwinding.
        </p>
        <p>
          The Atlantic Coast blends history and natural beauty. Maryland and
          Delaware showcase quaint boardwalks and serene beaches. New England's
          rocky shores in Maine and New Hampshire offer breathtaking views. New
          York's Long Island brings a mix of lively beaches and quiet coves.
        </p>
        <p>
          Explore the waterways of the Pacific Northwest. Washington's coastal
          webcams highlight dramatic cliffs and serene waters. Oregon blends
          sandy beaches with lush greenery, creating stunning views.
        </p>
        <p>
          Each webcam offers a glimpse into these unique destinations. Use them
          to plan your travels or explore new places from home. Whether it's
          iconic landmarks, ocean wildlife, or peaceful shores, MyBeachCams.com
          connects you to the U.S. coastline. Dive into this collection of
          webcams and discover a new favorite view today. Let the waves inspire
          your next adventure.
        </p>
      </ShowMoreText>
      <hr />
      <div className="things-and-info">
        <div className="things">
          <h3>Top 10 Things to do in {camPageTargetType}</h3>
          <ol>
            <li>Walk along Venice Beach Boardwalk in California.</li>
            <li>Snorkel in Key Largo's coral reefs in Florida.</li>
            <li>Explore the tide pools at Cannon Beach in Oregon.</li>
            <li>Relax on the white sands of Gulf Shores in Alabama.</li>
            <li>Visit the historic Pier 60 at Clearwater Beach in Florida.</li>
            <li>Kayak through the mangroves in Key West.</li>
            <li>Surf the waves at Huntington Beach in California.</li>
            <li>Fish from the Outer Banks piers in North Carolina.</li>
            <li>Stroll the boardwalk at Ocean City in Maryland.</li>
            <li>Watch the sunset at Waikiki Beach in Hawaii.</li>
          </ol>
        </div>
        <div className="info">
          <h3>{camPageTargetType} Links and Local Information</h3>
          <ul>
            <li>
              <a
                href="https://www.nps.gov"
                target="_blank"
                rel="noopener noreferrer"
              >
                National Park Service
              </a>{' '}
              - Explore nearby parks and find outdoor activities.
            </li>
            <li>
              <a
                href="https://www.weather.com/weather/today/l/34.0522,-118.2437"
                target="_blank"
                rel="noopener noreferrer"
              >
                Weather.com - Los Angeles
              </a>{' '}
              - Check real-time weather for Los Angeles.
            </li>
            <li>
              <a
                href="https://www.floridastateparks.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Florida State Parks
              </a>{' '}
              - Discover state parks and plan your visit.
            </li>
            <li>
              <a
                href="https://www.visitcalifornia.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit California
              </a>{' '}
              - Find attractions and travel ideas across California.
            </li>
            <li>
              <a
                href="https://www.outerbanks.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Outer Banks Visitors Guide
              </a>{' '}
              - Plan your trip to the Outer Banks in North Carolina.
            </li>
            <li>
              <a
                href="https://www.gulfshores.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gulf Shores & Orange Beach
              </a>{' '}
              - Learn about beaches and activities in Alabama.
            </li>
            <li>
              <a
                href="https://www.exploremaine.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Maine
              </a>{' '}
              - Find lighthouses, beaches, and hiking trails in Maine.
            </li>
            <li>
              <a
                href="https://www.gohawaii.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go Hawaii
              </a>{' '}
              - Discover the islands and plan your Hawaiian adventure.
            </li>
            <li>
              <a
                href="https://www.delaware-surf-fishing.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Delaware Surf Fishing
              </a>{' '}
              - Get tips and updates for fishing in Delaware.
            </li>
            <li>
              <a
                href="https://www.visittheusa.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit The USA
              </a>{' '}
              - Explore destinations and plan your next trip.
            </li>
          </ul>
        </div>
      </div>
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
    cams = cams.filter((cam) => cam.country === 'USA')

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
