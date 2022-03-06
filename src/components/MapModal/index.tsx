import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import styles from '@/styles/Modal.module.css'

interface MapModalProps {
  lat: number
  lng: number
  handleLatLngChange: any
  onClose: any
}

const MapModal: FC<MapModalProps> = ({
  lng,
  lat,
  handleLatLngChange,
  onClose,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const Map = dynamic(() => import('@/components/MapModal/Map'), {
    ssr: false,
  })

  return (
    <div className={styles.form}>
      <h1>Set Lat Lng</h1>
      <Map lat={lat} lng={lng} handleLatLngChange={handleLatLngChange} />
      <form onSubmit={handleSubmit}>
        <div className={styles.buttonContainer}>
          <button type="button" className="btn " onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    </div>
  )
}

export default MapModal
