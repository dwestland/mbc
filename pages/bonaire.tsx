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
  const camPageTargetType = 'Bonaire'

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
        <h3 className="cam-page-subheading">
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
            Bonaire beckons with its tropical allure and crystal-clear waters.
            Gaze through the Sorobon Beach webcam, unveiling the tranquil seas
            and soft sands near the Dunkerbeck Pro Center. Submerge into the
            underwater world with the Harbour Village Coral Reef Cam, where
            Bonaire's coral reefs flourish with vibrant marine life. Set within
            the Bonaire National Marine Park, it entices divers and nature
            enthusiasts alike. These webcams open a portal to this serene
            island, guiding your next beach escape or simply inviting you to
            savor the coastal beauty from afar. Immerse yourself in Bonaire's
            charm today.
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
            Bonaire dazzles as an island treasure, celebrated for its untouched
            coastlines and rich marine life. The Sorobon Beach webcam frames a
            glimpse of this sanctuary. Anchored at the Dunkerbeck Pro Center, it
            reveals shimmering turquoise waters kissing soft, white sands. Watch
            windsurfers carve through the shallow waves, mastering the breezes
            of Sorobon. It's a perfect scene to feel the pulse of the Caribbean.
          </p>
          <p>
            The Harbour Village Coral Reef Cam plunges into Bonaire's vibrant
            underwater realm. Nestled in the Bonaire National Marine Park, this
            live feed unveils a thriving coral landscape. Fish dart and dance
            through the crystal waters, weaving among the vivid coral
            formations. Even through a screen, the ocean's call to adventure is
            undeniable, drawing divers and explorers alike.
          </p>
          <p>
            Bonaire isn't just for beach lovers; it captivates anyone enchanted
            by nature. The island's marine parks and reserves provide a
            sanctuary for wildlife seekers and eco-travelers. Venture inland to
            the rugged salt flats, where flocks of flamingos gather, painting
            the landscape in hues of pink. Along the shores, snorkelers and
            divers gravitate toward Bonaire's renowned reefs, pulled by the
            allure of vibrant marine life and crystal-clear visibility.
          </p>
          <p>
            These webcams unlock the essence of Bonaire's untouched beauty.
            Whether you're shaping your next tropical escape or savoring the
            island from afar, Bonaire's webcams offer a window into its raw,
            unspoiled nature. They capture the soul of an island defined by the
            sea, where every shoreline and reef sings with the richness of
            nature's bounty.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Snorkel in Bonaire National Marine Park.</li>
              <li>Explore the reefs at Klein Bonaire.</li>
              <li>Relax on Sorobon Beach's soft sands.</li>
              <li>Windsurf at Lac Bay's shallow waters.</li>
              <li>Dive the famous Hilma Hooker shipwreck.</li>
              <li>Swim at 1000 Steps Beach.</li>
              <li>Visit the salt flats and see flamingos.</li>
              <li>Kayak through the mangroves of Lac Bay.</li>
              <li>Paddleboard along the coastline of Bonaire.</li>
              <li>Watch marine life at the Coral Reef Cam.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.tourismbonaire.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tourism Bonaire
                </a>{' '}
                - Find travel tips, island highlights, and activities to
                explore.
              </li>
              <li>
                <a
                  href="https://www.bonairemarinepark.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bonaire Marine Park
                </a>{' '}
                - Learn about marine life and conservation efforts in Bonaire's
                waters.
              </li>
              <li>
                <a
                  href="https://www.weather.com/weather/today/l/12.1736,-68.2906"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bonaire Weather
                </a>{' '}
                - Check live weather updates and forecasts for your trip.
              </li>
              <li>
                <a
                  href="https://www.stinapabonaire.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  STINAPA Bonaire
                </a>{' '}
                - Discover Bonaire's protected national parks and wildlife
                reserves.
              </li>
              <li>
                <a
                  href="https://www.infobonaire.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Info Bonaire
                </a>{' '}
                - Get practical travel information, guides, and accommodation
                tips.
              </li>
              <li>
                <a
                  href="https://www.bonaireisland.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bonaire Island Guide
                </a>{' '}
                - Find maps, events, and recommended activities on Bonaire.
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
    cams = cams.filter((cam) => cam.country === 'Bonaire')

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
