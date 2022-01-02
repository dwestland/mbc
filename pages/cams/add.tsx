import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
// import { InferGetStaticPropsType } from 'next'
import Layout from '@/components/Layout'
import styles from '@/styles/Form.module.css'

const initialState = {
  title: '',
  webcamUrl: '',
  imageUrl: '',
  description: '',
  country: '',
  state: '',
  area: '',
  subArea: '',
}
const url = `${process.env.NEXT_PUBLIC_API}/cams/add`

const AddCam = () => {
  const [values, setValues] = useState(initialState)

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
        data: {
          title: values.title,
          webcamUrl: values.webcamUrl,
          imageUrl: values.imageUrl,
          description: values.description,
          country: values.country,
          state: values.state,
          area: values.area,
          subArea: values.subArea,
        },
        // body: JSON.stringify({
        //   data: values,
        // },
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          toast.success('Blog saved')
          setValues(initialState)
        }
      })
      .catch((error) => {
        toast.error('Error posting to database')
        console.warn(error)
      })

    return null
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <Layout title="Add Cam" description="Add Cam page">
      <div className="layout">
        <h1>Add Cam</h1>
        <Toaster
          toastOptions={{
            style: {
              height: '60px',
              border: '1px solid lightgray',
            },
          }}
        />
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <div className={styles.section}>
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
            <div className={styles.section}>
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
            <div className={styles.section}>
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
            <div className={styles.section}>
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
            <div className={styles.section}>
              <label htmlFor="country">
                Country
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={values.country}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className={styles.section}>
              <label htmlFor="state">
                State
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={values.state}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className={styles.section}>
              <label htmlFor="area">
                Area
                <input
                  type="text"
                  name="area"
                  id="area"
                  value={values.area}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className={styles.section}>
              <label htmlFor="subArea">
                Subarea
                <input
                  type="text"
                  name="subArea"
                  id="subArea"
                  value={values.subArea}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          {/* <input type="submit" value="Add Blog" className="btn" /> */}
          <button type="submit" className="btn">
            Add Blog
          </button>
        </form>
      </div>
    </Layout>
  )
}

// export async function getServerSideProps() {
// const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/hawaii`)
// const cams: KauaiPageProps = await res.json()
// return {
//   props: {
//     cams,
//   },
// }
// }

export default AddCam
