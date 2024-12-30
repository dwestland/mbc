import React from 'react'
import Link from 'next/link'
import CamCard from '@/components/CamCard'
import * as types from '@/utils/types'

function MoreSanFranciscoCams({ cams }: types.MoreWebcamProps) {
  return (
    <div className="cam-container">
      {cams.cams.map(
        (cam, idx) => idx < 7 && <CamCard key={cam.id} cam={cam} />
      )}
      <div className="more-cams">
        <Link href="/california/san-francisco/">
          <a>
            <h2>
              MORE
              <br />
              <span>SAN FRAN SICO</span>
              <br />
              CAMS
            </h2>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default MoreSanFranciscoCams
