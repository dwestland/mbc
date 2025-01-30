import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { InferGetStaticPropsType, GetServerSidePropsContext } from 'next'
import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'
import dynamic from 'next/dynamic'
import FlagModal from '@/components/FlagModal'
import AdminWebcamPage from '@/components/AdminWebcamPage'
import MoreHawaiiCams from '@/components/MoreHawaiiCams'
// import * as types from '@/types/index'

// TODO - Import interface and fix roles error

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
    // moreCams,
    state,
    subarea,
    title,
    youtubeId,
    // @ts-ignore
  } = cams.cams[0]

  const WebcamMap = dynamic(() => import('@/components/WebcamMap'), {
    ssr: false,
  })

  const { data: session } = useSession()
  const [isAdmin, setIsAdmin] = useState(false)
  const [showFlagModal, setShowFlagModal] = useState(false)
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

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/cams/hawaii`)
      .then((res) => res.json())
      .then((data) => setMoreCamsData(data))
  }, [])

  return (
    <Layout documentTitle={title} documentDescription={description}>
      <div className="layout">
        <AdLeaderboard />
        <h1>{title}</h1>
        <div className="video-responsive">
          <iframe
            title="YouTube Webcam"
            width="560"
            height="315"
            src={youtubeUrl}
            style={{ border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <h2 style={{ fontSize: '35px' }}>{description}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: longDescription }}
          style={{ margin: '10px 0' }}
        />
        <p>
          <strong>Country: </strong>
          {country}&nbsp;&nbsp;&nbsp;
          {state && (
            <>
              <strong>State / Main Area: </strong>
              {state}&nbsp;&nbsp;&nbsp;
            </>
          )}
          {area && (
            <>
              <strong>Area: </strong>
              {area}&nbsp;&nbsp;&nbsp;
            </>
          )}
          {subarea && (
            <>
              <strong>Sub-area: </strong>
              {subarea}&nbsp;&nbsp;&nbsp;
            </>
          )}
          <strong>Latitude: </strong>
          {lat}&nbsp;&nbsp;&nbsp;
          <strong>Longitude: </strong>
          {lng}
        </p>
        {isAdmin && (
          // @ts-ignore
          <AdminWebcamPage cams={cams.cams[0]} style={{ height: '200px' }} />
        )}
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
        <AdLeaderboard />
        <h2>
          <Link href="/hawaii">
            <a target="_blank" rel="noopener">
              More Hawaii Beach Cams
            </a>
          </Link>
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context.query

  // Create webcam page path
  const result = ['/webcam-page?']
  for (let i = 0; i <= (params ?? []).length - 2; i++) {
    if (i === 0) {
      result.push(
        `country=${params?.[0]
          ?.replace(/-/g, ' ')
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}`
      )
    }

    if (i === 1) {
      result.push(
        `&state=${params?.[1]
          ?.replace(/-/g, ' ')
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}`
      )
    }
  }
  result.push(`&titleSlug=${params?.[params?.length - 1] ?? ''}`)
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
