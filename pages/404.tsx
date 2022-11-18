import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.scss'
import { relative } from 'path'

export default function NotFoundPage() {
  return (
    <Layout
      documentTitle="Page Not Found"
      documentDescription="404 error, page not found"
    >
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle className={styles.icon} />
          &nbsp;&nbsp; Page not Found
        </h1>
        <h4>404 Error</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  )
}
