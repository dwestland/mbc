import React from 'react'
import styles from '@/styles/Modal.module.css'

function MyCustomModal() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('%c handlSubmit ', 'background: red; color: white')
  }

  const handleFileChange = (e) => {
    e.preventDefault()
    console.log('%c handleFileChange ', 'background: red; color: white')
  }

  return (
    <div className={styles.form}>
      <h1>MyCustomModal</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div className="buttonContainer">
          <input type="submit" value="Submit" className="btn" />
          <button
            type="button"
            className="btn ghostButton"
            onClick={handleSubmit}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default MyCustomModal
