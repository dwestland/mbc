import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
// import { InferGetStaticPropsType } from 'next'
import Layout from '@/components/Layout'
import styles from '@/styles/Form.module.scss'
import AddCamCountryOptions from '@/components/AddCamCountryOptions'
import Modal from '@/components/Modal'
import MapModal from '@/components/MapModal'

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

  const openAddLatLngModal = () => {
    console.log('%c Open Add LatLng Modal ', 'background: red; color: white')
    setShowLatLngModal(true)

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

        <button className="btn" type="button" onClick={openAddLatLngModal}>
          Add Lat Lng
        </button>

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
                <label htmlFor="lat">
                  Lat
                  <input
                    type="number"
                    name="lat"
                    id="lat"
                    value={values.lat}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className={styles.row}>
                <label htmlFor="lng">
                  Lng
                  <input
                    type="number"
                    name="lng"
                    id="lng"
                    value={values.lng}
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
            </div>
            <AddCamCountryOptions
              handleInputChange={handleInputChange}
              values={values}
            />
          </div>
          <div className={styles.footer}>
            <button type="submit" className="btn">
              Add Cam
            </button>
          </div>
        </form>
      </div>
      <Modal
        title="My Title"
        showLatLngModal={showLatLngModal}
        onClose={() => setShowLatLngModal(false)}
      >
        <MapModal />
      </Modal>
    </Layout>
  )
}

export default AddCam
