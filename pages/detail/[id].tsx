// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
import styles from '@/styles/Detail.module.scss'
import DeleteModal from '@/components/DeleteModal'
import FlagModal from '@/components/FlagModal'
import AdLeaderboard from '@/components/AdsenseLeaderboard'

interface CamsDetailProps {
  cams: { title: string }[]
}
interface Cams {
  id: string
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
}

const Details = ({
  cams,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const DetailsMap = dynamic(() => import('@/components/DetailsMap'), {
    ssr: false,
  })

  const { data: session } = useSession()
  const [isAdmin, setIsAdmin] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showFlagModal, setShowFlagModal] = useState(false)

  const {
    id,
    title,
    webcamUrl,
    imageName,
    description,
    country,
    state,
    area,
    subarea,
    lat,
    lng,
  }: Cams = cams.cams

  const deleteUrl = `${process.env.NEXT_PUBLIC_API}/cams/delete`

  useEffect(() => {
    if (session?.user.role === 'ADMIN') {
      setIsAdmin(true)
    }
  }, [session])

  const deleteCam = async () => {
    fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          id,
        },
      }),
    }).catch((error) => console.warn(error))
    setShowDeleteModal(false)
  }

  const handleDelete = () => {
    setShowDeleteModal(true)
  }

  const handleFlag = () => {
    setShowFlagModal(true)
  }

  const imageUrl: string = imageName
    ? process.env.AWS_IMAGE_SRC_ROOT + imageName
    : '/images/no-image.jpg'

  return (
    <Layout
      documentTitle="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      documentDescription="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <AdLeaderboard />
        <h1>Cam Details</h1>

        <div className="image-and-map">
          <div className="image">
            <Image src={imageUrl} width={400} height={300} alt={title} />
          </div>

          <div className="map">
            <DetailsMap lat={lat || 0} lng={lng || 0} />
          </div>
        </div>

        {isAdmin && (
          <div className={styles.admin}>
            <div className={styles.link}>
              <strong>ID:{id}</strong>
            </div>
            <div className={styles.link}>
              <Link href={`/cams/edit/${id}`}>
                <a className="btn link-as-button">Edit</a>
              </Link>
            </div>
            <button type="button" onClick={handleDelete} className="btn ">
              Delete Cam
            </button>
          </div>
        )}

        <AdLeaderboard />

        <div className={styles.camInfo}>
          <p>
            <strong>Title:</strong> {title}
          </p>

          <p>
            <strong>webcamUrl:</strong>&nbsp;
            <Link href={webcamUrl}>
              <a target="_blank">{webcamUrl}</a>
            </Link>
          </p>
          <p>
            <strong>Image Name:</strong> {imageName}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Country:</strong> {country}
          </p>
          <p>
            <strong>State:</strong> {state}
          </p>
          <p>
            <strong>Area:</strong> {area}
          </p>
          <p>
            <strong>Subarea:</strong> {subarea}
          </p>
          <p>
            <strong>Latitude:</strong> {lat}
          </p>
          <p>
            <strong>Longitude:</strong> {lng}
          </p>
          <button className="btn" type="button" onClick={handleFlag}>
            Flag this Cam
          </button>
        </div>
        <AdLeaderboard />
      </div>
      {showDeleteModal && (
        <DeleteModal
          onClose={() => setShowDeleteModal(false)}
          deleteCam={deleteCam}
          title={title}
        />
      )}
      {showFlagModal && (
        <FlagModal
          onClose={() => setShowFlagModal(false)}
          id={id}
          title={title}
          country={country}
          state={state}
          area={area}
          subarea={subarea}
        />
      )}
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
