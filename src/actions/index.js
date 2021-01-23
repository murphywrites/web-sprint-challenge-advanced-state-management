import axios from 'axios';

export const START_API_CALL = "START_API_CALL"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL"
export const END_API_CALL = "END_API_CALL"
export const ADD_SMURF = "ADD_SMURF"
export const SET_ERROR = "SET_ERROR"
//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_API_CALL});
    axios
        .get('http://localhost:3333/smurfs')
        .then((res) => {
            console.log("from actions/index.js fetchSmurfs", res.data);
            dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_SMURFS_FAIL, payload: err})
        })
}
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.
export const addSmurf = (smurfState) => dispatch => {
//    if(smurfState.name && smurfState.nickname && smurfState.position) {
    console.log(smurfState)
    dispatch({ type: START_API_CALL});
    axios
    .post('http://localhost:3333/smurfs', smurfState)
        .then( res => {
            console.log(res)
            dispatch({type: ADD_SMURF, payload: smurfState})
        })
        .catch( err => {
            console.log(err.response.data.Error)
            const errorObj = {
                network: false,
                name: smurfState.name ? false : true,
                nickname: smurfState.nickname ? false: true,
                position: smurfState.position ? false: true,
                existingName: err.response.data.Error.includes("exist") ? true : false
            }
            
            dispatch({type: SET_ERROR, payload: errorObj})
        })
   }
