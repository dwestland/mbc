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
  const camPageTargetType = 'New Zealand'

  const pageSections = findStates(data, camPageTargetType)
  const pageSectionsArray = pageSections
    ? pageSections.map((state: { state: string }) => state.state)
    : []

  return (
    // CUSTOMIZE PAGE 2 of 5 - Add title and description
    <Layout
      documentTitle={`${camPageTargetType} Beach Webcams - MyBeachCams`}
      documentDescription="Explore live beach webcams in New Zealand, featuring stunning views of Auckland and Wellington's coastlines and harbors.."
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
            New Zealand's coastline unfolds with breathtaking scenes of nature
            and city life. In Auckland, the Hauraki Gulf webcam sweeps across
            Bean Rock and Browns Island, with Rangitoto Volcano looming in the
            distance. The Auckland East webcam reveals the city's lively harbor,
            sun-kissed beaches, and scattered islands. Further south,
            Wellington's Castlepoint Lighthouse perches on a rugged reef,
            surveying the lagoon and Castle Rock. The Wellington Airport webcam
            showcases Lyall Bay's waves, where surfers carve through the water
            as planes descend overhead. Whether you're plotting a trip or
            tracking the weather, these webcams unveil New Zealand's captivating
            oceans and harbors.
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
            New Zealand's varied coastlines burst with natural wonders and
            dynamic urban life. The Hauraki Gulf in Auckland is a stunning
            starting point. This webcam unveils iconic landmarks like Bean Rock
            and Browns Island. It sweeps across the Gulf's expansive waters,
            offering glimpses of the towering Rangitoto Volcano. North Head and
            Torpedo Bay emerge on the horizon. The landscape shifts with every
            pass of the camera, revealing peaceful waters and volcanic remnants.
          </p>
          <p>
            Auckland's East webcam animates the city. The port thrums with
            activity, ships gliding in and out of the harbor. From here, you can
            spot the wide beaches tracing the coast. The islands punctuate the
            view, offering a tranquil counterpoint to the city's bustle. It's a
            vivid mix of urban pulse and serene waters, with each moment
            revealing something fresh.
          </p>
          <p>
            In Wellington, Castlepoint Lighthouse stands tall, surveying the
            coast. Perched atop a jagged reef, the lighthouse has weathered the
            elements since 1913. The Castlepoint webcam frames the shimmering
            lagoon and Castle Rock, two striking features of this coastal
            landscape. The water sparkles below the cliffs, a wild and untamed
            scene. Watching the tides churn here feels like syncing with
            nature's heartbeat.
          </p>
          <p>
            The Wellington Airport webcam stirs with movement. Lyall Bay's waves
            beckon surfers, their boards slicing through the surf as planes
            glide overhead. It's a rare, exhilarating view—surf and flight
            sharing the same space. The camera catches the constant surge of the
            waves, a blend of energy and flow.
          </p>

          <p>
            These webcams expose New Zealand's remarkable coastal beauty,
            merging nature's force with human life. Ideal for travelers and
            those eager to immerse themselves in these breathtaking vistas.
          </p>
        </ShowMoreText>
        <hr />
        <div className="things-and-info">
          <div className="things">
            <h3>Top 10 Things to do in {camPageTargetType}</h3>
            <ol>
              <li>Swim at Piha Beach on the West Coast.</li>
              <li>Kayak through Abel Tasman National Park.</li>
              <li>Explore the black sand at Karekare Beach.</li>
              <li>Snorkel at Goat Island Marine Reserve.</li>
              <li>Walk along Mission Bay in Auckland.</li>
              <li>Surf the waves at Raglan Beach.</li>
              <li>Visit the seal colony at Cape Palliser.</li>
              <li>Paddleboard at Lake Wanaka.</li>
              <li>Stroll through Cathedral Cove's sea arch.</li>
              <li>Take a boat trip to the Bay of Islands.</li>
            </ol>
          </div>
          <div className="info">
            <h3>{camPageTargetType} Links and Local Information</h3>
            <ul>
              <li>
                <a
                  href="https://www.newzealand.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New Zealand Tourism
                </a>{' '}
                - Discover top attractions, beaches, and travel tips.
              </li>
              <li>
                <a
                  href="https://www.metservice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MetService
                </a>{' '}
                - Check local weather forecasts for beach days and travel
                planning.
              </li>
              <li>
                <a
                  href="https://www.aucklandnz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Auckland NZ
                </a>{' '}
                - Find the best beaches, events, and coastal spots in Auckland.
              </li>
              <li>
                <a
                  href="https://www.wellingtonnz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wellington NZ
                </a>{' '}
                - Explore waterfronts, local guides, and event listings for
                Wellington.
              </li>
              <li>
                <a
                  href="https://www.doc.govt.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Department of Conservation
                </a>{' '}
                - Learn about national parks, marine reserves, and protected
                beaches.
              </li>
              <li>
                <a
                  href="https://weather.com/weather/today/l/-36.8484,174.7622"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Auckland Weather
                </a>{' '}
                - Get the latest weather updates for Auckland's beaches and
                waterfront.
              </li>
              <li>
                <a
                  href="https://weather.com/weather/today/l/-41.3331,174.8159"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wellington Weather
                </a>{' '}
                - View current weather for planning visits to Wellington's
                coast.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="legend">
        <span className="green-dot">&nbsp;</span>MyBeachCam hosted page
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
    cams = cams.filter((cam) => cam.country === 'New Zealand')

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
