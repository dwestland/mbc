import React from 'react'
// import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import CamCard from '@/components/CamCard'
import * as types from '@/utils/types'

function MoreFloridaCams({ cams }: types.MoreWebcamProps) {
  return (
    <div className="cam-container">
      {cams.cams.map(
        (cam: types.Cams, idx) => idx < 7 && <CamCard key={cam.id} cam={cam} />
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
