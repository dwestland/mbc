import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
// import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet'

import dynamic from 'next/dynamic'
import AddCamCountryOptions from '@/components/AddCamCountryOptions'
import styles from '@/styles/Form.module.scss'

import Layout from '@/components/Layout'
// import DetailsMap from '@/components/DetailsMap'

import NavbarOld from '@/components/NavbarOld'

interface CamsEditProps {
  cams: { title: string }[]
}
interface Cams {
  id: string
  title: string
  slug: string
  webcamUrl: string
  imageName: string
  oldImageUrl: string
  description: string
  country: string
  state: string
  area: string
  subarea: string
  lat: number
  lng: number
}

const url = `${process.env.NEXT_PUBLIC_API}/cams/edit`

const Edit = ({ cams }: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const DetailsMap = dynamic(() => import('@/components/DetailsMap'), {
    ssr: false,
  })

  console.log(
    '%c CamDetails cams.cams ',
    'background: purple; color: white',
    cams.cams
  )

  const {
    id,
    title,
    slug,
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

  const initialState = {
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
  }
  const [values, setValues] = useState(initialState)
  const [showLatLngModal, setShowLatLngModal] = useState(false)
  const [showImageUploadModal, setShowImageUploadModal] = useState(false)

  const [previewImage, setPreviewImage] = useState('/images/no-image.jpg')

  useEffect(() => {
    const reloadImage = () => {
      if (values.imageName) {
        const imageUrl = `/webcam-images/${values.imageName}`
        fetch(imageUrl)
          .then((res) => setPreviewImage(res.url))
          .catch((err) => console.log('Preview Image Fetch Error', err))
      }
    }
    reloadImage()
  }, [values.imageName])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (!values.title) {
      toast.error('Title is required')
      return
    }

    if (!values.webcamUrl) {
      toast.error('webcamUrl is required')
      return
    }

    if (!values.description) {
      toast.error('Description is required')
      return
    }

    if (!values.country) {
      toast.error('Country is required')
      return
    }

    if (!values.imageName) {
      toast.error('Image is required')
      return
    }

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: values,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          toast.success('Cam Saved')
          setValues(initialState)
          setPreviewImage('/images/no-image.jpg')
        }
      })
      .catch((error) => {
        toast.error('Error posting to database')
        console.warn(error)
      })
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleLatLngChange = (lat: number, lng: number) => {
    setValues({ ...values, lat, lng })
  }

  const handleImageNameChange = (imageName: string) => {
    setValues({ ...values, imageName })
  }

  const openAddLatLngModal = () => {
    setShowLatLngModal(true)

    return null
  }

  const openImageUploadModal = () => {
    if (!values.title) {
      toast.error('Please enter a title to add image')
      return null
    }
    setShowImageUploadModal(true)

    return null
  }

  return (
    <Layout title="Add Cam" description="Add Cam page">
      <div className="layout">
        <Toaster
          toastOptions={{
            style: {
              height: '60px',
              border: '1px solid lightgray',
            },
          }}
        />
        <h1>Add Cam</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formWrapper}>
            <div className={styles.section1}>
              <div className={styles.row}>
                <label htmlFor="title">
                  Title
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={values.title}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className={styles.row}>
                <label htmlFor="webcamUrl">
                  Webcam URL
                  <input
                    type="text"
                    name="webcamUrl"
                    id="webcamUrl"
                    value={values.webcamUrl}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className={styles.row}>
                Image Name: &nbsp;
                <span>
                  <strong>{values.imageName}</strong>
                </span>
              </div>
              <div className={styles.row}>
                <div className={styles.imageUpload}>
                  <Image
                    className={styles.previewImage}
                    src={previewImage}
                    alt="Preview image"
                    width="400"
                    height="300"
                  />
                  <br />
                  <button
                    className="btn ghostButton"
                    type="button"
                    onClick={openImageUploadModal}
                  >
                    Add Image
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.section1}>
              <div className={styles.row}>
                <label htmlFor="description">
                  Description
                  <textarea
                    name="description"
                    id="description"
                    value={values.description}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className={styles.row}>
                <div className={styles.latLngContainer}>
                  <button
                    className="btn ghostButton"
                    type="button"
                    onClick={openAddLatLngModal}
                  >
                    Set Lat Lng
                  </button>
                  <span>
                    Lat: <strong>{values.lat}</strong>
                  </span>
                  <br />
                  <span>
                    Lng: <strong>{values.lng}</strong>
                  </span>
                </div>
              </div>
              <AddCamCountryOptions
                handleInputChange={handleInputChange}
                values={values}
              />
            </div>
          </div>
          <div className={styles.footer}>
            <button type="submit" className="btn">
              Add Cam
            </button>
          </div>
        </form>
      </div>

      {showLatLngModal && (
        <MapModal
          onClose={() => setShowLatLngModal(false)}
          lat={values.lat}
          lng={values.lng}
          handleLatLngChange={handleLatLngChange}
        />
      )}

      {showImageUploadModal && (
        <ImageUploadModal
          title={values.title}
          onClose={() => setShowImageUploadModal(false)}
          handleImageNameChange={handleImageNameChange}
        />
      )}
    </Layout>
  )

  // const [values, setValues] = useState(initialState)

  // console.log('%c CamDetails title ', 'background: purple; color: white', title)

  // const imageUrl: string = imageName
  //   ? process.env.IMAGE_SRC_ROOT + imageName
  //   : '/images/no-image.jpg'

  // return (
  //   <Layout
  //     title="MyBeachCams.com - Webcams of Hawaii, Florida and California"
  //     description="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
  //   >
  //     <div className="layout">
  //       <NavbarOld />
  //       <h1>Cam Edit</h1>
  //       <ul>
  //         <li>
  //           <strong>ID:</strong> {id}
  //         </li>
  //         <li>
  //           <strong>Title:</strong> {title}
  //         </li>
  //         <li>
  //           <strong>webcamUrl:</strong>&nbsp;
  //           <Link href={webcamUrl}>
  //             <a target="_blank">{webcamUrl}</a>
  //           </Link>
  //         </li>
  //         <li>
  //           <strong>imageName:</strong> {imageName}
  //           <br />
  //           <Image src={imageUrl} width={400} height={300} alt={title} />
  //         </li>
  //         <li>
  //           <strong>description:</strong> {description}
  //         </li>
  //         <li>
  //           <strong>country:</strong> {country}
  //         </li>
  //         <li>
  //           <strong>state:</strong> {state}
  //         </li>
  //         <li>
  //           <strong>area:</strong> {area}
  //         </li>
  //         <li>
  //           <strong>subarea:</strong> {subarea}
  //         </li>
  //         <li>
  //           <strong>lat:</strong> {lat}
  //         </li>
  //         <li>
  //           <strong>lng:</strong> {lng}
  //         </li>
  //       </ul>
  //       <DetailsMap lat={lat || 0} lng={lng || 0} />
  //     </div>
  //   </Layout>
  // )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/${id}`)
  const cams: CamsEditProps = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default Edit