
const initialState = { 'msg': null, 'timer': undefined }

const ACTION_TYPE_NOTIFICATION_CREATE = "NOTIFICATION_CREATE"
const ACTION_TYPE_NOTIFICATION_HIDE   = "NOTIFICATION_HIDE"


const reducer = (state = initialState, action) => {
    console.log("NotRed state", state)
    console.log("NotRed action", action)

    switch (action.type) {
        case ACTION_TYPE_NOTIFICATION_CREATE:
            return { ...state, 'msg': action.data.msg }
        case ACTION_TYPE_NOTIFICATION_HIDE:
            return { ...state, 'msg': null }
        default:
            return state
    }

}


const createNotification = (msg) => ({ type: ACTION_TYPE_NOTIFICATION_CREATE, data: { msg } })

const createHide = () => ({ type: ACTION_TYPE_NOTIFICATION_HIDE, data: { } })

export default reducer
export { createNotification, createHide }