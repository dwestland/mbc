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
              <span>Hawaii</span>
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
              <span>California</span>
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
              <span>Florida</span>
              <ul className="dropdown-menu dropdown-menu--animated">
                <li>
                  <Link href="/florida/">
                    <a>Florida</a>
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
            </li>
            <li className="dropdown">
              <span>United States</span>
              <ul className="dropdown-menu dropdown-menu--animated">
                <li>
                  <Link href="/florida/">
                    <a>USA</a>
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
            </li>
            <li className="dropdown">
              <span>World</span>
              <ul className="dropdown-menu dropdown-menu--animated">
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
                <li>
                  <Link href="/jamaica/">
                    <a>Jamaica</a>
                  </Link>
                </li>
                <li>
                  <Link href="/mexico/">
                    <a>Mexico</a>
                  </Link>
                </li>
                <li>
                  <Link href="/new-zealand/">
                    <a>New Zealand</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sint-maarten/">
                    <a>Sint Maarten</a>
                  </Link>
                </li>
                <li>
                  <Link href="/st-barts/">
                    <a>St. Barts</a>
                  </Link>
                </li>
                <li>
                  <Link href="/st-croix/">
                    <a>St. Croix</a>
                  </Link>
                </li>
                <li>
                  <Link href="thailand/">
                    <a>Thailand</a>
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
