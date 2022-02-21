import React, { useState } from 'react'
import { MapContainer, MapConsumer, TileLayer } from 'react-leaflet'
import GeoSearch from '@/components/EsriLeafletGeoSearch'

const Map = () => {
  const [clickLat, setClickLat] = useState(0)
  const [clickLng, setClickLng] = useState(0)

  return (
    <>
      <p>
        <strong>Lat:</strong> {clickLat.toFixed(4)}&#176; &nbsp;
        <strong>Lng:</strong> {clickLng.toFixed(4)}&#176;
      </p>
      <MapContainer
        style={{ cursor: 'crosshair' }}
        center={[33.9765, -118.4483]}
        zoom={14}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapConsumer>
          {(map) => {
            map.on('click', (e: any) => {
              const { lat, lng } = e.latlng

              setClickLat(lat)
              setClickLng(lng)
            })
            return null
          }}
        </MapConsumer>
        <GeoSearch useMapBounds={false} />
      </MapContainer>
    </>
  )
}

export default Map
