import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import AdLarge from '@/components/AdLarge'
import CamsPageMap from '@/components/CamsPageMap'
import RenderStatesSections from '@/components/RenderStatesSections'
import data from '@/data/camLocationAreas'
import { findStates } from '@/utils/common'
import * as types from '@/utils/types'
import ErrorLoadingWebcams from '@/components/ErrorLoadingWebcams'

const CountryStatesPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'Dominican Republic'

  const pageSections = findStates(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((state: { state: string }) => state.state)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Webcams - MyBeachCams`}
      documentDescription={`Explore beach webcams from ${camPageTargetType} including ${
        pageSectionsArray.length === 1
          ? pageSectionsArray[0]
          : `${pageSectionsArray.slice(0, -1).join(', ')} and ${
              pageSectionsArray[pageSectionsArray.length - 1]
            }.`
      }`}
    >
      <div className="layout">
        <h1>{camPageTargetType} Webcams</h1>
        <h3 style={{ marginTop: '0' }}>
          Explore beach webcams from {camPageTargetType} including{' '}
          {pageSectionsArray.length === 1
            ? pageSectionsArray[0]
            : `${pageSectionsArray.slice(0, -1).join(', ')} and ${
                pageSectionsArray[pageSectionsArray.length - 1]
              }`}
        </h3>
        <div className="content-and-ad">
          <div className="content">
            <CamsPageMap cams={cams} />
          </div>
          <div className="ad">
            <AdLarge />
          </div>
        </div>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          {/* CUSTOMIZE PAGE 3 of 5 - Add opening text ~120 words */}
          <p>
            Experience the Dominican Republic's beaches and coastal allure
            through live webcams. Cabarete unveils stretches of white sand and
            crystal-clear waters, ideal for surfers and windsurfers. Bozo Beach
            and Playa Blanca beckon with vibrant coral reefs and transparent
            seas. Punta Cana, perched on the eastern tip, entices with a blend
            of Caribbean and Atlantic waters. Wander Monte Cristi's hidden
            treasures, or witness the bustling energy of Boca Chica's ports.
            These webcams transport you to the heart of the action, whether
            you're plotting an escape or just wandering from afar.
          </p>
        </ShowMoreText>

        <RenderStatesSections pageSections={pageSections ?? []} cams={cams} />

        <ShowMoreText
          lines={4}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          {/* CUSTOMIZE PAGE 4 of 5 - Add second text ~300 words, */}
          {/* Things to Do and Links and Info */}
          <p>
            The Dominican Republic's coastlines brim with endless wonders. In
            Cabarete, you'll encounter one of the world's premier spots for
            surfing. The wind sculpts the waves here, crafting perfect
            conditions for both novices and seasoned surfers. Cabarete Beach
            unfurls along the northern shore, with velvety sand and constant
            breezes. The beach town hums with life, offering savory cuisine and
            a taste of local culture.
          </p>
          <p>
            Further along, Bozo Beach dazzles with its immaculate coral reefs.
            The lively sea creatures beneath the surface are worth glimpsing
            from above or while snorkeling. The Bozo Beach cam captures the
            serene, azure waters, making it a must-see for water sports
            enthusiasts. Just nearby, the Playa Blanca underwater cam unveils a
            hidden realm of marine life. From radiant fish to vivid coral, it
            provides a portal into the breathtaking seabed of the Caribbean.
          </p>
          <p>
            Punta Cana, on the island's eastern edge, is a place where dreams
            converge. It's where the Caribbean Sea and Atlantic Ocean embrace.
            This area is renowned for its opulent resorts and unending
            beachfront vistas. The Hard Rock Hotel webcam offers a glimpse of
            the turquoise waters and expansive sandy shores.
          </p>
          <p>
            Monte Cristi's Buen Hombre Beach is a secluded treasure, offering
            tranquil shores for unwinding. It's also a paradise for
            kiteboarding. The gusty conditions make it ideal for thrill-seekers.
            The Buen Hombre cam delivers a live look at this untouched beach,
            far from the bustle of crowds.
          </p>
          <p>
            Lastly, the bustling port of Boca Chica showcases another facet of
            the island. The port webcams capture the daily rhythm of life,
            offering views of trucks and ships. Whether you crave peace or
            excitement, these webcams steer your journey through the Dominican
            Republic's varied coastlines.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Relax on the white sands of Cabarete Beach.</li>
              <li>Kiteboard at Buen Hombre Beach.</li>
              <li>Snorkel over coral reefs at Bozo Beach.</li>
              <li>Dive into the underwater world of Playa Blanca.</li>
              <li>Swim in the turquoise waters of Punta Cana.</li>
              <li>Surf the waves at Cabarete's famous breaks.</li>
              <li>Paddleboard along the coast of Sosúa.</li>
              <li>Explore the mangroves near Monte Cristi.</li>
              <li>Visit the port at Boca Chica for local sights.</li>
              <li>Sail along the coastline of the Samana Peninsula.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/19.75,-70.41"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cabarete Weather
                </a>{' '}
                - Check real-time weather for Cabarete Beach.
              </li>
              <li>
                <a
                  href="https://www.dominicanrepublic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dominican Republic Travel
                </a>{' '}
                - Explore travel tips, guides, and local insights.
              </li>
              <li>
                <a
                  href="https://www.godominicanrepublic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go Dominican Republic
                </a>{' '}
                - Discover top destinations and things to do across the island.
              </li>
              <li>
                <a
                  href="https://www.puntacanainternationalairport.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Punta Cana International Airport
                </a>{' '}
                - Find flight info and services at Punta Cana Airport.
              </li>
              <li>
                <a
                  href="https://www.godivebayahibe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go Dive Bayahibe
                </a>{' '}
                - Explore diving tours and spots in Bayahibe.
              </li>
              <li>
                <a
                  href="https://www.caribefuntours.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Caribe Fun Tours
                </a>{' '}
                - Book tours and adventures across the Dominican Republic.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="legend">
        <span className="green-dot">&nbsp;</span>MyBeachCams hosted page
      </p>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<
  types.CamsPageProps2
> = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams-all`)

    if (!res.ok) {
      throw new Error(`Failed to fetch, status: ${res.status}`)
    }

    let cams: types.Cams[] = await res.json()

    if (!Array.isArray(cams) || cams.length === 0) {
      throw new Error('Cams object is not valid or empty')
    }

    // CUSTOMIZE PAGE 5 of 5 - Add camPageTargetType
    cams = cams.filter((cam) => cam.country === 'Dominican Republic')

    return {
      props: {
        cams,
      },
    }
  } catch (error: any) {
    console.error('Error fetching cams:', error)
    return {
      props: {
        cams: [],
        error: error.message || 'An error occurred',
      },
    }
  }
}

export default CountryStatesPage
