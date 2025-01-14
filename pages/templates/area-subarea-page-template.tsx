import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import AdLarge from '@/components/AdLarge'
import CamsPageMap from '@/components/CamsPageMap'
import RenderSubareaSections from '@/components/RenderSubareaSections'
import data from '@/data/camLocationAreas'
import { findSubareas } from '@/utils/common'
import * as types from '@/utils/types'
import ErrorLoadingWebcams from '@/components/ErrorLoadingWebcams'

const AreaSubareaPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'Oahu'
  const state = cams[0]?.state || ''
  const pageSections = findSubareas(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((area: { subarea: string }) => area.subarea)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType}, ${state} Webcams - MyBeachCams`}
      documentDescription={`Explore beach webcams from ${camPageTargetType}, ${state} including ${
        pageSectionsArray.length === 1
          ? pageSectionsArray[0]
          : `${pageSectionsArray.slice(0, -1).join(', ')} and ${
              pageSectionsArray[pageSectionsArray.length - 1]
            }.`
      }`}
    >
      <div className="layout">
        <h1>
          {camPageTargetType}, {state} Webcams
        </h1>
        <h3 className="cam-page-subheading">
          Explore beach webcams from {camPageTargetType}, {state} including{' '}
          {pageSectionsArray.length === 1
            ? pageSectionsArray[0]
            : `${pageSectionsArray.slice(0, -1).join(', ')} and ${
                pageSectionsArray[pageSectionsArray.length - 1]
              }`}
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
          <p>xxxx</p>
        </ShowMoreText>

        <RenderSubareaSections pageSections={pageSections ?? []} cams={cams} />

        <ShowMoreText
          lines={4}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          {/* CUSTOMIZE PAGE 4 of 5 - Add second text ~300 words, */}
          {/* Things to Do and Links and Info */}
          <p>xxxx</p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>
                Check out the huge waves and professional surfers on the North
                Shore Beaches
              </li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.gohawaii.com/islands/oahu"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Oahu Visitors Bureau
                </a>{' '}
                - The official website of the Island of Oahu
              </li>
            </ul>
          </div>
        </div>
      </div>
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
    cams = cams.filter((cam) => cam.area === 'Oahu')

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

export default AreaSubareaPage
