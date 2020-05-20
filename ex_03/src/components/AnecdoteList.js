import React from 'react'
import { connect } from 'react-redux'

import { vote } from '../reducers/anecdote'
import { createNotification } from '../reducers/notification'

const AnecdoteList = (props) => {



  const onVote = (anecdote) => {
    props.createNotification(`You voted: ${anecdote.content}`, 5)
    props.vote(anecdote)
  }


  return (
    <div id="ane-list">
      <h2> Anecdotes </h2>
      {props.anecdotes.map(x =>
        <div key={x.id}>
          <div>
            {x.content}
          </div>
          <div>
            has {x.votes}
            <button onClick={() => onVote(x)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}



const mapStateToProps = (state) => {
  console.log("Map filter with", state.filter)
  const filtValue = state.filter.toUpperCase()
  const anecdotes = state.anecdotes.filter(x => x.content.toUpperCase().includes(filtValue))
  return { anecdotes }
}


export default connect(
  mapStateToProps,
  { vote, createNotification }
)(AnecdoteList)




