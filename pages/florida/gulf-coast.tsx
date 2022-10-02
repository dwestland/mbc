import React from 'react'
import { InferGetStaticPropsType } from 'next'
import ShowMoreText from 'react-show-more-text'
import dynamic from 'next/dynamic'
import { getSixDigitRandom } from '@/utils/formUtils'
import Layout from '@/components/Layout'
import CamItem from '@/components/CamItem'
import data from '@/data/camLocationAreas'

interface PageProps {
  cams: {}[]
}

interface Cams {
  id: number
  title: string
  webcamUrl: string
  imageName: string
  description: string
  country: string
  state: string
  area: string
  subarea: string
  lat: number
  lng: number
}

const GulfCoastPage = ({
  cams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  // Next modal SSR
  const CamsMap: any = dynamic(() => import('@/components/CamsMap'), {
    ssr: false,
  })

  const country = 'USA'
  const state = 'Florida'
  const area = 'Gulf Coast'
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
      .map((cam: Cams) => cam.subarea)
      .filter((ele) => ele === subarea).length
    if (camCount === 0) {
      return null
    }

    return (
      <div key={getSixDigitRandom()}>
        <div
          style={{
            height: '100px',
            background: 'lightblue',
            paddingLeft: '10px',
          }}
        >
          <h3>Adsense</h3>
        </div>
        <h2>{subarea} Webcams</h2>
        <div key={subarea} className="cam-container">
          {cams.cams.map((cam: Cams) => {
            if (cam.subarea === subarea) {
              return (
                <CamItem key={cam.id} cam={cam} />
                // <CamItem key={cam.id} cam={cam} refreshData={refreshData} />
              )
            }
            return null
          })}
        </div>
      </div>
    )
  })

  // Display cams WITHOUT subareas
  const moreCams = (
    <>
      <div
        style={{
          background: 'lightblue',
          height: '100px',
          paddingLeft: '10px',
        }}
      >
        <h3>Adsense</h3>
      </div>
      <h2>{area} Webcams</h2>
      <div className="cam-container">
        {cams.cams.map((cam: Cams) => {
          if (cam.area === area && cam.subarea === '') {
            return <CamItem key={cam.id} cam={cam} />
            // return <CamItem key={cam.id} cam={cam} refreshData={refreshData} />
          }
          return null
        })}
      </div>
    </>
  )

  // Create vectors for map
  const vectors = []
  cams.cams.map((cam: Cams) => {
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
      documentTitle="Beach Cams on the Florida Gulf Coast from Tampa Bay, Fort Myers, Cape Coral and Clearwater"
      documentDescription="Florida Gulf Coast, surf cam, beach cam, webcam, camera, Clearwater, Tampa Bay, Cape Coral, Fort Myers."
    >
      <div className="layout">
        <h1>Gulf Coast Florida Webcams</h1>
        <div className="content-and-ad" style={{ border: '1px solid red' }}>
          <div className="content">
            <CamsMap vectors={vectors} />
          </div>
          <div className="ad">
            <div
              style={{
                background: 'lightblue',
                height: '100%',
                overflow: 'hidden',
                paddingLeft: '10px',
                width: '100%',
              }}
            >
              <h3>Adsense</h3>
            </div>
          </div>
        </div>
        {/* Text block 1 */}

        {camSections}
        {moreCams}

        <div className="panel">
          <ShowMoreText
            lines={3}
            more="show more"
            less="show less"
            anchorClass="anchorClass"
            truncatedEndingComponent="... "
          >
            {/* Text block 2 */}
          </ShowMoreText>
        </div>

        <hr />
        {/* Things to do and links */}
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/florida`)
  const cams: PageProps = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default GulfCoastPage
