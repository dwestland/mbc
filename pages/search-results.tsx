import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import AdLeaderboard from '@/components/AdLeaderboard'
import CamCard from '@/components/CamCard'
import * as types from '@/utils/types'

interface SearchResults {
  cams: types.Cams[]
}

const SearchCams = () => {
  const router = useRouter()
  const [searchResults, setSearchResults] = useState<SearchResults>({
    cams: [],
  })
  const [searchDisplay, setSearchDisplay] = useState<
    Array<JSX.Element> | string | JSX.Element | null
  >(null)

  const searchTerm = router.query.term
  const searchUrl = `${process.env.NEXT_PUBLIC_API}/cams/search`

  useEffect(() => {
    if (!searchTerm) return

    fetch(searchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        search: {
          term: searchTerm,
        },
      }),
    })
      .then((res) => res.json())
      .then((results: SearchResults) => {
        setSearchResults(results)
      })
      .catch((err) => console.log('err', err))
  }, [searchTerm, searchUrl])

  useEffect(() => {
    if (searchResults.cams.length === 0) {
      setSearchDisplay('No results found')
      return
    }

    if (searchResults.cams.length > 50) {
      setSearchDisplay(
        <div style={{ color: 'crimson', fontSize: '28px', fontWeight: 'bold' }}>
          Too many results, please refine your search
        </div>
      )
      return
    }

    const result = searchResults.cams.map((cam) => (
      <CamCard key={cam.id} cam={cam} />
    ))

    setSearchDisplay(result)
  }, [searchResults])

  return (
    <Layout
      documentTitle="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      documentDescription="Best Web Cams and Surf Cams in Hawaii, Florida and California and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <AdLeaderboard />
        <h1>Search Results</h1>
        <h2>
          <span style={{ fontSize: '36px' }}>Search Results for </span> <br />
          <strong>{searchTerm}</strong>
        </h2>
        <br />
        <div className="cam-container">{searchDisplay}</div>
        <AdLeaderboard />
      </div>
    </Layout>
  )
}

export default SearchCams
