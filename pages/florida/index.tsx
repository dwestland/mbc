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
import MoreMiamiCams from '@/components/MoreMiamiCams'
import MoreGulfCoastCams from '@/components/MoreGulfCoastCams'
import MoreEastCentralCams from '@/components/MoreEastCentralCams'
import MoreFloridaKeysCams from '@/components/MoreFloridaKeysCams'
import MorePanhandleCams from '@/components/MorePanhandleCams'
import MoreNortheastCams from '@/components/MoreNortheastCams'
import AdLeaderboard from '@/components/AdLeaderboard'
// import MoreNorthCentralCams from '@/components/MoreNorthCentralCams'
const StateAreasPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'Florida'

  const pageAreas = findAreas(data, camPageTargetType)
  const pageAreasArray = pageAreas
    ? pageAreas.map((area: { area: string }) => area.area)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      // TODO:
      documentTitle={`${camPageTargetType} Webcams - MyBeachCams`}
      documentDescription="Best beach webcams in Miami Beach, Florida Keys, Gulf Coast, East Central, Panhandle and the Northeast."
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
            Florida offers a stunning variety of beach destinations along its
            coasts. From the serene sands of the Panhandle to the vibrant shores
            of Miami Beach, there's something for everyone. The Florida Keys
            provide crystal-clear waters and a tropical vibe, perfect for
            snorkeling or soaking up the sun. Gulf Coast spots like Clearwater
            and Naples feature white sand beaches and calm waters ideal for
            families.
          </p>
          <p>
            The Atlantic coast boasts thrilling surf at Cocoa Beach and historic
            charm in St. Augustine. Explore live views of famous landmarks like
            Mallory Square or the Southernmost Point. Whether planning a trip or
            checking the weather, these webcams bring Florida's beauty to your
            screen. Enjoy the journey!
          </p>
        </ShowMoreText>
        <h2>
          <Link href="/florida/miami/">Miami Beach Webcams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            Miami Beach is a vibrant coastal city. Its beaches are wide and
            sandy. Ocean Drive offers Art Deco charm and nightlife. Visit
            Lincoln Road for shopping and dining. The South Beach area is
            perfect for people-watching. Explore the clear waters or relax by
            the shore. Miami Beach blends culture, style, and ocean views.
          </p>
        </ShowMoreText>
        <MoreMiamiCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'Miami Beach').slice(0, 7),
          }}
        />
        <AdLeaderboard />
        <h2>
          <Link href="/florida/florida-keys/">Florida Keys Webcams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            The Florida Keys are a chain of tropical islands. They stretch from
            Key Largo to Key West. Clear waters make snorkeling a must. Enjoy
            fishing and boating year-round. Visit Mallory Square for sunsets in
            Key West. The Seven Mile Bridge offers scenic views. The Keys are
            perfect for relaxation and ocean adventures.
          </p>
        </ShowMoreText>
        <MoreFloridaKeysCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'Florida Keys').slice(0, 7),
          }}
        />
        <AdLeaderboard />
        <h2>
          <Link href="/florida/gulf-coast/">Gulf Coast Webcams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            Florida's Gulf Coast offers calm waters and soft sand. Clearwater
            Beach is famous for its pristine shorelines. Naples features
            stunning sunsets and quiet beaches. Siesta Key has white quartz sand
            and clear views. Explore Fort Myers for water sports and wildlife.
            The Gulf Coast is ideal for beach walks, fishing, and family trips.
          </p>
        </ShowMoreText>
        <MoreGulfCoastCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'Gulf Coast').slice(0, 7),
          }}
        />
        <AdLeaderboard />
        <h2>
          <Link href="/florida/east-central/">East Central Webcams</Link>
        </h2>{' '}
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            East Central Florida is home to diverse beaches. Cocoa Beach is
            great for surfing and pier walks. Cape Canaveral offers space views
            and ocean access. Daytona Beach is known for wide, drivable sands.
            St. Augustine features history and pristine shores. East Central
            blends nature, adventure, and coastal charm.
          </p>
        </ShowMoreText>
        <MoreEastCentralCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'East Central').slice(0, 7),
          }}
        />
        <AdLeaderboard />
        <h2>
          <Link href="/florida/panhandle/">Panhandle Webcams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            Florida's Panhandle offers over 200 miles of beaches. Pensacola
            Beach has soft, white sand and clear waters. Destin is perfect for
            fishing and emerald coast views. Panama City Beach features lively
            piers and family spots. St. George Island is serene and natural. The
            Panhandle combines beauty, recreation, and coastal relaxation.
          </p>
        </ShowMoreText>
        <MorePanhandleCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'Panhandle').slice(0, 7),
          }}
        />
        <AdLeaderboard />
        <h2>
          <Link href="/florida/northeast/">Northeast Webcams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            Northeast Florida offers beaches and history. Jacksonville Beach has
            wide sands and ocean views. St. Augustine features historic sites
            and quiet shores. Amelia Island is known for its dunes and wildlife.
            Flagler Beach is peaceful and natural. Northeast Florida blends
            coastal beauty with rich heritage and outdoor fun.
          </p>
        </ShowMoreText>
        <MoreNortheastCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'Northeast').slice(0, 7),
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
            Florida's coastline is a treasure of beaches and waterways. The
            Panhandle's beaches, like Destin and Pensacola, offer soft white
            sand and clear waters. These spots are perfect for relaxation and
            fishing. Panama City Beach adds lively piers and family attractions.
          </p>
          <p>
            On the Gulf Coast, Clearwater Beach shines with pristine sand and
            calm waves. Naples and Siesta Key deliver serene settings with clear
            Gulf views. These areas are popular for kayaking, paddleboarding,
            and waterfront dining. Fort Myers offers wide beaches and access to
            wildlife preserves. St. Petersburg's marina adds a mix of boating
            and sunsets.
          </p>
          <p>
            The Florida Keys are a chain of islands with turquoise waters.
            Islamorada is known for fishing and luxury resorts. Key West offers
            landmarks like Mallory Square and the Southernmost Point. Enjoy live
            music, fresh seafood, and unforgettable sunsets.
          </p>
          <p>
            Florida's Atlantic coast is just as captivating. Cocoa Beach is a
            favorite for surfers, while Cape Canaveral hosts space launches and
            ocean views. St. Augustine features historic charm with beaches
            lined by dunes and piers. Jacksonville Beach and Amelia Island
            provide broad stretches of sand for beachcombing and swimming.
          </p>
          <p>
            Miami Beach blends vibrant city life with beautiful shores. The
            Hollywood Beach Broadwalk is a great place to bike or walk while
            enjoying ocean breezes. Nearby, Sunny Isles Beach offers stunning
            high-rise views.
          </p>
          <p>
            These live webcams showcase the best of Florida. They capture
            bustling boardwalks, tranquil shores, and scenic marinas. Plan your
            next getaway or simply enjoy the sights from home. Each webcam
            connects you to Florida's charm and beauty. Whether for weather
            updates or travel planning, these views bring Florida closer to you.
            Explore today and see why Florida's coasts are world-famous.
          </p>
        </ShowMoreText>
        {/* <hr /> */}
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Relax on Clearwater Beach's white sands.</li>
              <li>Snorkel in Key Largo's coral reefs.</li>
              <li>Walk the Hollywood Beach Broadwalk.</li>
              <li>Fish from Naples Pier at sunset.</li>
              <li>Kayak through the mangroves in the Florida Keys.</li>
              <li>Watch surfers at Cocoa Beach Pier.</li>
              <li>Explore Fort Zachary Taylor Historic State Park.</li>
              <li>Swim in the calm waters of Siesta Key.</li>
              <li>View space launches at Cape Canaveral beaches.</li>
              <li>Spot dolphins on a tour near Destin.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.floridastateparks.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Florida State Parks
                </a>{' '}
                - Explore parks, trails, and beaches across Florida.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/27.9758,-82.8291"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clearwater Beach Weather
                </a>{' '}
                - Check the latest weather for Clearwater Beach.
              </li>
              <li>
                <a
                  href="https://www.visitflorida.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Florida
                </a>{' '}
                - Discover top attractions and travel tips statewide.
              </li>
              <li>
                <a
                  href="https://www.floridakeys.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Florida Keys Tourism
                </a>{' '}
                - Plan your trip to the islands and enjoy local insights.
              </li>
              <li>
                <a
                  href="https://www.nps.gov/ever/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Everglades National Park
                </a>{' '}
                - Learn about wildlife and activities in the Everglades.
              </li>
              <li>
                <a
                  href="https://www.miamibeachfl.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Miami Beach Official Site
                </a>{' '}
                - Find local events, guides, and city services.
              </li>
              <li>
                <a
                  href="https://www.keywest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Key West Guide
                </a>{' '}
                - Explore activities, dining, and accommodations in Key West.
              </li>
              <li>
                <a
                  href="https://www.staugustine.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  St. Augustine Visitor Info
                </a>{' '}
                - Dive into history, beaches, and local charm in St. Augustine.
              </li>
              <li>
                <a
                  href="https://www.tampabay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tampa Bay Times
                </a>{' '}
                - Stay informed on news, events, and travel in Tampa Bay.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <hr />
      <h2>
        <Link href="/">More Beach Cams</Link>
      </h2>{' '} */}
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
    cams = cams.filter((cam) => cam.state === 'Florida')

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
