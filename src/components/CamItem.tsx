import React, { FC, useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/CamItem.module.scss'

interface CamItemProps {
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

const CamItem: FC<CamItemProps> = ({ cam }): JSX.Element => {
  const imageUrl: string = cam.imageName
    ? process.env.IMAGE_SRC_ROOT + cam.imageName
    : '/images/no-image.jpg'
  cam.imageUrl || cam.oldImageUrl || '/images/no-image.jpg'
  const [session] = useSession()
  const [isAdmin, setIsAdmin] = useState(false)

  // console.log(
  //   '%c process.env.IMAGE_SRC_ROOT ',
  //   'background: red; color: white',
  //   process.env.IMAGE_SRC_ROOT
  // )

  // console.log(
  //   '%c process.env.NEXT_PUBLIC_API ',
  //   'background: red; color: white',
  //   process.env.NEXT_PUBLIC_API
  // )

  // console.log(
  //   '%c process.env.IMAGE_SRC_ROOT + cam.imageName ',
  //   'background: red; color: white',
  //   process.env.IMAGE_SRC_ROOT + cam.imageName
  // )

  console.log(
    '%c cam.imageName ',
    'background: red; color: white',
    cam.imageName
  )

  useEffect(() => {
    if (session?.role === 'ADMIN') {
      setIsAdmin(true)
    }
  }, [session])

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
      {isAdmin && (
        <div className={styles.footer}>
          <div className={styles.link}>
            <Link href={`/detail/${cam.id}`}>
              <a className="button button-primary">Details</a>
            </Link>
          </div>
          <div className={styles.link}>
            <Link href={`/cams/edit/${cam.id}`}>
              <a className="button button-primary">Edit Cam</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default CamItem
