import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Footer.module.scss'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
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
