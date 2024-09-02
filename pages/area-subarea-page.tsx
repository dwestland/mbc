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

  // const camSections = cams.map((cam) => <CamCard key={cam.id} cam={cam} />)

  const camSubareas =
    data.countries?.[0]?.states?.[0]?.areas?.[0]?.subareas || []
  console.log('%c camSubareas ', 'background: red; color: white', camSubareas)

  const renderCamSubSections = camSubareas.map((subarea) => {
    console.log(
      '%c subarea.subarea ',
      'background: blue; color: white',
      subarea.subarea
    )

    return (
      <div key={subarea.subarea}>
        <h2>{subarea.subarea}</h2>
        <div className="cam-container">
          {/* {cams
            .filter((cam) => cam.subarea === subarea.subarea)
            .map((cam) => (
              <CamCard key={cam.id} cam={cam} />
            ))} */}
          {cams.map((cam) => (
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
        <h1>area-subarea Page</h1>
        <div className="content-and-ad">
          <div className="content">
            <CamsPageMap cams={cams} />
          </div>
          <div className="ad">
            <AdLarge />
          </div>
        </div>
        {renderCamSubSections}
        {/* <div className="cam-container">{camSections}</div> */}
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
