import React, { FC, useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
// import { useRouter } from 'next/router'
import LoginLogout from '@/components/LoginLogout'
import Search from '@/components/Search'
import styles from '@/styles/Layout.module.scss'
// import FlagModal from '@/components/FlagModal'
import Navbar from './Navbar'
import Showcase from './Showcase'
import AdminNav from './AdminNav'
import Footer from './Footer'

interface LayoutProps {
  documentTitle: string
  documentDescription: string
  children: any
}

const Layout: FC<LayoutProps> = ({
  documentTitle,
  documentDescription,
  children,
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
          <div className="layout">
            {/* <h1>{pageHeading}</h1> */}

            {children}

            {/* 
            {showFlagModal && (
              <FlagModal
                onClose={() => setShowFlagModal(false)}
                id={id}
                title={title}
                country={country}
                state={state}
                area={area}
                subarea={subarea}
              />
            )} */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

// Layout.defaultProps = {
//   title: 'MyBeachCams.com - Webcams of Hawaii, Florida and California',
//   description:
//     'Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale',
// }

export default Layout
