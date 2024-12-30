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
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Explore Georgia beach webcams, featuring live views from Tybee Island and St. Simons Island for trip planning and weather updates."
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
        <h3>
          <span className="no-break">
            <Link href="/hawaii/maui/">
              <a>Maui</a>
            </Link>
          </span>
          &nbsp;
          <span className="subheading-emoji"> 🌴 </span>&nbsp;
          <span className="no-break">
            <Link href="/hawaii/oahu/">
              <a>Oahu</a>
            </Link>
          </span>
          &nbsp;
          <span className="subheading-emoji"> 🌴 </span>&nbsp;
          <span className="no-break">
            <Link href="/hawaii/kauai">
              <a>Kauai</a>
            </Link>
          </span>
          &nbsp;
          <span className="subheading-emoji"> 🌴 </span>&nbsp;
          <span className="no-break">
            <Link href="/hawaii/bigisland/">
              <a>Big Island</a>
            </Link>
          </span>
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
          <Link href="/hawaii/maui/">Maui Island Webams</Link>
        </h2>
        <p>
          The island of Maui is one of the most popular vacation destinations,
          featuring the beaches of Kaanapali, Lahaina, Wailea and Kapalua. It
          has 33 miles of exquisite public beaches. Some of these beaches even
          have jewel-toned sand. See the webcams at Maui Beach Cams to view
          streaming live camera pictures of the amazing natural beauty found on
          various locations on the Island of Maui.
        </p>
        <MoreMauiCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'Maui').slice(0, 7),
          }}
        />
        <AdLeaderboard />

        <h2>
          <Link href="/hawaii/oahu/">Oahu Island Webams</Link>
        </h2>
        <p>
          The Island of Oahu is home to World-famous Waikiki Beach and Honolulu.
          It is the most visited of all the Hawaiian Islands. Its famed North
          Shore draws the top professional surfers in the world to ride its
          30-foot waves. See the webcams at Oahu Beach Cams to view streaming
          live camera pictures of various hot spots on the island.
        </p>
        <MoreOahuCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'Oahu').slice(0, 7),
          }}
        />
        <AdLeaderboard />

        <h2>
          <Link href="/hawaii/bigisland/">Big Island Webams</Link>
        </h2>
        <p>
          The Island of Hawaii is commonly referred to as "The Big Island." It
          is almost twice as large as all of the other Hawaiian Island combined.
          It is home to some of the most luxurious resort areas including the
          Kona Coast, Waikoloa Coast and Kailua Kona. It's also the home to Kona
          gourmet coffee. See the webcams at Big Island Beach Cams to view
          streaming live pictures of the amazing sights on the Big Island of
          Hawaii.
        </p>
        <MoreBigIslandCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'Big Island').slice(0, 7),
          }}
        />
        <AdLeaderboard />

        <h2>
          <Link href="/hawaii/kauai/">Kauai Island Webams</Link>
        </h2>
        <p>
          Kauai is a lush paradise. It is known as the "Garden Isle" for its
          brilliant flowers. It is also home to the "wettest place on earth" and
          "The Grand Canyon of the Pacific." On its famed North Shore are
          Princeville, Hanalei Bay and the Na Pali Shoreline. Other top resort
          areas include Lihue and Poipu. See the webcams at Kauai Beach Cams to
          view streaming live pictures of this beautiful and lush island.
        </p>
        <MoreKauaiCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'Kauai').slice(0, 7),
          }}
        />
        <AdLeaderboard />

        <h1>Cams Displayed Here</h1>
        {/* <RenderAreaSections pageAreas={pageAreas ?? []} cams={cams} /> */}

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
        <hr />
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
      <hr />
      <h2>
        <Link href="/">More Beach Cams</Link>
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
