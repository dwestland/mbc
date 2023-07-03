import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { InferGetStaticPropsType } from 'next'
// import { useRouter } from 'next/router'
import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'
import dynamic from 'next/dynamic'
import FlagModal from '@/components/FlagModal'
import AdminWebcamPage from '@/components/AdminWebcamPage'
import MoreHawaiiCams from '@/components/MoreHawaiiCams'

interface WebcamProps {
  hawaiiCams: { title: string }[]
}

interface Cam {
  area: string
  country: string
  description: string
  id: number
  lat: string
  lng: string
  longDescription: string
  moreCams: string
  state: string
  subarea: string
  title: string
  youtubeId: string
}

interface CamsDetailProps {
  cams: Cam[]
}

const Webcam = ({
  hawaiiCams,
  cams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const {
    area,
    country,
    description,
    id,
    lat,
    lng,
    longDescription,
    moreCams,
    state,
    subarea,
    title,
    // titleSlug,
    youtubeId,
    // @ts-ignore
  } = cams.cams[0]

  const WebcamMap = dynamic(() => import('@/components/WebcamMap'), {
    ssr: false,
  })
  // const router = useRouter()

  const { data: session } = useSession()

  const [isAdmin, setIsAdmin] = useState(false)
  const [showFlagModal, setShowFlagModal] = useState(false)
  // const { params = [] } = router.query
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeId}`

  useEffect(() => {
    //  @ts-ignore
    if (session?.user.role === 'ADMIN') {
      setIsAdmin(true)
    }
  }, [session])

  const handleFlag = () => {
    setShowFlagModal(true)
  }

  const [moreCamsData, setMoreCamsData] = useState({})
  console.log('%c moreCamsData ', 'background: red; color: white', moreCamsData)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/cams/hawaii`)
      .then((res) => res.json())
      .then((data) => setMoreCamsData(data))
  }, [])

  console.log('%c  hawaiiCams ', 'background: red; color: white', hawaiiCams)
  console.log(
    '%c moreCams.cams ',
    'background: red; color: white',
    moreCams.cams
  )
  // const x = [
  //   {
  //     area: 'Kauai',
  //     country: 'USA',
  //     description:
  //       'Live webcam from the Lawai Beach Resort near Poipu on the Hawaiian island of Kauai.',
  //     hidden: false,
  //     id: 641,
  //     imageName: 'lawai-beach-resort-cam-hi-681495.jpg',
  //     lat: '21.8824',
  //     lng: '-159.4771',
  //     mbcHostedYoutube: true,
  //     state: 'Hawaii',
  //     subarea: 'Poipu',
  //     title: 'Live Lawai Beach Resort Webcam, Poipu, Kauai',
  //     topCam: true,
  //     webcamUrl:
  //       '/webcam/USA/Hawaii/Kauai/live-lawai-beach-resort-webcam-kauai-poipu',
  //   },
  //   {
  //     area: 'Oahu',
  //     country: 'USA',
  //     description: 'See the latest Ouha traffic conditions with these webcams.',
  //     hidden: false,
  //     id: 289,
  //     imageName: 'oahutrafficcams.jpg',
  //     lat: '21.4088',
  //     lng: '-157.8777',
  //     mbcHostedYoutube: false,
  //     state: 'Hawaii',
  //     subarea: 'Honolulu',
  //     title: 'Oahu Traffic Cams',
  //     topCam: false,
  //     webcamUrl: 'http://www2.honolulu.gov/honolulumyway/?trafficcam',
  //   },
  //   {
  //     area: 'Maui',
  //     country: 'USA',
  //     description:
  //       'Controllable live streaming webcam from Maui Kai at Kaanapali Beach.',
  //     hidden: false,
  //     id: 300,
  //     imageName: 'maui-kai-beach-cam-510666.jpg',
  //     lat: '20.9497',
  //     lng: '-156.6894',
  //     mbcHostedYoutube: false,
  //     state: 'Hawaii',
  //     subarea: 'Lahaina',
  //     title: 'Maui Kai Beach Cam',
  //     topCam: false,
  //     webcamUrl: 'http://www.mauikai.com/extras',
  //   },
  // ]
  return (
    <Layout documentTitle={title} documentDescription={description}>
      <div className="layout">
        {/* <div className="container"> */}
        <h1>{title}</h1>
        <h2>{description}</h2>
        <AdLeaderboard />
        {isAdmin && (
          // @ts-ignore
          <AdminWebcamPage cams={cams.cams[0]} style={{ height: '200px' }} />
        )}
        <div className="video-responsive">
          <iframe
            title="YouTube Webcam"
            width="560"
            height="315"
            src={youtubeUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            className="btn ghostButton"
            type="button"
            onClick={handleFlag}
            style={{ margin: '15px auto' }}
          >
            Flag this Cam
          </button>
        </div>
        <div className="content-and-ad">
          <div className="content">
            <WebcamMap lat={lat || 0} lng={lng || 0} />
          </div>
          <div className="ad">
            <AdLarge />
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: longDescription }} />
        <AdLeaderboard />

        <h2>
          <Link href="/hawaii/">More Hawaii Beach Cams</Link>
        </h2>
        {moreCamsData ? <MoreHawaiiCams cams={hawaiiCams} /> : null}
        {/* {moreCamsData ? <MoreHawaiiCams cams={moreCamsData} /> : null} */}
        {/* <MoreHawaiiCams cams={hawaiiCams} /> */}

        <AdLeaderboard />
        {/* </div> */}
      </div>

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
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { params } = context.query

  // Create webcam page path
  const result = ['/webcam-page?']
  for (let i = 0; i <= params.length - 2; i++) {
    if (i === 0) {
      /* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */
      result.push(`country=${params[0]}`)
    }
    if (i === 1) {
      /* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */
      result.push(`&state=${params[1]}`)
    }
  }
  /* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */
  result.push(`&titleSlug=${params[params.length - 1]}`)
  const queryString = result.join('')

  // Call webcam dynamic page
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}${queryString}`)
  const cams: CamsDetailProps = await res.json()

  // If path is not found, return 404
  if (!cams.cams[0]) {
    return {
      notFound: true,
    }
  }

  const hawaiiRes = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/hawaii`)
  const hawaiiCams: WebcamProps = await hawaiiRes.json()

  return {
    props: {
      cams,
      hawaiiCams,
    },
  }
}

export default Webcam
