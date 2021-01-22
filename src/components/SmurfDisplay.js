import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchSmurfs, addSmurf} from "../actions"
import Smurf from './Smurf'

// { smurfs, isLoading, error, fetchSmurfs }
const SmurfDisplay = (props) => {
    useEffect( () => {
        props.fetchSmurfs();
        
    }, [])

    if (props.error.network) {
    return <h2>We got an error: {props.error.network}</h2>
    }

    if (props.isLoading) {
        return <h2> Loading the Smurfs from Belgium...</h2>
    }
        return(<div>
            <h1>Smurf Lineup</h1>
            <div className="smurf-card-container" style={{display: "flex", flexWrap: "wrap"}}>
            {props.smurfs.map( smurf => {
                return(
                <Smurf key={smurf.id} smurf={smurf}/>
                )
            })
        }
        </div>
        </div>)

        
    }
    const mapStateToProps = state => {
        return {
            smurfs: state.smurfs,
            isLoading: state.isLoading,
            error: state.error,
            
        }
    }

export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.