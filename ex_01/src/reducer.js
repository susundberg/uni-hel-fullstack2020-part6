const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  let newState = { ...state }

  const actionLow = action.type.toLowerCase()

  if ( ['good','ok','bad'].includes(actionLow) ) {
    newState[actionLow] += 1
    return newState
  }
  if ( actionLow === 'zero' ) {
    return initialState
  }
  return state 
}

export default counterReducer