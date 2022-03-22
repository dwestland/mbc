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
  }, [values.area])

  useEffect(() => {
    const subareasArray = subareasObjectArray?.map((item) => item.subArea) // ['HI', 'CA', 'FL']
    setSubareasSelectOptions(
      subareasArray?.map((subarea) => ({
        value: subarea,
        label: subarea,
      }))
    )
  }, [subareasObjectArray])

  return (
    <>
      {subareasSelectOptions?.length > 0 && (
        <div className={styles.row}>
          <label htmlFor="subarea">
            Subarea
            <select
              id="subarea"
              name="subarea"
              className={styles.select}
              onChange={handleInputChange}
            >
              <option value="" label="Choose subarea" />
              {subareasSelectOptions.map((subarea) => (
                <option key={subarea.value} value={subarea.value}>
                  {subarea.label}
                </option>
              ))}
            </select>
          </label>

          <p>Subarea: {values.subArea}</p>
        </div>
      )}
    </>
  )
}

export default AddCamSubareaOptions
