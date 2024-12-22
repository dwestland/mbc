import React, { FC, useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import LoginLogout from '@/components/LoginLogout'
import Search from '@/components/Search'
import styles from '@/styles/Layout.module.scss'
import Navbar from './Navbar'
import Showcase from './Showcase'
import AdminNav from './AdminNav'
import Footer from './Footer'

interface LayoutProps {
  documentTitle: string
  documentDescription: string
  children: any
  nofollow?: boolean // nofollow prop is optional
}

const Layout: FC<LayoutProps> = ({
  documentTitle = 'MyBeachCams - Beach Webcams from around the World', // Default value
  documentDescription = 'Browse hundreds of beach webcams from all over the world, including Hawaii, California, Florida and other travel destinations.', // Default value
  children,
  nofollow,
}): JSX.Element => {
  const [isAdmin, setIsAdmin] = useState(false)

  const { data: session } = useSession()

  useEffect(() => {
    // @ts-ignore
    if (session?.user.role === 'ADMIN') {
      setIsAdmin(true)
    }
  }, [session])

  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content={documentDescription} />
        {nofollow ||
        (typeof window !== 'undefined' &&
          window.location.hostname === 'stage.mybeachcams.com') ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow" />
        )}
      </Head>
      <div className={styles.body}>
        <Navbar />
        <Showcase />
        <div className={styles.secondaryNav}>
          {/* <LoginLogout /> */}
          {router.pathname === '/login' ? <LoginLogout /> : <div>&nbsp;</div>}
          <Search />
        </div>
        <div className={styles.container}>
          {isAdmin && <AdminNav />}
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

// Set default props to avoid the ESLint error
Layout.defaultProps = {
  nofollow: false,
}

export default Layout
