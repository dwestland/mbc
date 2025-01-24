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
  documentTitle = 'MyBeachCams - Webcams from around the World', // Default value
  documentDescription = 'Browse hundreds of beach cams and webcams from all over the world, including Hawaii, California, Florida and other travel destinations.', // Default value
  children,
  nofollow,
}): JSX.Element => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [envIndicator, setEnvIndicator] = useState<string | null>(null)

  // Set default props to avoid the ESLint error
  Layout.defaultProps = {
    nofollow: false,
  }

  // Use environment variable for SSR
  const shouldNofollow = process.env.NEXT_PUBLIC_NOFOLLOW === 'true'

  const { data: session } = useSession()

  useEffect(() => {
    // @ts-ignore
    if (session?.user.role === 'ADMIN') {
      setIsAdmin(true)
    }
  }, [session])

  useEffect(() => {
    const { host } = window.location
    if (host.includes('localhost')) {
      setEnvIndicator('LOCALHOST')
    } else if (host.includes('stage.mybeachcams.com')) {
      setEnvIndicator('STAGING')
    }
  }, [])

  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content={documentDescription} />
        {nofollow || shouldNofollow ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow" />
        )}
      </Head>
      <div className={styles.body}>
        <Navbar />
        <Showcase />
        {envIndicator ? (
          <span className={styles.environmentIndicator}>{envIndicator}</span>
        ) : (
          <span className={styles.environmentIndicator}>Loading...</span>
        )}
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

export default Layout
