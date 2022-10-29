import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/AdminWebcamPage.module.scss'

export default function AdminWebcamPage(cams: any) {
  console.log('%c cams ', 'background: blue; color: white', cams)
  //   interface WebcamProps {
  //     cams: [
  //       {
  //         id: number
  //         title: string
  //         webcamUrl: string
  //         imageName: string
  //         description: string
  //         country: string
  //         state: string
  //         area: string
  //         subarea: string
  //         lat: number
  //         lng: number
  //         topCam: boolean
  //         mbcHosted: boolean
  //       }
  //     ]
  //   }

  // @xts-ignore
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
    topCam,
    mbcHosted,
  }: // eslint-disable-next-line react/destructuring-assignment
  any = cams.cams

  const imageUrl: string = imageName
    ? process.env.AWS_IMAGE_SRC_ROOT + imageName
    : '/images/no-image.jpg'

  return (
    <>
      <div className={styles.admin}>
        <div className="image">
          <Image src={imageUrl} width={400} height={300} alt={title} />
        </div>
        <div className={styles.camInfo}>
          <div className={styles.link}>
            <Link href={`/cams/edit/${id}`}>
              <a className="btn link-as-button">Edit</a>
            </Link>
          </div>
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
            <strong>ID:</strong> {id}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Country:</strong> {country} &nbsp;
            <strong>State:</strong> {state} &nbsp;
            <strong>Area:</strong> {area}
            <strong>Subarea:</strong> {subarea}
          </p>
          <p>
            <strong>Latitude:</strong> {lat}
            &nbsp; &nbsp;
            <strong>Longitude:</strong> {lng}
          </p>
          <p>
            <strong>Top Cam:</strong> {topCam ? 'Yes' : 'No'}
            &nbsp; &nbsp;
            <strong>MBC Hosted:</strong> {mbcHosted ? 'Yes' : 'No'}
          </p>
        </div>
      </div>
    </>
  )
}
