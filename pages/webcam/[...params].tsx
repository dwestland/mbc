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
  console.log('%c  hawaiiCams ', 'background: red; color: white', hawaiiCams)
  console.log('%c moreCams ', 'background: red; color: white', moreCams)

  return (
    <Layout documentTitle={title} documentDescription={description}>
      <div className="layout">
        {/* <div className="container"> */}
        <h1>{title}</h1>
        <h2>{description}</h2>
        <AdLeaderboard />
        {isAdmin && (
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
        {/* /////////// More Cams /////////// */}
        <h2>
          <Link href="/hawaii/">More Hawaii Beach Cams</Link>
        </h2>
        <MoreHawaiiCams cams={hawaiiCams} />
        {/* /////////// More Cams /////////// */}
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
      result.push(`country=${params[0]}`)
    }
    if (i === 1) {
      result.push(`&state=${params[1]}`)
    }
  }
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
