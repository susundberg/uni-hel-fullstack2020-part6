
const initialState = ''
const ACTION_TYPE_FILTER_SET = "FILTER_SET"

const reducer = (state = initialState, action) => {
    console.log("Filter", state, action )
    switch (action.type) {
        case ACTION_TYPE_FILTER_SET:
            return action.data.filter
        default:
            return state
    }

}


const setFilter = (filter) => ({ type: ACTION_TYPE_FILTER_SET, data: { filter } })



export default reducer
export { setFilter }