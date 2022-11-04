import React from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'

// interface CamsDetailProps {
//   cams: { title: string }[]

// http://localhost:3100/webcam/florida/panhandle/reef-beachcam

const Webcam = () => {
  const router = useRouter()
  const { webcam = [] } = router.query

  const result = {}
  for (let i = 0; i <= webcam.length - 2; i++) {
    if (i === 0) {
      result.country = webcam[0]
    }
    if (i === 1) {
      result.state = webcam[1]
    }
    if (i === 2) {
      result.area = webcam[2]
    }
    result.title = webcam[webcam.length - 1]
  }

  console.log('%c result ', 'background: red; color: white', result)

  console.log('%c webcam ', 'background: red; color: white', webcam)

  return (
    <Layout
      documentTitle="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      documentDescription="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <div className="container">
          <h1>Webcam Page</h1>
          <br />
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cams/${id}`)
  const cams: CamsDetailProps = await res.json()

  // How do i pass more things on getServerSideProps() in Next.js
  // https://stackoverflow.com/questions/69181762/how-do-i-pass-more-things-on-getserversideprops-in-next-js

  // How to add header to getServerSideProps in Next.js
  // https://stackoverflow.com/questions/71753810/how-to-add-header-to-getserversideprops-in-next-js

  return {
    props: {
      cams,
    },
  }
}

export default Webcam

// const myArray = ['USA', 'Florida', 'Panhandle', 'Panama City Beach Cam',]
// const myArray2 = ['USA', 'Florida', 'Panama City Beach Cam',]
// const myArray3 = ['USA', 'Panama City Beach Cam',]

// const newArray = myArray.map((item, i) => {
//   // const key = myKeys
//   return {key: item}
//   })

// console.log(newArray)

// // country: 'USA',
// // state: 'Florida',
// // area: 'Panhandle',
// // title: 'Panama City Beach Cam',

// // cam.topCam = cam.top_cam
// // delete cam.top_cam
