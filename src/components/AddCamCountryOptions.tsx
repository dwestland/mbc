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
  const [stateOptions, setStateOptions] = useState([])

  // Create country options
  console.log(
    '%c data.countries ',
    'background: red; color: white',
    data.countries
  ) // [{country: 'MEX', states: Array(0)}, {country: 'CAN', states: Array(0)}, {country: 'USA', states: Array(3)}]

  const countriesArray = data.countries.map((item) => item.country) // ['MEX', 'CAN', 'USA']
  console.log(
    '%c countriesArray ',
    'background: red; color: white',
    countriesArray
  )

  const countryOptions = countriesArray.map((country) => ({
    value: country,
    label: country,
  })) // 0: [{value: 'MEX', label: 'MEX'}, {value: 'CAN', label: 'CAN'}, {value: 'USA', label: 'USA'}]

  console.log(
    '%c countryOptions ',
    'background: red; color: white',
    countryOptions
  )

  // Create state options
  useEffect(() => {
    console.log(
      '%c values.country ',
      'background: green; color: white',
      values.country
    ) // 'USA'

    const statesOriginalArray = data.countries.filter(
      (ele) => ele.country === values.country
    )[0]?.states // [0].states // [{state: 'HI', areas: Array(4)}, {state: 'CA', areas: Array(4)}, {state: 'FL', areas: Array(6)}]

    console.log(
      '%c statesOriginalArray ',
      'background: green; color: white',
      statesOriginalArray
    ) //

    const statesArray = statesOriginalArray?.map((item) => item.state) // ['HI', 'CA', 'FL']

    console.log(
      '%c statesArray ',
      'background: green; color: white',
      statesArray
    )

    setStateOptions(
      statesArray?.map((state) => ({
        value: state,
        label: state,
      }))
    ) // 0: [{value: 'HI', label: 'HI'}, {value: 'CA', label: 'CA'}, {value: 'FL', label: 'FL'}]
  }, [values.country])

  console.log(
    '%c stateOptions ',
    'background: green; color: white',
    stateOptions
  )

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
      {!!stateOptions && (
        //   <AddCamStateOptions
        //     handleInputChange={handleInputChange}
        //     values={values}
        //   />
        // )}
        <label htmlFor="state">
          State
          <select
            id="state"
            name="state"
            className={styles.select}
            onChange={handleInputChange}
          >
            <option value="" label="Choose state" />
            {stateOptions.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
        </label>
      )}
      <p>State: {values.state}</p>
    </div>
  )
}
export default AddCamCountryOptions
