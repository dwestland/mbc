// x@ts-nocheck
import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { InferGetStaticPropsType } from 'next'
import router from 'next/router'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from '@/styles/AddEditForm.module.scss'
import Layout from '@/components/Layout'
import MapModal from '@/components/MapModal'
import ImageUploadModal from '@/components/ImageUploadModal'

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
  // mbcHostedYoutube: boolean
  moreCams: boolean
  postalCode: string
  state: string
  subarea: string
  title: string
  titleSlug: string
  topCam: boolean
  YoutubeId: string
  webcamUrl: string
}

const url = `${process.env.NEXT_PUBLIC_API}/cams/edit`

const Edit = ({ cams }: InferGetStaticPropsType<typeof getServerSideProps>) => {
  // eslint-disable-next-line no-unused-vars
  const DetailsMap = dynamic(() => import('@/components/DetailsMap'), {
    ssr: false,
  })

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
    // mbcHostedYoutube,
    moreCams,
    postalCode,
    state,
    subarea,
    title,
    titleSlug,
    topCam,
    YoutubeId,
    webcamUrl,
  }: Cams = cams.cams

  const initialState = {
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
    // mbcHostedYoutube,
    moreCams,
    postalCode,
    state,
    subarea,
    title,
    titleSlug,
    topCam,
    YoutubeId,
    webcamUrl,
  }
  const [values, setValues] = useState(initialState)
  const [showLatLngModal, setShowLatLngModal] = useState(false)
  const [showImageUploadModal, setShowImageUploadModal] = useState(false)

  const [previewImage, setPreviewImage] = useState('/images/no-image.jpg')

  useEffect(() => {
    const reloadImage = async () => {
      if (values.imageName) {
        const imageUrl = process.env.AWS_IMAGE_SRC_ROOT + values.imageName
        await fetch(imageUrl)
          .then((res) => setPreviewImage(res.url))
          .catch((err) => console.log('err', err))
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

    if (values.lng === 0 || values.lat === 0) {
      toast.error('Lat & Lng is required')
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
        if (res.status === 200) {
          toast.success('Cam Saved')
          setValues(initialState)
          setPreviewImage('/images/no-image.jpg')
          router.push(`/detail/${id + 1}`)
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

  // eslint-disable-next-line no-shadow
  const handleLatLngChange = (lat: number, lng: number) => {
    setValues({ ...values, lat, lng })
  }

  // eslint-disable-next-line no-shadow
  const handleImageNameChange = (imageName: string) => {
    setValues({ ...values, imageName })
  }

  const handleTopCamChange = () => {
    const value = !values.topCam
    setValues({ ...values, topCam: value })
  }

  const handleMbcHostedYoutubeChange = () => {
    const value = !values.mbcHostedYoutube
    setValues({ ...values, mbcHostedYoutube: value })
  }

  const handleHiddenChange = () => {
    const value = !values.hidden
    setValues({ ...values, hidden: value })
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
    <Layout documentTitle="Edit Cam" documentDescription="Add Cam page">
      <div className="layout">
        <Toaster
          toastOptions={{
            style: {
              height: '60px',
              border: '1px solid lightgray',
            },
          }}
        />
        <h1>Edit Cam</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formWrapper}>
            <div className={styles.section1}>
              <div className={styles.row}>
                <strong>ID: </strong> {values.id}
              </div>
              <div className={styles.row}>
                <label htmlFor="title">
                  <strong>Title - Max 60 characters; count </strong>
                  {values.title.length}
                  <input
                    spellCheck="true"
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
                  <strong>Webcam URL</strong>
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
                <strong>Image Name:</strong>
                &nbsp;
                <span>
                  <strong>{values.imageName}</strong>
                </span>
              </div>
              <div className={styles.row}>
                <div className={styles.imageUpload}>
                  {previewImage && (
                    <Image
                      className={styles.previewImage}
                      src={previewImage}
                      alt="Preview image"
                      width="400"
                      height="300"
                    />
                  )}
                  <br />
                  <button
                    className="btn ghostButton"
                    type="button"
                    onClick={openImageUploadModal}
                  >
                    Change Image
                  </button>
                </div>
              </div>
              <br />
              <div className={styles.formContainer}>
                <span>
                  <label htmlFor="mbcHostedYoutube">
                    <strong>MBC Hosted YouTube </strong>
                    &nbsp;
                    <input
                      type="checkbox"
                      name="mbcHostedYoutube"
                      id="mbcHostedYoutube"
                      checked={values.mbcHostedYoutube}
                      onChange={handleMbcHostedYoutubeChange}
                    />
                  </label>
                </span>
              </div>
            </div>
            <div className={styles.section1}>
              <div className={styles.row}>
                <label htmlFor="description" className={styles.description}>
                  <strong>Description - 150 to 165 characters: count</strong>{' '}
                  {values.description.length}
                  <textarea
                    spellCheck="true"
                    name="description"
                    id="description"
                    value={values.description}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className={styles.row}>
                <label htmlFor="postalCode">
                  <strong>Postal Code</strong>

                  <input
                    spellCheck="true"
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={values.postalCode}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className={styles.row}>
                <div className={styles.formContainer}>
                  <span>
                    <label htmlFor="topCam">
                      <strong>Top Cam</strong>
                      &nbsp;
                      <input
                        type="checkbox"
                        name="topCam"
                        id="topCam"
                        checked={values.topCam}
                        onChange={handleTopCamChange}
                      />
                    </label>
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    <label htmlFor="hidden">
                      <strong>Hidden</strong>
                      &nbsp;
                      <input
                        type="checkbox"
                        name="hidden"
                        id="hidden"
                        checked={values.hidden}
                        onChange={handleHiddenChange}
                      />
                    </label>
                  </span>
                </div>

                <div className={styles.row}>
                  <label htmlFor="country">
                    <strong>Country</strong>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={values.country}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className={styles.row}>
                  <label htmlFor="state">
                    <strong>State</strong>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={values.state}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className={styles.row}>
                  <label htmlFor="area">
                    <strong>Area</strong>
                    <input
                      type="text"
                      id="area"
                      name="area"
                      value={values.area}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className={styles.row}>
                  <label htmlFor="subarea">
                    <strong>Subarea</strong>
                    <input
                      type="text"
                      id="subarea"
                      name="subarea"
                      value={values.subarea}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            {values.mbcHostedYoutube && (
              <>
                <hr />
                <h3>MBC Hosted YouTube</h3>
                <div className={styles.formWrapper}>
                  <div className={styles.section1}>
                    <div className={styles.row}>
                      <strong>File Name (Title Slug):</strong>
                      <br />
                      {values.titleSlug}
                    </div>
                    <div className={styles.row}>
                      <label htmlFor="moreCams">
                        <strong>More Cams</strong>

                        <input
                          spellCheck="true"
                          type="text"
                          id="moreCams"
                          name="moreCams"
                          value={values.moreCams}
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>

                    <div className={styles.row}>
                      <label htmlFor="youtubeId">
                        <strong>YouTube ID</strong>

                        <input
                          spellCheck="true"
                          type="text"
                          id="youtubeId"
                          name="youtubeId"
                          value={values.youtubeId}
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>
                  </div>

                  <div className={styles.section1}>
                    <div className={styles.row}>
                      <label
                        htmlFor="longDescription"
                        className={styles.longDescription}
                      >
                        <strong>
                          Long Description - 75 words, 450 characters: count
                        </strong>{' '}
                        {values.longDescription.length}
                        <textarea
                          spellCheck="true"
                          name="longDescription"
                          id="longDescription"
                          value={values.longDescription}
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className={styles.footer}>
            <button type="submit" className="btn">
              Update Cam
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
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/${id}`)
  const cams = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default Edit
