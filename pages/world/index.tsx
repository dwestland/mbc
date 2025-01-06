import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import AdLarge from '@/components/AdLarge'
import CamsPageMap from '@/components/CamsPageMap'
import * as types from '@/utils/types'
import ErrorLoadingWebcams from '@/components/ErrorLoadingWebcams'
import MoreUSACams from '@/components/MoreUSACams'
import MoreHawaiiCams from '@/components/MoreHawaiiCams'
import MoreCaliforniaCams from '@/components/MoreCaliforniaCams'
import MoreFloridaCams from '@/components/MoreFloridaCams'

const WorldPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  return (
    <Layout
      documentTitle="Webcams around the World - MyBeachCams"
      documentDescription="Browse hundreds of beach webcams from around the world"
    >
      <div className="layout">
        <h1>Webcams around the World</h1>
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
          <p>xxx</p>
        </ShowMoreText>
      </div>
      <hr />
      <h2>
        <Link href="/hawaii/"> Webcams</Link>
      </h2>
      <MoreUSACams
        cams={{
          cams: cams.filter((cam) => cam.country === 'USA').slice(0, 7),
        }}
      />
      <h2>
        <Link href="/hawaii/">Hawaii Beach Cams</Link>
      </h2>
      <MoreHawaiiCams
        cams={{
          cams: cams.filter((cam) => cam.state === 'Hawaii').slice(0, 7),
        }}
      />
      <h2>
        <Link href="/california/">California Beach Cams</Link>
      </h2>
      <MoreCaliforniaCams
        cams={{
          cams: cams.filter((cam) => cam.state === 'California').slice(0, 7),
        }}
      />
      <h2>
        <Link href="/florida/">Florida Beach Cams</Link>
      </h2>
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
        <p>xxx</p>
        <p>xxx</p>
        <p>xxx</p>
      </ShowMoreText>
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
