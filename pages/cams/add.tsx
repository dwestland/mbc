import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
// import { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Layout from '@/components/Layout'
import styles from '@/styles/AddEditForm.module.scss'
import AddCamCountryOptions from '@/components/AddCamCountryOptions'
import MapModal from '@/components/MapModal'
import ImageUploadModal from '@/components/ImageUploadModal'
import Router from 'next/router'
import { slugify } from '@/utils/common'

const addUrl = `${process.env.NEXT_PUBLIC_API}/cams/add`
const latestIdUrl = `${process.env.NEXT_PUBLIC_API}/cams/latestId`

// Add Hidden input
// Add postcode input
// Add Long Description input
// Add More Cams input
// YouTube ID input

// Title Slug display
// Slug function

const AddCam = () => {
  const initialState = {
    area: '',
    country: '',
    description: '',
    hidden: false,
    imageName: '',
    lat: 0,
    lng: 0,
    longDescription: '',
    mbcHosted: false,
    mbcHostedYoutube: false,
    moreCams: '',
    postalCode: '',
    state: '',
    subarea: '',
    title: '',
    titleSlug: '',
    topCam: false,
    youtubeId: '',
    webcamUrl: '',
  }
  const [values, setValues] = useState(initialState)
  const [showLatLngModal, setShowLatLngModal] = useState(false)
  const [showImageUploadModal, setShowImageUploadModal] = useState(false)
  const [previewImage, setPreviewImage] = useState('/images/no-image.jpg')
  const [id, setId] = useState(0)

  useEffect(() => {}, [values.mbcHostedYoutube])

  useEffect(() => {
    const result = slugify(values.title)
    setValues({ ...values, titleSlug: result })
  }, [values.title])

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

  useEffect(() => {
    if (id === 0) {
      return
    }
    Router.push({
      pathname: `/detail/${id}`,
    })
  }, [id])

  const getLatestId = async () => {
    await fetch(latestIdUrl)
      .then((res) => res.json())
      .then((camId) => {
        const newId = camId.cams[0].id
        setId(newId)
        return camId
      })
      .catch((err) => console.log('err', err))

    return null
  }

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

    fetch(addUrl, {
      method: 'POST',
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
          setPreviewImage('/images/no-image.jpg')
          setValues(initialState)
        }
      })
      .catch((error) => {
        toast.error('Error posting to database')
        console.warn(error)
      })
    getLatestId()
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
    <Layout documentTitle="Add Cam" documentDescription="Add Cam page">
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
                    Add Image
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
              </div>
              <div className={styles.row}>
                <div className={styles.formContainer}>
                  <button
                    className="btn ghostButton"
                    type="button"
                    onClick={openAddLatLngModal}
                  >
                    Set Lat Lng
                  </button>
                  <span>
                    <strong>Lat: </strong>
                    {values.lat}
                  </span>
                  <br />
                  <span>
                    <strong>Lng:</strong>
                    {values.lng}
                  </span>
                </div>
              </div>
              <AddCamCountryOptions
                handleInputChange={handleInputChange}
                values={values}
              />
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
}

export default AddCam
