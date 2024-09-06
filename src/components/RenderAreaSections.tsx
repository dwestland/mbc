import React from 'react'
import * as types from '@/utils/types'
import CamCard from './CamCard'
import AdLeaderboard from './AdLeaderboard'

interface RenderAreaSectionsProps {
  pageAreas: { area: string }[]
  cams: types.Cams[]
}

const RenderAreaSections: React.FC<RenderAreaSectionsProps> = ({
  pageAreas,
  cams,
}) => {
  // Get the state from the cams object (assuming all cams have the same state)
  const state = cams.length > 0 ? cams[0].state : 'Unknown State'

  // Filter cams that don't have an area
  const noAreaCams = cams.filter((cam) => !cam.area)

  return (
    <>
      {pageAreas.map((areaObj) => {
        const filteredSections = cams.filter((cam) => cam.area === areaObj.area)

        if (filteredSections.length === 0) {
          return null
        }

        return (
          <div key={areaObj.area}>
            <h2>{areaObj.area} Webcams</h2>
            <div className="cam-container">
              {filteredSections.map((cam) => (
                <CamCard key={cam.id} cam={cam} />
              ))}
            </div>
            <AdLeaderboard />
          </div>
        )
      })}

      {/* Render cams without an area at the end */}
      {noAreaCams.length > 0 && (
        <div>
          <h2>{state} Webcams</h2>
          <div className="cam-container">
            {noAreaCams.map((cam) => (
              <CamCard key={cam.id} cam={cam} />
            ))}
          </div>
          <AdLeaderboard />
        </div>
      )}
    </>
  )
}

export default RenderAreaSections
