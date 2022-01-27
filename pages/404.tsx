import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.scss'

export default function NotFoundPage() {
  console.log('boom')

  return (
    <Layout title="Page Not Found" description="404 error, page not found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> Page not Found
        </h1>
        <h4>404 Error</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  )
}
