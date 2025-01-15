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
import AdLeaderboard from '@/components/AdLeaderboard'

// interface CamsDetailProps {
//   cams: { title: string }[]
// }
interface Cams {
  area: string
  country: string
  description: string
  hidden: boolean
  id: string
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
    area,
    country,
    description,
    hidden,
    id,
    imageName,
    lat,
    lng,
    longDescription,
    mbcHostedYoutube,
    moreCams,
    postalCode,
    state,
    subarea,
    title,
    titleSlug,
    topCam,
    youtubeId,
    webcamUrl,
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
      documentTitle={`${title} - Details Page`}
      documentDescription={`Webcam details about ${title} with a link to the live webcam, interactive map of the area and Latitude and Longitude.`}
    >
      <div className="layout" style={{ paddingTop: '7px' }}>
        <AdLeaderboard />
        <h2 style={{ marginTop: '20px' }}>Details Page:</h2>
        <h1 style={{ marginTop: '10px' }}>{title}</h1>
        <div className="image-and-map">
          <div className="image">
            {mbcHostedYoutube ? (
              <Link href={webcamUrl}>
                <a target="_blank" rel="noopener">
                  <Image src={imageUrl} width={400} height={300} alt={title} />
                </a>
              </Link>
            ) : (
              <a href={webcamUrl} target="_blank" rel="noopener noreferrer">
                <Image src={imageUrl} width={400} height={300} alt={title} />
              </a>
            )}
          </div>
          <div className="map">
            <DetailsMap lat={lat || 0} lng={lng || 0} />
          </div>
        </div>
        {isAdmin && (
          <div className={styles.admin}>
            <div className={styles.adminButtons}>
              <div className={styles.link}>
                <Link href={`/cams/edit/${id}`}>
                  <a className="btn link-as-button">Edit</a>
                </Link>
              </div>
              <button type="button" onClick={handleDelete} className="btn ">
                Delete Cam
              </button>
            </div>
            <div className={styles.camAdminInfo}>
              <div>
                <strong>ID:</strong> {id}
              </div>
              <div>
                <strong>Top Cam:</strong> {topCam ? 'Yes' : 'No'}
              </div>
              <div>
                <strong>MBC Hosted YouTube:</strong>{' '}
                {mbcHostedYoutube ? 'Yes' : 'No'}
              </div>
              <div>
                <strong>Hidden:</strong> {hidden ? 'Yes' : 'No'}
              </div>
              <div>
                <strong>More Cams:</strong> {moreCams}
              </div>
              <div>
                <strong>Postal Code:</strong> {postalCode}
              </div>

              <div>
                <strong>YouTube ID:</strong> {youtubeId}
              </div>
            </div>
            <div className={styles.description}>
              <div>
                <strong>Title Slug:</strong> {titleSlug}
              </div>
            </div>
            <div>
              <p>
                <strong>webcamUrl:</strong>&nbsp;
                {mbcHostedYoutube ? (
                  <Link href={webcamUrl}>
                    <a target="_blank" rel="noopener">
                      {webcamUrl}
                    </a>
                  </Link>
                ) : (
                  <a href={webcamUrl} target="_blank" rel="noopener noreferrer">
                    {webcamUrl}
                  </a>
                )}
              </p>
            </div>
            <div className={styles.description}>
              <div>
                <strong>Long Description:</strong> {longDescription}
              </div>
            </div>
          </div>
        )}
        <AdLeaderboard />
        <div className={styles.camInfo}>
          {mbcHostedYoutube ? (
            <Link href={webcamUrl}>
              <a className="btn link-as-button" target="_blank" rel="noopener">
                Go to Cam
              </a>
            </Link>
          ) : (
            <a
              href={webcamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn link-as-button"
            >
              Go to Cam
            </a>
          )}
          <h3>
            <strong>Title:</strong> {title}
          </h3>
          {/* <p>
            <strong>Image Name:</strong> {imageName}
          </p> */}
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Country: </strong>
            {country}&nbsp;&nbsp;&nbsp;
            {state && (
              <>
                <strong>State / Main Area: </strong>
                {state}
                <br />
              </>
            )}
            {area && (
              <>
                <strong>Area: </strong>
                {area} &nbsp;&nbsp;&nbsp;
              </>
            )}
            {subarea && (
              <>
                <strong>Sub-area: </strong>
                {subarea}&nbsp;&nbsp;&nbsp;
                <br />
              </>
            )}
            <strong>Latitude: </strong>
            {lat}&nbsp;&nbsp;&nbsp;
            <strong>Longitude: </strong>
            {lng}
          </p>
          <button
            className="btn ghostButton"
            type="button"
            onClick={handleFlag}
          >
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
  const cams: Cams = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default Details
