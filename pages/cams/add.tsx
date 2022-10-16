import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
// import { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Layout from '@/components/Layout'
import styles from '@/styles/AddEditForm.module.scss'
import AddCamCountryOptions from '@/components/AddCamCountryOptions'
import MapModal from '@/components/MapModal'
import ImageUploadModal from '@/components/ImageUploadModal'

const url = `${process.env.NEXT_PUBLIC_API}/cams/add`

const AddCam = () => {
  const initialState = {
    title: '',
    webcamUrl: '',
    imageName: '',
    description: '',
    country: '',
    state: '',
    area: '',
    subarea: '',
    lat: 0,
    lng: 0,
    topCam: false,
    mbcHosted: false,
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

  const handleTopCamChange = () => {
    const value = !values.topCam
    console.log('%c value ', 'background: red; color: white', value)
    setValues({ ...values, topCam: value })
  }

  const handleMbcHostedChange = () => {
    const value = !values.mbcHosted
    setValues({ ...values, mbcHosted: value })
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
                  Title
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
            </div>
            <div className={styles.section1}>
              <div className={styles.row}>
                <label htmlFor="description">
                  Description
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
                <div className={styles.formContainer}>
                  <span>
                    <label htmlFor="topCam">
                      Top Cam &nbsp;
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
                    <label htmlFor="mbcHosted">
                      MBC Hosted &nbsp;
                      <input
                        type="checkbox"
                        name="mbcHosted"
                        id="mbcHosted"
                        checked={values.mbcHosted}
                        onChange={handleMbcHostedChange}
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
}

export default AddCam
