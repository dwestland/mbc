import React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

interface Props {
  lat: number
  lng: number
}

const WebcamMap = ({ lat, lng }: Props) => (
  <MapContainer
    center={[lat, lng]}
    zoom={12}
    style={{ height: '350px', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[lat, lng]} />
  </MapContainer>
)

export default WebcamMap
