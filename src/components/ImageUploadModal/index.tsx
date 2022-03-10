import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'
import styles from '@/styles/Modal.module.css'

export default function ImageUploadModal({ onClose }) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => setIsBrowser(true))

  // const handleImageImput = (e) => {
  //   e.preventDefault()
  //   console.log('%c handleImageImput ', 'background: red; color: white')
  // }

  const handleClose = (e) => {
    e.preventDefault()
    onClose()
  }

  const [src, setSrc] = useState()
  const [blob, setBlob] = useState(null)

  useEffect(() => setIsBrowser(true))

  const pasteHandler = (e) => {
    const { items } = e.clipboardData || e.originalEvent.clipboardData
    setBlob(items[0].getAsFile())
  }

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
            <button type="submit" onClick={uploadToServer}>
              Send to server
            </button>

            {/* <Image
              src="/images/no-image.jpg"
              alt="no image"
              width="400"
              height="300"
            /> */}
            <form>
              {/* <label>
                <input type="file" onChange={handleImageImput} />
              </label> */}
              <div className={styles.buttonContainer}>
                <input type="submit" value="Upload Image" className="btn" />
                <button
                  type="button"
                  className="btn ghostButton"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </form>
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
