import React from 'react'
import dynamic from 'next/dynamic'
import styles from '@/styles/Modal.module.css'

function MapModal() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('%c handlSubmit ', 'background: red; color: white')
  }

  const handleFileChange = (e) => {
    e.preventDefault()
    console.log('%c handleFileChange ', 'background: red; color: white')
  }

  const Map = dynamic(() => import('@/components/Map'), {
    ssr: false,
  })

  return (
    <div className={styles.form}>
      <h1>MapModal</h1>

      <Map />
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

export default MapModal
