import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'
import ShowMoreText from 'react-show-more-text'
import CamCard from '@/components/CamCard'
import * as types from '@/utils/types'
import { renderError } from '@/utils/common'
import CamsPageMap from '@/components/CamsPageMap'
import data from '@/data/camLocationAreas'

const CamsPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return renderError()
  }

  // CUSTOMIZE PAGE 1 of 4 - Add camPageType and camPageTargetType
  // camPageType options: country, state, area
  const camPageType = 'area'
  console.log('camPageType:', camPageType)
  const camPageTargetType = 'Oahu'

  const findSubareas = (
    camDataStructure: { countries: any[] },
    targetArea: string
  ) => {
    const subareas: any[] = []
    camDataStructure.countries.forEach((country) => {
      country.states.forEach((state: any) => {
        if (state.areas) {
          state.areas.forEach((area: any) => {
            if (area.area === targetArea) {
              subareas.push(...area.subareas)
            }
          })
        }
      })
    })
    return subareas.length > 0 ? subareas : null
  }

  const pageSections = findSubareas(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((area: { subarea: string }) => area.subarea)
    : []

  const renderCamSubSections = pageSections?.map((subarea) => {
    const filteredSections = cams.filter(
      (cam) => cam.subarea === subarea.subarea
    )

    if (filteredSections.length === 0) {
      return null
    }

    return (
      <div key={subarea.subarea}>
        <h2>{subarea.subarea} Webcams</h2>
        <div className="cam-container">
          {filteredSections.map((cam) => (
            <CamCard key={cam.id} cam={cam} />
          ))}
        </div>{' '}
        <AdLeaderboard />
      </div>
    )
  })

  return (
    <Layout
      documentTitle="'MyBeachCams - Beach Webcams from around the World'"
      documentDescription="Browse hundreds of beach webcams from all over the world, including Hawaii, California, Florida and other travel destinations."
    >
      <div className="layout">
        <h1>{camPageTargetType} Webcams</h1>
        <h3 style={{ marginTop: '0' }}>
          Featuring webcams from{' '}
          {pageSectionsArray.slice(0, -1).join(', ') +
            (pageSectionsArray.length > 1
              ? ` and ${pageSectionsArray[pageSectionsArray.length - 1]}`
              : '')}{' '}
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
          truncatedEndingComponent="... "
        >
          {/* CUSTOMIZE PAGE 2 of 4 - Add opening text ~120 words */}
          <p>xxxx</p>
        </ShowMoreText>
        {renderCamSubSections}
        <ShowMoreText
          lines={4}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="... "
        >
          {/* CUSTOMIZE PAGE 3 of 4 - Add second text ~300 words, */}
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
      <hr />
      <h2>
        <Link href="/hawaii/">More Hawaii Beach Cams</Link>
      </h2>
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

    // CUSTOMIZE PAGE 4 of 4 - Add camPageTargetType
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

export default CamsPage
