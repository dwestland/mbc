import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Layout from '@/components/Layout'
import styles from '@/styles/AddEditForm.module.scss'

export default function ContactPage({ cams }) {
  const initialState = {
    name: '',
    email: '',
    message: '',
  }

  const [values, setValues] = useState(initialState)

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
      toast.error('Something Went Wrong')
    } else {
      toast.success('Message sent')
      setValues(initialState)
    }
  }

  return (
    <Layout
      title="MyBeachCams.com - Contact Page"
      description="Please use this form to contact us"
    >
      {/* <div className="layout"></div> ??? */}
      <Toaster
        toastOptions={{
          style: {
            height: '60px',
            border: '1px solid lightgray',
            marginTop: '30vh',
          },
        }}
      />
      <h1>Contact Us</h1>

      <div className="content-and-ad" style={{ border: '1px solid red' }}>
        <div className="content">
          <h2>Please send us a message</h2>
          <form method="post" onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.grid}>
              <div>
                <label htmlFor="name">
                  Name
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="message">
                Message
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>

        <div className="ad">
          <div
            style={{
              background: 'lightblue',
              height: '100%',
              overflow: 'hidden',
              paddingLeft: '10px',
              width: '100%',
            }}
          >
            <h3>Adsense</h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}
