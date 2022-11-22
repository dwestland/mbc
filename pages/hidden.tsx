import React from 'react'
import { InferGetStaticPropsType } from 'next'
import Layout from '@/components/Layout'
import CamCard from '@/components/CamCard'
import * as types from '@/utils/types'

const HiddenPage = ({
  hiddenCams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const cams = hiddenCams.cams.map((cam) => <CamCard key={cam.id} cam={cam} />)

  return (
    <Layout
      documentTitle="Beach Cams of Kauai, Hawaii - Webcams at Princeville, Lihue and Poipu"
      documentDescription="Beach Cams and Surf aCms on Kauai, Hawaii with webcams in Princeville, Lihue and Poipu."
    >
      <div className="layout">
        <h1>Hidden Webcams</h1>
        <div className="cam-container">{cams}</div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/hidden`)
  const hiddenCams: types.CamPageProps = await res.json()

  return {
    props: {
      hiddenCams,
    },
  }
}

export default HiddenPage
