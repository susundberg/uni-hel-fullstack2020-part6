import React from 'react'

import { useDispatch } from 'react-redux'

import { setFilter } from '../reducers/filter'

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        // input-field value is in variable 
        const filtValue = event.target.value
        const action = setFilter(filtValue)
        console.log("OnChange filter with:", action)
        dispatch( action )
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style} id="filter">

            Filter: <input onChange={handleChange} />
        </div>
    )
}

export default Filter
