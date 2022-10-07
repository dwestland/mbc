import React, { useEffect } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { GestureHandling } from 'leaflet-gesture-handling'
import * as L from 'leaflet'
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css'

interface Props {
  lat: number
  lng: number
}

const DetailsMap = ({ lat, lng }: Props) => {
  useEffect(() => {
    L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling)
  })
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={12}
      scrollWheelZoom={false}
      gestureHandling
      style={{ height: '300px', width: '400px' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} />
    </MapContainer>
  )
}

export default DetailsMap
