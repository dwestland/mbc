import React from 'react'
import styles from '@/styles/Showcase.module.scss'

export default function Showcase() {
  return (
    <div className={styles.showcase}>
      <div className={styles.container}>
        <span className={styles.logo}>MyBeachCams.com</span>
        <span className={styles.subHeading}>
          Webcams from Hawaii, Florida, California and Around the World
        </span>
      </div>
    </div>
  )
}
