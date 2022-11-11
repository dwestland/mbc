import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/AdminWebcamPage.module.scss'

export default function AdminWebcamPage(cams: any) {
  // @xts-ignore
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
  }: // eslint-disable-next-line react/destructuring-assignment
  any = cams.cams

  const imageUrl: string = imageName
    ? process.env.AWS_IMAGE_SRC_ROOT + imageName
    : '/images/no-image.jpg'

  return (
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
          <div className={styles.link}>
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
            <strong>Title Slug:</strong> {titleSlug}
          </div>
          <div>
            <strong>YouTube ID</strong> {youtubeId}
          </div>
          <div>
            <strong>Long Description:</strong> {longDescription}
          </div>
        </p>
      </div>
    </div>
  )
}
