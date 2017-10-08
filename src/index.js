import C from './constants'
import { allSkiDays } from './store/reducers'

const state = {
    "resort": "Alkatrah Valley",
    "date": "2016-12-15",
    "powder": true,
    "backcountry": false
}

const action = {
    type: C.ADD_DAY,
    payload: {
        "resort": "Boreal",
        "date": "2016-12-16",
        "powder": false,
        "backcountry": false
    }
}

const nextState = allSkiDays(state, action)

console.log(`
 
      initial state: ${JSON.stringify(state)}
      action: ${JSON.stringify(action)}
      new state: ${JSON.stringify(nextState)}

`)