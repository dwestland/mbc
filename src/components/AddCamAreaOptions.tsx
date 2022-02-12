import React, { useState, FC, useEffect } from 'react'
import styles from '@/styles/Form.module.scss'
import data from '@/data/camLocationAreas'

interface AddCamAreaOptionsProps {
  handleInputChange(): any
  values: {
    country: string
    state: string
    area: string
    subArea: string
  }
  areasObjectArray: []
}

const AddCamAreaOptions: FC<AddCamAreaOptionsProps> = ({
  handleInputChange,
  values,
  areasObjectArray,
}) => {
  const [areaSelectOptions, setAreaOptions] = useState([])

  console.log(
    '%c areasObjectArray ',
    'background: blue; color: white',
    areasObjectArray
  )

  // console.log('%c data ', 'background: green; color: white', data)
  // console.log('%c data ', 'background: green; color: white', data)

  // Create area options
  useEffect(() => {
    // //////////////////////////////////////////////////////////////////////////////
    const areasOriginalArray = data.countries.filter(
      (ele) => ele.country === values.country
    )[0]?.areas
    // //////////////////////////////////////////////////////////////////////////////

    // console.log(data.countries[2].country)
    // console.log(data.countries[2].states[0].state)
    // console.log(data.countries[2].states[0].areas[0].area)
    // console.log(data.countries[2].states[0].areas[0].subAreas[0].subArea)

    const areasArray = areasOriginalArray?.map((item) => item.area)

    //  NEED RESULT: ['Maui', 'Oahu', 'Big Island', 'Kauai']

    // Create value, label object for area select
    setAreaOptions(
      areasArray?.map((area) => ({
        value: area,
        label: area,
      }))
    ) // 0: [{value: 'HI', label: 'HI'}, {value: 'CA', label: 'CA'}, {value: 'FL', label: 'FL'}]
  }, [values.state])

  return (
    <>
      {areaSelectOptions?.length > 0 && (
        <div className={styles.row}>
          <label htmlFor="area">
            Area
            <select
              id="area"
              name="area"
              className={styles.select}
              onChange={handleInputChange}
            >
              <option value="" label="Choose area" />
              {areaSelectOptions.map((area) => (
                <option key={area.value} value={area.value}>
                  {area.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}
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
    </>
  )
}

export default AddCamAreaOptions
