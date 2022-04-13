import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '@/components/Layout'

const SearchCams = () => {
  const router = useRouter()
  const [searchResults, setSearchResults] = useState([])
  const searchTerm = router.query.term

  const searchUrl = `${process.env.NEXT_PUBLIC_API}/cams/search`

  // Use useEffect to fetch search results?
  const displayResults = async () => {
    await console.log(
      '%c searchResults ',
      'background: green; color: white',
      searchResults
    )
    if (searchResults.length > 0) {
      await searchResults.cams.map((cam) => {
        console.log(
          '%c cam.title ',
          'background: green; color: white',
          cam.title
        )
        return null
      })
    }
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
        displayResults()
      })
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

          {searchResults.cams ? (
            searchResults.cams.map((cam) => (
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
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default SearchCams
