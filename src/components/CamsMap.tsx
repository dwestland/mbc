import React, { useEffect } from 'react'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  LayersControl,
} from 'react-leaflet'
import { GestureHandling } from 'leaflet-gesture-handling'
import * as L from 'leaflet'
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css'
import Image from 'next/image'
// import MarkerClusterGroup from 'react-leaflet-markercluster'
// import 'react-leaflet-markercluster/dist/styles.min.css'

// 33.9765, -118.4483

interface Props {
  vectors: {
    lat: number
    lng: number
    name: string
    id: number
    imageName?: string
  }[]
}

const CamsMap = ({ vectors }: Props) => {
  useEffect(() => {
    L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling)
  })

  if (vectors.length === 0) {
    vectors = [{ lat: 33.9765, lng: -118.4483, name: 'Marina del Rey', id: 1 }]
  }

  const vectorArray: [number, number][] = vectors.map((vector) => [
    vector.lat,
    vector.lng,
  ])

  return (
    <MapContainer
      bounds={vectorArray}
      scrollWheelZoom={false}
      gestureHandling
      boundsOptions={{ padding: [50, 50] }}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Watercolor">
          <TileLayer
            attribution='&copy; <a href="http://stamen.com">Stamen Design</a> contributors'
            // eslint-disable-next-line no-template-curly-in-string
            url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?api_key=`${process.env.STADIA_API_KEY}`"
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Street Map">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Satellite">
          <TileLayer
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            maxNativeZoom={15}
          />
        </LayersControl.BaseLayer>
      </LayersControl>
      {/* <MarkerClusterGroup> */}
      {vectors.map((vector) => (
        <Marker key={`${vector.id}`} position={[vector.lat, vector.lng]}>
          <Popup>
            <div>
              <a href={`/detail/${vector.id}`} target="_blank" rel="noopener">
                <p
                  style={{
                    margin: '5px 0',
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: '12px',
                  }}
                >
                  {vector.name}
                </p>
                <Image
                  src={process.env.AWS_IMAGE_SRC_ROOT + vector.imageName}
                  alt={vector.name}
                  style={{ width: '100%', height: 'auto' }}
                  width={260}
                  height={195}
                />
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
      {/* </MarkerClusterGroup> */}
    </MapContainer>
  )
}

export default CamsMap
