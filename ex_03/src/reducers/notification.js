
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


const createNotification = (msg,timeout_s) => {
    const timeout = () => new Promise(res => setTimeout(res, timeout_s*1000))

    return async (dispatch) => {
      dispatch( { type: ACTION_TYPE_NOTIFICATION_CREATE, data: { msg } } )
      await timeout()
      dispatch( { type: ACTION_TYPE_NOTIFICATION_HIDE } )
    }
  }

  

export default reducer
export { createNotification }