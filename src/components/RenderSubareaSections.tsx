import React from 'react'
import * as types from '@/utils/types'
import CamCard from './CamCard'
import AdLeaderboard from './AdLeaderboard'

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
            <AdLeaderboard />
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
          <AdLeaderboard />
        </div>
      )}
    </>
  )
}

export default RenderSubareaSections
