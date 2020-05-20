import React from 'react'

import { connect } from 'react-redux'

import { setFilter } from '../reducers/filter'

const Filter = (props) => {

    const handleChange = (event) => {
        // input-field value is in variable 
        const filtValue = event.target.value
        console.log("OnChange filter with:", filtValue)
        props.setFilter( filtValue )
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

export default connect(
    null,
    { setFilter }
)(Filter)
