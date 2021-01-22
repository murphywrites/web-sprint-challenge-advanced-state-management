
// IMPORT FROM ACTIONS
import {START_API_CALL, END_API_CALL, ADD_SMURF, SET_ERROR} from '../actions'
export const initialState = {
    smurfs: [],
    isLoading: false,
    error: "",
}

export const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case(START_API_CALL):
        return state
        case(END_API_CALL):
        return state
        case(ADD_SMURF):
        return state
        case(SET_ERROR):
        return state
        default:
        return state
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary