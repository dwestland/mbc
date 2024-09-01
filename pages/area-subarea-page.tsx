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
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log('%c boom ', 'background: red; color: white')

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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams-all`)
  const cams: types.Cams[] = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default CamsPage
