import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
// import ShowMoreText from 'react-show-more-text'
// import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
import CamCard from '@/components/CamCard'
// import data from '@/data/camLocationAreas'
// import AdLeaderboard from '@/components/AdLeaderboard'
// import AdLarge from '@/components/AdLarge'
// import { getSixDigitRandom } from '@/utils/common'
// import MoreHawaiiCams from '@/components/MoreHawaiiCams'
// import Link from 'next/link'
import * as types from '@/utils/types'

const CamsPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return (
      <Layout
        documentTitle="Error - Beach Cams"
        documentDescription="An error occurred while loading the beach cams."
      >
        <div className="layout">
          <h1>Error Loading Webcams</h1>
          <p>There was an error loading the webcams. Please try again later.</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout
      documentTitle="Beach Cams of Maui, Hawaii - Webcams at Kaanapali, Lahaina, Wailea and Kapalua"
      documentDescription="Best Beach Cams and Surf Cams on Maui, Hawaii with webcams at Kaanapali, Lahaina, Wailea and Kapalua."
    >
      <div className="layout">
        <h1>Webcams from Around the World</h1>
        <div className="cam-container">
          {cams.map((cam) => (
            <CamCard key={cam.id} cam={cam} />
          ))}
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
