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
}

function MoreFloridaCams({ cams }: WebcamProps) {
  return (
    <div className="cam-container">
      {cams.cams.map(
        (cam: Cams, idx) => idx < 7 && <CamItem key={cam.id} cam={cam} />
      )}
      <div className="more-cams">
        <Link href="/florida">
          <a>
            <h2>
              MORE
              <br />
              <span>FLORIDA</span>
              <br />
              CAMS
            </h2>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default MoreFloridaCams
