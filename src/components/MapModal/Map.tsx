// @ts-nocheck
import React, { FC } from 'react'
import { MapContainer, MapConsumer, TileLayer, Marker } from 'react-leaflet'
import GeoSearch from '@/components/MapModal/EsriLeafletGeoSearch'

interface MapProps {
  lat: number
  lng: number
  handleLatLngChange: any
}

const Map: FC<MapProps> = ({ lat, lng, handleLatLngChange }) => (
  <>
    <p>
      <strong>Lat:</strong> {lat}&#176; &nbsp;
      <strong>Lng:</strong> {lng}&#176;
    </p>
    <MapContainer
      style={{ cursor: 'crosshair' }}
      center={[lat, lng]}
      zoom={12}
      maxZoom={17}
      minZoom={2}
    >
      <Marker position={[lat, lng]} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapConsumer>
        {(map) => {
          map.on('click', (e: any) => {
            // eslint-disable-next-line no-shadow
            const { lat, lng } = e.latlng
            handleLatLngChange(lat.toFixed(4), lng.toFixed(4))
          })
          return null
        }}
      </MapConsumer>
      <GeoSearch useMapBounds={false} />
    </MapContainer>
  </>
)

export default Map
