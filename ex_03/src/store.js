import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'


import reducerAne from './reducers/anecdote'
import reducerNot from './reducers/notification'
import reducerFilt from './reducers/filter'

const reducer = combineReducers({
  notification: reducerNot,
  anecdotes: reducerAne,
  filter: reducerFilt,
})

const store = createStore(reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ))


export default store