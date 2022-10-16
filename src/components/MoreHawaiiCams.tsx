import React from 'react'
// import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import CamItem from '@/components/CamItem'

interface WebcamProps {
  cams: {
    cams: [
      {
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
        topCam: boolean
        mbcHosted: boolean
      }
    ]
  }
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
  topCam: boolean
  mbcHosted: boolean
}

function MoreHawaiiCams({ cams }: WebcamProps) {
  return (
    <div className="cam-container">
      {cams.cams.map(
        (cam: Cams, idx) => idx < 7 && <CamItem key={cam.id} cam={cam} />
      )}
      <div className="more-cams">
        <Link href="/hawaii">
          <a>
            <h2>
              MORE
              <br />
              <span>HAWAII</span>
              <br />
              CAMS
            </h2>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default MoreHawaiiCams
