import React from 'react'
import Link from 'next/link'
import styles from '@/styles/AdminNav.module.scss'

export default function AdminNav() {
  return (
    <div className={styles.adminNav}>
      <strong>ADMIN</strong>
      <ul>
        <li>
          <Link href="/hidden">Hidden Cams</Link>
        </li>
        <li>
          <Link href="/youtube">YouTube Cams</Link>
        </li>
        <li>
          <Link href="/webcam/USA/California/Los-Angeles/youtube-test">
            YouTube Test
          </Link>
        </li>
        <li>
          <Link href="/login">Log Out Page</Link>
        </li>
      </ul>
      <Link href="/cams/add">
        <a className="link-as-button">Add Cam</a>
      </Link>
    </div>
  )
}
