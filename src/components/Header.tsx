import React from 'react'
// import React, { useContext } from 'react'
// import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import Link from 'next/link'
import Search from './Search'
// import AuthContext from '@/context/AuthContext'
import styles from '@/styles/Header.module.scss'

export default function Header() {
  // const { user, logout } = useContext(AuthContext)
  // console.log('%c user ', 'background: red; color: white', user)
  console.log('boom')

  return (
    <header className={styles.header}>
      <strong>
        ADMIN - Hey
        {/* {user ? (
          <React.Fragment>&nbsp;&nbsp;{user.username}</React.Fragment>
        ) : null} */}
      </strong>
      <div className={styles.logo}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/cams">
              <a>Cams</a>
            </Link>
          </li>
          {/* {user ? (
            // If logged in
            <React.Fragment>
              <li>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <Link href="/cams/add">
                  <a>Add</a>
                </Link>
              </li>
              <li>
                <button
                  onClick={() => logout()}
                  className="btn-secondary btn-icon"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </React.Fragment>
          ) : (
            // If logged out
            <React.Fragment>
              <li>
                <Link href="/account/login">
                  <a className="btn-secondary btn-icon">
                    <FaSignInAlt /> Login
                  </a>
                </Link>
              </li>
            </React.Fragment>
          )} */}
        </ul>
      </nav>
    </header>
  )
}
