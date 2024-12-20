import React, { useState } from 'react'
import router from 'next/router'
import styles from '@/styles/Search.module.scss'

const Search = () => {
  const [term, setTerm] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (term) {
      router.push(`/search-results?term=${term}`)
    }
    return null
  }

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search Cams"
        />
      </form>
    </div>
  )
}

export default Search
