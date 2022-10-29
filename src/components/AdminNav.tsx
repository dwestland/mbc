import React from 'react'
import Link from 'next/link'
import styles from '@/styles/AdminNav.module.scss'

export default function AdminNav() {
  return (
    <div className={styles.adminNav}>
      <strong>ADMIN</strong>
      <Link href="/cams/add">
        <a className="link-as-button">Add Cam</a>
      </Link>
    </div>
  )
}
