import React from 'react'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet'
import Layout from '@/components/Layout'

import NavbarOld from '@/components/NavbarOld'

interface CamsDetailProps {
  cams: { title: string }[]
}
interface Cams {
  id: string
  title: string
  slug: string
  webcamUrl: string
  imageName: string
  oldImageUrl: string
  description: string
  country: string
  state: string
  area: string
  subarea: string
  lat: number
  lng: number
}

const Details = ({
  cams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  console.log(
    '%c CamDetails cams.cams ',
    'background: purple; color: white',
    cams.cams
  )

  const {
    id,
    title,
    slug,
    webcamUrl,
    imageName,
    description,
    country,
    state,
    area,
    subarea,
    lat,
    lng,
  } = cams.cams

  console.log('%c CamDetails title ', 'background: purple; color: white', title)

  const imageUrl: string = imageName
    ? process.env.IMAGE_SRC_ROOT + imageName
    : '/images/no-image.jpg'

  return (
    <Layout
      title="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      description="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <NavbarOld />
        <h1>Cam Details</h1>
        <ul>
          <li>
            <strong>ID:</strong> {id}
          </li>
          <li>
            <strong>Title:</strong> {title}
          </li>

          <li>
            <strong>webcamUrl:</strong>&nbsp;
            <Link href={webcamUrl}>
              <a target="_blank">{webcamUrl}</a>
            </Link>
          </li>
          <li>
            <strong>imageName:</strong> {imageName}
            <br />
            <Image src={imageUrl} width={260} height={195} alt={title} />
          </li>
          <li>
            <strong>description:</strong> {description}
          </li>
          <li>
            <strong>country:</strong> {country}
          </li>
          <li>
            <strong>state:</strong> {state}
          </li>
          <li>
            <strong>area:</strong> {area}
          </li>
          <li>
            <strong>subarea:</strong> {subarea}
          </li>
          <li>
            <strong>lat:</strong> {lat}
          </li>
          <li>
            <strong>lng:</strong> {lng}
          </li>
        </ul>
        {/* <MapContainer center={[33.9765, -118.4483]} zoom={14}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[33.9765, -118.4483]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            <Tooltip direction="bottom" offset={[-10, 40]}>
              Tooltip for Marker
            </Tooltip>
          </Marker>
        </MapContainer> */}
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/${id}`)
  const cams: CamsDetailProps = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default Details
