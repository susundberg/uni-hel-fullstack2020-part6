import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const onClick = (eventType) => {
    console.log("Click", eventType)
    store.dispatch({
      type: eventType
    })
  }

  let state = store.getState()
  return (
    <div>
      <button onClick={() => (onClick("GOOD"))}>good</button>
      <button onClick={() => (onClick("OK"))}>neutral</button>
      <button onClick={() => (onClick("BAD"))}>bad</button>
      <button onClick={() => (onClick("ZERO"))}>reset stats</button>
      <div>good {state.good}</div>
      <div>neutral {state.ok}</div>
      <div>bad {state.bad} </div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
