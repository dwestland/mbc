import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Footer.module.scss'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <hr />

      <div className={styles.siteMap}>
        <div>
          <ul>
            <li>
              <Link href="/hawaii/">Hawaii Beach Cams</Link>
            </li>
            <li>
              <Link href="/hawaii/kauai/">Kauai Island</Link>
            </li>
            <li>
              <Link href="/hawaii/oahu/">Oahu Island</Link>
            </li>
            <li>
              <Link href="/hawaii/maui/">Maui Island</Link>
            </li>
            <li>
              <Link href="/hawaii/bigisland/">Big Island</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/florida/">Florida Beach Cams</Link>
            </li>
            <li>
              <Link href="/florida/panhandle/">Pan Handel</Link>
            </li>
            <li>
              <Link href="/florida/northeast/">Northeast</Link>
            </li>
            <li>
              <Link href="/florida/east-central/">East Central</Link>
            </li>
            <li>
              <Link href="/florida/miami/">Miami Beach</Link>
            </li>
            <li>
              <Link href="/florida/southeast-keys/">
                Southeast &amp; The Keys
              </Link>
            </li>
            <li>
              <Link href="/florida/gulf-coast/">Gulf Coast</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/california/">California Beach Cams</Link>
            </li>
            <li>
              <Link href="/california/san-diego/">San Diego</Link>
            </li>
            <li>
              <Link href="/california/los-angeles/">Los Angeles</Link>
            </li>
            <li>
              <Link href="/california/central-coast/">Central Coast</Link>
            </li>
            <li>
              <Link href="/california/san-francisco/">San Francisco</Link>
            </li>
          </ul>
        </div>
      </div>
      <p>Copyright &copy; 2005-{year} MyBeachCams.com</p>
      <p>
        <Link href="/about">About</Link> &nbsp;&nbsp;&nbsp;
        <Link href="/privacy-policy">Privacy Policy</Link> &nbsp;&nbsp;&nbsp;
        <Link href="/contact">Contact Us</Link>
      </p>
    </footer>
  )
}

export default Footer
