import React from 'react'
import * as types from '@/utils/types'
// import dynamic from 'next/dynamic'
import CamCard from './CamCard'
// import AdLeaderboard from './AdLeaderboard'
// import AdsBanner from './AdsBanner'
// const AdsBanner = dynamic(() => import('./AdsBanner'), {
//   ssr: false,
// })

interface RenderSubareaSectionsProps {
  pageSections: { subarea: string }[]
  cams: types.Cams[]
}

const RenderSubareaSections: React.FC<RenderSubareaSectionsProps> = ({
  pageSections,
  cams,
}) => {
  // Filter cams with no subarea
  const camsWithoutSubarea = cams.filter((cam) => !cam.subarea)

  // Get the area from the cams object (assuming all cams share the same area)
  const area = cams.length > 0 ? cams[0].area : ''

  return (
    <>
      {pageSections.map((subarea) => {
        const filteredSections = cams.filter(
          (cam) => cam.subarea === subarea.subarea
        )

        if (filteredSections.length === 0) {
          return null
        }

        return (
          <div key={subarea.subarea}>
            <h2>{subarea.subarea} Webcams</h2>
            <div className="cam-container">
              {filteredSections.map((cam) => (
                <CamCard key={cam.id} cam={cam} />
              ))}
            </div>
            {/* <AdLeaderboard /> */}
            {/* <AdsBanner
              data-ad-slot="slotnumber"
              data-full-width-responsive="true"
              data-ad-layout="in-article"
              data-ad-format="fluid"
            /> */}
          </div>
        )
      })}

      {/* Render section for cams without subarea */}
      {camsWithoutSubarea.length > 0 && (
        <div>
          <h2>{area} Webcams</h2>
          <div className="cam-container">
            {camsWithoutSubarea.map((cam) => (
              <CamCard key={cam.id} cam={cam} />
            ))}
          </div>
          {/* <AdLeaderboard /> */}
          {/* <AdsBanner
            data-ad-slot="slotnumber"
            data-full-width-responsive="true"
            data-ad-layout="in-article"
            data-ad-format="fluid"
          /> */}
        </div>
      )}
    </>
  )
}

export default RenderSubareaSections
