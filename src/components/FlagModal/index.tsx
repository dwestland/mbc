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

  const handleOnSubmit = () => {
    console.log('%c handleOnSubmit ', 'background: red; color: white')
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
            <form
              method="post"
              onSubmit={handleOnSubmit}
              className={styles.form}
            >
              <p>What's wrong?</p>
              {/* <div>
  <input type="radio" id="huey" name="drone" value="huey"
         checked>
  <label for="huey">Huey</label>
</div>

<div>
  <input type="radio" id="dewey" name="drone" value="dewey">
  <label for="dewey">Dewey</label>
</div>

<div>
  <input type="radio" id="louie" name="drone" value="louie">
  <label for="louie">Louie</label>
</div> */}

              <div className={styles.grid}>
                <div>
                  <label htmlFor="description">
                    <textarea name="description" />
                  </label>
                </div>
                Optional:
                <div>
                  <label htmlFor="name">
                    Name
                    <input type="text" name="name" />
                  </label>
                </div>
                <div>
                  <label htmlFor="email">
                    Email
                    <input type="email" name="email" />
                  </label>
                </div>
              </div>

              <button type="submit" className="btn">
                Submit
              </button>
            </form>
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
