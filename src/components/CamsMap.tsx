import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
// import MarkerClusterGroup from 'react-leaflet-markercluster'
// import 'react-leaflet-markercluster/dist/styles.min.css'

import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css'

// 33.9765, -118.4483

interface Props {
  vectors: {
    lat: number
    lng: number
    name: string
  }[]
}

// TODO: add default lat lng if vectors is empty

const CamsMap = ({ vectors }: Props) => {
  const vectorArray: [number, number][] = vectors.map((vector) => [
    vector.lat,
    vector.lng,
  ])

  return (
    <MapContainer
      bounds={vectorArray}
      // center={[33.9765, -118.4483]}
      // zoom={14}
      scrollWheelZoom={false}
      gestureHandling
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <MarkerClusterGroup> */}
      {vectors.map((vector) => (
        <Marker key={vector.name} position={[vector.lat, vector.lng]}>
          <Popup>
            <div>
              <h3>{vector.name}</h3>
            </div>
          </Popup>
        </Marker>
      ))}
      {/* </MarkerClusterGroup> */}
    </MapContainer>
  )
}

export default CamsMap
