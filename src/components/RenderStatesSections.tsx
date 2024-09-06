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
}) => {
  // Filter cams without a state field
  const camsWithoutState = cams.filter((cam) => !cam.state)

  // Derive the country from the first cam (assuming all cams are from the same country)
  const country = cams[0]?.country || 'Country'

  return (
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

      {/* Render the last section for cams without state */}
      {camsWithoutState.length > 0 && (
        <div>
          <h2>{country} Webcams</h2>
          <div className="cam-container">
            {camsWithoutState.slice(0, 4).map((cam) => (
              <CamCard key={cam.id} cam={cam} />
            ))}
          </div>
          <AdLeaderboard />
        </div>
      )}
    </>
  )
}

export default RenderStatesSections
