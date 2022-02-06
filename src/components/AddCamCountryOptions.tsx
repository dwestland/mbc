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

const AddCamCountryOptions: FC<AddCamCountryOptionsProps> = ({
  handleInputChange,
  values,
}) => {
  const [stateOptions, setStateOptions] = useState(false)
  const countryList = data.countries.map((item) => item.country)

  const countryOptions = countryList.map((country) => ({
    value: country,
    label: country,
  }))

  useEffect(() => {
    // If country have states, display state select

    if (true) {
      setStateOptions(true)
    }
    console.log(
      '%c values.country ',
      'background: red; color: white',
      values.country
    )
  }, [values.country])

  useEffect(() => {
    switch (values.country) {
      case 'USA':
        console.log('%c USA ', 'background: red; color: white')
        break
      case 'MEX':
        console.log('%c MEX ', 'background: red; color: white')
        break
      case 'CAN':
        console.log('%c CAN ', 'background: red; color: white')
        break
      default:
        console.log('%c default ', 'background: red; color: white')
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
export default AddCamCountryOptions
