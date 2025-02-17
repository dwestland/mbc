import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Resizer from 'react-image-file-resizer'
import { FaTimes } from 'react-icons/fa'
import styles from '@/styles/Modal.module.scss'
import { slugify, getSixDigitRandom } from '@/utils/common'

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
  const [blob, setBlob] = useState<Blob | null>(null)

  useEffect(() => setIsBrowser(true), [])

  useEffect(() => {
    if (blob !== null) {
      const reader = new FileReader()
      reader.onload = (e: any) => {
        setSrc(e.target.result)
      }
      reader.readAsDataURL(blob)
    }
  }, [blob])

  const resizeFile = (file: any) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        400,
        300,
        'JPEG',
        65,
        0,
        (uri) => {
          resolve(uri as Blob)
        },
        'blob',
        400,
        300
      )
    })
  useEffect(() => {
    const pasteHandler = async (e: Event) => {
      const clipboardEvent = e as ClipboardEvent
      const { clipboardData } = clipboardEvent
      if (!clipboardData) {
        return
      }
      const { items } = clipboardData
      const imageData = items[0].getAsFile()
      if (!imageData) {
        return
      }
      const resizedImage = await resizeFile(imageData)
      setBlob(resizedImage as Blob)
    }
    window.addEventListener('paste', pasteHandler)
    return () => {
      window.removeEventListener('paste', pasteHandler)
    }
  }, [])

  const handleClose = () => {
    onClose()
  }

  const uploadToServer = async () => {
    const body = new FormData()

    if (!blob) return

    const slugifiedTitle = slugify(title)
    const randomSixDigit = getSixDigitRandom()
    const filename = `${slugifiedTitle}-${randomSixDigit}.jpg`

    body.append('file', blob, filename)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body,
      })

      if (response.ok) {
        // Only update the image name and close modal after successful upload
        handleImageNameChange(filename)
        handleClose()
      } else {
        console.error('Upload failed:', await response.text())
      }
    } catch (err) {
      console.error('Upload error:', err)
    }
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
    const modalRoot = document.getElementById('modal-root')
    if (modalRoot) {
      return ReactDOM.createPortal(modalContent, modalRoot)
    }
    return null
  }

  return null
}

// Modal component with Next.js:
// https://devrecipes.net/modal-component-with-next-js/
