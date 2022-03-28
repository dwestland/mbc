import React from 'react'
import { InferGetStaticPropsType } from 'next'
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

  console.log(
    '%c CamDetails cams.cams.title ',
    'background: purple; color: white',
    cams.cams.title
  )

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
            <strong>ID:</strong> {cams.cams.id}
          </li>
          <li>
            <strong>Title:</strong> {cams.cams.title}
          </li>
          <li>
            <strong>Slug:</strong> {cams.cams.slug}
          </li>
          <li>
            <strong>webcamUrl:</strong> {cams.cams.webcamUrl}
          </li>
          <li>
            <strong>imageName:</strong> {cams.cams.imageName}
          </li>
          <li>
            <strong>oldImageUrl:</strong> {cams.cams.oldImageUrl}
          </li>
          <li>
            <strong>description:</strong> {cams.cams.description}
          </li>
          <li>
            <strong>country:</strong> {cams.cams.country}
          </li>
          <li>
            <strong>state:</strong> {cams.cams.state}
          </li>
          <li>
            <strong>area:</strong> {cams.cams.area}
          </li>
          <li>
            <strong>subarea:</strong> {cams.cams.subarea}
          </li>
          <li>
            <strong>lat:</strong> {cams.cams.lat}
          </li>
          <li>
            <strong>lng:</strong> {cams.cams.lng}
          </li>
        </ul>
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
