import React, { FC } from 'react'
import styles from '@/styles/AddEditForm.module.scss'
import AddCamStateOptions from '@/components/AddCamStateOptions'
import data from '@/data/camLocationAreas'

interface AddCamCountryOptionsProps {
  handleInputChange: any
  values: {
    country: string
    state: string
    area: string
    subarea: string
  }
}

// TODO When the country changes, need to update the state options

const AddCamCountryOptions: FC<AddCamCountryOptionsProps> = ({
  handleInputChange,
  values,
}) => {
  // Create country options
  const countriesArray = data.countries.map((item) => item.country) // ['MEX', 'CAN', 'USA']

  // Create value, label objects for country select
  const countrySelectOptions = countriesArray.map((country) => ({
    value: country,
    label: country,
  })) // [{value: 'MEX', label: 'MEX'}, {value: 'CAN', label: 'CAN'}, {value: 'USA', label: 'USA'}]

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
            {countrySelectOptions.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <AddCamStateOptions
        handleInputChange={handleInputChange}
        values={values}
      />
    </div>
  )
}
export default AddCamCountryOptions
