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
import MoreLosAngelesCams from '@/components/MoreLosAngelesCams'
import MoreSanDiegoCams from '@/components/MoreSanDiegoCams'
import MoreCentralCoastCams from '@/components/MoreCentralCoastCams'
import MoreSanFranciscoCams from '@/components/MoreSanFranciscoCams'
import AdLeaderboard from '@/components/AdLeaderboard'

const StateAreasPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'California'

  const pageAreas = findAreas(data, camPageTargetType)
  const pageAreasArray = pageAreas
    ? pageAreas.map((area: { area: string }) => area.area)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      // TODO:
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Best Beach Cams and Surf Cams in California featuring webcams in San Diego, Los Angeles, Central Coast and San Francisco and much more"
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
            California is known as the Golden State. Its sunny weather, varied
            landscape and the allure of fame and fortune have enticed millions
            of Americans to "go west." On this popular website you will find a
            series of live streaming webcams from all along this famous West
            Coast. From San Diego in the southern tip of California, up through
            Los Angeles and Santa Barbara and then through Monterey and San
            Francisco, you will see exciting live images of beaches, boardwalks,
            bays and even marine life. These images will most likely either
            remind you of a fond memory or make you want to trip out to see some
            of these exciting destinations. Either way, enjoy the view!
          </p>
        </ShowMoreText>

        <h2>
          <Link href="/california/los-angeles/">Los Angeles Webcams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            Los Angeles is home to many of the mainland's top beaches. Click on
            Los Angeles Beach Cams to find streaming video webcams of such LA
            hot spots as Venice Beach, Santa Monica Pier, Hermosa Beach, Newport
            Beach, Laguna and even Catalina Island. Check out the great weather
            and see what's happening in the LA scene.
          </p>
        </ShowMoreText>
        <MoreLosAngelesCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'Los Angeles').slice(0, 7),
          }}
        />
        <AdLeaderboard />

        <h2>
          <Link href="/california/san-diego/">San Diego Webcams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            San Diego, known for its year-round sunshine and balmy temperatures,
            is a great place for some fun-in-the-sun. Click on San Diego Beach
            Cams and check out these live, streaming video web cams of the Del
            Mar, La Jolla/ Torrey Pines, San Diego Bay and Marina, Ocean Beach
            and Imperial Beach areas. You'll then see why San Diego is one of
            the most popular vacation spots in the U.S.A.
          </p>
        </ShowMoreText>
        <MoreSanDiegoCams
          cams={{
            cams: cams.filter((cam) => cam.area === 'San Diego').slice(0, 7),
          }}
        />
        <AdLeaderboard />

        <h2>
          <Link href="/california/central-coast/">Central Coast Webcams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            Along the west coast between Los Angeles and San Francisco is a
            series of terrific resort towns. Many of them are weekend getaways
            for Angelinos. Click on Central Coast Beach Cams to see live,
            streaming video of these areas. It starts at Ventura and Santa
            Barbara, and then goes up the coast to Baywood and San Simeon, and
            finally to Big Sur, Pebble Beach and Monterey. These webcams will
            probably make you want to get in the car and drive up the coast
            along scenic Highway 1.
          </p>
        </ShowMoreText>
        <MoreCentralCoastCams
          cams={{
            cams: cams
              .filter((cam) => cam.area === 'Central Coast')
              .slice(0, 7),
          }}
        />
        <AdLeaderboard />

        <h2>
          <Link href="/california/san-francisco/">San Francisco Webcams</Link>
        </h2>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            San Francisco is known as the "City by the Bay." This worldly,
            seductive city is full of culture, magnificent sights and
            outstanding food. Its famous sights include the Golden Gate Bridge,
            cable cars and steep rolling hills overlooking the bay and ocean.
            See the web cams at San Francisco Beach Cams to view streaming live
            pictures of this incredible area, including San Francisco Bay, The
            Golden Gate Bridge and Alcatraz Island.
          </p>
        </ShowMoreText>
        <MoreSanFranciscoCams
          cams={{
            cams: cams
              .filter((cam) => cam.area === 'San Francisco')
              .slice(0, 7),
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
      {/* <hr /> */}
      {/* <h2>
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
    cams = cams.filter((cam) => cam.state === 'California')

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
