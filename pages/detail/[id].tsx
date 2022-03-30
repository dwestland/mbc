import React from 'react'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
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
  const DetailsMap = dynamic(() => import('@/components/DetailsMap'), {
    ssr: false,
  })

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
            <Image src={imageUrl} width={400} height={300} alt={title} />
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
        <DetailsMap lat={lat || 0} lng={lng || 0} />
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
