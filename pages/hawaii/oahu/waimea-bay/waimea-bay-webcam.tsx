import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import WebcamLayout from '@/components/WebcamLayout'
import Link from 'next/link'
import { InferGetStaticPropsType } from 'next'
import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'
import dynamic from 'next/dynamic'
import FlagModal from '@/components/FlagModal'
import MoreHawaiiCams from '@/components/MoreHawaiiCams'
import * as types from '@/utils/types'
import AdminWebcamPage from '@/components/AdminWebcamPage'

// ////////////////////////////////////////////////////////////////////////////
// To create a new webcam page, first add cam to DB. Then make changes in 6
// places on this file: Change camID, title and description, h1, YouTube ID,
// page copy and More Cams
// ////////////////////////////////////////////////////////////////////////////

// ////////////////////////// 1. Change camID //////////////////////////
const camID = 595

const WebcamPage = ({
  cams,
  moreCams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const WebcamMap = dynamic(() => import('@/components/WebcamMap'), {
    ssr: false,
  })

  const { data: session } = useSession()
  const [isAdmin, setIsAdmin] = useState(false)
  const [showFlagModal, setShowFlagModal] = useState(false)

  const { id, title, country, state, area, subarea, lat, lng }: any = cams.cams

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
    <WebcamLayout
      // ////////////////////////// 2. Change document title and description //////////////////////////
      documentTitle="Live Waimea Bay Webcam, Oahu, HI"
      documentDescription="Live streaming webcam of Waimea Bay, Oahu, Hawaii. Waimea Bay Beach Park offers breathtaking views of the North Shore and access to great surfing."
    >
      {/* **************************** 3. Change h1 page title **************************** */}
      <h1>Live Waimea Bay Webcam</h1>
      <h2>Waimea Bay, Oahu, Hawaii Beach Cam</h2>

      <AdLeaderboard />

      {isAdmin && (
        <AdminWebcamPage cams={cams.cams} style={{ height: '200px' }} />
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

      <div className="content-and-ad">
        <div className="content">
          <WebcamMap lat={lat || 0} lng={lng || 0} />
        </div>
        <div className="ad">
          <AdLarge />
        </div>
      </div>

      {/* **************************** 5. Change page copy **************************** */}
      <p>
        The Banzai Pipeline cam in Hawaii is provided by EXPLORE.org, the
        world’s leading philanthropic live nature cam network and documentary
        ﬁlm channel.
      </p>

      <AdLeaderboard />

      <h2>
        <Link href="/hawaii/">More Hawaii Beach Cams</Link>
      </h2>
      {/* **************************** 6. Change More Cams **************************** */}
      <MoreHawaiiCams cams={moreCams} />

      <AdLeaderboard />

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
  const cams: types.WebcamProps = await res.json()

  const moreCamsRes = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/hawaii`)
  const moreCams: types.WebcamProps = await moreCamsRes.json()

  return {
    props: {
      cams,
      moreCams,
    },
  }
}

export default WebcamPage
