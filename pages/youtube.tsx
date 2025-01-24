import React, { useState } from 'react'
import { InferGetServerSidePropsType } from 'next'
import Layout from '@/components/Layout'
import CamCard from '@/components/YouTubeCamCard'
import * as types from '@/utils/types'

const CARDS_PER_PAGE = 8

const YouTube = ({
  initialCams,
  totalCams,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [cams, setCams] = useState<types.Cams[]>(initialCams as types.Cams[])
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(totalCams / CARDS_PER_PAGE)

  const fetchCams = async (page: number) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/cams/youtube?page=${page}&limit=${CARDS_PER_PAGE}`
    )
    const data: types.CamPageProps = await res.json()
    setCams(data.cams as types.Cams[])
  }

  const handlePageChange = async (page: number) => {
    setCurrentPage(page)
    await fetchCams(page)
    // Scroll the page to the top after loading the new data
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <Layout
      documentTitle="Beach Cams of Oahu, Hawaii - Webcams at Waikiki Beach, Honolulu and North Shore"
      documentDescription="Best Beach Cams and Surf Cams in Oahu, Hawaii with webcams in Waikiki Beach, Honolulu and the North Shore."
      nofollow
    >
      <div className="layout">
        <h1>YouTube Hosted Webcams</h1>

        {/* Duplicate Pagination Buttons */}
        <div
          className="pagination"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
        >
          <div>
            <button
              type="button"
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              style={{ marginRight: '8px' }}
            >
              First
            </button>
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{ marginRight: '8px' }}
            >
              Previous
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{ marginRight: '8px' }}
            >
              Next
            </button>
            <button
              type="button"
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            >
              Last
            </button>
          </div>
        </div>

        <p
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>Total published YouTube cams: {totalCams}</span>
          <span>
            Page {currentPage} of {totalPages}
          </span>
        </p>
        <div className="cam-container">
          {cams.map((cam: types.Cams) => (
            <CamCard key={cam.id} cam={cam} />
          ))}
        </div>
        <div
          className="pagination"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div>
            <button
              type="button"
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              style={{ marginRight: '8px' }}
            >
              First
            </button>
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{ marginRight: '8px' }}
            >
              Previous
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{ marginRight: '8px' }}
            >
              Next
            </button>
            <button
              type="button"
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            >
              Last
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/cams/youtube?page=1&limit=${CARDS_PER_PAGE}`
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
