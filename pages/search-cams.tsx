import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'

const SearchCams = () => {
  const router = useRouter()
  const [searchResults, setSearchResults] = useState([])
  const searchTerm = router.query.term

  const searchUrl = `${process.env.NEXT_PUBLIC_API}/cams/search`

  const displayResults = async () => {
    await console.log(
      '%c searchResults ',
      'background: green; color: white',
      searchResults
    )
    await console.log(
      '%c searchResults.cams[0] ',
      'background: green; color: white',
      searchResults.cams[0]
    )
    await searchResults.cams.map((cam) => {
      console.log('%c cam.title ', 'background: green; color: white', cam.title)
      return null
    })
  }

  useEffect(() => {
    console.log(
      '%c (1) searchTerm ',
      'background: blue; color: white',
      searchTerm
    )
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
      .then(() => displayResults())
      .then(() =>
        console.log(
          '%c (2) searchResults ',
          'background: blue; color: white',
          searchResults
        )
      )
      .catch((err) =>
        console.log('%c err ', 'background: blue; color: white', err)
      )
    // displayResults()
  }, [searchTerm])

  return (
    <Layout
      title="MyBeachCams.com - Webcams of Hawaii, Florida and California"
      description="Best Web Cams and Surf Cams in Hawaii, Florida and California and and local information about Maui, Los Angles, Miami, Oahu, San Francisco, Kauai and Fort Lauderdale"
    >
      <div className="layout">
        <div className="container">
          <h1>Search Cams</h1>
          <h2>
            Search Results for <strong>{searchTerm}</strong>
          </h2>

          {searchResults.length > 0 &&
            searchResults.map((cam) => (
              <div key={cam.id}>
                <h3>{cam.title}</h3>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default SearchCams
