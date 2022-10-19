import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AdLeaderboard from '@/components/AdLeaderboard'

const SearchCams = () => {
  const router = useRouter()
  const [searchResults, setSearchResults] = useState({ cams: [] })
  const [searchDisplay, setSearchDisplay] = useState(null)

  const searchTerm = router.query.term
  const searchUrl = `${process.env.NEXT_PUBLIC_API}/cams/search`

  useEffect(() => {
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
      .then((results) => {
        setSearchResults(results)
      })
      .catch((err) => console.log('err', err))
  }, [searchTerm])

  useEffect(() => {
    if (searchResults.cams.length === 0) {
      setSearchDisplay('No results found')
      return null
    }
    if (searchResults.cams.length > 50) {
      setSearchDisplay('Too many results, please refine your search')
      return null
    }

    const result = searchResults.cams.map((cam) => (
      <p key={cam.id}>
        <Link href={`/detail/${cam.id}`}>
          <a>{cam.title}</a>
        </Link>
        <br />
        {cam.subarea && <span>{cam.subarea}</span>}
        {cam.area && <span> {cam.area}</span>}
        {cam.state && <span> {cam.state}</span>}
        {cam.country && <span> {cam.country}</span>}{' '}
      </p>
    ))

    setSearchDisplay(result)
    return null
  }, [searchResults])

  return (
    <Layout
      documentTitle="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      documentDescription="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <div className="container">
          <AdLeaderboard />
          <h1>Search Cams</h1>
          <h2>
            <span style={{ fontSize: '36px' }}>Search Results for </span> <br />
            <strong>{searchTerm}</strong>
          </h2>
          <br />
          {searchDisplay}
          <br />
          <br />
          <AdLeaderboard />
        </div>
      </div>
    </Layout>
  )
}

export default SearchCams
