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
  const camPageTargetType = 'Maui'

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
            The island of Maui is one of Hawaii's most popular destinations for
            vacations and holidays. Maui has over 33 miles of exquisite public
            beaches. Some of these beaches have jewel-toned sand, in such colors
            as red, gold, green, black and white. The most popular resort areas
            on Maui are Kapalua, Kaanapali, Lahaina, Wailea and Makena. These
            resort areas are on the western, or leeward shore and offer the
            traveler spectacular beaches. There is also the lovely, tropical
            village of Hana, with its world-famous "Road to Hana." On this
            special island surfing, scuba diving, snorkeling and spectacular
            sunsets create a serenely gorgeous way of life.
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
            One of the best and most popular beaches on Maui is Kaanapali Beach.
            It stretches 4-miles long and is lined with hotels, resorts,
            open-air restaurants and the Whalers Village shopping center. A
            paved walk along the coast makes strolling from your hotel to these
            shops and restaurants a breeze. Kaanapali beach is also known for
            its Black Rock. This is a beautiful sandy beach with the famous
            Black Rock at the north end. It is one of the best snorkeling spots
            on the island.
          </p>
          <p>
            Maui offers travelers a range of accommodations to fit their budget,
            from modest condos to 5-star luxury resorts such as the Four Seasons
            and Ritz-Carlton, to even a luxury cruise. A travel professional or
            web surfing can help you arrange flights, lodging, cruises or even
            travel-packages. There are also many discounted vacations and
            holiday travel packages available on travel sites.
          </p>
          <p>
            One of the best and most popular beaches on Maui is Kaanapali Beach.
            It stretches 4-miles long and is lined with hotels, resorts,
            open-air restaurants and the Whalers Village shopping center. A
            paved walk along the coast makes strolling from your hotel to these
            shops and restaurants a breeze. Kaanapali beach is also known for
            its Black Rock. This is a beautiful sandy beach with the famous
            Black Rock at the north end. It is one of the best snorkeling spots
            on the island.
          </p>
          <p>
            Just 2-miles south of Kaanapali is the historic fishing village of
            Lahaina. With its hip eateries along Front Street, colorful
            boutiques, historic museums and contemporary art galleries, Lahaina
            is a great place to hang out in the evenings. Further south along
            the coast is the resort oasis of Wailea. Wailea is a favored area
            for the well-healed traveler. With its luxury hotels, 7 golf courses
            and upscale "Shops at Wailea," visitors can relax and shop and never
            need to leave the area.
          </p>
          <p>
            Inland from Wailea, one can travel to the base of the Haleakala
            Crater and then drive up 10,000 feet to the summit. You can drive up
            to the summit in your own car or there are several popular tours to
            choose from, such as a downhill bike ride. Many people prefer to do
            to the summit very early in the morning to watch the sun rise over
            Haleakala. You might also consider taking a day or two and make the
            spectacular drive to Hana. The "road to Hana" is a 50-mile drive
            full of magnificent landscapes, such as waterfalls, botanical
            gardens and lush rainforests. It's well worth the drive!
          </p>
          <p>
            Maui is also home to one of the best snorkeling spots in the USA.
            Just off the southern coast is the Molokini Crater. This is a
            half-submerged extinct volcano crater where hundreds of beautiful
            tropical fish and rare marine life like to gather, and it makes for
            a wonderful day adventure.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Go to a colored-sand beach</li>
              <li>Take in a beach luau</li>
              <li>Visit the Haleakala Crater</li>
              <li>Visit a real plantation, The Maui Tropical Plantation</li>
              <li>Go snorkeling (Molokini Crater or Black Rock)</li>
              <li>Relax at a luxurious spa</li>
              <li>Drive the "Road to Hana"</li>
              <li>Golf at Wailea</li>
              <li>Visit art galleries and dine in Lahaina</li>
              <li>
                Rent a sailboat, take a day sail or an evening sunset cruise
              </li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.gohawaii.com/islands/maui"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Official Tourism Maui Site
                </a>{' '}
                - Comprehensive website for planning your Maui vacation
              </li>
              <li>
                <a
                  href="http://www.mauinews.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  The Maui News
                </a>{' '}
                - Maui's newspaper since 1900
              </li>
              <li>
                <a
                  href="https://hawaiistateparks.org/parks/maui/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  State Parks of Maui
                </a>{' '}
                - Descriptions of the different State Parks of Maui
              </li>
              <li>
                <a
                  href="http://www.mauimarathon.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Maui Marathon
                </a>{' '}
                - Run a marathon next time you come to Maui
              </li>
              <li>
                <a
                  href="http://www.polynesia.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Hawaii's Polynesian Cultural Center
                </a>{' '}
                - Hawaii's Polynesian Cultural Center
              </li>
              <li>
                <a
                  href="http://mauimapp.com/information/hiking.htm"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Maui Hiking Trails
                </a>{' '}
                - Maps of hikes all over Maui
              </li>
              <li>
                <a
                  href="https://portal.ehawaii.gov/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  eHawaii.gov
                </a>{' '}
                - Connecting You to Hawaii State Government
              </li>
              <li>
                <a
                  href="http://www.mauifilmfestival.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Maui Film Festival{' '}
                </a>{' '}
                - Hawaii's Premiere Film Festival
              </li>
              <li>
                <a
                  href="https://www.gohawaii.com/islands/maui/things-to-do/land-activities/Golf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Maui Golf
                </a>{' '}
                - Where to golf at Maui
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
    cams = cams.filter((cam) => cam.area === 'Maui')

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
