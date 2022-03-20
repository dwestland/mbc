import React, { useState, FC, useEffect } from 'react'
import styles from '@/styles/Form.module.scss'
// import data from '@/data/camLocationAreas'

interface AddCamSubareaOptionsProps {
  handleInputChange(): any
  values: {
    country: string
    state: string
    area: string
    subArea: string
  }
  areasObjectArray: any
}

const AddCamSubareaOptions: FC<AddCamSubareaOptionsProps> = ({
  handleInputChange,
  values,
  areasObjectArray,
}) => {
  const [subareasSelectOptions, setSubareasSelectOptions] = useState([])
  const [subareasObjectArray, setSubareasObjectArray] = useState([])

  // Create area options
  useEffect(() => {
    setSubareasObjectArray(
      areasObjectArray?.filter((ele) => ele.area === values.area)[0]?.subAreas
    )

    // //////////////////////////////////////////////////////////////////////////////
    // const subareasObjectArray = data.countries.filter(
    //   (ele) => ele.country === values.country
    // )[0]?.areas
    // // //////////////////////////////////////////////////////////////////////////////
    // // console.log(data.countries[2].states[0].areas[0].subAreas[0].subArea)
    // const subareasArray = subareasObjectArray?.map((item) => item.area)
    // //  NEED RESULT: ['Maui', 'Oahu', 'Big Island', 'Kauai']
    // // Create value, label object for area select
    // setAreaOptions(
    //   subareasArray?.map((area) => ({
    //     value: area,
    //     label: area,
    //   }))
    // ) // 0: [{value: 'HI', label: 'HI'}, {value: 'CA', label: 'CA'}, {value: 'FL', label: 'FL'}]
  }, [values.area])

  useEffect(() => {
    // console.log(
    //   '%c subareasObjectArray ',
    //   'background: blue; color: white',
    //   subareasObjectArray
    // )

    const subareasArray = subareasObjectArray?.map((item) => item.subArea) // ['HI', 'CA', 'FL']

    // console.log(
    //   '%c subareasArray ',
    //   'background: blue; color: white',
    //   subareasArray
    // )

    // Create value, label object for state select
    setSubareasSelectOptions(
      subareasArray?.map((area) => ({
        value: area,
        label: area,
      }))
    )
  }, [subareasObjectArray])

  return (
    <>
      {subareasSelectOptions?.length > 0 && (
        <div className={styles.row}>
          <label htmlFor="area">
            Subarea
            <select
              id="area"
              name="area"
              className={styles.select}
              onChange={handleInputChange}
            >
              <option value="" label="Choose area" />
              {subareasSelectOptions.map((area) => (
                <option key={area.value} value={area.value}>
                  {area.label}
                </option>
              ))}
            </select>
          </label>

          <p>Subarea: {values.area}</p>
        </div>
      )}
    </>
  )
}

export default AddCamSubareaOptions
