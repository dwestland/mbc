import React from 'react'
import { InferGetStaticPropsType } from 'next'
import ShowMoreText from 'react-show-more-text'
import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
import CamCard from '@/components/CamCard'
import data from '@/data/camLocationAreas'
import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'
import { getSixDigitRandom } from '@/utils/common'
import MoreFloridaCams from '@/components/MoreFloridaCams'
import Link from 'next/link'
import * as types from '@/utils/types'

const MiamiPage = ({
  cams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  // Ensure cams and cams.cams are defined
  if (!cams || !cams.cams || cams.cams.length === 0) {
    return (
      <Layout
        documentTitle="Beach Cams in Miami and South Beach Florida"
        documentDescription="Best live web cams and surf cams at Miami Beach and South Beach in Florida."
      >
        <div className="layout">
          <h1>No cams available</h1>
        </div>
      </Layout>
    )
  }

  // Next modal SSR
  const CamsMap: any = dynamic(() => import('@/components/CamsMap'), {
    ssr: false,
  })
  const floridaCams: any = cams

  const country = 'USA'
  const state = 'Florida'
  const area = 'Miami Beach'
  const countryObject = data.countries.filter((ele) => ele.country === country)
  const stateObject = countryObject[0].states.filter(
    (ele) => ele.state === state
  )
  const areaObject = stateObject[0].areas.filter((ele) => ele.area === area)

  const subareaObjects = areaObject[0].subareas
  const subareaArray = subareaObjects.map((ele) => ele.subarea)

  // Display cams WITH subareas
  const camSections = subareaArray.map((subarea) => {
    // check if subarea cams exist
    const camCount = cams.cams
      .map((cam: types.Cams) => cam.subarea)
      .filter((ele) => ele === subarea).length
    if (camCount === 0) {
      return null
    }

    return (
      <div key={getSixDigitRandom()}>
        <AdLeaderboard />
        <h2>{subarea} Webcams</h2>
        <div key={subarea} className="cam-container">
          {cams.cams.map((cam: types.Cams) => {
            if (cam.subarea === subarea) {
              return <CamCard key={cam.id} cam={cam} />
            }
            return null
          })}
        </div>
      </div>
    )
  })

  // Display cams WITHOUT subareas
  const moreCams = () => {
    const subareaCams = cams.cams.filter(
      (cam: types.Cams) => cam.area === area && cam.subarea === ''
    )

    if (subareaCams.length === 0) {
      return null
    }

    const result = subareaCams.map((cam: types.Cams) => (
      <CamCard key={cam.id} cam={cam} />
    ))

    return (
      <>
        <AdLeaderboard />
        <h2>{area} Webcams</h2>
        <div className="cam-container">{result}</div>
      </>
    )
  }

  // Create vectors for map
  const vectors = []
  cams.cams.map((cam: types.Cams) => {
    if (cam.area === area && cam.lat !== null && cam.lng !== null) {
      const vector = {
        name: cam.title,
        lat: cam.lat,
        lng: cam.lng,
      }
      vectors.push(vector)
    }
    return null
  })

  return (
    <Layout
      documentTitle="Beach Cams in Miami and South Beach Florida"
      documentDescription="Best live web cams and surf cams at Miami Beach and South Beach in Florida."
    >
      <div className="layout">
        <h1>Mexico Beach Webcams</h1>
        <div className="content-and-ad">
          <div className="content">
            <CamsMap vectors={vectors} />
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
        {camSections}
        {moreCams()}
        <div className="panel">
          <ShowMoreText
            lines={4}
            more="show more"
            less="show less"
            anchorClass="anchorClass"
            truncatedEndingComponent="... "
          >
            <p>xxxx</p>
          </ShowMoreText>
        </div>
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in xxxx</h3>
            <ol>
              <li>item</li>
            </ol>
          </div>
          <div className="info">
            <h3>Miami Links and Local Information</h3>
            <ul>
              <li>
                <a href="https://www.xxxx.com" target="_blank" rel="noreferrer">
                  xxxx
                </a>{' '}
                - xxxx
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <h2>
        <Link href="/florida/">More Florida Beach Cams</Link>
      </h2>
      <MoreFloridaCams cams={floridaCams} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/florida`)
  const cams: types.CamPageProps = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default MiamiPage
