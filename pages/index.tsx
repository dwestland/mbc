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
              <Link href="/hawaii/">
                <a>Hawaii Webcams</a>
              </Link>
            </li>
            <li>
              <Link href="/california/">
                <a>California Webcams</a>
              </Link>
            </li>
            <li>
              <Link href="/florida/">
                <a>Florida Webcams</a>
              </Link>
            </li>
            <li>
              <Link href="/world/">
                <a>World</a>
              </Link>
            </li>
          </ul>
        </div>

        <h2 style={{ marginTop: '10px' }}>MyBeachCams.com</h2>
        <h1 style={{ marginTop: '7px' }}>Best Webcams from around the World</h1>
        <ShowMoreText
          lines={2}
          more="show more"
          less="show less"
          anchorClass="anchorClass"
          truncatedEndingComponent="&nbsp;&nbsp;"
        >
          <p>
            We have links to over 600 Webcams in Florida, California, Hawaii and
            all over the world. You will find webcams with live, streaming cams
            from these top resort areas. In Hawaii we bring you web cams from
            such happening areas as Waikiki, Kaanapali, Kona, and Lahaina.
            California webcam locations include Los Angeles, San Francisco, San
            Diego and the Central Coast. Also from Florida at Miami, Fort
            Lauderdale, West Palm Beach and Key Largo. Along with the web cams,
            there are comprehensive travel information to give you the scoop on
            the area's main attractions and top sights, including hard-to-find
            local links. The world's best beaches are just a click away.
          </p>
          <p>
            Travel further to Aruba, Bermuda, and Bonaire, each offering
            tropical escapes with crystal-clear seas. In Curacao and Jamaica,
            vibrant culture meets pristine coastlines. Mexico's shores blend
            history and natural beauty.
          </p>
          <p>
            Asia's gems include Japan's serene bays, Taiwan's lively harbors,
            and Thailand's vibrant beaches. Venture to New Zealand for dramatic
            cliffs and hidden coves. The Caribbean shines with St. Barts and
            Sint Maarten's turquoise waters.
          </p>
          <p>
            Plan trips, check weather, or just unwind. Each webcam offers a
            window to paradise. Start your journey here!
          </p>
        </ShowMoreText>
      </div>
      <div className="links-container">
        <ul>
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
      <MoreWebcams
        cams={{
          cams: cams.slice(0, 7),
        }}
      />

      <h2>
        <Link href="/hawaii/"> US Webcams</Link>
      </h2>

      <div className="links-container">
        <ul>
          <li>
            <Link href="/alabama/">Alabama</Link>
          </li>
          <li>
            <Link href="/california/">California</Link>
          </li>
          <li>
            <Link href="/connecticut/">Connecticut</Link>
          </li>
          <li>
            <Link href="/delaware/">Delaware</Link>
          </li>
          <li>
            <Link href="/florida/">Florida</Link>
          </li>
          <li>
            <Link href="/georgia/">Georgia</Link>
          </li>
          <li>
            <Link href="/hawaii/">Hawaii</Link>
          </li>
          <li>
            <Link href="/louisiana/">Louisiana</Link>
          </li>
          <li>
            <Link href="/maine/">Maine</Link>
          </li>
          <li>
            <Link href="/maryland/">Maryland</Link>
          </li>
          <li>
            <Link href="/massachusetts/">Massachusetts</Link>
          </li>
          <li>
            <Link href="/mississippi/">Mississippi</Link>
          </li>
          <li>
            <Link href="/new-hampshire/">New Hampshire</Link>
          </li>
          <li>
            <Link href="/new-jersey/">New Jersey</Link>
          </li>
          <li>
            <Link href="/new-york/">New York</Link>
          </li>
          <li>
            <Link href="/north-carolina/">North Carolina</Link>
          </li>
          <li>
            <Link href="/oregon/">Oregon</Link>
          </li>
          <li>
            <Link href="/rhode-island/">Rhode Island</Link>
          </li>
          <li>
            <Link href="/south-carolina/">South Carolina</Link>
          </li>
          <li>
            <Link href="/texas/">Texas</Link>
          </li>
          <li>
            <Link href="/washington/">Washington</Link>
          </li>
        </ul>
      </div>
      <MoreUSACams
        cams={{
          cams: cams.filter((cam) => cam.country === 'USA').slice(0, 7),
        }}
      />

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
          Discover breathtaking destinations through live webcams. Start with
          Hawaii, where sandy beaches meet dramatic volcanic cliffs. Watch the
          surf roll in at Oahu or catch the calm bays of Maui. Each view offers
          a glimpse of island life.
        </p>

        <p>
          California's coastline is a treasure trove of beauty. See rugged
          cliffs along Big Sur or the sandy shores of Laguna Beach. Surfers and
          sunsets define these iconic spots. The vibrant Pacific Coast is always
          alive with activity.
        </p>

        <p>
          Florida's beaches bring a mix of calm waters and lively scenes. Visit
          the Gulf Coast for turquoise waves or the Atlantic for endless sandy
          stretches. The Keys offer serene vistas and unique island charm.
        </p>

        <p>
          The Caribbean invites exploration. Aruba, Bermuda, and Bonaire boast
          crystal waters and vivid marine life. Curacao offers colorful harbors,
          while Jamaica's beaches pulse with energy and rhythm. St. Barts and
          Sint Maarten charm with pristine sands and lush backdrops.
        </p>

        <p>
          Asia's coastal beauty shines in Japan, Taiwan, and Thailand. Japan's
          bays are serene and timeless. Taiwan's harbors bustle with life.
          Thailand's beaches offer a mix of culture and striking landscapes.
        </p>

        <p>
          Mexico's coastlines are rich with diversity. Enjoy Riviera Maya's
          turquoise waters or Baja's rugged shores. Each location is steeped in
          history and natural splendor.
        </p>

        <p>
          New Zealand's dramatic coastlines captivate every traveler. Witness
          towering cliffs and hidden coves. The landscapes are unforgettable.
        </p>

        <p>
          These webcams are more than views. They're windows to distant lands.
          Use them to plan your next trip or check the weather. Escape daily
          life with a digital retreat to serene shores.
        </p>

        <p>
          From oceans to rivers, each destination has its charm. Explore this
          site to find your next adventure. Begin planning today with these
          live, stunning glimpses of places far away.
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
