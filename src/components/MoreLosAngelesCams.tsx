import React from 'react'
import Link from 'next/link'
import CamCard from '@/components/CamCard'
import * as types from '@/utils/types'

function MoreLosAngelesCams({ cams }: types.MoreWebcamProps) {
  return (
    <div className="cam-container">
      {cams.cams.map(
        (cam, idx) => idx < 7 && <CamCard key={cam.id} cam={cam} />
      )}
      <div className="more-cams">
        <Link href="/california/los-angeles/">
          <a>
            <h2>
              MORE
              <br />
              <span>LOS ANGELES</span>
              <br />
              CAMS
            </h2>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default MoreLosAngelesCams
