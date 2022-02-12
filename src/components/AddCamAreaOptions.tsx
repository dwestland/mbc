import React, { useState, FC, useEffect } from 'react'
import styles from '@/styles/Form.module.scss'

interface AddCamAreaOptionsProps {
  handleInputChange(): any
  values: {
    country: string
    state: string
    area: string
    subArea: string
  }
  areaOptions: any
}

const AddCamAreaOptions: FC<AddCamAreaOptionsProps> = ({
  handleInputChange,
  values,
  areaOptions,
}) => {
  // const [areaOptions, setAreaOptions] = useState([])

  useEffect(() => {
    console.log(
      '%c values.country ',
      'background: red; color: white',
      values.state
    )
  }, [values.state])

  return (
    <>
      <div className={styles.row}>
        <label htmlFor="state">
          State
          <select
            id="state"
            name="state"
            className={styles.select}
            onChange={handleInputChange}
          >
            <option value="" label="Choose state" />
            {areaOptions.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
        </label>

        <p>State: {values.state}</p>
      </div>

      <div className={styles.row}>
        <label htmlFor="area">
          Area
          <input
            type="text"
            name="area"
            id="area"
            value={values.area}
            onChange={handleInputChange}
          />
        </label>
      </div>
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
