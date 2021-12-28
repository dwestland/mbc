import React, { FC, useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import Head from 'next/head'
// import { useRouter } from 'next/router'
import Navbar from './Navbar'
import AdminNav from './AdminNav'
import Footer from './Footer'
import Showcase from './Showcase'
import styles from '@/styles/Layout.module.scss'

interface LayoutProps {
  title: string
  description: string
  children: any
}

const Layout: FC<LayoutProps> = ({
  title,
  description,
  children,
}): JSX.Element => {
  const [isAdmin, setIsAdmin] = useState(false)

  const [session] = useSession()

  useEffect(() => {
    if (session?.role === 'ADMIN') {
      setIsAdmin(true)
    }
  }, [])

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className={styles.body}>
        <Navbar />

        <Showcase />
        <div className={styles.container}>
          {isAdmin && <AdminNav />}
          {children}
        </div>

        <Footer />
      </div>
    </div>
  )
}

// {router.pathname === '/' && <Showcase />}

// Layout.defaultProps = {
//   title: 'MyBeachCams.com - Webcams of Hawaii, Florida and California',
//   description:
//     'Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale',
// }

export default Layout
