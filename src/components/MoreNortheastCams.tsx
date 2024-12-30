import React from 'react'
import Link from 'next/link'
import CamCard from '@/components/CamCard'
import * as types from '@/utils/types'

function MoreNortheastCams({ cams }: types.MoreWebcamProps) {
  return (
    <div className="cam-container">
      {cams.cams.map(
        (cam, idx) => idx < 7 && <CamCard key={cam.id} cam={cam} />
      )}
      <div className="more-cams">
        <Link href="/florida/northeast">
          <a>
            <h2>
              MORE
              <br />
              <span>NORTHEAST</span>
              <br />
              CAMS
            </h2>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default MoreNortheastCams
