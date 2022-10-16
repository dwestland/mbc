import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Resizer from 'react-image-file-resizer'
import { FaTimes } from 'react-icons/fa'
import styles from '@/styles/Modal.module.scss'
import { slugify, getSixDigitRandom } from '@/utils/commonUtils'

interface Props {
  onClose: () => void
  title: string
  handleImageNameChange: any
}

export default function ImageUploadModal({
  onClose,
  title,
  handleImageNameChange,
}: Props) {
  const [isBrowser, setIsBrowser] = useState(false)
  const [src, setSrc] = useState()
  const [blob, setBlob] = useState(null)

  useEffect(() => setIsBrowser(true))

  useEffect(() => {
    if (blob !== null) {
      const reader = new FileReader()
      reader.onload = (e: any) => {
        setSrc(e.target.result)
      }
      reader.readAsDataURL(blob)
    }
  }, [blob])

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        400,
        300,
        'JPEG',
        65,
        0,
        (uri) => {
          resolve(uri)
        },
        'blob',
        400,
        300
      )
    })
  const pasteHandler = async (e) => {
    const { items } = e.clipboardData || e.originalEvent.clipboardData
    const imageData = items[0].getAsFile()
    if (!imageData) {
      return
    }
    const resizedImage = await resizeFile(imageData)
    setBlob(resizedImage)
  }

  useEffect(() => {
    window.addEventListener('paste', pasteHandler)
  }, [])

  const handleClose = () => {
    onClose()
  }

  const uploadToServer = () => {
    const body = new FormData()

    // Create unique descriptive title
    const slugifiedTitle = slugify(title)
    const randomSixDigit = getSixDigitRandom()
    const filename = `${slugifiedTitle}-${randomSixDigit}.jpg`
    handleImageNameChange(filename)

    if (!blob) {
      return
    }

    body.append('file', blob, filename)
    fetch('/api/upload', {
      method: 'POST',
      body,
    })

    handleClose()
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

            {src ? (
              <div className={styles.imageContainer}>
                <img src={src} alt="Pic from clipboard" />
              </div>
            ) : (
              <div className={styles.uploadInfo}>
                <div>
                  <p>
                    Mac: Use ctl + 4 + cmd + shift for cross-hairs to copy image
                    to clipboard
                  </p>
                  <p>Click here and paste from clipboard</p>
                  <p>
                    Retina screen users will produce image at twice the size as
                    on website
                  </p>
                </div>
              </div>
            )}
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
