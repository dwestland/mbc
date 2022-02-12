import React, { useState, FC, useEffect } from 'react'
import styles from '@/styles/Form.module.scss'
import AddCamAreaOptions from '@/components/AddCamAreaOptions'

interface AddCamStateOptionsProps {
  handleInputChange(): any
  values: {
    country: string
    state: string
    area: string
    subArea: string
  }
  stateOptions: any
}

const AddCamStateOptions: FC<AddCamStateOptionsProps> = ({
  handleInputChange,
  values,
  stateOptions,
}) => {
  const [areaOptions, setAreaOptions] = useState([])

  // ////////////////////////////////////////////////////////////////////////////////

  // Create area options

  // const areaOriginalArray = data.xxxx.states.filter(
  //   (ele) => ele.state === values.state
  // )[0]?.area

  // ////////////////////////////////////////////////////////////////////////////////
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
            {stateOptions.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
        </label>

        <p>State: {values.state}</p>
      </div>
      {areaOptions?.length > 0 && (
        <AddCamAreaOptions
          handleInputChange={handleInputChange}
          values={values}
          areaOptions={areaOptions}
        />
      )}

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
