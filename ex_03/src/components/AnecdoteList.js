import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdote'
import { createNotification, createHide } from '../reducers/notification'

const AnecdoteList = () => {

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter).toUpperCase()
  const dispatch = useDispatch()

  const onVote = (id, content) => {
    dispatch(createNotification(`You voted: ${content}`))
    setTimeout(() => { dispatch(createHide()) }, 5000)
    dispatch(vote(id))
  }

  let filtered = anecdotes

  if (filter !== '') {
    filtered = anecdotes.filter(x => x.content.toUpperCase().includes(filter))
  }

  return (
    <div id="ane-list">
      <h2> Anecdotes </h2>
      {filtered.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => onVote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}


export default AnecdoteList
