import React from 'react'
// import React, { useContext } from 'react'
// import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import Link from 'next/link'
// import Search from './Search'
// import AuthContext from '@/context/AuthContext'
import styles from '@/styles/AdminNav.module.scss'

export default function AdminNav() {
  return (
    <div className={styles.adminNav}>
      <strong>ADMIN</strong>
      {/* <button type="button" className="btn">
        Add Cam
      </button> */}
      <Link href="/cams/add">
        <a className="link-as-button">Add Cam</a>
      </Link>
    </div>
  )
}
