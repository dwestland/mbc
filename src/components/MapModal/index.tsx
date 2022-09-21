import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import ReactDOM from 'react-dom'
import { FaTimes } from 'react-icons/fa'
import styles from '@/styles/Modal.module.css'

interface Props {
  onClose: () => void

  lat: number
  lng: number
  handleLatLngChange: any
}

export default function MapModal({
  onClose,
  lat,
  lng,
  handleLatLngChange,
}: Props) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => setIsBrowser(true))

  const handleClose = (e) => {
    e.preventDefault()
    onClose()
  }

  const Map = dynamic(() => import('@/components/MapModal/Map'), {
    ssr: false,
  })

  const modalContent = (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <button
            className={styles.xButton}
            type="button"
            onClick={handleClose}
          >
            <a>
              <FaTimes />
            </a>
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.form}>
            <h1>Set Lat Lng</h1>
            {/* @ts-ignore */}
            <Map lat={lat} lng={lng} handleLatLngChange={handleLatLngChange} />

            <div className={styles.buttonContainer}>
              <button type="button" className="btn " onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    )
  }
  return null
}

// Modal component with Next.js:
// https://devrecipes.net/modal-component-with-next-js/
