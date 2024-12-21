import React from 'react'
import { InferGetStaticPropsType } from 'next'
import Layout from '@/components/Layout'
import CamCard from '@/components/CamCard'
import * as types from '@/utils/types'

const Hidden = ({
  cams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => (
  <Layout
    documentTitle="Beach Cams of Oahu, Hawaii - Webcams at Waikiki Beach, Honolulu and North Shore"
    documentDescription="Best Beach Cams and Surf Cams in Oahu, Hawaii with webcams in Waikiki Beach, Honolulu and the North Shore."
    nofollow
  >
    <div className="layout">
      <h1>Hidden Webcams</h1>
      <div className="cam-container">
        {(cams.cams as types.Cams[]).map((cam: types.Cams) => (
          <CamCard key={cam.id} cam={cam} />
        ))}
      </div>
    </div>
  </Layout>
)

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/hidden`)
  const cams: types.CamPageProps = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default Hidden
