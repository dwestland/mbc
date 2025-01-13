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
              <Link href="/hawaii/">
                <a>Hawaii Webcams</a>
              </Link>
            </li>
            <li>
              <Link href="/hawaii/kauai/">
                <a>Kauai Island</a>
              </Link>
            </li>
            <li>
              <Link href="/hawaii/oahu/">
                <a>Oahu Island</a>
              </Link>
            </li>
            <li>
              <Link href="/hawaii/maui/">
                <a>Maui Island</a>
              </Link>
            </li>
            <li>
              <Link href="/hawaii/bigisland/">
                <a>Big Island</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/florida/">
                <a>Florida Webcams</a>
              </Link>
            </li>
            <li>
              <Link href="/florida/miami/">
                <a>Miami Beach</a>
              </Link>
            </li>
            <li>
              <Link href="/florida/florida-keys/">
                <a>Florida Keys</a>
              </Link>
            </li>
            <li>
              <Link href="/florida/gulf-coast/">
                <a>Gulf Coast</a>
              </Link>
            </li>
            <li>
              <Link href="/florida/east-central/">
                <a>East Central</a>
              </Link>
            </li>
            <li>
              <Link href="/florida/panhandle/">
                <a>Panhandle</a>
              </Link>
            </li>
            <li>
              <Link href="/florida/northeast/">
                <a>Northeast</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/california/">
                <a>California Webcams</a>
              </Link>
            </li>
            <li>
              <Link href="/california/san-diego/">
                <a>San Diego</a>
              </Link>
            </li>
            <li>
              <Link href="/california/los-angeles/">
                <a>Los Angeles</a>
              </Link>
            </li>
            <li>
              <Link href="/california/central-coast/">
                <a>Central Coast</a>
              </Link>
            </li>
            <li>
              <Link href="/california/san-francisco/">
                <a>San Francisco</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/usa/">
                <a>United States</a>
              </Link>
            </li>
            <li>
              <Link href="/alabama/">
                <a>Alabama</a>
              </Link>
            </li>
            <li>
              <Link href="/connecticut/">
                <a>Connecticut</a>
              </Link>
            </li>
            <li>
              <Link href="/delaware/">
                <a>Delaware</a>
              </Link>
            </li>
            <li>
              <Link href="/georgia/">
                <a>Georgia</a>
              </Link>
            </li>
            <li>
              <Link href="/louisiana/">
                <a>Louisiana</a>
              </Link>
            </li>
            <li>
              <Link href="/maine/">
                <a>Maine</a>
              </Link>
            </li>
            <li>
              <Link href="/maryland/">
                <a>Maryland</a>
              </Link>
            </li>
            <li>
              <Link href="/massachusetts/">
                <a>Massachusetts</a>
              </Link>
            </li>
            <li>
              <Link href="/mississippi/">
                <a>Mississippi</a>
              </Link>
            </li>
            <li>
              <Link href="/new-hampshire/">
                <a>New Hampshire</a>
              </Link>
            </li>
            <li>
              <Link href="/new-jersey/">
                <a>New Jersey</a>
              </Link>
            </li>
            <li>
              <Link href="/new-york/">
                <a>New York</a>
              </Link>
            </li>
            <li>
              <Link href="/north-carolina/">
                <a>North Carolina</a>
              </Link>
            </li>
            <li>
              <Link href="/oregon/">
                <a>Oregon</a>
              </Link>
            </li>
            <li>
              <Link href="/rhode-island/">
                <a>Rhode Island</a>
              </Link>
            </li>
            <li>
              <Link href="/south-carolina/">
                <a>South Carolina</a>
              </Link>
            </li>
            <li>
              <Link href="/texas/">
                <a>Texas</a>
              </Link>
            </li>
            <li>
              <Link href="/washington/">
                <a>Washington</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/world/">
                <a>World</a>
              </Link>
            </li>
            <li>
              <Link href="/aruba/">
                <a>Aruba</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/bali/">
                <a>Bali</a>
              </Link>
            </li> */}
            <li>
              <Link href="/bermuda/">
                <a>Bermuda</a>
              </Link>
            </li>
            <li>
              <Link href="/bonaire/">
                <a>Bonaire</a>
              </Link>
            </li>
            <li>
              <Link href="/curacao/">
                <a>Curacao</a>
              </Link>
            </li>
            <li>
              <Link href="/dominican-republic/">
                <a>Dominican Republic</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/greece/">
                <a>Greece</a>
              </Link>
            </li> */}
            {/* <li>
              <Link href="/italy/">
                <a>Italy</a>
              </Link>
            </li> */}
            <li>
              <Link href="/jamaica/">
                <a>Jamaica</a>
              </Link>
            </li>
            <li>
              <Link href="/japan/">
                <a>Japan</a>
              </Link>
            </li>
            <li>
              <Link href="/mexico/">
                <a>Mexico</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/netherlands/">
                <a>Netherlands</a>
              </Link>
            </li> */}
            <li>
              <Link href="/new-zealand/">
                <a>New Zealand</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/portugal/">
                <a>Portugal</a>
              </Link>
            </li> */}
            <li>
              <Link href="/sint-maarten/">
                <a>Sint Maarten</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/spain/">
                <a>Spain</a>
              </Link>
            </li> */}
            <li>
              <Link href="/st-barts/">
                <a>St. Barts</a>
              </Link>
            </li>
            <li>
              <Link href="/taiwan/">
                <a>Taiwan</a>
              </Link>
            </li>
            <li>
              <Link href="/thailand/">
                <a>Thailand</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p>Copyright &copy; 2005-{year} MyBeachCams.com</p>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link href="/privacy-policy">
          <a>Privacy Policy</a>
        </Link>
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </p>
      <p style={{ fontSize: 'small' }}>
        Information on this website is deemed reliable but not guaranteed.
        MyBeachCams.com is not responsible for data from external sources.
      </p>
    </footer>
  )
}

export default Footer
