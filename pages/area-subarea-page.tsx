import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
// import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'
import CamCard from '@/components/CamCard'
import * as types from '@/utils/types'
import { renderError } from '@/utils/common'

const CamsPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return renderError()
  }

  const camSections = cams.map((cam) => <CamCard key={cam.id} cam={cam} />)

  // Next modal SSR
  const CamsMap: any = dynamic(() => import('@/components/CamsMap'), {
    ssr: false,
  })

  const vectors: any = []
  cams.map((cam: types.Cams) => {
    if (cam.lat !== null && cam.lng !== null) {
      const vector = {
        name: cam.title,
        lat: cam.lat,
        lng: cam.lng,
        id: cam.id,
        imageName: cam.imageName,
      }
      vectors.push(vector)
    }
    return null
  })

  return (
    <Layout
      documentTitle="Beach Cams of Maui, Hawaii - Webcams at Kaanapali, Lahaina, Wailea and Kapalua"
      documentDescription="Best Beach Cams and Surf Cams on Maui, Hawaii with webcams at Kaanapali, Lahaina, Wailea and Kapalua."
    >
      <div className="layout">
        <h1>Webcams from Around the World</h1>
        <div className="content-and-ad">
          <div className="content">
            <CamsMap vectors={vectors} />
          </div>
          <div className="ad">
            <AdLarge />
          </div>
        </div>
        <div className="cam-container">{camSections}</div>
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

    cams = cams.filter((cam) => cam.area === 'Maui')

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
