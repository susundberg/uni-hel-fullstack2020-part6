

import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdote'
import service from '../services/anecdote'


const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const create = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newItem = await service.createNew( content )
        dispatch(createAnecdote(newItem))
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

export default AnecdoteForm