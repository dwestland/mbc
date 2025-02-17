import React, { useState, FC, useEffect } from 'react'
import styles from '@/styles/AddEditForm.module.scss'

interface AddCamSubareaOptionsProps {
  handleInputChange(): any
  values: {
    country: string
    state: string
    area: string
    subarea: string
  }
  areasObjectArray: any
}

const AddCamSubareaOptions: FC<AddCamSubareaOptionsProps> = ({
  handleInputChange,
  values,
  areasObjectArray,
}) => {
  const [subareasSelectOptions, setSubareasSelectOptions] = useState<
    { value: string; label: string }[]
  >([])
  const [subareasObjectArray, setSubareasObjectArray] = useState<
    { subarea: string }[]
  >([])

  // Create area options
  useEffect(() => {
    setSubareasObjectArray(
      areasObjectArray?.filter(
        (ele: { area: string }) => ele.area === values.area
      )[0]?.subareas
    )
  }, [values.area, areasObjectArray])

  useEffect(() => {
    const subareasArray = subareasObjectArray?.map((item) => item.subarea) // ['Hawaii', 'California', 'Florida']
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
        </div>
      )}
    </>
  )
}

export default AddCamSubareaOptions
