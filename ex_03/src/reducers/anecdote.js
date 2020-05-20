
import service from '../services/anecdote'

const sortState = (items) => (
  items.sort((a, b) => (b.votes - a.votes))
)

const initialState = []

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  const find_id = (to_find) => (state.find(n => n.id === to_find))

  switch (action.type) {
    case 'UPDATE':
      const changed  = action.data.object
      console.log("Update:", changed.id, changed )
      return sortState(state.map(x => x.id === changed.id ? changed : x))
    case 'CREATE':
      return sortState(state.concat(action.data.object))
    case 'INITIALIZE':
      return sortState(action.data.anecdotes)

    default:
      return state

  }
}
const vote = (id) => {
  return async (dispatch) => {
    console.log('Vote', id)
    const object = await service.vote(id)
    dispatch({ type: 'UPDATE', data: { object } })
  }
}

const createAnecdote = (content) => {
  return async dispatch => {
    console.log('Create', content)
    const object = await service.createNew(content)
    dispatch({
      type: 'CREATE',
      data: { object }
    })
  }
}

const initialAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await service.getAll()
    dispatch({
      type: 'INITIALIZE',
      data: { anecdotes },
    })
  }
}


export default reducer
export { createAnecdote, initialAnecdotes, vote }