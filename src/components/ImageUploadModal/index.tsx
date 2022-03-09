import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Image from 'next/image'
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
            <Image
              src="/images/no-image.jpg"
              alt="no image"
              width="400"
              height="300"
            />
            <form>
              <label>
                <input type="file" onChange={handleImageImput} />
              </label>
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
