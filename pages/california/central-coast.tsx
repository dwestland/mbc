import React from 'react'
import { InferGetStaticPropsType } from 'next'
import ShowMoreText from 'react-show-more-text'
import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
import CamCard from '@/components/CamCard'
import data from '@/data/camLocationAreas'
import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'
import { getSixDigitRandom } from '@/utils/common'
import MoreCaliforniaCams from '@/components/MoreCaliforniaCams'
import Link from 'next/link'
import * as types from '@/utils/types'

const CentralCoastPage = ({
  cams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  // Ensure cams and cams.cams are defined
  if (!cams || !cams.cams || cams.cams.length === 0) {
    return (
      <Layout
        documentTitle="Beach Cams in Miami and South Beach Florida"
        documentDescription="Best live web cams and surf cams at Miami Beach and South Beach in Florida."
      >
        <div className="layout">
          <h1>No cams available</h1>
        </div>
      </Layout>
    )
  }

  // Next modal SSR
  const CamsMap: any = dynamic(() => import('@/components/CamsMap'), {
    ssr: false,
  })
  const californiaCams: any = cams

  const country = 'USA'
  const state = 'California'
  const area = 'Central Coast'
  const countryObject = data.countries.filter((ele) => ele.country === country)
  const stateObject = countryObject[0].states.filter(
    (ele) => ele.state === state
  )
  const areaObject = stateObject[0].areas.filter((ele) => ele.area === area)

  const subareaObjects = areaObject[0].subareas
  const subareaArray = subareaObjects.map((ele) => ele.subarea)

  // Display cams WITH subareas
  const camSections = subareaArray.map((subarea) => {
    // check if subarea cams exist
    const camCount = cams.cams
      .map((cam: types.Cams) => cam.subarea)
      .filter((ele) => ele === subarea).length
    if (camCount === 0) {
      return null
    }

    return (
      <div key={getSixDigitRandom()}>
        <AdLeaderboard />
        <h2>{subarea} Webcams</h2>
        <div key={subarea} className="cam-container">
          {cams.cams.map((cam: types.Cams) => {
            if (cam.subarea === subarea) {
              return <CamCard key={cam.id} cam={cam} />
            }
            return null
          })}
        </div>
      </div>
    )
  })

  // Display cams WITHOUT subareas
  const moreCams = () => {
    const subareaCams = cams.cams.filter(
      (cam: types.Cams) => cam.area === area && cam.subarea === ''
    )

    if (subareaCams.length === 0) {
      return null
    }

    const result = subareaCams.map((cam: types.Cams) => (
      <CamCard key={cam.id} cam={cam} />
    ))

    return (
      <>
        <AdLeaderboard />
        <h2>{area} Webcams</h2>
        <div className="cam-container">{result}</div>
      </>
    )
  }

  // Create vectors for map
  const vectors = []
  cams.cams.map((cam: types.Cams) => {
    if (cam.area === area && cam.lat !== null && cam.lng !== null) {
      const vector = {
        name: cam.title,
        lat: cam.lat,
        lng: cam.lng,
      }
      vectors.push(vector)
    }
    return null
  })

  return (
    <Layout
      documentTitle="Beach Cams on California's Central Coast of  - Webcams at Santa Barbara, Monterey Bay and Pebble Beach"
      documentDescription="Beach Cams and Surf Cams on the Central Coast of California with webcams in Santa Barbara, Monterey Bay and Pebble Beach."
    >
      <div className="layout">
        <h1>Central Coast, California Webcams</h1>
        <div className="content-and-ad">
          <div className="content">
            <CamsMap vectors={vectors} />
          </div>
          <div className="ad">
            <AdLarge />
          </div>
        </div>

        <p>
          Along the California coast between Los Angeles and San Francisco are
          several resort towns well worth visiting. Between San Luis Obispo and
          San Francisco is the scenic coastal route of Highway 1, famous for its
          winding roads and bridges and stunning views overlooking the crashing
          waves below. These areas include Santa Barbara, Los Olivos, San Luis
          Obispo, Big Sur, Carmel, Pebble Beach and Monterey. It is fun to take
          a 3 or 4 day drive up the coast from Los Angeles and visit a couple of
          these quaint towns. You can stop by for lunch or dinner, or spend the
          night in one of the many lovely hotels. If you don't like driving
          there is an airport in a couple of the cities, as well as a passenger
          train that goes all the way up the coast. Check on-line or with your
          travel agent for travel-packages and discounts.
        </p>

        {camSections}
        {moreCams()}

        <div className="panel">
          <ShowMoreText
            lines={3}
            more="show more"
            less="show less"
            anchorClass="anchorClass"
            truncatedEndingComponent="... "
          >
            <p>
              A favorite weekend get-away for Angelinos is Santa Barbara. Less
              than a 2-hour drive from LA, this Spanish-influenced city, with
              its red-tile roofs and Spanish street names, is set right on the
              coast. Home to such celebrities as Oprah and Rob Lowe, this town
              is filled with high-end boutiques and world-class restaurants, yet
              maintains a small town feel. While you are there be sure and see
              the Mission Santa Barbara. Dubbed "The Queen of the Missions,"
              this fabulous structure was founded in 1786 and is one of the best
              preserved missions in California. Within the Mission compound is a
              museum displaying its many historical Mexican artifacts.
            </p>
            <p>
              Situated in the center of town is State Street. It is filled with
              hundreds of lovely shops, restaurants, cafes and bars. It also has
              several large department stores. It's a great place to do a little
              eating and shopping, or stop for a coffee. Also on State Street is
              the Santa Barbara Museum of Art. It has a variety of arts,
              including works by Degas, Matisse, Picasso and Monet. At the very
              end of State Street is the beach and Sterns Wharf. Be sure to take
              a walk along the boardwalk or rent specialty bikes to take in the
              atmosphere. At Sterns Wharf you will find specialty shops, seafood
              restaurants and boat charters.
            </p>
            <p>
              Close to State Street you can find the Presidio de Santa Barbara
              Park and see El Cuartel, the second-oldest surviving structure in
              California, built in 1788. In the Downtown area there are many
              other Historic Adobes that you can walk by, including the County
              Courthouse on Anacapa Street. Another interesting sight is the
              Santa Barbara Zoo. With over 500 animals and a miniature train,
              this is a terrific place to take the kids for a couple of hours.
            </p>
            <p>
              Just about a 30-minute drive Northeast from Santa Barbara is the
              Santa Inez Valley. Here you will find the town of Los Olivos, now
              made infamous by Michael Jackson and his Neverland Estate. This
              scenic area is home to more than 60 wineries within a 15-mile
              radius. Many of them have tasting rooms and guided tours that you
              can take to see how wine is created from start to finish. We
              highly recommend taking a full day to tour the area and wineries,
              sampling the many various wines.
            </p>
            <p>
              Close to Los Olivos is the quaint Danish Town of Solvang, or
              "Sunny Field" in Danish. This beautiful little town was founded by
              a small group of Danish teachers in 1911. Known for its lovely
              shops, bakeries and windmills, Solvang is a wonderful place to
              stop for the afternoon on your way up the coast. Whether you like
              wine tasting, fine dining, water sports or golfing, the scenic
              Santa Barbara area and the Santa Ynez Valley has something for
              you.
            </p>
            <p>
              About midway between Los Angeles and San Francisco is the
              wonderful city of San Luis Obispo. The city was originally founded
              as a mission in 1772 and is also home to California Polytechnic
              State University (Cal Poly). While in San Luis Obispo, a trip to
              the Mission San Luis Obispo de Tolsa is a must. Located in the
              center of town, the mission is lovingly referred to as "The Prince
              of Missions." It is now a beautiful parish church. Inside,
              visitors can take a tour of the museum displaying Chumash Indian
              artifacts and belongings of early settlers.
            </p>
            <p>
              Along the coast, west of San Luis Obispo, is the quaint town of
              Baywood. It is a terrific place to spend the night and get a
              little rest and relaxation, such as at the Baywood Inn. From there
              you can also get a terrific view of the incredible Morro Bay Rock
              located in nearby Morro Bay. This enormous conical rock juts out
              of the ocean 578 feet above the water. A walk around this
              incredible sight is a must. There is also a marina and fishing
              wharf close by. There you will find specialty shops, restaurants
              and fine-dining. You can also book a fishing tour or even rent
              kayaks.
            </p>
            <p>
              About 30 minutes Northwest of San Luis Obispo is the town of
              Cambria. This beautiful area is known for its stunning ocean views
              as well as its fine California wines. Cambria is part of the
              well-known scenic drive on Highway 1 between San Luis Obispo and
              San Francisco. On Main Street you will find wonderful shops and
              cafes. While you are there make sure to check out Nitt Witt on
              Hillcrest Drive, a 2.5 acre landmark property hand-built using
              such salvaged materials as driftwood and beer cans!
            </p>
            <p>
              Traveling north along the coast on HWY 1 you will then come to San
              Simeon. This area was made famous by William Randolph Hearst when
              he built his infamous 165-room Hearst's Castle there. Set aside a
              few hours to see this one-of-a-kind property. There are several
              different tours to choose from, depending on which part of the
              castle you would like to see. Make sure to plan on walking for
              about 1 ½ hours and going up and down plenty of stairs.
            </p>
            <p>
              Along the coast, just north of San Simeon is the scenic and
              majestic town of Big Sur. This is a wonderful place to spend the
              night and relax in one of its luxury hotel/spas. Be sure to go
              past the Point Sur Historic Park with its Point Sur Lighthouse.
            </p>
            <p>
              Continuing up the coast along HWY 1 you will come to an area
              called the Monterey Peninsula. During the 1800's this beautiful
              area was thriving due to its fishing and whaling industries.
              Cannery Row in Monterey was established in the 1920's for its
              sardine industry. Now the Monterey Peninsula, with its gorgeous
              natural beauty, has brought many visitors to the area and tourism
              is its top local industry. Visitors will find a dramatic coastline
              there with majestic cliffs, crashing waves, beautiful beaches, and
              incredible surfing. It is also a hot destination for golfers,
              especially in Pebble Beach, with its world-class golf courses.
              There is the famous "17-mile Drive" a private, scenic toll-road
              that travels from Carmel to Pacific Grove. It offers incredible
              views of the Pacific Ocean and its rugged coastline.
            </p>
            <p>
              Beginning on the southern tip of the peninsula is Carmel, or
              Carmel-by-the-Sea. This small town has a strong "village"
              atmosphere and no actual street addresses. Walking is the best way
              to get around. You can start with a stroll along the white sandy
              beach then head into town to see the many art galleries and
              interesting courtyards. Be sure and stop by the Carmel Mission.
              Established in 1770, the Mission features a museum, lovely
              courtyard gardens and a Moorish bell tower
            </p>
            <p>
              Just north of Carmel is Pebble Beach. You can travel part of the
              "17-Mile Drive" between these two coastal towns. Best know for its
              incredible golf courses, Pebble Beach has long been a golfer's
              paradise.
            </p>
            <p>
              From Carmel you can take the famous "17-mile Drive" to Pacific
              Grove. Originally a summer camp, Pacific Grove grew into a scenic
              and tranquil waterfront town. There are still more that 1200
              historic buildings in the area, including many well-preserved
              Victorian homes in the Downtown area. This is a great place to go
              hiking or biking, especially along the Monterey Peninsula
              Recreational Trail. Be sure to go by the Point Pinos Lighthouse on
              Asilomar Blvd which has been in operation since 1855.
            </p>
            <p>
              Continuing around the peninsula from Pacific Groove you will come
              to Monterey. This beautiful city is a wonderful place to stay. You
              can stroll through the shops, galleries and Restaurants of Cannery
              Row, formerly a sardine cannery. Be sure to go to the Monterey Bay
              Aquarium. It has over 700 species of marine life and, in our
              opinion, is one of the best aquariums in the country. Stop by the
              Fisherman's Wharf as well. For a little exercise, you can take the
              2-hour walking tour called the Monterey Path of History. There are
              many different types of lodging in Monterey, from a quaint
              bed-and-breakfast to a 4-star hotel. There are also several
              fine-dining restaurants to choose from.
            </p>
          </ShowMoreText>
        </div>

        <hr />

        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do on the Central Coast</h3>
            <ol>
              <li>Visit Santa Barbara Mission</li>
              <li>Wine Tasting in Los Olivos/Santa Ynez Valley</li>
              <li>Visit the San Luis Obispo Mission</li>
              <li>Walk around the Morro Bay Rock</li>
              <li>
                Take the coastal drive on Highway 1 between Cambria and Monterey
              </li>
              <li>Take a tour of Hearst’s Castle</li>
              <li>Take a stroll though Carmel</li>
              <li>Play golf in Pebble Beach</li>
              <li>Take the "17-Mile Drive" on the Monterey Peninsula</li>
              <li>See the Monterey Aquarium</li>
            </ol>
          </div>
          <div className="info">
            <h3>Central Coast Links and Local Information</h3>
            <ul>
              <li>
                <a href="http://www.sbmm.org/" target="_blank" rel="noreferrer">
                  Santa Barbara Maritime Museum
                </a>{' '}
                Navigate to a Voyage of Discovery
              </li>
              <li>
                <a
                  href="http://www.santabarbaraca.gov/Government/Departments/Parks_and_Recreation/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Santa Barbara City Parks and Recreation
                </a>{' '}
                Official City Website for Parks and Recreation
              </li>
              <li>
                <a
                  href="http://www.newspress.com/Top/index.jsp"
                  rel="noreferrer"
                  target="_blank"
                >
                  Santa Barbara News Press
                </a>{' '}
                Local Santa Barbara news and information
              </li>
              <li>
                <a
                  href="http://www.sbnature.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Santa Barbara Museum of Natural History
                </a>{' '}
                Life-size Blue Whale skeleton, a planetarium, an antique natural
                and a history art gallery
              </li>
              <li>
                <a
                  href="https://www.nps.gov/chis/index.htm"
                  rel="noreferrer"
                  target="_blank"
                >
                  Cannel Islands National Park
                </a>{' '}
                Channel Islands National Park is home to a wide variety natural
                and cultural resources
              </li>
              <li>
                <a
                  href="http://slocountyparks.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  San Luis Obispo County Parks
                </a>{' '}
                Hike, camp, swim, fish, and golf
              </li>
              <li>
                <a href="http://visitslo.com/" rel="noreferrer" target="_blank">
                  Visitor San Luis Obispo Info
                </a>{' '}
                A service of the San Luis Obispo Chamber of Commerce
              </li>
              <li>
                <a
                  href="http://www.topix.net/city/san-luis-obispo-ca"
                  rel="noreferrer"
                  target="_blank"
                >
                  San Luis Obispo News
                </a>{' '}
                Local news for San Luis Obispo
              </li>
              <li>
                <a
                  href="https://www.amtrak.com/home"
                  rel="noreferrer"
                  target="_blank"
                >
                  Amtrak
                </a>{' '}
                Amtrak offers daily service into San Luis Obispo County
              </li>
              <li>
                <a
                  href="http://www.hearstcastle.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Hearst Castle
                </a>{' '}
                The official web site of Hearst Castle with information,
                historical sketches and news
              </li>
              <li>
                <a
                  href="http://www.morro-bay.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Morro Bay Guide
                </a>{' '}
                A guide to Nature, Education and Responsible Recreation
              </li>
              <li>
                <a
                  href="http://www.morro-bay.net/index.htm"
                  rel="noreferrer"
                  target="_blank"
                >
                  Morro Bay
                </a>{' '}
                Everything about Morro Bay
              </li>
              <li>
                <a
                  href="https://www.parks.ca.gov/"
                  rel="noreferrer"
                  target="_blank"
                >
                  California State Parks
                </a>{' '}
                California's official State Park website
              </li>
              <li>
                <a
                  href="http://mchsmuseum.com/salinas/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Monterey History Website
                </a>{' '}
                Local History from the Monterey County Historical Society
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <h2>
        <Link href="/california/">More California Beach Cams</Link>
      </h2>
      <MoreCaliforniaCams cams={californiaCams} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/california`)
  const cams: types.CamPageProps = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default CentralCoastPage
