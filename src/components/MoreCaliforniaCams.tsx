import React from 'react'
// import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import CamItem from '@/components/CamItem'
import * as types from '@/utils/types'

function MorCaliforniaCams({ cams }: types.MoreWebcamProps) {
  return (
    <div className="cam-container">
      {cams.cams.map(
        (cam: types.Cams, idx) => idx < 7 && <CamItem key={cam.id} cam={cam} />
      )}
      <div className="more-cams">
        <Link href="/california">
          <a>
            <h2>
              MORE
              <br />
              <span>CALIF</span>
              <br />
              CAMS
            </h2>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default MorCaliforniaCams
