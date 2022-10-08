import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
// import Resizer from 'react-image-file-resizer'
import { FaTimes } from 'react-icons/fa'
// import { slugify, getSixDigitRandom } from '@/utils/formUtils'
import styles from '@/styles/Modal.module.scss'

interface Props {
  onClose: () => void
  deleteCam: () => void
  title: string
}

export default function ImageUploadModal({ onClose, deleteCam, title }: Props) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => setIsBrowser(true))

  const handleClose = () => {
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
            <h1>Delete Cam</h1>
            <h3>
              Are you sure you want to delete:
              <br />
              <strong>{title}</strong>?
            </h3>
            <br />
            <br />

            <div className={styles.buttonContainer}>
              <button type="button" onClick={deleteCam} className="btn">
                Delete Cam
              </button>
              <button
                type="button"
                className="btn ghostButton"
                onClick={onClose}
              >
                Cancel
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
