import React from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import ShowMoreText from 'react-show-more-text'
import Layout from '@/components/Layout'
import AdLarge from '@/components/AdLarge'
import CamsPageMap from '@/components/CamsPageMap'
import RenderSubareaSections from '@/components/RenderSubareaSections'
import data from '@/data/camLocationAreas'
import { findSubareas } from '@/utils/common'
import * as types from '@/utils/types'
import ErrorLoadingWebcams from '@/components/ErrorLoadingWebcams'

const AreaSubareaPage = ({
  cams,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (error) {
    return <ErrorLoadingWebcams />
  }

  // CUSTOMIZE PAGE 1 of 5 - Add camPageTargetType
  const camPageTargetType = 'Los Angeles'

  const pageSections = findSubareas(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((area: { subarea: string }) => area.subarea)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription={`Browse beach webcams from ${camPageTargetType}, including ${pageSectionsArray.join(
        ', '
      )}.`}
    >
      <div className="layout">
        <h1>{camPageTargetType} Webcams</h1>
        <h3 style={{ marginTop: '0' }}>
          Featuring beach webcams from{' '}
          {pageSectionsArray.slice(0, -1).join(', ') +
            (pageSectionsArray.length > 1
              ? ` and ${pageSectionsArray[pageSectionsArray.length - 1]}`
              : '')}{' '}
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
            This website has over 30 webcams in Los Angeles area. For the best
            beach destinations in Los Angeles, there is Santa Monica and to the
            south there is funky Venice Beach . Santa Monica is well known for
            its temperate climate and the world-famous Santa Monica Pier . If
            you are planning a visit, there are many luxury hotels in Santa
            Monica to choose from. If you want to get the down-to-earth
            experience, you should check out the Hotels in Venice. Though both
            of these locations are next to each other, in many ways they are
            worlds apart.
          </p>
        </ShowMoreText>

        <RenderSubareaSections pageSections={pageSections ?? []} cams={cams} />

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
            From the beaches of Santa Monica and Malibu, to the designer stores
            in Beverly Hills, to the movie studios in Hollywood, Los Angeles has
            something for everyone. Los Angeles is a city that's vast, sprawling
            and diverse, yet very dynamic. It is a mix of many different
            cultural and ethnic backgrounds and social classes. Los Angeles (or
            LA as it is most commonly referred to) is home to the nation's top
            film and television production. On any given day you can probably
            see TV and movie stars shopping around town or eating in trendy "hot
            spots." With over 3.5 million people, Los Angeles it is the 2nd
            largest city in the U.S.
          </p>
          <p>
            LA is made up of many different areas and neighborhoods, so a car is
            an absolute must to get around town. On the "Westside" near the
            beach, there are the areas of: Santa Monica, Venice, Marina del Rey,
            Brentwood, Pacific Palisades and Malibu. These popular beach areas
            have some of the city's best hotels. Air travel in and out of the
            Westside is an easy 20-30 minute commute from Los Angeles
            International Airport (LAX). Plan your entire holiday visiting the
            LA area, or stop there on the way to your vacation in Hawaii or San
            Diego.
          </p>
          <p>
            While visiting the beach community of Santa Monica, be sure and
            visit the Santa Monica Pier. There are games and rides for "kids" of
            every age. It is also where the historic Route 66 officially ends at
            the Pacific Ocean. Near to the Santa Monica pier is the 3rd Street
            Promenade. This terrific outdoor shopping area is 3 city blocks long
            and closed to cars and traffic. There are shops, restaurants, cafes,
            movie theaters, and best of all, street performers that will sing,
            dance and all-around entertain you as you stroll around down the
            block. Saturdays and Sundays are especially popular on the
            Promenade. Hotels and lodging in Santa Monica is also very diverse.
            Travelers can book anywhere from a 5-star hotel near the beach to a
            little 2-star motel or hostel.
          </p>
          <p>
            Bordering Santa Monica to the south is World Famous Venice Beach
            (see Beach Cam for live shots). This is an absolute must to visit,
            especially in the summer months. You will be amazed as you cruise
            down the boardwalk along the beach as renegade street performers
            juggle chain saws, gypsies tell your fortune and live mannequins
            strike a pose. As the locals say, "Only in LA." This 20-block long
            boardwalk is also filled with very funky shops and restaurants. Rent
            some skates or a beach-cruiser bike and really take in the scenery.
            You can also take a stroll around the Venice Canals, a small local
            neighborhood a few blocks away, fashioned after Venice, Italy. Take
            a walk along the canals on foot and admire the many Victorian-style
            colorful homes. Or, drive through this small area by car via Dell
            Street (a one-way street and the "secret" entrance to the canals.)
          </p>
          <p>
            Marina del Rey borders Venice to the south. This elegant, waterfront
            neighborhood is home to one of the largest recreational marinas in
            the country. There are several luxury hotels in the area, as well as
            a slew of top-notch seafood restaurants to choose from. You can take
            a walk through Fisherman's Village and rent a boat for an hour or a
            day. You can also take a sailing lesson, go on a fishing day trip,
            or just throw out a line and start fishing off the channel. In the
            summer you can take the Ferry to Catalina (the Catalina Express).
          </p>
          <p>
            On the other side of Santa Monica, to the north, is the Famed Malibu
            Beach. Malibu is home to many of the top movie stars and industry
            moguls. There are several chic restaurants in the small center of
            town. Take a stroll along the beach and see firsthand the beachfront
            homes that start at around $4 million for a shack, to upwards of $20
            million. Take the afternoon to lounge on the beach and get a tan.
            There are even a few choice restaurants that are literally right on
            the beach. Where you can put your toes in the sand while enjoying
            calamari and a tequila sunrise.
          </p>
          <p>
            Inland from Santa Monica, to the east, are the wonderful residential
            areas of Brentwood, Westwood and Bel Air (as in The Fresh Prince of
            Bel Air). Another must see is the J. Paul Getty Museum. This is a
            museum like no another. The buildings and gardens themselves are as
            much as a draw as the artifacts inside. Set high atop a hill in the
            Brentwood area, the views from this modern masterpiece in
            architecture are phenomenal. You can meander through the beautiful
            gardens, have lunch or dinner in its world-class restaurant or see
            the thousands of masterpieces in its collection. These include
            painting from such masters as Monet and Van Gogh. Newly re-opened is
            the Getty Villa in Malibu / Pacific Palisades.
          </p>
          <p>
            East of Brentwood is Beverly Hills, world famous for its movie-star
            residents, luxury retail stores and fabulous restaurants. On famed
            Rodeo Drive you can shop in such luxury stores as Cartier, Tiffany,
            Gucci, Chanel, Louis Vuitton and Ralph Lauren, to name just a few.
            Just around the corner are the elegant, larger retailers such as
            Saks Fifth Avenue, Neiman Marcus and Barneys. During the holiday
            season, the storefronts and streets are lit up brightly sparkling
            with lights and stunning ornaments and there are even crystal
            chandeliers that line Rodeo Drive. While you are there be sure to at
            least have lunch or dinner in one of the fine hotel restaurants,
            such as The Beverly Hills Hotel and its famous Polo Room, the Regent
            Beverly Hill Hotel (where "Pretty Woman" stayed) or at the romantic
            Bel Air Hotel (Oprah's Favorite). Or, have dinner in one of the many
            long-time established restaurants such as The Palm, Dan Tana's,
            Spagos or Trader Vic's. Make sure and look around for celebrities
            while you are there.
          </p>
          <p>
            At night Beverly Hills and its neighboring West Hollywood and
            Hollywood are know for their trendy "hot spots." Many of these bars
            and night clubs have exclusive VIP rooms reserved for the very rich
            or famous night owls out to party.
          </p>
          <p>
            During the daytime in Hollywood be sure to stop by Grauman's Chinese
            Theater to compare your hand and shoe size to those stars that have
            permanently sealed them in concrete. You can even see the latest
            movie there. During the summer months try and see a performance at
            the Hollywood Bowl, a beautiful outdoor amphitheater. Just east of
            Hollywood you can take a walk through Chinatown and experience some
            of the best dim sum around. If you are traveling with kids, a visit
            to Griffith Park can be lots of fun. On over 4200 acres, the park
            has a multitude of activities, such as the LA Zoo, pony rides,
            hiking trails, a train, merry-go-round and the terrific Griffin Park
            Observatory. Oh, while you're in the area be sure and look up to see
            the famous "Hollywood Sign" situated atop the hills of Hollywood.
          </p>
          <p>
            Los Angeles also has several amusement parks around the city to
            choose from. There is the original Disneyland in Anaheim, as well as
            Knott's Berry Farm. There is also Universal Studios located in
            Universal City and only minutes from Hollywood. Then there is Six
            Flags Magic Mountain, about a 25 minute drive north of LA.
          </p>
          <p>
            If you have time, check out Downtown LA. There you can visit Olvera
            Street for a taste of authentic Mexican food and see the city's
            oldest home. Along the courtyard there are many souvenir stands
            selling traditional Mexican clothes, instruments and treats. Just a
            short walk from there you can see the new Walt Disney Concert Hall
            as well as the Music Center. You can either buy tickets to a
            performance or take a guided tour of each of these theaters. Also
            Downtown is the Museum of Contemporary Art (MOCA). It houses one of
            the most spectacular collections of contemporary art collections in
            the country.
          </p>
          <p>
            Just west of Downtown is Museum Row, located in the Mid-Wilshire
            area. There you will find the LA County Museum of Art (LACMA). This
            large complex features paintings, sculptures and decorative arts
            from around the world. It also has more than 25 exhibits each year.
            Next door to LACMA is the La Brea Tar Pits. This is a spectacular
            outdoor exhibit featuring fossils from the ice-age. For car
            enthusiasts, across the street from LACMA is the Petersen Automotive
            Museum. It contains incredible exhibits depicting the history of the
            automobile. You can practically travel back in time and see
            authentic cars starting in the late 1800's through to modern day
            cars built for royalty.
          </p>
          <p>
            Just up the street, off Fairfax, you can have a meal and get some
            shopping in at The Grove Shopping Center and the Farmer's Market. In
            the Farmer's Market you can buy fresh fruit, handmade treats, and
            snack outdoors on a variety of specialty foods in this famous
            open-air market. Then you can take a trolley car to get to the
            center of The Grove, a new luxury shopping center fashioned after a
            European Village. Shop at such stores as Nordstrom, Pottery Barn and
            The Gap for souvenirs your friends and family will really love.
          </p>
          <p>
            A trip to LA would not be complete without a stroll down Melrose Ave
            (as in Melrose Place, the series). There you will find a mix of
            upscale, hip and funky shops along with a variety of ethnic
            restaurants and neighborhood bars. Along the way you may even run
            into some of today's young starlets having coffee or trying on
            vintage t-shirts.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Visit Santa Monica Beach and Pier</li>
              <li>Walk along The 3rd St. Promenade in Santa Monica</li>
              <li>Bike ride or rollerblade on the Venice Beach</li>
              <li>Shop on Rodeo Drive in Beverly Hills</li>
              <li>Tour Universal Studios</li>
              <li>Cocktails in a hip Hollywood "Hot Spot"</li>
              <li>Drive up the coast to Malibu for lunch on the beach</li>
              <li>Go to Disneyland</li>
              <li>Visit the J. Paul Getty Museum</li>
              <li>Take a ferry to Catalina Island</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.golflink.com/golf-courses/city.aspx?dest=los+angeles+ca"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Golf Courses
                </a>{' '}
                Maps and Info for Los Angeles golf courses
              </li>
              <li>
                <a
                  href="http://www.latimes.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Los Angeles Times
                </a>{' '}
                Biggest newspaper in LA
              </li>
              <li>
                <a
                  href="http://www.laalmanac.com/history/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Los Angeles History
                </a>{' '}
                The Los Angeles Almanac's interesting articles about different
                historic aspects of Los Angeles
              </li>
              <li>
                <a
                  href="http://www.lazoo.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Los Angeles Zoo
                </a>{' '}
                Everything you want to know about the LA Zoo
              </li>
              <li>
                <a
                  href="https://www.lacity.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  City of Los Angeles
                </a>{' '}
                The Official Web Site of The City of Los Angeles
              </li>
              <li>
                <a
                  href="https://hollywoodsign.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Hollywood Sign
                </a>{' '}
                It's more than just nine white letters spelling out a city's
                name; it's one of the world's most evocative symbols
              </li>
              <li>
                <a
                  href="http://www.seeing-stars.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Seeing Stars
                </a>{' '}
                The ultimate guide to Hollywood and celebrities
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
    cams = cams.filter((cam) => cam.area === 'Los Angeles')

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

export default AreaSubareaPage
