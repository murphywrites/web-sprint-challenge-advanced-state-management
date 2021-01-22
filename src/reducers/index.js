
// IMPORT FROM ACTIONS
import {START_API_CALL, ADD_SMURF, SET_ERROR, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL} from '../actions'
export const initialState = {
    smurfs: [],
    isLoading: false,
    error: {
        name:false,
        position:false,
        nickname:false,
        existingName:false
    },
}
// CG push
export const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case(START_API_CALL):
        return ({
            ...state,
            isLoading: true,
            error: {
                network:false,
                name:false,
                position:false,
                nickname:false,
                existingName:false
            }
            })
        case(FETCH_SMURFS_SUCCESS):
        console.log('from reducers on Sucess: ', action.payload)
        return ({
            ...state,
            smurfs: action.payload,
            isLoading: false,
            error: {
                network:false,
                name:false,
                position:false,
                nickname:false,
                existingName:false
            }
        })
        case(FETCH_SMURFS_FAIL):
        return ({
            ...state,
            isLoading: false,
            error: {
                network:true,
                name:false,
                position:false,
                nickname:false,
                existingName:false
            }
        })
        case(ADD_SMURF):
        const newSmurf = {...action.payload, id: state.smurfs.length}
        console.log("from reducers on add smurf: ", newSmurf)
        return ({
            ...state,
            smurfs: [...state.smurfs, newSmurf],
            isLoading: false,
        })
        case(SET_ERROR):
        return ({
            ...state,
            isLoading: false,
            error: action.payload
            }
        )
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