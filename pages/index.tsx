import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
// import AdLarge from '@/components/AdLarge'
// import CamsPageMap from '@/components/CamsPageMap'
// import RenderStatesSections from '@/components/RenderStatesSections'
// import data from '@/data/camLocationAreas'
// import { findStates } from '@/utils/common'
import * as types from '@/utils/types'
import ErrorLoadingWebcams from '@/components/ErrorLoadingWebcams'
import MoreWebcams from '@/components/MoreWebcams'
import MoreUSACams from '@/components/MoreUSACams'
import NewMoreHawaiiCams from '@/components/NewMoreHawaiiCams'
import NewMoreCaliforniaCams from '@/components/NewMoreCaliforniaCams'
import NewMoreFloridaCams from '@/components/NewMoreFloridaCams'

const WorldPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'USA'

  // const pageSections = findStates(data, camPageTargetType)
  // const pageSectionsArray = pageSections
  // ? pageSections.map((state: { state: string }) => state.state)
  // : []
  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle="Best Webcams around the World"
      documentDescription="Browse hundreds of beach webcams from around the world"
    >
      <div className="layout">
        {/* <h1>{camPageTargetType} Beach Webcams</h1> */}
        <h1>Best Webcams from around the World</h1>
        <h2>MyBeachCams.com</h2>
        {/* <h3 style={{ marginTop: '0' }}>
          Featuring webcams from{' '}
          {pageSectionsArray.slice(0, -1).join(', ') +
            (pageSectionsArray.length > 1
              ? ` and ${pageSectionsArray[pageSectionsArray.length - 1]}`
              : '')}{' '}
        </h3> */}
        <div className="links-container">
          <ul>
            <li>
              <Link href="/aruba/">
                <a>Aruba</a>
              </Link>
            </li>
            <li>
              <Link href="/bermuda/">
                <a>Bermuda</a>
              </Link>
            </li>
            <li>
              <Link href="/bonaire/">
                <a>Bonaire</a>
              </Link>
            </li>
            <li>
              <Link href="/curacao/">
                <a>Curacao</a>
              </Link>
            </li>
            <li>
              <Link href="/dominican-republic/">
                <a>Dominican Republic</a>
              </Link>
            </li>
            <li>
              <Link href="/jamaica/">
                <a>Jamaica</a>
              </Link>
            </li>
            <li>
              <Link href="/japan/">
                <a>Japan</a>
              </Link>
            </li>
            <li>
              <Link href="/mexico/">
                <a>Mexico</a>
              </Link>
            </li>
            <li>
              <Link href="/new-zealand/">
                <a>New Zealand</a>
              </Link>
            </li>
            <li>
              <Link href="/sint-maarten/">
                <a>Sint Maarten</a>
              </Link>
            </li>
            <li>
              <Link href="/st-barts/">
                <a>St. Barts</a>
              </Link>
            </li>
            <li>
              <Link href="/taiwan/">
                <a>Taiwan</a>
              </Link>
            </li>
            <li>
              <Link href="/thailand/">
                <a>Thailand</a>
              </Link>
            </li>
            <li>
              <Link href="/usa/">
                <a>United States</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="content-and-ad">
          <div className="content">
            <CamsPageMap cams={cams} />
          </div>
          <div className="ad">
            <AdLarge />
          </div>
        </div> */}
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          {/* CUSTOMIZE PAGE 3 of 5 - Add opening text ~120 words */}
          <p>
            We have links to over 600 Webcams in Florida, California, Hawaii and
            all over the world. You will find webcams with live, streaming video
            from these top resort areas. In Hawaii we bring you web cams from
            such happening areas as Waikiki, Kaanapali, Kona, and Lahaina.
            California webcam locations include Los Angeles, San Francisco, San
            Diego and the Central Coast. Also from Florida at Miami, Fort
            Lauderdale, West Palm Beach and Key Largo. Along with the web cams,
            there are comprehensive travel information to give you the scoop on
            the area's main attractions and top sights, including hard-to-find
            local links. The world's best beaches are just a click away.
          </p>
          <p>
            Watch the best Hawaii Beach Cams, featuring live webcams and surf
            cams from Waikiki, Oahu, Lahaina, Maui and all of the top resort
            areas. We also give you comprehensive travel tips, local
            information, maps and links. Enjoy the <em>Hawaii Beach Cams!</em>
          </p>
        </ShowMoreText>

        {/* <h1>Cams displayed here</h1> */}
        {/* <RenderStatesSections pageSections={pageSections ?? []} cams={cams} /> */}
      </div>
      <hr />
      <h2>
        <Link href="/hawaii/">Check out these Webcams</Link>
      </h2>
      <MoreWebcams
        cams={{
          cams: cams.slice(0, 7),
        }}
      />
      <h2>
        <Link href="/hawaii/">USA Webcams</Link>
      </h2>
      <MoreUSACams
        cams={{
          cams: cams.filter((cam) => cam.country === 'USA').slice(0, 7),
        }}
      />
      <h2>
        <Link href="/hawaii/">Hawaii Beach Cams</Link>
      </h2>
      <NewMoreHawaiiCams
        cams={{
          cams: cams.filter((cam) => cam.state === 'Hawaii').slice(0, 7),
        }}
      />
      <h2>
        <Link href="/california/">California Beach Cams</Link>
      </h2>
      <NewMoreCaliforniaCams
        cams={{
          cams: cams.filter((cam) => cam.state === 'California').slice(0, 7),
        }}
      />
      <h2>
        <Link href="/florida/">Florida Beach Cams</Link>
      </h2>
      <NewMoreFloridaCams
        cams={{
          cams: cams.filter((cam) => cam.state === 'Florida').slice(0, 7),
        }}
      />
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
          Hawaii is a tropic travel destination within the United States and is
          one of the top choices for vacations. For US travelers, you can get to
          paradise without needing a passport and you pay in US dollars. Foreign
          travelers also appreciate the Hawaii Islands, especially those from
          Asia. MyBeachCams.com lets you see any the paradise from anywhere in
          the world at anytime the sun is shining on the islands. Explore the
          beautiful beaches and tropical flora that make Hawaii extraordinary
          place to visit from the comfort of your own computer.
        </p>
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

    const cams: types.Cams[] = await res.json()

    if (!Array.isArray(cams) || cams.length === 0) {
      throw new Error('Cams object is not valid or empty')
    }

    // CUSTOMIZE PAGE 5 of 5 - Add camPageTargetType
    // cams = cams.filter((cam) => cam.country === 'USA')

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

export default WorldPage
