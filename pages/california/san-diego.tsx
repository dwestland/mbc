import React from 'react'
import { InferGetStaticPropsType } from 'next'
import ShowMoreText from 'react-show-more-text'
import dynamic from 'next/dynamic'
import { getSixDigitRandom } from '@/utils/formUtils'
import Layout from '@/components/Layout'
import CamItem from '@/components/CamItem'
import data from '@/data/camLocationAreas'
import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'

interface PageProps {
  cams: {}[]
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
}

const SanDiegoPage = ({
  cams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  // Next modal SSR
  const CamsMap: any = dynamic(() => import('@/components/CamsMap'), {
    ssr: false,
  })

  const country = 'USA'
  const state = 'California'
  const area = 'San Diego'
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
      .map((cam: Cams) => cam.subarea)
      .filter((ele) => ele === subarea).length
    if (camCount === 0) {
      return null
    }

    return (
      <div key={getSixDigitRandom()}>
        <AdLeaderboard />
        <h2>{subarea} Webcams</h2>
        <div key={subarea} className="cam-container">
          {cams.cams.map((cam: Cams) => {
            if (cam.subarea === subarea) {
              return <CamItem key={cam.id} cam={cam} />
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
      (cam: Cams) => cam.area === area && cam.subarea === ''
    )

    if (subareaCams.length === 0) {
      return null
    }

    const result = subareaCams.map((cam: Cams) => (
      <CamItem key={cam.id} cam={cam} />
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
  cams.cams.map((cam: Cams) => {
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
      documentTitle="Beach Cams of San Diego, California - Webcams at La Jolla, Del Mar and Mission Bay"
      documentDescription="Beach Cams and Surf Cams in San Diego, California with webcams in La Jolla, Del Mar and Mission Bay."
    >
      <div className="layout">
        <h1>San Diego Webcams</h1>
        <div className="content-and-ad">
          <div className="content">
            <CamsMap vectors={vectors} />
          </div>
          <div className="ad">
            <AdLarge />
          </div>
        </div>
        <p>
          San Diego is a thriving coastal city in the southern tip of
          California. It has deep Spanish and Mexican roots that intrigue
          visitors with its stunning architecture, beautiful beaches and
          delicious foods. Known for its year-round sunshine and balmy
          temperatures, San Diego is a great place to relax and explore. It is
          also home to many of the states top tourist attractions such as the
          famed San Diego Zoo, Balboa Park, Legoland, and SeaWorld, attracting
          over 14 million visitors a year.
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
              In the city of San Diego one of the most popular sights is the
              world-class San Diego Zoo. It is one of the largest and most
              impressive zoos in the world. It is currently home to a few of the
              rare Chinese Giant Panda Bears, as well as 4000 other animals that
              live in habitats simulating their natural environments. We
              recommend first taking the guided bus tour for an overview of the
              very extensive park and then walk around at your leisure. For an
              extra treat, try the aerial tramway for an exciting bird's-eye
              view of the park.
            </p>
            <p>
              Balboa Park and Museums is also a must while in the downtown area.
              It is a 1200-acre recreation and cultural center, filled with
              spectacular Spanish architecture, including the California
              Building and the Casa del Prado. There are over a dozen different
              types of museums in the park as well, including the Museum of Art,
              Natural History Museum, Aerospace Museum, Museum of Photographic
              Arts, Automotive Museum, Hall of Champions Sports Museum and the
              Museum of Man. Inside the park there is also a science center with
              an IMAX theater, botanical gardens, a wonderful children's antique
              carousel ride, and (our favorite) a miniature train for parents
              and their children to ride.
            </p>
            <p>
              Also in the Downtown area is the famed Gaslamp Quarter. Known for
              its exciting nightlife, this is a great area to stay for a night
              on the town. There are over 35 nightclubs in the area, many
              featuring Jazz music. Close by the area is Horton Plaza, a
              gorgeous indoor shopping center with many fine shops. There also
              several nice hotel chains in the area, some of the high-rise
              hotels are right on the bay and offer stunning views.
            </p>
            <p>
              Northwest of Downtown San Diego is the Mission Bay area. It is
              located right by the ocean and has two islands as well as many
              coves and inlets. It is a great place to stay with many wonderful
              hotels, especially if you like water sports and boating. In the
              Mission Bay area is SeaWorld. It is a 189-acre adventure park with
              shows, rides and, of course, Shamu the killer whale. This is a
              great place to take the kids.
            </p>
            <p>
              If you would like to experience some of the city's Hispanic
              history, take a walk around Old Town, just north of downtown. This
              historic park is a California settlement depicting the Mexican and
              early American years of the city between 1821-1872. There are
              adobe homes and historic buildings. There are many authentic
              Mexican shops and restaurants to choose from. You can shop in the
              Bazaar del Mundo, or just sit back and enjoy the mariachi bands
              and folk dancers while having a Mexican libation. There are even
              Trolley Cars that can take you from Old Town to many places around
              the city such as Balboa Park, the Zoo, Gaslamp Quarter and
              Coronado.
            </p>
            <p>
              San Diego Bay is home to the U.S. Coast Guard Base, Marine Corps
              Recruiting Depot and the Naval Air Station. Here you can visit the
              Maritime Museum of San Diego on the Embarcadero. There you will
              find 3 historic vessels: the Star of India 1863 tall ship; the
              Berkeley, an 1898 ferry; and the Medea, the 1904 steam yacht.
              Inside there are many maritime and nautical exhibits to look at as
              well.
            </p>
            <p>
              Located on a peninsula between San Diego Bay and the ocean is a
              wonderful beach resort named Coronado. It is home to the famous
              Coronado hotel built in 1888. "The Del" as the hotel is commonly
              referred to is a landmark resort with Victorian turrets, a
              spectacular restaurant and a luxurious pool. It is rumored by some
              to be "haunted." You can take a drive over the stunning Coronado
              Bay Bridge to get there. There is also a ferry that runs between
              Coronado and San Diego. Visitors like to rent bikes and small
              boats, especially in the summertime. There is also wonderful
              surfing and swimming in the area.
            </p>
            <p>
              A little north of San Diego, in the City of Carlsbad, is Legoland
              California. This is an amusement park for the age 12 and under
              crowd, with over 50 rides, shows and attractions, set on 128
              acres. Many of the structures are made from colorful LEGOS. Kids
              can ride the new Knights' Tournament Adventure or race to hose
              down a burning building at Funtown Fire Academy. Kids can dig for
              fossils at Dig Those Dinos or drive a miniature electric car at
              Volvo Drive School. Whatever the kids choose to do, it is a great
              place to visit and enjoy for the entire day.
            </p>
            <p>
              Two resort towns worth visiting just north of Downtown San Diego
              are La Jolla, Del Mar. These quaint towns are located right on the
              ocean and offer excellent hotels, restaurants, shops and
              galleries. They are a nice get-away for the bigger city of San
              Diego and are perfect for a romantic stay. La Jolla's exclusive
              Prospect Street near the water's edge is filled with high-end art
              galleries and seafood restaurants with ocean views. Just up the
              coastline in Del Mar you will find a wonderful town filled with
              boutique shops, as well as the famous Del Mar Race Track.
            </p>
            <p>
              While in the coastal area, a visit to Birch Aquarium at Scripps
              Institution of Oceanography is well worthwhile in Torrey Pines. It
              is located on a hillside above UC San Diego. The aquarium features
              marine life from the Pacific Ocean. There are terrific interactive
              exhibits and changing displays that explore the latest in
              oceanography.
            </p>
          </ShowMoreText>
        </div>

        <hr />

        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in San Diego</h3>
            <ol>
              <li>SeaWorld - Spend the day being entertained</li>
              <li>The San Diego Zoo - Fun for the whole day</li>
              <li>Balboa Park - Visit the many attractions and museums</li>
              <li>
                Del Mar - Go to the beach and visit the many shops in Old Del
                Mar
              </li>
              <li>Gaslamp Quarter - have dinner and go clubbing</li>
              <li>
                La Jolla - Walk along Prospect Street and have a fine seafood
                dinner
              </li>
              <li>Old Town - Terrific place to eat Mexican food</li>
              <li>Legoland - Great place to take the kids</li>
              <li>
                Coronado Island - drive over the scenic bridge and visit “The
                Del”
              </li>
              <li>Golf at Torrey Pines</li>
            </ol>
          </div>
          <div className="info">
            <h3>San Diego Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.sandiego.org/plan/visitors-information-services.aspx"
                  rel="noreferrer"
                  target="_blank"
                >
                  San Diego Convention &amp; Visitors Bureau
                </a>{' '}
                The official travel resource for the San Diego region
              </li>
              <li>
                <a
                  href="http://zoo.sandiegozoo.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  San Diego Zoo
                </a>{' '}
                The 100-acre Zoo is home to 4,000 rare and endangered animals
              </li>
              <li>
                <a
                  href="https://www.seaworld.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  SeaWorld Adventure Park
                </a>{' '}
                Marine zoological park on 22 acres along the shore of Mission
                Bay
              </li>
              <li>
                <a
                  href="http://www.golfsd.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  San Diego Golf Pages
                </a>{' '}
                Lots of information on San Diego golf courses
              </li>
              <li>
                <a
                  href="https://www.balboapark.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Balboa Park
                </a>{' '}
                Balboa Park is a 1,200 acre urban cultural park
              </li>
              <li>
                <a
                  href="https://www.artwalksandiego.org/missionfederal/"
                  rel="noreferrer"
                  target="_blank"
                >
                  San Diego Art Walk
                </a>{' '}
                Annual Art Walk with local artist
              </li>
              <li>
                <a
                  href="https://aquarium.ucsd.edu/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Brich Aquarium
                </a>{' '}
                The public exploration center for Scripps Institution of
                oceanography
              </li>
              <li>
                <a
                  href="https://www.nps.gov/cabr/index.htm"
                  rel="noreferrer"
                  target="_blank"
                >
                  Carbrillo National Monument
                </a>{' '}
                The park offers a superb view of San Diego's harbor and skyline
              </li>
              <li>
                <a
                  href="https://www.sandiego.gov/lifeguards/beaches/"
                  rel="noreferrer"
                  target="_blank"
                >
                  San Diego Beaches
                </a>{' '}
                Beach info from the City of San Diego website
              </li>
              <li>
                <a
                  href="http://sandiegohistory.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  San Diego History
                </a>{' '}
                History of San Diego with a timeline, photos and biographies
              </li>
              <li>
                <a
                  href="http://www.gaslamp.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Gas Lamp Quarter
                </a>{' '}
                San Diego's dining, entertainment and urban shopping district
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/california`)
  const cams: PageProps = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default SanDiegoPage
