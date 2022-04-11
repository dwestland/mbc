import React, { FC, useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/CamItem.module.scss'
import DeleteModal from '@/components/DeleteModal'
import FlagModal from '@/components/FlagModal'

interface CamItemProps {
  refreshData: () => void
  cam: {
    id: number
    title: string
    slug: string
    webcamUrl: string
    imageUrl: string
    oldImageUrl: string
    imageName: string
    description: string
    country: string
    state: string
    area: string
    subarea: string
  }
}

const CamItem: FC<CamItemProps> = ({ cam, refreshData }): JSX.Element => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showFlagModal, setShowFlagModal] = useState(false)

  const imageUrl: string = cam.imageName
    ? process.env.IMAGE_SRC_ROOT + cam.imageName
    : '/images/no-image.jpg'

  const [session] = useSession()
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (session?.role === 'ADMIN') {
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

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <a href={cam.webcamUrl} target="_blank" rel="noreferrer">
          <Image src={imageUrl} width={260} height={195} alt={cam.title} />
        </a>
      </div>
      <div className={styles.body}>
        <a href={cam.webcamUrl} target="_blank" rel="noreferrer">
          <h4>{cam.title}</h4>
        </a>
        {cam.description}
      </div>

      {isAdmin ? (
        <div className={styles.footer}>
          <div className={styles.link}>ID:{cam.id}</div>
          <div className={styles.link}>
            <Link href={`/detail/${cam.id}`}>
              <a className="button button-primary">Details</a>
            </Link>
          </div>
          <button type="button" onClick={handleDelete}>
            Delete Cam
          </button>
          <button type="button" onClick={handleFlag}>
            Flag this Cam
          </button>
        </div>
      ) : (
        <div className={styles.footer} style={{ background: 'none' }}>
          <div className={styles.link}>
            <Link href={`/detail/${cam.id}`}>
              <a className="button button-primary">Details</a>
            </Link>
          </div>
          <button type="button" onClick={handleFlag}>
            Flag this Cam
          </button>
        </div>
      )}
      {showDeleteModal && (
        <DeleteModal
          // title={values.title}
          onClose={() => setShowDeleteModal(false)}
          // handleImageNameChange={handleImageNameChange}
          deleteCam={deleteCam}
          title={cam.title}
        />
      )}
      {showFlagModal && (
        <FlagModal
          // title={values.title}
          onClose={() => setShowFlagModal(false)}
          // handleImageNameChange={handleImageNameChange}
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

export default CamItem
