import reducerAne from './reducers/anecdote'
import reducerNot from './reducers/notification'
import reducerFilt from './reducers/filter'

import { createStore, combineReducers } from 'redux'

const reducer = combineReducers({
    notification: reducerNot,
    anecdotes: reducerAne,
    filter: reducerFilt,
  })

const store = createStore(reducer)


export default store