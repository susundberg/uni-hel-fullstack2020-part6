import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdote'
import { createNotification } from '../reducers/notification'

const AnecdoteList = () => {

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter).toUpperCase()
  const dispatch = useDispatch()

  const onVote = (anecdote) => {
    dispatch(createNotification(`You voted: ${anecdote.content}`, 5 ))
    dispatch(vote(anecdote))
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
            <button onClick={() => onVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}


export default AnecdoteList
