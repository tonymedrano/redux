import C from '../constants'

export const goal = (state, action) => {
    if (action.type === C.SET_GOAL) {
        return parseInt(action.payload)
    } else {
        return state
    }
}

export const skiDay = (state = null, action) => {
    if (action.type === C.ADD_DAY)
        return action.payload
    else
        return state
}

export const errors = (state = [], action) => {
    switch (action.type) {
        case C.ADD_ERROR:
            return [
                ...state,
                action.payload
            ]
        case C.CLEAR_ERROR:
            return state.filter((mesage, i) => i !== action.payload)
        default:
            return state
    }
}

export const allSkiDays = (state = [], action) => {
    switch (action.type) {
        case C.ADD_DAY:
            return [
                ...state,
                skiDay(null, action)
            ]
        default:
            return state
    }
}