import React from 'react'
import Link from 'next/link'
import CamItem from '@/components/CamItem'

interface WebcamProps {
  cams: { title: string }[]
}

function MoreMauiCams({ cams }) {
  console.log('%c MoreMauiCams cams ', 'background: blue; color: white', cams)
  return (
    <>
      <h2>Hawaii Cams</h2>
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
    </>
  )
}

export default MoreMauiCams
