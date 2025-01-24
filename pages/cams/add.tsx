import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Image from 'next/image'
import Layout from '@/components/Layout'
import styles from '@/styles/AddEditForm.module.scss'
import AddCamCountryOptions from '@/components/AddCamCountryOptions'
import MapModal from '@/components/MapModal'
import ImageUploadModal from '@/components/ImageUploadModal'
import Router from 'next/router'
import { slugify } from '@/utils/common'
import { useSession } from 'next-auth/react'

const addUrl = `${process.env.NEXT_PUBLIC_API}/cams/add`
const latestIdUrl = `${process.env.NEXT_PUBLIC_API}/cams/latestId`

const AddCam = () => {
  const { data: session } = useSession()

  const initialState = {
    area: '',
    country: '',
    description: '',
    hidden: false,
    imageName: '',
    lat: 0,
    lng: 0,
    longDescription: '',
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
  const {
    area,
    country,
    description,
    hidden,
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
    webcamUrl,
    youtubeId,
  } = values

  useEffect(() => {
    const result = slugify(title)
    setValues((v) => ({ ...v, titleSlug: result }))
  }, [title])

  useEffect(() => {
    // console.log('%c Make path ', 'background: red; color: white')
    if (mbcHostedYoutube) {
      setValues((v) => ({ ...v, webcamUrl: '' }))
      let result = `/webcam`
      if (country) {
        result += `/${country.toLowerCase().replace(/\s+/g, '-')}`
      }
      if (state) {
        result += `/${state.toLowerCase().replace(/\s+/g, '-')}`
      }
      if (area) {
        result += `/${area.toLowerCase().replace(/\s+/g, '-')}`
      }
      result += `/${titleSlug}`

      setValues((v) => ({ ...v, webcamUrl: result }))
    }
  }, [country, state, area, subarea, titleSlug, mbcHostedYoutube])
  // console.log('%c webcamUrl ', 'background: blue; color: white', webcamUrl)

  useEffect(() => {
    const reloadImage = async () => {
      if (imageName) {
        const imageUrl = process.env.AWS_IMAGE_SRC_ROOT + imageName
        try {
          const res = await fetch(imageUrl)
          if (res.ok) {
            setPreviewImage(res.url)
          } else {
            console.error('Image fetch failed:', res.status)
          }
        } catch (err) {
          console.error('Error fetching image:', err)
        }
      }
    }
    reloadImage()
  }, [imageName])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validation
    if (!title) {
      toast.error('Title is required')
      return
    }

    if (!webcamUrl) {
      toast.error('webcamUrl is required')
      return
    }

    if (!description) {
      toast.error('Description is required')
      return
    }

    if (!country) {
      toast.error('Country is required')
      return
    }

    if (!imageName) {
      toast.error('Image is required')
      return
    }

    if (!youtubeId && mbcHostedYoutube) {
      toast.error('YouTube ID is required')
      return
    }

    if (lng === 0 || lat === 0) {
      toast.error('Lat & Lng is required')
      return
    }

    try {
      const response = await fetch(addUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: values,
        }),
      })

      if (response.status === 201) {
        toast.success('Cam Saved')
        // Get the latest ID first
        const latestIdResponse = await fetch(latestIdUrl)
        const latestIdData = await latestIdResponse.json()
        const newId = latestIdData.cams[0].id

        // Reset form
        setPreviewImage('/images/no-image.jpg')
        setValues(initialState)

        // Navigate to detail page
        Router.push(`/detail/${newId}`)
      } else {
        const errorData = await response.json()
        console.error('Failed to save cam:', {
          status: response.status,
          error: errorData,
          sentData: values,
        })
        toast.error(`Error: ${errorData.message || 'Failed to save cam'}`)
      }
    } catch (error) {
      console.error('Network error while saving cam:', {
        error,
        sentData: values,
      })
      toast.error('Network error while saving cam')
    }
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleLatLngChange = (latitude: number, longitude: number) => {
    setValues({ ...values, lat: latitude, lng: longitude })
  }

  const handleImageNameChange = (newImageName: string) => {
    setValues({ ...values, imageName: newImageName })
  }

  const handleTopCamChange = () => {
    const value = !topCam
    setValues({ ...values, topCam: value })
  }

  const handleMbcHostedYoutubeChange = () => {
    const value = !mbcHostedYoutube
    setValues({ ...values, mbcHostedYoutube: value })
  }

  const handleHiddenChange = () => {
    const value = !hidden
    setValues({ ...values, hidden: value })
  }

  const openAddLatLngModal = () => {
    setShowLatLngModal(true)

    return null
  }

  const openImageUploadModal = () => {
    if (!title) {
      toast.error('Please enter a title to add image')
      return null
    }
    setShowImageUploadModal(true)

    return null
  }

  // @ts-ignore
  if (session?.user.role === 'ADMIN') {
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
                    <strong>Title - 35 to 60 characters; count </strong>
                    {title.length}
                    <input
                      spellCheck="true"
                      type="text"
                      id="title"
                      name="title"
                      value={title}
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
                      value={webcamUrl}
                      onChange={handleInputChange}
                      disabled={mbcHostedYoutube}
                    />
                  </label>
                </div>
                <div className={styles.row}>
                  <strong>Image Name:</strong>
                  &nbsp;
                  <span>
                    <strong>{imageName}</strong>
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
                    <label
                      htmlFor="mbcHostedYoutube"
                      className={styles.pointer}
                    >
                      <strong>MBC Hosted YouTube </strong>
                      &nbsp;
                      <input
                        type="checkbox"
                        name="mbcHostedYoutube"
                        id="mbcHostedYoutube"
                        checked={mbcHostedYoutube}
                        onChange={handleMbcHostedYoutubeChange}
                      />
                    </label>
                  </span>
                </div>
              </div>
              <div className={styles.section1}>
                <div className={styles.row}>
                  <label htmlFor="description" className={styles.description}>
                    <strong>
                      Description, no period - 115 to 160 characters: count
                    </strong>{' '}
                    {description.length}
                    <textarea
                      spellCheck="true"
                      name="description"
                      id="description"
                      value={description}
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
                      value={postalCode}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className={styles.row}>
                  <div className={styles.formContainer}>
                    <span>
                      <label htmlFor="topCam" className={styles.pointer}>
                        <strong>Top Cam</strong>
                        &nbsp;
                        <input
                          type="checkbox"
                          name="topCam"
                          id="topCam"
                          checked={topCam}
                          onChange={handleTopCamChange}
                        />
                      </label>
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>
                      <label htmlFor="hidden" className={styles.pointer}>
                        <strong>Hidden</strong>
                        &nbsp;
                        <input
                          type="checkbox"
                          name="hidden"
                          id="hidden"
                          checked={hidden}
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
                      {lat}
                    </span>
                    <br />
                    <span>
                      <strong>Lng:</strong>
                      {lng}
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
              {mbcHostedYoutube && (
                <>
                  <hr />
                  <h3>MBC Hosted YouTube</h3>
                  <div className={styles.formWrapper}>
                    <div className={styles.section1}>
                      <div className={styles.row}>
                        <strong>File Name (Title Slug):</strong>
                        <br />
                        {titleSlug}
                      </div>
                      <div className={styles.row}>
                        <label htmlFor="moreCams">
                          <strong>More Cams</strong>
                          <input
                            spellCheck="true"
                            type="text"
                            id="moreCams"
                            name="moreCams"
                            value={moreCams}
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
                            value={youtubeId}
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
                          {longDescription.length}
                          <br />
                          {`Can use the following HTML:
                        <b>Bold</b> <br />
                        <p>Paragraph</p>
                        `}
                          <textarea
                            spellCheck="true"
                            name="longDescription"
                            id="longDescription"
                            value={longDescription}
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
                Publish
              </button>
            </div>
          </form>
        </div>
        {showLatLngModal && (
          <MapModal
            onClose={() => setShowLatLngModal(false)}
            lat={lat}
            lng={lng}
            handleLatLngChange={handleLatLngChange}
          />
        )}
        {showImageUploadModal && (
          <ImageUploadModal
            title={title}
            onClose={() => setShowImageUploadModal(false)}
            handleImageNameChange={handleImageNameChange}
          />
        )}
      </Layout>
    )
  }

  return (
    <Layout documentTitle="Add Cam" documentDescription="Add Cam page">
      <div className="layout">
        <h1>Not Authorized</h1>
      </div>
    </Layout>
  )
}

export default AddCam
