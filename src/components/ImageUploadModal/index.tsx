import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'
import styles from '@/styles/Modal.module.css'

export default function ImageUploadModal({ onClose }) {
  const [isBrowser, setIsBrowser] = useState(false)
  const [src, setSrc] = useState()
  const [blob, setBlob] = useState(null)

  useEffect(() => setIsBrowser(true))

  useEffect(() => {
    if (blob !== null) {
      const reader = new FileReader()
      reader.onload = function (e) {
        setSrc(e.target.result)
      }
      reader.readAsDataURL(blob)
    }
  }, [blob])

  useEffect(() => {
    window.addEventListener('paste', pasteHandler)
  }, [])

  const uploadToServer = async () => {
    const body = new FormData()
    body.append('file', blob)
    await fetch('/api/upload', {
      method: 'POST',
      body,
    })
  }

  const pasteHandler = (e) => {
    const { items } = e.clipboardData || e.originalEvent.clipboardData
    setBlob(items[0].getAsFile())
  }

  const handleClose = (e) => {
    e.preventDefault()
    onClose()
  }

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
            <h1>Upload Image</h1>
            {src && <img src={src} alt="pic" />}
            <div className={styles.buttonContainer}>
              <button type="button" onClick={uploadToServer} className="btn">
                Upload Image
              </button>
              <button
                type="button"
                className="btn ghostButton"
                onClick={onClose}
              >
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
