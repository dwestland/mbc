/* eslint-disable react/destructuring-assignment */
import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import * as ELG from 'esri-leaflet-geocoder'

interface Props {
  providers: string[]
}

const EsriLeafletGeoCoder = (props: Props) => {
  const map = useMap()

  useEffect(() => {
    const searchOptions = {
      ...props,
      providers: props.providers
        ? props.providers.map((provider) => (ELG as any)[provider]())
        : null,
    }

    const GeoSearch = new (ELG as any).Geosearch(searchOptions)
    GeoSearch.addTo(map)

    return () => {
      GeoSearch.remove()
    }
  }, [map, props])

  return null
}

export default EsriLeafletGeoCoder
