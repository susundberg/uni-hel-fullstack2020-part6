const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const sortState =  (items) => (
  items.sort((a, b) => (  b.votes - a.votes )  )
  )

const initialState = sortState( anecdotesAtStart.map(asObject) )

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  
  const find_id = (  ) => ( state.find(n => n.id === action.data.id))

  switch (action.type) {
    case 'VOTE':
      const orig  = find_id( )
      console.log("Vote:", orig )
      if (!orig)
         return state
      const changed = { ...orig, votes: orig.votes + 1 }
      console.log('Vote done', changed )
      return sortState( state.map( x => x.id === action.data.id ? changed : x ) )
    case 'CREATE':
      return sortState( state.concat( asObject( action.data.content ) ) )

    default:
      return state

  }
}
const vote = (id) => {
  console.log('Vote', id)
  return {
    type: 'VOTE',
    data: { id }
  }
}

const createAnecdote = (content) => {
  console.log('Create', content)
  return {
    type: 'CREATE',
    data: { content }
  }
}


export default reducer
export { createAnecdote, vote }