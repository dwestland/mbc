import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react'
import CamCard from '@/components/CamCard'
// import styles from '@/styles/CamsPage.module.scss'

interface Cam {
  area: string
  country: string
  description: string
  hidden: boolean
  id: number
  imageName: string
  lat: number
  lng: number
  longDescription: string
  mbcHostedYoutube: boolean
  moreCams: string
  postalCode: string
  state: string
  subarea: string
  title: string
  titleSlug: string
  topCam: boolean
  youtubeId: string
  webcamUrl: string
}

interface CamsPageProps {
  cams: Cam[]
}

const CamsPage = ({
  cams,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <div>
    <h1>Webcams from Around the World</h1>
    <div>
      {cams.map((cam) => (
        <CamCard key={cam.id} cam={cam} />
      ))}
    </div>
  </div>
)

export const getServerSideProps: GetServerSideProps<
  CamsPageProps
> = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams-all`)
  const cams: Cam[] = await res.json()
  console.log('%c cams ', 'background: red; color: white', cams)

  return {
    props: {
      cams,
    },
  }
}

export default CamsPage
