import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
import styles from '@/styles/Detail.module.scss'
import DeleteModal from '@/components/DeleteModal'
import FlagModal from '@/components/FlagModal'

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

  const [session] = useSession()
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
  } = cams.cams

  const deleteUrl = `${process.env.NEXT_PUBLIC_API}/cams/delete`

  useEffect(() => {
    if (session?.role === 'ADMIN') {
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
    // refreshData()
  }

  const handleDelete = () => {
    console.log('%c handleDelete ', 'background: red; color: white')

    setShowDeleteModal(true)
  }

  const handleFlag = () => {
    console.log('%c handleFlag ', 'background: red; color: white')
    setShowFlagModal(true)
  }

  const imageUrl: string = imageName
    ? process.env.IMAGE_SRC_ROOT + imageName
    : '/images/no-image.jpg'

  return (
    <Layout
      title="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      description="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <h1>Cam Details</h1>
        {isAdmin && (
          <div className={styles.admin}>
            <div className={styles.link}>ID:{id}</div>
            <div className={styles.link}>
              <Link href={`/cams/edit/${id}`}>
                <a className="button button-primary">Edit</a>
              </Link>
            </div>
            <button type="button" onClick={handleDelete}>
              Delete Cam
            </button>
          </div>
        )}
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
        <button className="btn" type="button" onClick={handleFlag}>
          Flag this Cam
        </button>
      </div>
      {showDeleteModal && (
        <DeleteModal
          // title={values.title}
          onClose={() => setShowDeleteModal(false)}
          // handleImageNameChange={handleImageNameChange}
          deleteCam={deleteCam}
          title={title}
        />
      )}
      {showFlagModal && (
        <FlagModal
          // title={values.title}
          onClose={() => setShowFlagModal(false)}
          // handleImageNameChange={handleImageNameChange}
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
