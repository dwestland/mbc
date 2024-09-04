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

  // CUSTOMIZE PAGE 1 of ? - with section type and target type
  // camPageType options: country, state, area
  const camPageType = 'area'
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

  // const findSubareas = (dataStructure: Object, targetArea: string) => {
  //   for (const country of dataStructure.countries) {
  //     for (const state of country.states) {
  //       for (const area of state.areas) {
  //         if (area.area === targetArea) {
  //           return area.subareas
  //         }
  //       }
  //     }
  //   }
  //   return null // return null if the area is not found
  // }

  const pageSections = findSubareas(data, camPageTargetType)
  const pageSectionsArray = pageSections.map((area: Object) => area.subarea)

  // const camSections = cams.map((cam) => <CamCard key={cam.id} cam={cam} />)

  const renderCamSubSections = pageSections.map((subarea) => {
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
          <p>xxxx</p>
        </ShowMoreText>

        {/* <div className="cam-container">{camSections}</div> */}
        {renderCamSubSections}

        {/* <div className="panel"> */}
        <ShowMoreText
          lines={4}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="... "
        >
          <p>xxxx</p>
        </ShowMoreText>
        {/* </div> */}

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
