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
import TempBanner from './TempBanner'
import SocialIcons from './SocialIcons'

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
    } else if (host.includes('vercel.app')) {
      setEnvIndicator('VERCEL DOMAIN')
    } else {
      setEnvIndicator(null) // Show nothing if not localhost or stage
    }
  }, [])

  const router = useRouter()

  // TODO: Add Amin controls and database API
  // const bannerMessage =
  //   'Welcome to the new MyBeachCams redesign! Enjoy our live webcams.'
  const bannerMessage = ''

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
        <TempBanner message={bannerMessage} />
        {envIndicator && (
          <span className={styles.environmentIndicator}>{envIndicator}</span>
        )}
        <div className={styles.secondaryNav}>
          <div className={styles.leftNav}>
            {/* <LoginLogout /> */}
            {router.pathname === '/login' ? <LoginLogout /> : <div>&nbsp;</div>}
            <SocialIcons />
          </div>
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
