import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import WebcamLayout from '@/components/WebcamLayout'
import Link from 'next/link'
import Image from 'next/image'
import { InferGetStaticPropsType } from 'next'
import styles from '@/styles/Webcam.module.scss'
import AdSenseLeaderboard from '@/components/AdsenseLeaderboard'
import dynamic from 'next/dynamic'
import FlagModal from '@/components/FlagModal'
import CamItem from '@/components/CamItem'

interface WebcamProps {
  cams: { title: string }[]
  moreCams: { title: string }[]
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

// To create a new webcam page, make changes in 6 places: Change camID,
// title and description, h1, YouTube ID, page copy and More Cams

// ////////////////////////// 1. Change camID //////////////////////////
const camID = 595

const About = ({
  cams,
  moreCams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  console.log('%c cams ', 'background: red; color: white', cams)
  console.log('%c moreCams ', 'background: red; color: white', moreCams)

  const WebcamMap = dynamic(() => import('@/components/WebcamMap'), {
    ssr: false,
  })

  const { data: session } = useSession()
  const [isAdmin, setIsAdmin] = useState(false)
  const [showFlagModal, setShowFlagModal] = useState(false)

  // @ts-ignore
  const {
    id,
    title,
    webcamUrl,
    imageName,
    description,
    country,
    state,
    area,
    subarea,
    lat,
    lng,
  }: Cams = cams.cams

  useEffect(() => {
    // @ts-ignore
    if (session?.user.role === 'ADMIN') {
      setIsAdmin(true)
    }
  }, [session])

  const handleFlag = () => {
    setShowFlagModal(true)
  }

  const imageUrl: string = imageName
    ? process.env.AWS_IMAGE_SRC_ROOT + imageName
    : '/images/no-image.jpg'

  return (
    <WebcamLayout
      // ////////////////////////// 2. Change document title and description //////////////////////////
      documentTitle="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      documentDescription="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      {/* <div className="container"> */}
      {/* **************************** 3. Change h1 page title **************************** */}
      <h1>Waimea Bay Beach Cam, Oahu, Hawaii</h1>
      <AdSenseLeaderboard />

      {isAdmin && (
        <div className={styles.admin}>
          <div className="image">
            <Image src={imageUrl} width={400} height={300} alt={title} />
          </div>

          <div className={styles.camInfo}>
            <div className={styles.link}>
              <Link href={`/cams/edit/${id}`}>
                <a className="btn link-as-button">Edit</a>
              </Link>
            </div>
            <p>
              <strong>Title:</strong> {title}
            </p>
            <p>
              <strong>webcamUrl:</strong>&nbsp;
              <Link href={webcamUrl}>
                <a target="_blank">{webcamUrl}</a>
              </Link>
            </p>
            <p>
              <strong>Image Name:</strong> {imageName}
            </p>
            <p>
              <strong>ID:</strong> {id}
            </p>
            <p>
              <strong>Description:</strong> {description}
            </p>
            <p>
              <strong>Country:</strong> {country} &nbsp;
              <strong>State:</strong> {state} &nbsp;
              <strong>Area:</strong> {area}
              <strong>Subarea:</strong> {subarea}
            </p>
            <p>
              <strong>Latitude:</strong> {lat}
              &nbsp; &nbsp;
              <strong>Longitude:</strong> {lng}
            </p>
          </div>
        </div>
      )}

      <div className="video-responsive">
        <iframe
          title="YouTube Webcam"
          width="560"
          height="315"
          // ////////////////////////// 4. Change YouTube ID //////////////////////////
          src="https://www.youtube.com/embed/wnNrd-VjLsQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          className="btn"
          type="button"
          onClick={handleFlag}
          style={{ margin: '15px auto' }}
        >
          Flag this Cam
        </button>
      </div>

      <div className="content-and-ad" style={{ border: '1px solid red' }}>
        <div className="content">
          <WebcamMap lat={lat || 0} lng={lng || 0} />
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

      <p>
        The Banzai Pipeline cam in Hawaii is provided by EXPLORE.org, the
        world’s leading philanthropic live nature cam network and documentary
        ﬁlm channel.
      </p>
      <AdSenseLeaderboard />
      {/* **************************** 6. Change More Cams **************************** */}
      <h2>More Hawaii Cams</h2>
      <div className="cam-container">
        {moreCams.cams.map(
          (cam: Cams) => (
            // if (cam.subarea === subarea) {
            <CamItem key={cam.id} cam={cam} />
            // <CamItem key={cam.id} cam={cam} refreshData={refreshData} />
          )
          // }
          // return null
        )}
      </div>

      {/* map cams */}
      <AdSenseLeaderboard />
      {/* </div> */}

      {/* <div className="image-and-map">
        <div className="map">
          <WebcamMap lat={lat || 0} lng={lng || 0} />
        </div>
      </div> */}

      {showFlagModal && (
        <FlagModal
          onClose={() => setShowFlagModal(false)}
          id={id}
          title={title}
          country={country}
          state={state}
          area={area}
          subarea={subarea}
        />
      )}
    </WebcamLayout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/${camID}`)
  const cams: WebcamProps = await res.json()

  const moreCamsRes = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/hawaii`)
  const moreCams: WebcamProps = await moreCamsRes.json()

  return {
    props: {
      cams,
      moreCams,
    },
  }
}

export default About
