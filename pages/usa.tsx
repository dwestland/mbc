import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import AdLarge from '@/components/AdLarge'
import CamsPageMap from '@/components/CamsPageMap'
import data from '@/data/camLocationAreas'
import { findStates } from '@/utils/common'
import * as types from '@/utils/types'
import ErrorLoadingWebcams from '@/components/ErrorLoadingWebcams'
import MoreHawaiiCams from '@/components/MoreHawaiiCams'
import MoreCaliforniaCams from '@/components/MoreCaliforniaCams'
import MoreFloridaCams from '@/components/MoreFloridaCams'

const CountryStatesPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'USA'

  const pageSections = findStates(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((state: { state: string }) => state.state)
    : []
  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription={`Browse hundreds of beach webcams from ${camPageTargetType}, including ${pageSectionsArray
        .slice(0, 3)
        .join(', ')} and more.`}
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
          <p>xxx</p>
        </ShowMoreText>
      </div>
      <hr />

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
        <p>xxx</p>
        <p>xxx</p>
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
