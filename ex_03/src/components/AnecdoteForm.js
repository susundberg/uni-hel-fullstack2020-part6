

import React from 'react'
import { connect } from 'react-redux'

import { createAnecdote } from '../reducers/anecdote'


const AnecdoteForm = (props) => {
    const create = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote( content )
    }

    return (
        <div id="ane-form">
            <h2>Create new anecdote</h2>
            <form onSubmit={create}>
                <input name="anecdote" />
                <button type="submit">create</button>
            </form>
        </div>
    )
}


export default connect(
    null, 
    {createAnecdote}
  )(AnecdoteForm)
