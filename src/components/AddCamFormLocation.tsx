import React, { FC, useEffect, useState } from 'react'
import styles from '@/styles/Form.module.scss'
import * as CONSTANTS from '@/constants/locationConstants'

interface AddCamFormLocationProps {
  handleInputChange(): any
  values: {
    country: string
    state: string
    area: string
    subArea: string
  }
}

const AddCamFormLocation: FC<AddCamFormLocationProps> = ({
  handleInputChange,
  values,
}) => {
  const [stateOptions, setStateOptions] = useState(false)

  const countryOptions = CONSTANTS.COUNTRY_OPTIONS.map((country) => ({
    value: country,
    label: country,
  }))

  useEffect(() => {
    if (values.country === 'USA') {
      console.log(
        '%c values.country ',
        'background: green; color: white',
        values.country
      )
      setStateOptions(true)
    } else {
      setStateOptions(false)
    }
  }, [values.country])

  return (
    <div className={styles.section2}>
      <div className={styles.row}>
        <label htmlFor="country">
          Country
          <select
            id="country"
            name="country"
            className={styles.select}
            onChange={(e) => handleInputChange(e)}
          >
            <option value="" label="Choose country" />
            {countryOptions.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </label>
        <p>Country: {values.country}</p>
      </div>
      {stateOptions && (
        <div className={styles.row}>
          <label htmlFor="state">
            State
            <input
              type="text"
              name="state"
              id="state"
              value={values.state}
              onChange={handleInputChange}
            />
          </label>
        </div>
      )}
      <div className={styles.row}>
        <label htmlFor="area">
          Area
          <input
            type="text"
            name="area"
            id="area"
            value={values.area}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className={styles.row}>
        <label htmlFor="subArea">
          Sub Area
          <input
            type="text"
            name="subArea"
            id="subArea"
            value={values.subArea}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </div>
  )
}
export default AddCamFormLocation
