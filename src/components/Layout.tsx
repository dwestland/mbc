import React, { FC, useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
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
  documentTitle,
  documentDescription,
  children,
  nofollow,
}): JSX.Element => {
  const [isAdmin, setIsAdmin] = useState(false)

  const title = documentTitle
  const description = documentDescription

  const { data: session } = useSession()

  useEffect(() => {
    // @ts-ignore
    if (session?.user.role === 'ADMIN') {
      setIsAdmin(true)
    }
  }, [session])

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {nofollow ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow" />
        )}
      </Head>
      <div className={styles.body}>
        <Navbar />
        <Showcase />
        <div className={styles.secondaryNav}>
          <LoginLogout />
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
