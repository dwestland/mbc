import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
// import { InferGetStaticPropsType } from 'next'
import Layout from '@/components/Layout'
import styles from '@/styles/Form.module.scss'
import AddCamCountryOptions from '@/components/AddCamCountryOptions'
import MapModal from '@/components/MapModal'
import ImageUploadModal from '@/components/ImageUploadModal'

const initialState = {
  title: '',
  webcamUrl: '',
  imageUrl: '',
  description: '',
  country: '',
  state: '',
  area: '',
  subArea: '',
  lat: 0,
  lng: 0,
}

const url = `${process.env.NEXT_PUBLIC_API}/cams/add`

const AddCam = () => {
  const [values, setValues] = useState(initialState)
  const [showLatLngModal, setShowLatLngModal] = useState(false)
  const [showImageUploadModal, setShowImageUploadModal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    )

    if (hasEmptyFields) {
      toast.error('Please fill in all fields')
      return null
    }

    console.log('%c values ', 'background: red; color: white', values)

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
        }
      })
      .catch((error) => {
        toast.error('Error posting to database')
        console.warn(error)
      })

    return null
  }

  const handleInputChange = (e): null => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    return null
  }

  const handleLatLngChange = (lat, lng) => {
    console.log('%c lng ', 'background: purple; color: white', lng)
    setValues({ ...values, lat, lng })
  }

  const openAddLatLngModal = () => {
    console.log('%c Open Add LatLng Modal ', 'background: red; color: white')
    setShowLatLngModal(true)

    return null
  }

  const openImageUploadModal = () => {
    console.log('%c openImageUploadModal ', 'background: red; color: white')
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
                <label htmlFor="imageUrl">
                  Image URL
                  <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    value={values.imageUrl}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
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

              <div className={styles.latLngContainer}>
                <button
                  className="btn"
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
            <div className={styles.section1}>
              <button
                className="btn"
                type="button"
                onClick={openImageUploadModal}
              >
                Image Upload
              </button>

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
        <ImageUploadModal onClose={() => setShowImageUploadModal(false)} />
      )}
    </Layout>
  )
}

export default AddCam
