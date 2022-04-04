import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { FaTimes } from 'react-icons/fa'
import styles from '@/styles/Modal.module.css'

export default function FlagModal({
  onClose,
  deleteCam,
  title,
  country,
  state,
  area,
  subarea,
}) {
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
            <h1>Flag Cam</h1>
            <p>
              Thanks for flagging the cam. The issue will be sent to our review
              team.
            </p>
            <p>
              Cam flagged: <strong>{title}</strong>
              <br />
              {subarea}, {area}, {state}, {country}
            </p>
            <br />
            <br />

            <div className={styles.buttonContainer}>
              <button type="button" onClick={deleteCam} className="btn">
                Flag Cam
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
