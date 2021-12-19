import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/CamItem.module.scss'

export default function CamItem({ cam }) {
  console.log('%c cam ', 'background: red; color: white', cam)

  let imageUrl = cam.image ? API_URL + cam.image.url : '/images/no-image.jpg'
  // console.log('%c cam.old_image_url ', 'background: blue; color: white', cam.old_image_url)

  // TODO: remove old_image_url after all cam images have been updated
  imageUrl = cam.old_image_url ? cam.old_image_url : imageUrl

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <a href={cam.url} target="_blank" rel="noreferrer">
          <Image src={imageUrl} width={260} height={195} alt={cam.title} />
        </a>
      </div>
      <div className={styles.body}>
        <a href={cam.url} target="_blank" rel="noreferrer">
          <h4>{cam.title}</h4>
        </a>
        {cam.description}
      </div>
      <div className={styles.footer}>
        <div className={styles.link}>
          <Link href={`/cams/${cam.slug}`}>
            <a className="button button-primary">Details</a>
          </Link>
        </div>
        <div className={styles.link}>
          <Link href={`/cams/edit/${cam.id}`}>
            <a className="button button-primary">Edit Cam</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
