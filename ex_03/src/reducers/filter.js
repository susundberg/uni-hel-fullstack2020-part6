
const initialState = ''
const ACTION_TYPE_FILTER_SET = "FILTER_SET"

const reducer = (state = initialState, action) => {
    // console.log("Filter reducer S", state )
    // console.log("Filter reducer A", action )
    switch (action.type) {
        case ACTION_TYPE_FILTER_SET:
            console.log("New state", action.data.filter )
            return action.data.filter
        default:
            return state
    }

}


const setFilter = (filter) => ({ type: ACTION_TYPE_FILTER_SET, data: { filter } })



export default reducer
export { setFilter }