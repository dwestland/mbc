import React, { useState, FC, useEffect } from 'react'
import styles from '@/styles/Form.module.scss'
import AddCamAreaOptions from '@/components/AddCamAreaOptions'
import data from '@/data/camLocationAreas'

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
  const [stateSelectOptions, setStateSelectOptions] = useState([])
  const [areasObjectArray, setAreasObjectArray] = useState([])

  // Create state options
  useEffect(() => {
    // values.country = 'USA'
    const statesObjectArray = data.countries.filter(
      (ele) => ele.country === values.country
    )[0]?.states // [{state: 'HI', areas: Array(4)}, {state: 'CA', areas: Array(4)}, {state: 'FL', areas: Array(6)}]

    console.log(
      '%c values.state ',
      'background: red; color: white',
      values.state
    )

    console.log(
      '%c areasObjectArray ',
      'background: red; color: white',
      statesObjectArray?.filter((ele) => ele.state === values.state)[0]?.areas
    )

    setAreasObjectArray(
      statesObjectArray?.filter((ele) => ele.state === values.state)[0]?.areas
    )

    const statesArray = statesObjectArray?.map((item) => item.state) // ['HI', 'CA', 'FL']

    // Create value, label object for state select
    setStateSelectOptions(
      statesArray?.map((state) => ({
        value: state,
        label: state,
      }))
    ) // 0: [{value: 'HI', label: 'HI'}, {value: 'CA', label: 'CA'}, {value: 'FL', label: 'FL'}]
  }, [values.country])

  return (
    <>
      {stateSelectOptions?.length > 0 && (
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
              {stateSelectOptions.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          </label>

          <p>State: {values.state}</p>
        </div>
      )}

      <AddCamAreaOptions
        handleInputChange={handleInputChange}
        values={values}
        areasObjectArray={areasObjectArray}
      />
    </>
  )
}

export default AddCamStateOptions
