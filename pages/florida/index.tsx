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
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Miami, Los Angles, Miami, Northeast, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <h1>{camPageTargetType} Beach Webcams</h1>
        <h3 style={{ marginTop: '0' }}>
          Featuring webcams from{' '}
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
            Watch the best Hawaii Beach Cams, featuring live webcams and surf
            cams from Waikiki, Oahu, Lahaina, Maui and all of the top resort
            areas. We also give you comprehensive travel tips, local
            information, maps and links. Enjoy the Hawaii Beach Cams!
          </p>
          <p>
            The island of Maui is one of the most popular vacation destinations,
            featuring the beaches of Kaanapali, Lahaina, Wailea and Kapalua. It
            has 33 miles of exquisite public beaches. Some of these beaches even
            have jewel-toned sand. See the webcams at Maui Beach Cams to view
            streaming live camera pictures of the amazing natural beauty found
            on various locations on the Island of Maui.
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
            Miami Beach is a popular destination for tourists and locals alike.
            It's known for its beautiful beaches, vibrant nightlife, and
            beautiful people.
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
            The Florida Keys are a chain of islands that stretch from the
            southern tip of Florida to Cuba. They offer beautiful beaches,
            crystal-clear waters, and a unique Caribbean vibe.
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
            The Gulf Coast offers great beach destinations on the waters of the
            Gulf of Mexico. The group of barrier islands near Tampa Bay offers
            fantastic beaches. Fort Myers offers beautiful wide beaches and
            white soft sand with plenty of water sports. From hiking to fishing,
            Cap Coral is the perfect destination for the outdoor enthusiast.
            Clearwater has tranquil breezes, crystal waters and award-winning
            beaches. Check out the live Gulf Coast Beach Cams for streaming
            video.
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
        </h2>
        <p>
          The East Central region of Florida offers a variety of beaches,
          including the beaches of St. Augustine, Daytona Beach, and more.
        </p>
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
            The Florida Panhandle has over 200 miles of beaches. Pensacola Beach
            offers the whitest beaches in Florida with a natural feel. Panama
            City Beach is located on a pristine beach on the Gulf of Mexico
            coast. Destin Beach is one of the world's most beautiful beaches. A
            long thin barrier island along the Panhandle, St. George Island is a
            serene vacation spot. See Florida Panhandle Beach Cams with
            streaming live camera feeds of the beaches.
          </p>
        </ShowMoreText>
        <MorePanhandleCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'Panhandle').slice(0, 7),
          }}
        />
        <AdLeaderboard />

        <h2>
          <Link href="/florida/northeast/">North East Webcams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            Northeastern Florida's primary attraction is its beaches.
            Jacksonville has vast stretches of gorgeous beaches and waterways.
            St. Augustine offers 42 miles of pristine beaches. See the webcams
            at Northeast Florida Beach Cams to view streaming live camera
            pictures of various beaches.
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
          <p>xxx</p>
        </ShowMoreText>
        {/* <hr /> */}
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>x</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>x</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <hr />
      <h2>
        <Link href="/">More Beach Cams</Link>
      </h2>{' '} */}
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
