import React, { useState, FC, useEffect } from 'react'
import styles from '@/styles/Form.module.scss'
import data from '@/data/camLocationAreas'
import AddCamSubareasOptions from '@/components/AddCamSubareaOptions'

interface AddCamAreaOptionsProps {
  handleInputChange(): any
  values: {
    country: string
    state: string
    area: string
    subArea: string
  }
  statesObjectArray: []
}

const AddCamAreaOptions: FC<AddCamAreaOptionsProps> = ({
  handleInputChange,
  values,
  statesObjectArray,
}) => {
  const [areasSelectOptions, setAreasSelectOptions] = useState([])
  const [areasObjectArray, setAreasObjectArray] = useState([])

  // Create area options
  useEffect(() => {
    setAreasObjectArray(
      statesObjectArray?.filter((ele) => ele.state === values.state)[0]?.areas
    )

    // //////////////////////////////////////////////////////////////////////////////
    // const areasObjectArray = data.countries.filter(
    //   (ele) => ele.country === values.country
    // )[0]?.areas
    // // //////////////////////////////////////////////////////////////////////////////
    // // console.log(data.countries[2].states[0].areas[0].subAreas[0].subArea)
    // const areasArray = areasObjectArray?.map((item) => item.area)
    // //  NEED RESULT: ['Maui', 'Oahu', 'Big Island', 'Kauai']
    // // Create value, label object for area select
    // setAreaOptions(
    //   areasArray?.map((area) => ({
    //     value: area,
    //     label: area,
    //   }))
    // ) // 0: [{value: 'HI', label: 'HI'}, {value: 'CA', label: 'CA'}, {value: 'FL', label: 'FL'}]
  }, [values.state])

  useEffect(() => {
    const areasArray = areasObjectArray?.map((item) => item.area) // ['HI', 'CA', 'FL']

    // Create value, label object for state select
    setAreasSelectOptions(
      areasArray?.map((area) => ({
        value: area,
        label: area,
      }))
    )
  }, [areasObjectArray])

  return (
    <>
      {areasSelectOptions?.length > 0 && (
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
              {areasSelectOptions.map((area) => (
                <option key={area.value} value={area.value}>
                  {area.label}
                </option>
              ))}
            </select>
          </label>

          <p>Area: {values.area}</p>
        </div>
      )}
      <AddCamSubareasOptions
        handleInputChange={handleInputChange}
        values={values}
        areasObjectArray={areasObjectArray}
      />
    </>
  )
}

export default AddCamAreaOptions