import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import toast, { Toaster } from 'react-hot-toast'
import { FaTimes } from 'react-icons/fa'
import styles from '@/styles/Modal.module.css'

export default function FlagModal({
  onClose,
  title,
  country,
  state,
  area,
  subarea,
}) {
  const initialState = {
    name: '',
    email: '',
    message: '',
  }
  const [isBrowser, setIsBrowser] = useState(false)
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [values, setValues] = useState(initialState)

  useEffect(() => setIsBrowser(true))

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    )

    if (hasEmptyFields) {
      toast.error('Please fill in all fields')
      return null
    }

    const res = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      // if (res.status === 403 || res.status === 401) {
      //   toast.error('No token included')
      //   return
      // }
      toast.error('Something Went Wrong')
    } else {
      toast.success('Message sent')
      setValues(initialState)

      const cam = await res.json() // ???
    }
  }

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
              {/* TODO: Submit to SendGrid */}

              <div className="radio">
                What's wrong?
                <br />
                <label htmlFor="cam-down">
                  <input
                    type="radio"
                    id="cam-down"
                    value="description"
                    checked={description === 'Cam Down'}
                    onClick={() => setDescription('Cam Down')}
                  />
                  &nbsp;Cam Down
                </label>
              </div>
              <div className="radio">
                <label htmlFor="broken-link">
                  <input
                    type="radio"
                    id="broken-link"
                    value="description"
                    checked={description === 'Broken Link'}
                    onClick={() => setDescription('Broken Link')}
                  />
                  &nbsp;Broken Link
                </label>
              </div>
              <div className="radio">
                <label htmlFor="other">
                  <input
                    type="radio"
                    id="other"
                    value="description"
                    checked={description === 'Other'}
                    onClick={() => setDescription('Other')}
                  />
                  &nbsp;Other
                </label>
              </div>

              <div className={styles.grid}>
                <div>
                  <label htmlFor="message">
                    <textarea
                      placeholder="Message"
                      name="message"
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </label>
                </div>
                Optional:
                <div>
                  <label htmlFor="name">
                    Name
                    <input
                      placeholder="Name"
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="email">
                    Email
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
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
              <button type="button" className="btn">
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
