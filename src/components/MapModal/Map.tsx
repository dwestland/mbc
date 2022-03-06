import React, { FC, useState } from 'react'
import { MapContainer, MapConsumer, TileLayer } from 'react-leaflet'
import GeoSearch from '@/components/MapModal/EsriLeafletGeoSearch'

interface MapProps {
  lat: number
  lng: number
  // handleLatChange: any
  // handleLngChange: any
  handleLatLngChange: any
}

const Map: FC<MapProps> = ({
  lat,
  lng,
  // handleLatChange,
  // handleLngChange,
  handleLatLngChange,
}) => {
  console.log('%c lat ', 'background: red; color: white', lat)
  console.log('%c lng ', 'background: red; color: white', lng)
  // const [clickLat, setClickLat] = useState(0)
  // const [clickLng, setClickLng] = useState(0)

  return (
    <>
      <p>
        <strong>Lat:</strong> {lat}&#176; &nbsp;
        <strong>Lng:</strong> {lng}&#176;
        {/* <strong>Lat:</strong> {clickLat.toFixed(4)}&#176; &nbsp;
        <strong>Lng:</strong> {clickLng.toFixed(4)}&#176; */}
      </p>
      <MapContainer
        style={{ cursor: 'crosshair' }}
        center={[lat, lng]}
        // center={[33.9765, -118.4483]}
        zoom={12}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapConsumer>
          {(map) => {
            map.on('click', (e: any) => {
              const { lat, lng } = e.latlng

              // handleLatChange(lat.toFixed(4))
              // handleLngChange(lng.toFixed(4))
              handleLatLngChange(lat.toFixed(4), lng.toFixed(4))
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
