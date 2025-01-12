import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import AdLarge from '@/components/AdLarge'
import CamsPageMap from '@/components/CamsPageMap'
import * as types from '@/utils/types'
import ErrorLoadingWebcams from '@/components/ErrorLoadingWebcams'
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
      documentTitle="Webcams around the World - MyBeachCams"
      documentDescription="Browse hundreds of beach webcams from around the world"
    >
      <div className="layout">
        <h1>Webcams around the World</h1>
        <div className="links-container">
          <ul>
            <li>
              <Link href="/aruba/">
                <a>Aruba</a>
              </Link>
            </li>
            <li>
              <Link href="/bali/">
                <a>Bali</a>
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
              <Link href="/greece/">
                <a>Greece</a>
              </Link>
            </li>
            <li>
              <Link href="/italy/">
                <a>Italy</a>
              </Link>
            </li>
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
            <li>
              <Link href="/netherlands/">
                <a>Netherlands</a>
              </Link>
            </li>
            <li>
              <Link href="/new-zealand/">
                <a>New Zealand</a>
              </Link>
            </li>
            <li>
              <Link href="/portugal/">
                <a>Portugal</a>
              </Link>
            </li>
            <li>
              <Link href="/spain/">
                <a>Spain</a>
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
              <Link href="/taiwan/">
                <a>Taiwan</a>
              </Link>
            </li>
            <li>
              <Link href="/thailand/">
                <a>Thailand</a>
              </Link>
            </li>
            <li>
              <Link href="/usa/">
                <a>United States</a>
              </Link>
            </li>
          </ul>
        </div>
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
          <p>
            Discover captivating beach views with webcams from stunning
            locations around the globe. Explore the serene shores of Aruba,
            Bermuda, and Bonaire. Witness the vibrant waters of Curacao and
            Jamaica. From Thailand's tropical coastlines to New Zealand's rugged
            bays, these webcams bring distant paradises closer.
          </p>
          <p>
            The United States offers an incredible variety of webcams. See the
            iconic beaches of California, Hawaii's lush shores, and Florida's
            lively piers. Each webcam showcases local charm, from bustling
            boardwalks to tranquil sunsets. Experience live views of surfers,
            sailboats, and historic landmarks.
          </p>
          <p>
            Whether planning a trip or dreaming of escape, these webcams
            inspire. Watch for changing weather, find your next travel
            destination, or simply unwind. Dive into a world of oceanfront
            beauty, streaming live at your fingertips.
          </p>
        </ShowMoreText>
      </div>

      <h2>
        <Link href="/hawaii/">World Webcams</Link>
      </h2>

      <MoreUSACams
        cams={{
          cams: cams.filter((cam) => cam.country === 'USA').slice(0, 7),
        }}
      />
      <AdLeaderboard />

      <h2>
        <Link href="/hawaii/">Hawaii Beach Cams</Link>
      </h2>
      <div className="links-container">
        <ul>
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
      <MoreHawaiiCams
        cams={{
          cams: cams.filter((cam) => cam.state === 'Hawaii').slice(0, 7),
        }}
      />
      <AdLeaderboard />

      <h2>
        <Link href="/california/">California Beach Cams</Link>
      </h2>
      <div className="links-container">
        <ul>
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
      <MoreCaliforniaCams
        cams={{
          cams: cams.filter((cam) => cam.state === 'California').slice(0, 7),
        }}
      />
      <AdLeaderboard />

      <h2>
        <Link href="/florida/">Florida Beach Cams</Link>
      </h2>
      <div className="links-container">
        <ul>
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
      <MoreFloridaCams
        cams={{
          cams: cams.filter((cam) => cam.state === 'Florida').slice(0, 7),
        }}
      />
      <AdLeaderboard />

      <p style={{ textAlign: 'center' }}>
        <span className="green-dot">&nbsp;</span>MyBeachCam hosted page
      </p>
      <ShowMoreText
        lines={4}
        more="show more"
        less="show less"
        anchorClass="anchorClass"
        truncatedEndingComponent="&nbsp;&nbsp;"
      >
        <p>
          Webcams offer a window to some of the world's best beaches. From the
          United States to tropical islands, these streams capture moments of
          beauty. Each location showcases unique features, from bustling shores
          to calm waters. Discover the charm of sandy coasts, ocean breezes, and
          breathtaking views.
        </p>
        <p>
          The United States presents a range of coastal experiences.
          California's iconic Venice Beach webcam shows surfers and boardwalk
          scenes. Hawaii's webcams reveal lush beaches, clear waters, and
          snorkeling spots. Florida features piers, lively beaches, and sunset
          views. These webcams connect visitors to the heart of each location.
        </p>
        <p>
          Travel beyond the U.S. to tropical escapes. Aruba's webcams showcase
          turquoise seas and golden sands. Bermuda offers vibrant beach views
          and historic charm. Bonaire and Curacao feature serene waters ideal
          for diving and exploring. Jamaica's webcams highlight vibrant beach
          life and stunning coastlines.
        </p>
        <p>
          In Asia, Thailand's streams provide glimpses of pristine beaches.
          Taiwan features lively coastlines and unique cultural charm. Japan's
          coastal views include serene harbors and dramatic landscapes. For
          those seeking natural wonders, these webcams deliver unforgettable
          scenes.
        </p>
        <p>
          Explore New Zealand's rugged bays and vast beaches. Mexico's webcams
          reveal warm sands, turquoise waters, and lively resorts. The Caribbean
          islands, including Sint Maarten and St. Barts, showcase luxury and
          unspoiled beauty. Each webcam captures the essence of its destination.
        </p>
        <p>
          Plan trips with these live views or simply enjoy the sights. Watch
          changing weather, ocean activity, and vibrant scenes unfold. These
          webcams bring travel dreams closer. Whether exploring the United
          States or distant shores, immerse yourself in these stunning views.
          Connect with beaches worldwide, live and in real-time, all from the
          comfort of your home.
        </p>
      </ShowMoreText>
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
