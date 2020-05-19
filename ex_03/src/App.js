import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initialAnecdotes } from './reducers/anecdote'
import service from './services/anecdote'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    service.getAll().then( data => dispatch(initialAnecdotes(data)))
  }, [dispatch])

  return (
    <div>
      <Notification />
      <Filter />
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}



export default App

