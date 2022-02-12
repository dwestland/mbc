import React, { FC, useEffect, useState } from 'react'
import styles from '@/styles/Form.module.scss'
import AddCamStateOptions from '@/components/AddCamStateOptions'
import data from '@/data/camLocationAreas'

interface AddCamCountryOptionsProps {
  handleInputChange(): any
  values: {
    country: string
    state: string
    area: string
    subArea: string
  }
}

// TODO  When the country changes, we need to update the state options

const AddCamCountryOptions: FC<AddCamCountryOptionsProps> = ({
  handleInputChange,
  values,
}) => {
  // data.countries = [{country: 'MEX', states: Array(0)}, {country: 'CAN', states: Array(0)}, {country: 'USA', states: Array(3)}]

  // Create country options
  const countriesArray = data.countries.map((item) => item.country) // ['MEX', 'CAN', 'USA']
  // Create value, label object for country select
  const countryOptions = countriesArray.map((country) => ({
    value: country,
    label: country,
  })) // 0: [{value: 'MEX', label: 'MEX'}, {value: 'CAN', label: 'CAN'}, {value: 'USA', label: 'USA'}]

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
      <AddCamStateOptions
        handleInputChange={handleInputChange}
        values={values}
        // stateOptions={stateOptions}
      />
    </div>
  )
}
export default AddCamCountryOptions
