import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Layout from '@/components/Layout'
// import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'
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
  // camPageTypes camPageTargetType
  const camPageType = 'area'
  const camPageTargetType = 'Oahu'

  // const findSubareas = (
  //   camDataStructure: { countries: any[] },
  //   targetArea: string
  // ) => {
  //   const subareas: any[] = []
  //   camDataStructure.countries.forEach((country) => {
  //     country.states.forEach((state: any) => {
  //       if (state.areas) {
  //         state.areas.forEach((area: any) => {
  //           if (area.area === targetArea) {
  //             subareas.push(...area.subareas)
  //           }
  //         })
  //       }
  //     })
  //   })
  //   return subareas.length > 0 ? subareas : null
  // }

  const findSubareas = (dataStructure: Object, targetArea: string) => {
    for (const country of dataStructure.countries) {
      for (const state of country.states) {
        for (const area of state.areas) {
          if (area.area === targetArea) {
            return area.subareas
          }
        }
      }
    }
    return null // return null if the area is not found
  }

  const pageSections = findSubareas(data, 'Oahu')
  const pageSectionsArray = pageSections.map((area: Object) => area.subarea)

  // const camSections = cams.map((cam) => <CamCard key={cam.id} cam={cam} />)

  const renderCamSubSections = pageSections.map((subarea) => {
    const filteredSections = cams.filter(
      (cam) => cam.subarea === subarea.subarea
    )

    return (
      <div key={subarea.subarea}>
        <h2>{subarea.subarea} Webcams</h2>
        <div className="cam-container">
          {filteredSections.map((cam) => (
            <CamCard key={cam.id} cam={cam} />
          ))}
        </div>
      </div>
    )
  })

  return (
    <Layout
      documentTitle="Beach Cams of Maui, Hawaii - Webcams at Kaanapali, Lahaina, Wailea and Kapalua"
      documentDescription="Best Beach Cams and Surf Cams on Maui, Hawaii with webcams at Kaanapali, Lahaina, Wailea and Kapalua."
    >
      <div className="layout">
        <h1>area-subarea Webcams</h1>
        <div className="content-and-ad">
          <div className="content">
            <CamsPageMap cams={cams} />
          </div>
          <div className="ad">
            <AdLarge />
          </div>
        </div>
        {/* <div className="cam-container">{camSections}</div> */}
        {renderCamSubSections}
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
