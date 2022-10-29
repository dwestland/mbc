/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <Link href="/">
            <a>My Beach Cams.com</a>
          </Link>
        </div>
        <div className="menu-wrapper">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon" />
          </label>
          <ul className="menu">
            <li className="dropdown">
              <span>Hawaii Webcams</span>
              <ul className="dropdown-menu dropdown-menu--animated">
                <li>
                  <Link href="/hawaii/">
                    <a>Hawaii</a>
                  </Link>
                </li>
                <li>
                  <Link href="/hawaii/kauai/">
                    <a>Kauai</a>
                  </Link>
                </li>
                <li>
                  <Link href="/hawaii/oahu/">
                    <a>Oahu</a>
                  </Link>
                </li>
                <li>
                  <Link href="/hawaii/maui/">
                    <a>Maui</a>
                  </Link>
                </li>
                <li>
                  <Link href="/hawaii/bigisland/">
                    <a>Big Island</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <span>California Webcams</span>
              <ul className="dropdown-menu dropdown-menu--animated">
                <li>
                  <Link href="/california/">
                    <a>California</a>
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
            </li>
            <li className="dropdown">
              <span>Florida Webcams</span>
              <ul className="dropdown-menu dropdown-menu--animated">
                <li>
                  <Link href="/florida/">
                    <a>Florida</a>
                  </Link>
                </li>
                <li>
                  <Link href="/florida/panhandle/">
                    <a>Pan Handel</a>
                  </Link>
                </li>
                <li>
                  <Link href="/florida/northeast/">
                    <a>Northeast</a>
                  </Link>
                </li>
                <li>
                  <Link href="/florida/east-central/">
                    <a>East Central</a>
                  </Link>
                </li>
                <li>
                  <Link href="/florida/miami/">
                    <a>Miami Beach</a>
                  </Link>
                </li>
                <li>
                  <Link href="/florida/southeast-keys/">
                    <a>Southeast &amp; The Keys</a>
                  </Link>
                </li>
                <li>
                  <Link href="/florida/gulf-coast/">
                    <a>Gulf Coast</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
