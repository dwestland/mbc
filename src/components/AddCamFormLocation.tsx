import React, { FC, useEffect, useState } from 'react'
import styles from '@/styles/Form.module.scss'
import * as CONSTANTS from '@/constants/locationConstants'
import AddCamStateOptions from '@/components/AddCamStateOptions'

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
      setStateOptions(true)
    } else {
      setStateOptions(false)
    }
  }, [values.country])

  return (
    <div className={styles.section2} style={{ border: '1px solid blue' }}>
      <div className={styles.row}>
        <label htmlFor="country">
          Country
          <select
            id="country"
            name="country"
            className={styles.select}
            onChange={handleInputChange}
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
        <AddCamStateOptions
          handleInputChange={handleInputChange}
          values={values}
        />
      )}
    </div>
  )
}
export default AddCamFormLocation
