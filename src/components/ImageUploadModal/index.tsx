import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { FaTimes } from 'react-icons/fa'
import styles from '@/styles/Modal.module.css'

export default function ImageUploadModal({ onClose }) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => setIsBrowser(true))

  const handleImageImput = (e) => {
    e.preventDefault()
    console.log('%c handleImageImput ', 'background: red; color: white')
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
            <form>
              <input type="file" onChange={handleImageImput} />
              <input type="submit" value="Submit" className="btn" />
            </form>

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
