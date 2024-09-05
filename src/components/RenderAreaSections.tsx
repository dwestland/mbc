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
}) => (
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
  </>
)

export default RenderAreaSections
