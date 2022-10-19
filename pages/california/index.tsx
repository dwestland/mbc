import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import CamItem from '@/components/CamItem'
import AdLeaderboard from '@/components/AdLeaderboard'

interface WebcamProps {
  californiaCams: { title: string }[]
}

interface Cams {
  id: number
  title: string
  webcamUrl: string
  imageName: string
  description: string
  country: string
  state: string
  area: string
  subarea: string
  lat: number
  lng: number
  topCam: boolean
  mbcHosted: boolean
}

const CaliforniaPage = ({ californiaCams }) => {
  const emoji = <span style={{ fontSize: '30px' }}> 🌴 </span>
  const sanDiegoCams = () => {
    const cams = californiaCams.cams.filter((cam) => cam.area === 'San Diego')
    const result = cams.map((cam: Cams, idx) => {
      if (idx < 7) {
        return <CamItem key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  const losAngelesCams = () => {
    const cams = californiaCams.cams.filter((cam) => cam.area === 'Los Angeles')
    const result = cams.map((cam: Cams, idx) => {
      if (idx < 7) {
        return <CamItem key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  const centralCoastCams = () => {
    const cams = californiaCams.cams.filter(
      (cam) => cam.area === 'Central Coast'
    )
    const result = cams.map((cam: Cams, idx) => {
      if (idx < 7) {
        return <CamItem key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  const sanFranciscoCams = () => {
    const cams = californiaCams.cams.filter(
      (cam) => cam.area === 'San Francisco'
    )
    const result = cams.map((cam: Cams, idx) => {
      if (idx < 7) {
        return <CamItem key={cam.id} cam={cam} />
      }
      return null
    })
    return result
  }

  return (
    <Layout
      documentTitle="California Beach Cams - Webcams in San Diego, Los Angeles and San Francisco"
      documentDescription="Best Beach Cams and Surf Cams in California featuring webcams in San Diego, Los Angeles, Central Coast and San Francisco and much more"
    >
      <div className="layout">
        <h1>California Webcams</h1>
        <h2>
          <span className="no-break">
            <a href="/california/san-diego/">San Diego</a>
          </span>
          &nbsp;<span>{emoji}</span>
          <span className="no-break">
            &nbsp;
            <a href="/california/los-angeles/">Los Angeles</a>
          </span>
          &nbsp;<span>{emoji}</span>
          &nbsp;
          <span className="no-break">
            <a href="/california/central-coast/">Central Coast</a>
          </span>
          &nbsp;<span>{emoji}</span>
          &nbsp;
          <span className="no-break">
            <a href="/california/san-francisco/">San Francisco</a>
          </span>
        </h2>
        <p>
          California is known as the Golden State. Its sunny weather, varied
          landscape and the allure of fame and fortune have enticed millions of
          Americans to "go west." On this popular website you will find a series
          of live streaming webcams from all along this famous West Coast. From
          San Diego in the southern tip of California, up through Los Angeles
          and Santa Barbara and then through Monterey and San Francisco, you
          will see exciting live images of beaches, boardwalks, bays and even
          marine life. These images will most likely either remind you of a fond
          memory or make you want to trip out to see some of these exciting
          destinations. Either way, enjoy the view!
        </p>
        <AdLeaderboard />
        <h2>
          <a href="/california/san-diego/">San Diego Beach Cams</a>
        </h2>
        <p>
          San Diego, known for its year-round sunshine and balmy temperatures,
          is a great place for some fun-in-the-sun. Click on{' '}
          <a href="/california/san-diego/">San Diego Beach Cams</a> and check
          out these live, streaming video web cams of the Del Mar, La Jolla/
          Torrey Pines, San Diego Bay and Marina, Ocean Beach and Imperial Beach
          areas. You'll then see why San Diego is one of the most popular
          vacation spots in the U.S.A.
        </p>
        <div className="cam-container">
          {sanDiegoCams()}
          <div className="more-cams">
            <Link href="/california/san-diego">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>SAN DIEGO</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
        <h2>
          <Link href="/california/los-angeles">Los Angeles Beach Cams</Link>
        </h2>
        <p>
          Los Angeles is home to many of the mainland's top beaches. Click on{' '}
          <a href="/california/los-angeles/">Los Angeles Beach Cams</a> to find
          streaming video webcams of such LA hot spots as Venice Beach, Santa
          Monica Pier, Hermosa Beach, Newport Beach, Laguna and even Catalina
          Island. Check out the great weather and see what's happening in the LA
          scene.
        </p>
        <div className="cam-container">
          {losAngelesCams()}
          <div className="more-cams">
            <Link href="/california/los-angeles">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>LOS ANGELES</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
        <h2>
          <Link href="/california/central-coast">Cental Coast Beach Cams</Link>
        </h2>
        <p>
          Along the west coast between Los Angeles and San Francisco is a series
          of terrific resort towns. Many of them are weekend getaways for
          Angelinos. Click on{' '}
          <a href="/california/central-coast/">Central Coast Beach Cams</a> to
          see live, streaming video of these areas. It starts at Ventura and
          Santa Barbara, and then goes up the coast to Baywood and San Simeon,
          and finally to Big Sur, Pebble Beach and Monterey. These webcams will
          probably make you want to get in the car and drive up the coast along
          scenic Highway 1.
        </p>
        <div className="cam-container">
          {centralCoastCams()}
          <div className="more-cams">
            <Link href="/california/central-coast">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>CENTRAL COAST</span>
                  <br />
                  CAMS
                </h2>
              </a>
            </Link>
          </div>
        </div>
        <AdLeaderboard />
        <h2>
          <Link href="/california/san-francisco">
            San Francisco &amp; Beach Northern California Cams
          </Link>
        </h2>
        <p>
          San Francisco is known as the "City by the Bay." This worldly,
          seductive city is full of culture, magnificent sights and outstanding
          food. Its famous sights include the Golden Gate Bridge, cable cars and
          steep rolling hills overlooking the bay and ocean. See the web cams at{' '}
          <a href="/california/san-francisco/">San Francisco Beach Cams</a> to
          view streaming live pictures of this incredible area, including San
          Francisco Bay, The Golden Gate Bridge and Alcatraz Island.
        </p>
        <div className="cam-container">
          {sanFranciscoCams()}
          <div className="more-cams">
            <Link href="/california/san-francisco">
              <a>
                <h2>
                  MORE
                  <br />
                  <span>SAN FRAN</span>
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
  const moreCamsRes = await fetch(
    `${process.env.NEXT_PUBLIC_API}/cams/california`
  )
  const californiaCams: WebcamProps = await moreCamsRes.json()

  return {
    props: {
      californiaCams,
    },
  }
}

export default CaliforniaPage
