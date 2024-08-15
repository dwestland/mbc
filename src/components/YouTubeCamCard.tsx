import React, { FC, useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import router from 'next/router'
import DeleteModal from '@/components/DeleteModal'
import FlagModal from '@/components/FlagModal'
import styles from '@/styles/CamCard.module.scss'

interface CamCardProps {
  cam: {
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
}

const CamCard: FC<CamCardProps> = ({ cam }): JSX.Element => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showFlagModal, setShowFlagModal] = useState(false)

  const imageUrl: string = cam.imageName
    ? process.env.AWS_IMAGE_SRC_ROOT + cam.imageName
    : '/images/no-image.jpg'

  const { data: session } = useSession()
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (session?.user?.role === 'ADMIN') {
      setIsAdmin(true)
    }
  }, [session])

  const deleteUrl = `${process.env.NEXT_PUBLIC_API}/cams/delete`

  const deleteCam = async () => {
    fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          id: cam.id,
        },
      }),
    }).catch((error) => console.warn(error))
    setShowDeleteModal(false)
    router.push(`/cam-deleted`)
  }

  const handleDelete = () => {
    setShowDeleteModal(true)
  }

  const handleFlag = () => {
    setShowFlagModal(true)
  }

  return (
    <div className={`${styles.card} bs`}>
      {cam.mbcHostedYoutube ? (
        <Link href={cam.webcamUrl} className={styles.pointer}>
          <a>
            <Image
              src={imageUrl}
              width={260}
              height={195}
              alt={cam.title}
              className={styles.img}
            />
          </a>
        </Link>
      ) : (
        <a href={cam.webcamUrl} target="_blank" rel="noreferrer">
          <Image
            src={imageUrl}
            width={260}
            height={195}
            alt={cam.title}
            className={styles.img}
          />
        </a>
      )}
      <div className={styles.body} style={{ padding: '0' }}>
        {cam.youtubeId ? (
          <div style={{ marginTop: '5px', padding: '0' }}>
            <iframe
              width="260"
              height="195"
              src={`https://www.youtube.com/embed/${cam.youtubeId}`}
              title={cam.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <Link href={cam.webcamUrl} className={styles.pointer}>
            <a>
              <h3>{cam.title}</h3>
            </a>
          </Link>
        )}
      </div>
      <a href={cam.webcamUrl} target="_blank" rel="noreferrer">
        <p style={{ margin: '10px' }}>{cam.title}</p>
      </a>

      <div className={styles.footer}>
        {isAdmin && (
          <div className={styles.adminContainer}>
            <div className={styles.admin}>
              <div className={styles.link}>ID:{cam.id}</div>
              <div className={styles.link}>
                <Link
                  href={`/cams/edit/${cam.id}`}
                  className="button button-primary"
                >
                  Edit
                </Link>
              </div>
              <button
                type="button"
                className="button-as-link"
                onClick={handleDelete}
              >
                Delete Cam
              </button>
            </div>
            <ul style={{ fontSize: 'small' }}>
              <li>
                state: <strong>{cam.state}</strong>
              </li>
              <li>
                area: <strong>{cam.area}</strong>
              </li>
              <li>
                subarea: <strong>{cam.subarea}</strong>
              </li>
              <li>
                lat: <strong>{cam.lat}</strong>
              </li>
              <li>
                lng: <strong>{cam.lng}</strong>
              </li>
              <li>
                Top Cam: <strong>{cam.topCam ? 'Yes' : 'No'}</strong>
              </li>
              <li>
                Hidden: <strong>{cam.hidden ? 'Yes' : 'No'}</strong>
              </li>
              <li>
                MBC Hosted YouTube:{' '}
                <strong>{cam.mbcHostedYoutube ? 'Yes' : 'No'}</strong>
              </li>
            </ul>
          </div>
        )}
        <div className={styles.user}>
          <div className={styles.link}>
            {cam.mbcHostedYoutube && <span className={styles.dot}>&nbsp;</span>}
            <Link href={`/detail/${cam.id}`} className="button button-primary">
              &nbsp;Details
            </Link>
          </div>
          <button className="button-as-link" type="button" onClick={handleFlag}>
            Flag this Cam
          </button>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteModal
          onClose={() => setShowDeleteModal(false)}
          deleteCam={deleteCam}
          title={cam.title}
        />
      )}
      {showFlagModal && (
        <FlagModal
          onClose={() => setShowFlagModal(false)}
          id={cam.id}
          title={cam.title}
          country={cam.country}
          state={cam.state}
          area={cam.area}
          subarea={cam.subarea}
        />
      )}
    </div>
  )
}

export default CamCard
