import React, { useState, FC, useEffect } from 'react'
import styles from '@/styles/AddEditForm.module.scss'
import AddCamSubareasOptions from '@/components/AddCamSubareaOptions'

interface AddCamAreaOptionsProps {
  handleInputChange(): any
  values: {
    country: string
    state: string
    area: string
    subarea: string
  }
  statesObjectArray: any
}

const AddCamAreaOptions: FC<AddCamAreaOptionsProps> = ({
  handleInputChange,
  values,
  statesObjectArray,
}) => {
  const [areasSelectOptions, setAreasSelectOptions] = useState<
    { value: string; label: string }[]
  >([])
  const [areasObjectArray, setAreasObjectArray] = useState<{ area: string }[]>(
    []
  )

  // Create area options
  useEffect(() => {
    setAreasObjectArray(
      statesObjectArray?.filter(
        (ele: { state: string; areas: { area: string }[] }) =>
          ele.state === values.state
      )[0]?.areas
    )
  }, [values.state, statesObjectArray])

  useEffect(() => {
    const areasArray = areasObjectArray?.map((item) => item.area) // ['Hawaii', 'California', 'Florida']

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
