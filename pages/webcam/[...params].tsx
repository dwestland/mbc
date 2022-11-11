import React, { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import AdLeaderboard from '@/components/AdLeaderboard'
import AdLarge from '@/components/AdLarge'
import AdminWebcamPage from '@/components/AdminWebcamPage'

const Webcam = ({ cams }) => {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const { params = [] } = router.query

  // const { title } = cams?.cams[0]
  const { country, state, area, title, titleSlug, description } = cams.cams[0]

  return (
    <Layout documentTitle={title} documentDescription={description}>
      <div className="layout">
        <div className="container">
          <h1>{title}</h1>
          <h2>{description}</h2>
          <AdLeaderboard />
          {isAdmin && (
            <AdminWebcamPage cams={cams.cams} style={{ height: '200px' }} />
          )}
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { params } = context.query
  const result = ['/webcam-page?']

  for (let i = 0; i <= params.length - 2; i++) {
    if (i === 0) {
      result.push(`country=${params[0]}`)
    }
    if (i === 1) {
      result.push(`&state=${params[1]}`)
    }
    if (i === 2) {
      result.push(`&area=${params[2]}`)
    }
  }
  result.push(`&titleSlug=${params[params.length - 1]}`)

  const queryString = result.join('')

  console.log(
    '%c getServerSideProps queryString ',
    'background: red; color: white',
    queryString
  )

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}${queryString}`)
  const cams: CamsDetailProps = await res.json()

  return {
    props: {
      cams,
    },
  }
}

export default Webcam
