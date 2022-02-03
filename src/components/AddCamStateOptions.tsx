import React, { useState, FC } from 'react'
import styles from '@/styles/Form.module.scss'
// import * as CONSTANTS from '@/constants/locationConstants'

interface AddCamStateOptionsProps {
  handleInputChange(): any
  values: {
    country: string
    state: string
    area: string
    subArea: string
  }
}

const AddCamStateOptions: FC<AddCamStateOptionsProps> = ({
  handleInputChange,
  values,
}) => {
  const [stateOptions, setStateOptions] = useState(false)

  return (
    <>
      <div className={styles.row}>
        <label htmlFor="state">
          State
          <input
            type="text"
            name="state"
            id="state"
            value={values.state}
            onChange={handleInputChange}
          />
        </label>
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

export default AddCamStateOptions
