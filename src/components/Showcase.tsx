import React from 'react'
import styles from '@/styles/Showcase.module.scss'

export default function Showcase() {
  return (
    <div className={styles.showcase}>
      <div className={styles.container}>
        <span className={styles.logo}>My Beach Cams.com</span>
        <h3 className={styles.subHeading}>
          Live Webcams from Hawaii, Florida and California
        </h3>
      </div>
    </div>
  )
}
