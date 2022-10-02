import React from 'react'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  LayersControl,
} from 'react-leaflet'
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
  if (vectors.length === 0) {
    vectors = [{ lat: 33.9765, lng: -118.4483, name: 'Marina del Rey' }]
  }
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
      boundsOptions={{ padding: [50, 50] }}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Watercolor">
          <TileLayer
            attribution='&copy; <a href="http://stamen.com">Stamen Design</a> contributors'
            url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer checked name="Street Map">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
          /> */}
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Satellite">
          <TileLayer
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Nat Geo">
          <TileLayer
            attribution="Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
      <Marker position={[33.9765, -118.4483]} />
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
