import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'
import dynamic from 'next/dynamic'
import FlagModal from '@/components/FlagModal'
import AdminWebcamPage from '@/components/AdminWebcamPage'

const Webcam = ({
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
    state,
    subarea,
    title,
    titleSlug,
    youtubeId,
  } = cams.cams[0]

  const WebcamMap = dynamic(() => import('@/components/WebcamMap'), {
    ssr: false,
  })
  const router = useRouter()

  const { data: session } = useSession()

  const [isAdmin, setIsAdmin] = useState(false)
  const [showFlagModal, setShowFlagModal] = useState(false)
  const { params = [] } = router.query
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeId}`

  // const { title } = cams?.cams[0]

  useEffect(() => {
    //  @ts-ignore
    if (session?.user.role === 'ADMIN') {
      setIsAdmin(true)
    }
  }, [session])

  const handleFlag = () => {
    setShowFlagModal(true)
  }

  return (
    <Layout documentTitle={title} documentDescription={description}>
      <div className="layout">
        <div className="container">
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
              className="btn"
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

          <p>{longDescription}</p>

          <AdLeaderboard />

          {/* /////////// More Cams /////////// */}
          <h2>
            <Link href="/hawaii/">More Hawaii Beach Cams</Link>
          </h2>
          {/* /////////// More Cams /////////// */}
          <AdLeaderboard />
        </div>
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

  console.log(
    '%c getServerSideProps queryString ',
    'background: red; color: white',
    queryString
  )

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}${queryString}`)
  const cams: CamsDetailProps = await res.json()

  // If path is not found, return 404
  if (!cams.cams[0]) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      cams,
    },
  }
}

export default Webcam
