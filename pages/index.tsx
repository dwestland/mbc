import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import * as types from '@/utils/types'
import ErrorLoadingWebcams from '@/components/ErrorLoadingWebcams'
import MoreWebcams from '@/components/MoreWebcams'
import MoreUSACams from '@/components/MoreUSACams'
import MoreHawaiiCams from '@/components/MoreHawaiiCams'
import MoreCaliforniaCams from '@/components/MoreCaliforniaCams'
import MoreFloridaCams from '@/components/MoreFloridaCams'
import AdLeaderboard from '@/components/AdLeaderboard'

const WorldPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  return (
    <Layout
      documentTitle="Best Webcams around the World"
      documentDescription="Browse hundreds of beach webcams from around the world"
    >
      <div className="layout">
        <div className="links-container">
          <ul>
            <li>
              <Link href="/hawaii">
                <a>Hawaii Webcams</a>
              </Link>
            </li>
            <li>
              <Link href="/california">
                <a>California Webcams</a>
              </Link>
            </li>
            <li>
              <Link href="/florida">
                <a>Florida Webcams</a>
              </Link>
            </li>
            <li>
              <Link href="/world">
                <a>World Webcams</a>
              </Link>
            </li>
          </ul>
        </div>

        <h2 style={{ marginTop: '10px' }}>MyBeachCams.com</h2>
        <h1 style={{ marginTop: '7px' }}>
          Live Webcams from Beaches around the World
        </h1>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            Welcome to MyBeachCams.com, your gateway to the world's most
            stunning beaches. Explore live webcams capturing scenic coastlines,
            bustling boardwalks, and serene ocean views. From Hawaii's volcanic
            cliffs and calm bays to California's dramatic Pacific shores,
            discover iconic destinations with every click.
          </p>
          <p>
            Plan your trip with Florida's sunny sands and turquoise waters as
            your guide. Marvel at vibrant sunsets or watch surfers ride the
            waves. Our collection spans over 800 webcams across Hawaii,
            California, Florida, and beyond, showcasing beaches from Aruba to
            Thailand. Whether checking the weather, finding inspiration for your
            next getaway, or simply enjoying the view, MyBeachCams.com connects
            you to the beauty of the world's waterways.
          </p>
        </ShowMoreText>
      </div>
      <div className="links-container">
        <ul>
          <li>
            <Link href="/aruba">
              <a>Aruba</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/bali">
              <a>Bali</a>
            </Link>
          </li> */}
          <li>
            <Link href="/bermuda">
              <a>Bermuda</a>
            </Link>
          </li>
          <li>
            <Link href="/bonaire">
              <a>Bonaire</a>
            </Link>
          </li>
          <li>
            <Link href="/curacao">
              <a>Curacao</a>
            </Link>
          </li>
          <li>
            <Link href="/dominican-republic">
              <a>Dominican Republic</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/greece">
              <a>Greece</a>
            </Link>
          </li> */}
          {/* <li>
            <Link href="/italy">
              <a>Italy</a>
            </Link>
          </li> */}
          <li>
            <Link href="/jamaica">
              <a>Jamaica</a>
            </Link>
          </li>
          <li>
            <Link href="/japan">
              <a>Japan</a>
            </Link>
          </li>
          <li>
            <Link href="/mexico">
              <a>Mexico</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/netherlands">
              <a>Netherlands</a>
            </Link>
          </li> */}
          <li>
            <Link href="/new-zealand">
              <a>New Zealand</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/portugal">
              <a>Portugal</a>
            </Link>
          </li> */}
          <li>
            <Link href="/sint-maarten">
              <a>Sint Maarten</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/spain">
              <a>Spain</a>
            </Link>
          </li> */}
          <li>
            <Link href="/st-barts">
              <a>St. Barts</a>
            </Link>
          </li>
          <li>
            <Link href="/taiwan">
              <a>Taiwan</a>
            </Link>
          </li>
          <li>
            <Link href="/thailand">
              <a>Thailand</a>
            </Link>
          </li>
          <li>
            <Link href="/usa">
              <a>United States</a>
            </Link>
          </li>
        </ul>
      </div>
      <MoreWebcams
        cams={{
          cams: cams.slice(0, 7),
        }}
      />
      <AdLeaderboard />

      <h2>
        <Link href="/hawaii"> US Webcams</Link>
      </h2>
      <div className="links-container">
        <ul>
          <li>
            <Link href="/alabama">Alabama</Link>
          </li>
          <li>
            <Link href="/california">California</Link>
          </li>
          <li>
            <Link href="/connecticut">Connecticut</Link>
          </li>
          <li>
            <Link href="/delaware">Delaware</Link>
          </li>
          <li>
            <Link href="/florida">Florida</Link>
          </li>
          <li>
            <Link href="/georgia">Georgia</Link>
          </li>
          <li>
            <Link href="/hawaii">Hawaii</Link>
          </li>
          <li>
            <Link href="/louisiana">Louisiana</Link>
          </li>
          <li>
            <Link href="/maine">Maine</Link>
          </li>
          <li>
            <Link href="/maryland">Maryland</Link>
          </li>
          <li>
            <Link href="/massachusetts">Massachusetts</Link>
          </li>
          <li>
            <Link href="/mississippi">Mississippi</Link>
          </li>
          <li>
            <Link href="/new-hampshire">New Hampshire</Link>
          </li>
          <li>
            <Link href="/new-jersey">New Jersey</Link>
          </li>
          <li>
            <Link href="/new-york">New York</Link>
          </li>
          <li>
            <Link href="/north-carolina">North Carolina</Link>
          </li>
          <li>
            <Link href="/oregon">Oregon</Link>
          </li>
          <li>
            <Link href="/rhode-island">Rhode Island</Link>
          </li>
          <li>
            <Link href="/south-carolina">South Carolina</Link>
          </li>
          <li>
            <Link href="/texas">Texas</Link>
          </li>
          <li>
            <Link href="/washington">Washington</Link>
          </li>
        </ul>
      </div>

      <MoreUSACams
        cams={{
          cams: cams
            .filter((cam) => cam.country === 'United States')
            .slice(0, 7),
        }}
      />
      <AdLeaderboard />

      <h2>
        <Link href="/hawaii">Hawaii Beach Cams</Link>
      </h2>
      <div className="links-container">
        <ul>
          <li>
            <Link href="/hawaii/kauai">
              <a>Kauai Island</a>
            </Link>
          </li>
          <li>
            <Link href="/hawaii/oahu">
              <a>Oahu Island</a>
            </Link>
          </li>
          <li>
            <Link href="/hawaii/maui">
              <a>Maui Island</a>
            </Link>
          </li>
          <li>
            <Link href="/hawaii/bigisland">
              <a>Big Island</a>
            </Link>
          </li>
        </ul>
      </div>
      <MoreHawaiiCams
        cams={{
          cams: cams.filter((cam) => cam.state === 'Hawaii').slice(0, 7),
        }}
      />
      <AdLeaderboard />

      <h2>
        <Link href="/california">California Beach Cams</Link>
      </h2>
      <div className="links-container">
        <ul>
          <li>
            <Link href="/california/san-diego">
              <a>San Diego</a>
            </Link>
          </li>
          <li>
            <Link href="/california/los-angeles">
              <a>Los Angeles</a>
            </Link>
          </li>
          <li>
            <Link href="/california/central-coast">
              <a>Central Coast</a>
            </Link>
          </li>
          <li>
            <Link href="/california/san-francisco">
              <a>San Francisco</a>
            </Link>
          </li>
        </ul>
      </div>
      <MoreCaliforniaCams
        cams={{
          cams: cams.filter((cam) => cam.state === 'California').slice(0, 7),
        }}
      />
      <AdLeaderboard />

      <h2>
        <Link href="/florida">Florida Beach Cams</Link>
      </h2>
      <div className="links-container">
        <ul>
          <li>
            <Link href="/florida/miami">
              <a>Miami Beach</a>
            </Link>
          </li>
          <li>
            <Link href="/florida/florida-keys">
              <a>Florida Keys</a>
            </Link>
          </li>
          <li>
            <Link href="/florida/gulf-coast">
              <a>Gulf Coast</a>
            </Link>
          </li>
          <li>
            <Link href="/florida/east-central">
              <a>East Central</a>
            </Link>
          </li>
          <li>
            <Link href="/florida/panhandle">
              <a>Panhandle</a>
            </Link>
          </li>
          <li>
            <Link href="/florida/northeast">
              <a>Northeast</a>
            </Link>
          </li>
        </ul>
      </div>
      <MoreFloridaCams
        cams={{
          cams: cams.filter((cam) => cam.state === 'Florida').slice(0, 7),
        }}
      />
      <AdLeaderboard />

      <ShowMoreText
        lines={4}
        more="show more"
        less="show less"
        anchorClass="anchorClass"
        truncatedEndingComponent="&nbsp;&nbsp;"
      >
        <p>
          MyBeachCams.com brings the world's most captivating shores to you.
          Dive into live streams from Hawaii's iconic beaches. Watch the waves
          at Waikiki or the calm waters of Poipu. Maui's golden sands and lush
          coastlines are just a click away.
        </p>
        <p>
          California offers a mix of rugged beauty and lively spots. See the
          cliffs of Big Sur or the sunny boardwalks of Venice Beach. Watch
          surfers at Pacifica or enjoy the serene views of Pismo Beach. Each cam
          captures the spirit of the Pacific Coast.
        </p>
        <p>
          Florida's beaches deliver endless variety. From the Florida Keys to
          the Panhandle, explore vibrant piers and quiet coves. The warm waters
          and tropical breezes make every moment special. Visit spots like
          Mallory Square or Sandestin Beach through our live feeds.
        </p>
        <p>
          Beyond the United States, discover exotic beaches worldwide. Aruba's
          turquoise waters, Thailand's serene bays, and St. Croix's tropical
          charm are all here. Each location offers a unique view of the world's
          oceans and waterways.
        </p>
        <p>
          Whether you seek travel ideas, local weather, or pure enjoyment,
          MyBeachCams.com is your connection. Explore our growing collection of
          webcams. Find your next destination and let the beauty of the water
          guide your plans.
        </p>
      </ShowMoreText>
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

    const cams: types.Cams[] = await res.json()

    if (!Array.isArray(cams) || cams.length === 0) {
      throw new Error('Cams object is not valid or empty')
    }

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

export default WorldPage
