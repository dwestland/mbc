import React from 'react'
import * as types from '@/utils/types'
import CamCard from './CamCard'
import AdLeaderboard from './AdLeaderboard'

interface RenderStatesSectionsProps {
  pageSections: { state: string }[]
  cams: types.Cams[]
}

const RenderStatesSections: React.FC<RenderStatesSectionsProps> = ({
  pageSections,
  cams,
}) => (
  <>
    {pageSections.map((stateObj) => {
      const filteredSections = cams.filter(
        (cam) => cam.state === stateObj.state
      )

      if (filteredSections.length === 0) {
        return null
      }

      return (
        <div key={stateObj.state}>
          <h2>{stateObj.state} Webcams</h2>
          <div className="cam-container">
            {filteredSections.slice(0, 4).map((cam) => (
              <CamCard key={cam.id} cam={cam} />
            ))}
          </div>
          <AdLeaderboard />
        </div>
      )
    })}
  </>
)

export default RenderStatesSections
