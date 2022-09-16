import React, { useState, FC, useEffect } from 'react'
import styles from '@/styles/AddEditForm.module.scss'
import AddCamAreaOptions from '@/components/AddCamAreaOptions'
import data from '@/data/camLocationAreas'

interface AddCamStateOptionsProps {
  handleInputChange(): any
  values: {
    country: string
    state: string
    area: string
    subarea: string
  }
}

const AddCamStateOptions: FC<AddCamStateOptionsProps> = ({
  handleInputChange,
  values,
}) => {
  const [stateSelectOptions, setStateSelectOptions] = useState([])
  const [statesObjectArray, setStatesObjectArray] = useState([])

  // Create state options
  useEffect(() => {
    setStatesObjectArray(
      data.countries.filter((ele) => ele.country === values.country)[0]?.states
    )
  }, [values.country])

  useEffect(() => {
    const statesArray = statesObjectArray?.map((item) => item.state) // ['Hawaii', 'California', 'Florida']

    // Create value, label objects for state select
    setStateSelectOptions(
      statesArray?.map((state) => ({
        value: state,
        label: state,
      }))
    ) // [{value: 'Hawaii', label: 'Hawaii'}, {value: 'California', label: 'California'}, {value: 'Florida', label: 'Florida'}]
  }, [statesObjectArray])

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
        </div>
      )}

      <AddCamAreaOptions
        handleInputChange={handleInputChange}
        values={values}
        statesObjectArray={statesObjectArray}
      />
    </>
  )
}

export default AddCamStateOptions
