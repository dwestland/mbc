import React from 'react'
import dynamic from 'next/dynamic'
import * as types from '@/utils/types'

interface CamsPageMapProps {
  cams: types.Cams[]
}

const CamsPageMap: React.FC<CamsPageMapProps> = ({ cams }) => {
  // Allow map with SSR
  const CamsMap: any = dynamic(() => import('@/components/CamsMap'), {
    ssr: false,
  })

  const vectors: any = []
  cams.map((cam: types.Cams) => {
    if (cam.lat !== null && cam.lng !== null) {
      const vector = {
        name: cam.title,
        lat: cam.lat,
        lng: cam.lng,
        id: cam.id,
        imageName: cam.imageName,
      }
      vectors.push(vector)
    }
    return null
  })

  return (
    <>
      <CamsMap vectors={vectors} />
    </>
  )
}

export default CamsPageMap
