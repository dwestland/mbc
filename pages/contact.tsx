import React from 'react'
import Layout from '@/components/Layout'
import styles from '@/styles/Form.module.scss'

export default function ContactPage({ cams }) {
  async function handleOnSubmit(e) {
    e.preventDefault()
    const formData = {}
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return
      formData[field.name] = field.value
    })
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData),
    })
    console.log('%c formData ', 'background: red; color: white', formData)
  }

  return (
    <Layout
      title="MyBeachCams.com - Contact Page"
      description="Please use this form to contact us"
    >
      <h1>Contact Us</h1>
      <h2>Please send us a message</h2>
      <form method="post" onSubmit={handleOnSubmit} className={styles.form}>
        <div className={styles.grid}>
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
        <div>
          <label htmlFor="message">
            Message
            <textarea name="message" />
          </label>
        </div>
        <button className="btn">Submit</button>
      </form>
    </Layout>
  )
}
