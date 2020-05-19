


const sortState = (items) => (
  items.sort((a, b) => (b.votes - a.votes))
)

const initialState = []

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  const find_id = () => (state.find(n => n.id === action.data.id))

  switch (action.type) {
    case 'VOTE':
      const orig = find_id()
      console.log("Vote:", orig)
      if (!orig)
        return state
      const changed = { ...orig, votes: orig.votes + 1 }
      console.log('Vote done', changed)
      return sortState(state.map(x => x.id === action.data.id ? changed : x))
    case 'CREATE':
      return sortState(state.concat(action.data.object))
    case 'INITIALIZE':
      return sortState(action.data.anecdotes)

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

const createAnecdote = (object) => {
  console.log('Create', object)
  return {
    type: 'CREATE',
    data : { object }
  }
}

const initialAnecdotes = (anecdotes) => {
  return {
    type: 'INITIALIZE',
    data: { anecdotes }
  }
}


export default reducer
export { createAnecdote, initialAnecdotes, vote }