import React, { useState } from 'react'
import { InferGetServerSidePropsType } from 'next'
import Layout from '@/components/Layout'
import CamCard from '@/components/YouTubeCamCard'
import * as types from '@/utils/types'

const PAGE_SIZE = 8

const YouTube = ({
  initialCams,
  totalCams,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [cams, setCams] = useState(initialCams)
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(totalCams / PAGE_SIZE)

  const fetchCams = async (page: number) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/cams/youtube?page=${page}&limit=${PAGE_SIZE}`
    )
    const data: types.CamPageProps = await res.json()
    setCams(data.cams)
  }

  const handlePageChange = async (page: number) => {
    setCurrentPage(page)
    await fetchCams(page)
  }

  return (
    <Layout
      documentTitle="Beach Cams of Oahu, Hawaii - Webcams at Waikiki Beach, Honolulu and North Shore"
      documentDescription="Best Beach Cams and Surf Cams in Oahu, Hawaii with webcams in Waikiki Beach, Honolulu and the North Shore."
      nofollow
    >
      <div className="layout">
        <h1>YouTube Hosted Webcams</h1>
        <p>Total published YouTube cams: {totalCams}</p>
        <div className="cam-container">
          {cams.map((cam: types.Cams) => (
            <CamCard key={cam.id} cam={cam} />
          ))}
        </div>
        <div className="pagination">
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/cams/youtube?page=1&limit=${PAGE_SIZE}`
  )
  const { cams, totalCams }: types.CamPageProps = await res.json()

  return {
    props: {
      initialCams: cams,
      totalCams,
    },
  }
}

export default YouTube
