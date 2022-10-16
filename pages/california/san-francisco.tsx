import React from 'react'
import { InferGetStaticPropsType } from 'next'
import ShowMoreText from 'react-show-more-text'
import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
import CamItem from '@/components/CamItem'
import data from '@/data/camLocationAreas'
import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'
import { getSixDigitRandom } from '@/utils/commonUtils'

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
  topCam: boolean
  mbcHosted: boolean
}

const SanFranciscoPage = ({
  cams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  // Next modal SSR
  const CamsMap: any = dynamic(() => import('@/components/CamsMap'), {
    ssr: false,
  })

  const country = 'USA'
  const state = 'California'
  const area = 'San Francisco'
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
      documentTitle="Beach Cams of San Francisco, California - Webcams at Golden Gate Bridge, San Francisco Bay and Alcatraz"
      documentDescription="Beach Cams and Surf Cams in San Francisco, California with webcams at Golden Gate Bridge, San Francisco Bay and Alcatraz Island."
    >
      <div className="layout">
        <h1>San Francisco Webcams</h1>
        <div className="content-and-ad">
          <div className="content">
            <CamsMap vectors={vectors} />
          </div>
          <div className="ad">
            <AdLarge />
          </div>
        </div>
        <p>
          We will show you over 20 webcams in San Francisco area. San Francisco,
          known as the "City by the Bay," is a worldly and seductive place, full
          of culture, magnificent sights and outstanding food. Its famous sights
          include the Golden Gate Bridge, cable cars, Victorian Row houses and
          its steep rolling hills. Surrounded by the Pacific Ocean and the San
          Francisco Bay, the city is subject to thick fog that rolls-in, often
          in the summer and fall.
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
              The Golden Gate Bridge opened In 1937 and is largely considered
              the symbol if San Francisco. The bridge is currently the 2nd
              longest single-span suspension bridge in the world. It is painted
              an "International Orange" color and is anchored by 746-foot-high
              twin towers, the tallest in the world. A drive (or walk) over the
              bridge is a must while in the city. There is a car toll of $3
              going southbound
            </p>
            <p>
              Another must is taking a ride on the famous cable cars. They were
              designed to carry passengers up the steep hills of San Francisco.
              There is even a cable car museum on Mason Street that has models
              and photographs of the early cable transit system, including the
              first cable car from 1873. Between the cable cars, trolley buses,
              ferries and just walking, you can see a lot of the city without
              even having to drive your car. If you do decide to drive, be sure
              to be careful before parking on the street. A much safer bet is to
              park your car in a parking garage or lot.
            </p>
            <p>
              San Francisco is known for its "hills," which in San Fran is 100
              feet in height or more. There are 42 hills within the city. Some
              of the most notable hills are Nob Hill, Pacific Heights, Russian
              Hill and Telegraph Hill. Coit Tower is located atop Telegraph Hill
              and is a landmark dedication to the San Francisco firefighters.
              From the top of this hill you can also get unparalleled panoramic
              views of the city. Also try and explore the Greenwich and Filbert
              steps, which is a brick staircase that leads down from there
              through a flowering hillside of gardens.
            </p>
            <p>
              An interesting day trip is to the remote Alcatraz Island out in
              the Bay. This former maximum security prison, know as "The Rock,"
              once held Al Capone. You can take the Blue & Gold ferry from Pier
              41 at Fisherman's Wharf. There is even a guided tour in which you
              can see the inside of actual cell blocks. Advance reservations are
              recommended. Alcatraz Island is now part of the Golden Gate
              National Recreation Area. Also located in this recreation area is
              the Presidio, where the city's fort originated. The Presidio
              finally closed as an Army post in 1994. Now there are miles of
              public hiking trails and bike paths. On its hills you can get a
              spectacular view of the surrounding ocean and bay.
            </p>
            <p>
              Down by the waterfront is the famous Fisherman's Wharf. Here you
              will find many interesting attractions such as the Wax Museum,
              Ripley's Believe It or Not Museum, and the Boudin Sourdough Museum
              and Tour where you can learn about the art of baking the original
              San Francisco sourdough bread and even get a taste. The Wharf
              contains many restaurants, markets, souvenir shops and tasty
              treats to buy, such as clam chowder in sourdough bowls.
            </p>
            <p>
              Next to the Wharf is The Embarcadero, an interesting waterfront
              area facing the eastern shoreline of the bay, and lined with
              different piers. Here you will find Pier 39, a 2-story shopping
              complex full of shops and restaurants and The Aquarium of the Bay.
              There are also interesting street performers and live stage
              entertainment. Be sure and see the sea lions that live on the
              docks. Close by is Pier 41 where you can catch the ferry to
              Alcatraz.
            </p>
            <p>
              Within walking distance of the Wharf is the Cannery and
              Ghirardelli Square. Originally a chocolate factory, Ghirardelli
              Square has become home to many specialty shops, bakeries and
              restaurants. However, you call still by some of that delicious
              Ghirardelli Chocolate there.
            </p>
            <p>
              If you do decide to take out the car, be sure a take a drive down
              Lombard Street, between Hyde St and Leavenworth St in the Russian
              Hill neighborhood. Known as "the crookedest street in the world,"
              this one-block long portion of the street follows a series of
              several S-curves, while descending at a 40-degree slope. Be sure
              that your brakes are working! You will also be amazed at the
              gorgeous, well-landscaped Art Deco-style homes that line this
              curvy street. If you don't have a car, you can take the stairs.
            </p>
            <p>
              While in the San Francisco you may want to take in a performing
              art. You can choose from the San Francisco Opera, San Francisco
              Ballet and the San Francisco Symphony, all are world-class venues.
              The city's two major performing halls are the Louise M. Davies
              Symphony Hall and the War Memorial Opera House; both are just west
              of the Civic Center. In addition, there are several theaters that
              have major touring plays and Broadway productions.
            </p>
            <p>
              For sports fans, you may want to take in a game. The San Francisco
              area is home to the SF 49ers and the Oakland Raiders NFL teams.
              During Baseball season you can see a SF Giants game or an Oakland
              A's game. And for basketball fans, you can watch The Bay Area's
              Golden State Warriors.
            </p>
            <p>
              Another interesting daytime activity is touring the area's
              Victorian Houses, known as "painted ladies." There are three main
              architectural types of Victorian Style homes: Italianate, Queen
              Anne and Stick Style. These homes were built between 1870 and
              1906. They were built very close together with very little outdoor
              space. The Queen Anne-style Victorian houses were built around the
              late 1800's and were embellished with intricately ornamented
              towers, turrets and cupolas, and painted in vibrant colors. Many
              of these beautiful homes are in the Pacific Heights, Cow Hollow
              and Haight-Ashbury districts, as well as in Alamo Square. The
              Hass-Lilienthal House in Pacific Heights, a Queen Anne Victorian
              built in 1886, currently has docent tours on Weds, Sat and Sun.
              There is even a walking tour of these Victorian homes that departs
              from the Westin St. Francis Hotel.
            </p>
            <p>
              A trip to San Francisco would not be complete without a visit to
              the Chinatown area on Grant Street. Here you will find fantastic
              Chinese restaurants, markets and shops. Be prepared to see a
              myriad of exotic foods, smells and colors all crammed into a
              narrow avenue and a series of back alleys. A real treat is to have
              some authentic dim sum on Sunday in one of the really good Chinese
              restaurants.
            </p>
            <p>
              Within walking distance from Chinatown is the North Beach area,
              San Francisco's Little Italy. Located near Vallejo and Grant St,
              here you will find many outdoor cafes, bakeries and authentic
              Italian restaurants. It's a great place to have lunch.
            </p>
            <p>
              Another great spot to visit is Union Square, at the corner of Gary
              and Powell streets. You can even take the Powell-Hyde cable car to
              get there. The square was built in 1850 and its focal point is a
              97-foot statue of Commodore George Dewey commemorating his Manila
              Bay victory over the Spanish in 1898. Union Square is the center
              of downtown life. There are restaurants, cafes and luxury hotels,
              such as the Westin St. Francis. Inside the lobby of this famous
              hotel is a well-known ornate grandfather clock. In the square are
              also some of the finest shops and retail stores such as Saks,
              Tiffany and Neiman-Marcus.
            </p>
            <p>
              Close by to Union Square is Nob Hill. Here you will also find some
              of the city's finest hotels, such as the historic Mark Hopkins.
              With its stunning bay and city views, Nob Hill is also home to
              some of the city's most expensive real estate. It was formerly
              home to the tycoons that made their fortunes in railroading and
              gold mining.
            </p>
            <p>
              Another point of interest is the Golden Gate Park. This 1017-acre
              park is a lush oasis featuring artificial lakes, miles of bridle
              paths and hiking trails. Within the park is a restored windmill,
              an equestrian center, golf course, boat rentals and a carousel.
              While you are at the park don't miss the Conservatory of Flowers
              and the Japanese Tea Garden.
            </p>
            <p>
              Should you have more time, a visit to the city's museums is a
              treat. Some of the most popular ones are the SF Museum of Modern
              Art, the beautiful California Palace of the Legion of Honor in
              Lincoln Park, the Asian Art Museum and the Exploratorium inside
              the Palace of Fine Arts. In addition, visit the Mission San
              Francisco de Asis, one of the oldest buildings in the city,
              founded in 1776. It has one of the most ornate alters of all of
              the Missions. There is also a Moorish-style basilica next door.
            </p>
            <p>
              Be sure to save some energy (and money) and treat yourself to a
              gourmet meal in one of the many upscale restaurants. Many of the
              best dining rooms and cocktails bars sit atop the city's luxury
              hotels. At the top of the Bank of America Building is the
              Carnelian Room restaurant and bar, with incredible city views.
              After dark the city comes alive with bars, clubs and lounges
              scattered about in the South of Market, Marina and North Beach
              areas. While you are out be sure and take a look up at the
              Transamerica Pyramid Building at 600 Montgomery St. This famous
              skyscraper is San Francisco's tallest building, with 48-stories,
              6000 windows and a 212-foot-tall spire on top. It can be seem from
              all around the city.
            </p>
          </ShowMoreText>
        </div>

        <hr />

        <div className="things-and-info">
          <div className="things">
            <h3>Top 12 Things to do in San Francisco</h3>
            <ol>
              <li>Take a drive across the Golden Gate Bridge</li>
              <li>Visit Fisherman’s Wharf</li>
              <li>Take a ride on a cable car</li>
              <li>Walk around and window shop Union Square</li>
              <li>Tour the Victorian houses known as the "pink ladies"</li>
              <li>Have some Dim Sum and tour around Chinatown</li>
              <li>Drive down Lombard St., the "crookedest street"</li>
              <li>Take a ferry to Alcatraz Island</li>
              <li>Have Cocktails atop a fine hotel</li>
              <li>
                Have Dinner in one of SF world-renowned gourmet restaurants
              </li>
              <li>
                View a performance of the famed San Francisco Opera or Ballet
              </li>
              <li>Visit The Embarcadero and Pier 39</li>
            </ol>
          </div>
          <div className="info">
            <h3>San Francisco Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="http://www.westland.net/california/san_francisco_hotels/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Top 10 San Francisco Hotels
                </a>{' '}
                Reviews of the best hotels in San Francisco and local travel
                information
              </li>
              <li>
                <a
                  href="http://www.sfzoo.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  San Francisco Zoo
                </a>{' '}
                Northern California's largest zoological park and conservation
                center
              </li>
              <li>
                <a
                  href="https://www.nps.gov/alca/index.htm"
                  rel="noreferrer"
                  target="_blank"
                >
                  Alcatraz Official Web Page
                </a>{' '}
                Tour Alcatraz Island, the former federal prison, military
                fortification, lighthouse, and site of a 1969-1972 Native
                American Occupation
              </li>
              <li>
                <a
                  href="http://www.cablecarmuseum.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Cable Car Museum
                </a>{' '}
                From the first run in 1873 to the present. Learn about the cable
                cars of San Francisco
              </li>
              <li>
                <a
                  href="https://www.nps.gov/goga/index.htm"
                  rel="noreferrer"
                  target="_blank"
                >
                  Golden Gate National Recreation Area
                </a>{' '}
                One of the largest urban national parks in the world
              </li>
              <li>
                <a
                  href="http://www.sanjose.com/the-cannery-at-del-monte-square-b3055"
                  rel="noreferrer"
                  target="_blank"
                >
                  The Cannery
                </a>{' '}
                Once the largest peach cannery in the world. Today, it's a
                vibrant waterfront marketplace
              </li>
              <li>
                <a
                  href="http://www.sfopera.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  San Francisco Opera
                </a>{' '}
                San Francisco Opera is an imaginative, emotional and sensual
                experience
              </li>
              <li>
                <a
                  href="http://www.sfgate.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  San Francisco Chronicle
                </a>{' '}
                Online home of the San Francisco Chronicle, and much more
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

export default SanFranciscoPage
