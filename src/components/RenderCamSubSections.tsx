import React from 'react'
import * as types from '@/utils/types'
import CamCard from './CamCard'
import AdLeaderboard from './AdLeaderboard'

interface RenderCamSubSectionsProps {
  pageSections: { subarea: string }[]
  cams: types.Cams[]
}

const RenderCamSubSections: React.FC<RenderCamSubSectionsProps> = ({
  pageSections,
  cams,
}) => (
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
  </>
)

export default RenderCamSubSections
