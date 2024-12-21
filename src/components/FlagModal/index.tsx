import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import toast, { Toaster } from 'react-hot-toast'
import { FaTimes } from 'react-icons/fa'
import styles from '@/styles/Modal.module.scss'

interface Props {
  onClose: () => void
  id: number
  title: string
  country: string
  state: string
  area: string
  subarea: string
}

export default function FlagModal({
  onClose,
  id,
  title,
  country,
  state,
  area,
  subarea,
}: Props) {
  const initialState = {
    name: '',
    email: '',
    message: '',
    type: '',
    id,
    title,
    country,
    state,
    area,
    subarea,
  }
  const [isBrowser, setIsBrowser] = useState(false)
  const [values, setValues] = useState(initialState)

  useEffect(() => setIsBrowser(true), [])

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validation
    if (
      (values.type !== 'Broken Link' &&
        values.type !== 'Cam Down' &&
        values.type !== 'Other' &&
        values.message === '') ||
      (values.type === 'Other' && values.message === '')
    ) {
      toast.error("Please tell us what's wrong")
      return null
    }

    const res = await fetch('/api/flag', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      toast.error('Something Went Wrong')
    } else {
      setValues(initialState)
      onClose()
    }
    return null
  }

  const handleClose = () => {
    onClose()
  }

  const modalContent = (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <Toaster
          toastOptions={{
            style: {
              height: '60px',
              border: '1px solid lightgray',
              marginTop: '45vh',
            },
          }}
        />
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
            <form method="post" onSubmit={handleSubmit} className={styles.form}>
              <h3 style={{ marginTop: '0' }}>
                Flag: <strong>{title}</strong>
              </h3>
              <p>
                {subarea} {area} {state} {country}
              </p>
              <p>
                <strong>What's wrong?</strong>
              </p>
              <div className={styles.radioButtons}>
                <div className={styles.radio}>
                  <label htmlFor="cam-down">
                    <input
                      type="radio"
                      name="type"
                      value="Cam Down"
                      checked={values.type === 'Cam Down'}
                      onChange={handleInputChange}
                    />
                    &nbsp;Cam Down
                  </label>
                </div>
                <div className={styles.radio}>
                  <label htmlFor="broken-link">
                    <input
                      type="radio"
                      name="type"
                      value="Broken Link"
                      checked={values.type === 'Broken Link'}
                      onChange={handleInputChange}
                    />
                    &nbsp;Broken Link
                  </label>
                </div>
                <div className={styles.radio}>
                  <label htmlFor="other">
                    <input
                      type="radio"
                      name="type"
                      value="Other"
                      checked={values.type === 'Other'}
                      onChange={handleInputChange}
                    />
                    &nbsp;Other
                  </label>
                </div>
              </div>
              <div className={styles.grid}>
                <div>
                  <label htmlFor="message">
                    <textarea
                      placeholder="Message"
                      name="message"
                      id="message"
                      value={values.message}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                Optional:
                <div className={styles.twoColumns}>
                  <label htmlFor="name" className={styles.leftColumn}>
                    Name
                    <input
                      placeholder="Name"
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleInputChange}
                    />
                  </label>

                  <label htmlFor="email" className={styles.rightColumn}>
                    Email
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </div>
              <br />
              <div className={styles.buttonContainer}>
                <button type="submit" className="btn">
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
            </form>
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
