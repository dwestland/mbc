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
  const camPageTargetType = 'Gulf Coast'
  const state = cams[0]?.state || ''
  const pageSections = findSubareas(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((area: { subarea: string }) => area.subarea)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType}, ${state} Webcams - MyBeachCams`}
      documentDescription={`Explore beach webcams from ${camPageTargetType}, ${state} including ${
        pageSectionsArray.length === 1
          ? pageSectionsArray[0]
          : `${pageSectionsArray.slice(0, -1).join(', ')} and ${
              pageSectionsArray[pageSectionsArray.length - 1]
            }.`
      }`}
    >
      <div className="layout">
        <h1>
          {camPageTargetType}, {state} Webcams
        </h1>
        <h3 className="cam-page-subheading">
          Explore beach webcams from {camPageTargetType}, {state} including{' '}
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
            Immerse yourself in the Gulf Coast of Florida wit our live cams.
            From Clearwater to Naples, soak in breathtaking views. Revel in
            white sand beaches, tranquil waters, and fiery sunsets. Observe the
            Don Cesar Inn cam at St. Pete Beach or the Clearwater Beach cams.
            See Sarasota's beauty through live streams from Siesta Key and Bird
            Key. In Fort Myers, gaze upon the coastline at the Pink Shell
            Resort. Naples offers serene glimpses from the Naples Pier and
            Turtle Sunrise cam. These cams unveil the Gulf Coast's allure,
            providing a portal to paradise from Tampa Bay to Naples.
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
            Journey deep into the heart of Florida's Gulf Coast. From Tampa
            Bay's lively shores to Naples' serene beaches, these cams capture it
            all. Each view brings you closer to the coast's wonders.
          </p>

          <p>
            In St. Pete Beach, the Don Cesar Inn cam provides a grand view. The
            iconic pink palace stands tall, overlooking the Gulf. Watch as waves
            lap the shore. The Clearwater Beach cams deliver scenes of white
            sand beaches. Each stream showcases the area's natural beauty. Here,
            the sun paints the sky in vibrant hues.
          </p>
          <p>
            Move south to Anna Maria Island, where the Bimini Bay cam awaits.
            This cam reveals a sheltered bay, perfect for sailing and fishing.
            You can almost feel the ocean breeze. Frenchy's Clearwater Beach cam
            highlights the local charm. Watch as visitors savor seafood at this
            beloved spot. The Gulf's gentle waves create a soothing backdrop.
          </p>
          <p>
            Head further down to Sarasota. Siesta Key's live cam shows the
            island's famous quartz sands. The beach here is pure and soft. Bird
            Key Yacht Club cam offers a glimpse of Sarasota Bay. Boats drift by,
            adding a touch of tranquility. These cams provide a serene escape.
          </p>
          <p>
            In Fort Myers, the Pink Shell Resort cam invites you to explore. Two
            angles show off the beach and marina. The calm waters are ideal for
            a quiet getaway. The Naples Pier cam offers a historic view. This
            iconic structure has stood since 1888. Nearby, the Turtle Sunrise
            cam captures early morning light. Boats dot the water, reflecting
            the dawn.
          </p>
          <p>
            These webcams let you experience the Gulf Coast's essence. From
            Tampa Bay to Naples, each scene tells a story. Dive in and discover
            the magic of Florida's western shores, where every cam connects you
            to the coast's vibrant life.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Bask on white sands at Clearwater Beach.</li>
              <li>Walk along the historic Naples Pier.</li>
              <li>Revel in the quartz sand at Siesta Key Beach.</li>
              <li>Gaze at surreal art in the Dali Museum.</li>
              <li>Glide through calm waters at Bimini Bay.</li>
              <li>Angle for a catch at Bokeelia Pier.</li>
              <li>Meander through the Naples Botanical Garden.</li>
              <li>Sail along the coast at Hubbard's Marina.</li>
              <li>Frolic in the surf at Fort Myers Beach.</li>
              <li>Pedal around Anna Maria Island.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.visitflorida.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Florida
                </a>{' '}
                - Unearth travel tips, attractions, and local events.
              </li>
              <li>
                <a
                  href="https://www.floridastateparks.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Florida State Parks
                </a>{' '}
                - Wander through state parks, uncover activities, and plan your
                outdoor escapades.
              </li>
              <li>
                <a
                  href="https://www.usgulfcoasttravelguide.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gulf Coast Travel Guide
                </a>{' '}
                - Look into local insights and uncover the Gulf Coast's
                treasures.
              </li>
              <li>
                <a
                  href="https://www.clearwaterbeach.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clearwater Beach Official Site
                </a>{' '}
                - Scout out lodging, dining, and must-see spots at Clearwater
                Beach.
              </li>
              <li>
                <a
                  href="https://www.paradisecoast.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Naples, Marco Island & Everglades CVB
                </a>{' '}
                - Navigate Naples, Marco Island, and the Everglades with
                activity and accommodation tips.
              </li>
              <li>
                <a
                  href="https://www.visitstpeteclearwater.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  St. Petersburg/Clearwater Area Convention & Visitors Bureau
                </a>{' '}
                - Embark on a journey through St. Petersburg and Clearwater with
                this comprehensive guide.
              </li>
              <li>
                <a
                  href="https://www.visitsarasota.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sarasota County Official Website
                </a>{' '}
                - Explore Sarasota's attractions, beaches, and cultural
                landmarks.
              </li>
              <li>
                <a
                  href="https://weather.com/weather/today/l/27.9604,-82.5394"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Weather.com
                </a>{' '}
                - Stay tuned to the latest weather updates for the Gulf Coast.
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
    cams = cams.filter((cam) => cam.area === 'Gulf Coast')

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
