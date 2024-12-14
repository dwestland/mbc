import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
import Link from 'next/link'
import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'
import * as types from '@/utils/types'
import CamCard from '@/components/CamCard'
import ShowMoreText from 'react-show-more-text'

const FloridaPage = ({ floridaCams }) => {
  const CamsMap: any = dynamic(() => import('@/components/CamsMap'), {
    ssr: false,
  })

  const panhandleCams = () => {
    const cams = floridaCams.cams.filter((cam) => cam.area === 'Panhandle')
    const result = cams.map((cam: types.Cams, idx) => {
      if (idx < 7) {
        return <CamCard key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  const northEastCams = () => {
    const cams = floridaCams.cams.filter((cam) => cam.area === 'Northeast')
    const result = cams.map((cam: types.Cams, idx) => {
      if (idx < 7) {
        return <CamCard key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  const eastCentralCams = () => {
    const cams = floridaCams.cams.filter((cam) => cam.area === 'East Central')
    const result = cams.map((cam: types.Cams, idx) => {
      if (idx < 7) {
        return <CamCard key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  const miamiBeachCams = () => {
    const cams = floridaCams.cams.filter((cam) => cam.area === 'Miami Beach')
    const result = cams.map((cam: types.Cams, idx) => {
      if (idx < 7) {
        return <CamCard key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }
  const souteastKeysCams = () => {
    const cams = floridaCams.cams.filter((cam) => cam.area === 'Florida Keys')
    const result = cams.map((cam: types.Cams, idx) => {
      if (idx < 7) {
        return <CamCard key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  const gulfCoastCams = () => {
    const cams = floridaCams.cams.filter((cam) => cam.area === 'Gulf Coast')
    const result = cams.map((cam: types.Cams, idx) => {
      if (idx < 7) {
        return <CamCard key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  // Create vectors for map
  const vectors = []
  floridaCams.cams.map((cam: types.Cams) => {
    if (cam.lat !== null && cam.lng !== null) {
      const vector = {
        name: cam.title,
        lat: cam.lat,
        lng: cam.lng,
        id: cam.id,
        imageName: cam.imageName,
      }
      vectors.push(vector)
    }
    return null
  })

  return (
    <Layout
      documentTitle="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      documentDescription="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Miami, Los Angles, Miami, Northeast, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <h1>World Webcams</h1>
        <div className="index-page-subheading">
          <h2>
            <span className="no-break">
              <Link href="/florida/miami/">
                <a>Miami</a>
              </Link>
            </span>
            &nbsp;
            <span className="subheading-emoji"> 🌴 </span>&nbsp;
            <span className="no-break">
              <Link href="/florida/gulf-coast/">
                <a>Gulf Coast</a>
              </Link>
            </span>
            &nbsp;
            <span className="subheading-emoji"> 🌴 </span>&nbsp;
            <span className="no-break">
              <Link href="/florida/east-central/">
                <a>East Central</a>
              </Link>
            </span>
            &nbsp;
            <span className="subheading-emoji"> 🌴 </span>&nbsp;
            <span className="no-break">
              <Link href="/florida/florida-keys/">
                <a>Florida Keys</a>
              </Link>
            </span>
          </h2>
        </div>
        <div className="content-and-ad">
          <div className="content">
            <CamsMap vectors={vectors} />
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
            Floridas beaches captivate the soul, offering a slice of paradise in
            every corner of the state. From the vibrant sands of Miami Beach to
            the tranquil shores of the Florida Keys, this page unveils live
            webcams that animate the Sunshine State. Gaze at the gentle waves of
            the Gulf Coast or immerse in the bustling activity along the
            Atlantic Ocean. Planning a trip? These cams deliver real-time
            glimpses of Floridas most popular destinations, guiding you to the
            perfect spot. Whether youre daydreaming about your next escape or
            assessing the current weather, these live streams anchor you to
            Floridas allure.
          </p>
        </ShowMoreText>
        <AdLeaderboard />
        <h2>
          <Link href="/florida/miami/">Miami Beach Cams</Link>
        </h2>
        <p>
          Miami Beach Florida is the world's most famous beach resort, famed for
          its white sand beaches and as a meeting place for celebrities and
          millionaires. Miami Beach is also a popular tourist destination,
          especially among Europeans and South Americans. It has been featured
          in many movies and television shows including Scarface, Cocoon, Miami
          Vice and Baywatch. Watch live streaming webcams of Miami.
        </p>
        <div className="cam-container">
          {miamiBeachCams()}
          <div className="more-cams">
            <Link href="/florida/miami">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>MIAMI</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
        <h2>
          <Link href="/florida/florida-keys/">
            <a>Florida Keys Cams</a>
          </Link>
        </h2>
        <p>
          Immerse yourself in the Florida Keys via live webcams. Wander through
          pristine beaches, vibrant coral reefs, and quaint coastal towns. From
          Key Largo to Key West, these cameras transport the island paradise to
          you. Survey the weather, map out your day, or simply revel in the
          sights. Plunge into the island life, glimpse exotic wildlife, and
          envision your next journey. Ideal for planning or a brief, virtual
          tropical escape.
        </p>
        <div className="cam-container">
          {souteastKeysCams()}
          <div className="more-cams">
            <Link href="/florida//florida-keys">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>FLORIDA KEYS</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
        <h2>
          <Link href="/florida/gulf-coast">
            <a>Gulf Coast Beach Cams</a>
          </Link>
        </h2>
        <p>
          Witness the Gulf Coast through live beach cams. Stroll along white
          sand shores, vibrant coastal towns, and tranquil waters. From Florida
          to Texas, these webcams unveil the Gulfs allure. Gauge the weather,
          craft your beach day, or simply savor the ocean vistas. Unearth local
          charm, glimpse marine life, and envision your next retreat. Ideal for
          planning or a virtual beachside escape.
        </p>
        <div className="cam-container">
          {gulfCoastCams()}
          <div className="more-cams">
            <Link href="/florida/gulf-coast">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>GULF COAST</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
        <h2>
          <Link href="/florida/east-central">
            <a>East Central Cams</a>
          </Link>
        </h2>
        <p>
          East Central Florida is a great place to visit. Ocean and beaches,
          things to do and places to go. See Daytona Beach, Cape Canaveral,
          Space Coast (Cape Kennedy) and New Smyrna Beach. Stay tuned to our
          live streaming webcams and enjoy beautiful beaches.
        </p>
        <div className="cam-container">
          {eastCentralCams()}
          <div className="more-cams">
            <Link href="/florida/east-central">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>EAST CENTRAL</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
        <h2>
          <Link href="/florida/panhandle">
            <a>Panhandle Beach Cams</a>
          </Link>
        </h2>
        <p>
          Come see the Florida Panhandle and everything it has to offer. The
          Florida Panhandle is a great place to visit with beautiful ocean and
          beaches and fun activities. Come and explore! Jacksonville Beach and
          the St. Augustine Panhandle is one of the US's most beautiful places
          to visit, come and experience it for yourself. Panhandle Beach Cams
          provide an amazing live streaming experience to those around the world
          who want to watch the beach life at its best.
        </p>
        <div className="cam-container">
          {panhandleCams()}
          <div className="more-cams">
            <Link href="/florida/panhandle">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>PAN HANDLE</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
        <h2>
          <Link href="/florida/northeast/">
            <a>Northeast Beach Cams</a>
          </Link>
        </h2>
        <p>
          Northeast Florida, the Sunshine State, has many attractions. Ocean and
          beaches are plentiful, as well as places to see and do. There is so
          much to visit in this part of Florida. Watch live streaming videos of
          the top beaches in Northeast Florida with an interactive map and lots
          more information about attractions, tourist attractions and more!
        </p>
        <div className="cam-container">
          {northEastCams()}
          <div className="more-cams">
            <Link href="/florida/northeast">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>NORTH EAST</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const moreCamsRes = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/`)
  const floridaCams: types.WebcamProps = await moreCamsRes.json()

  return {
    props: {
      floridaCams,
    },
  }
}

export default FloridaPage
