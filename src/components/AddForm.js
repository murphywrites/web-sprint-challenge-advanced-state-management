import React from 'react';
import {addSmurf} from '../actions';
import { connect } from 'react-redux';

class AddForm extends React.Component {
    state = {
    smurf:    {
        name:"",
        position:"",
        nickname:"",
        description:""
    },
}

    handleChange = e => {
        this.setState({...this.state,
                        smurf:
                        {...this.state.smurf, [e.target.name]:e.target.value}})
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("handle submit",this.state.smurf)
        this.props.addSmurf(this.state.smurf)

    }
   

    render() {
        const errorDisp = this.props.error.name === true || this.props.error.nickname === true || this.props.error.position === true || this.props.error.existingName === true 

        return(<section>
            <h2>Add Smurf</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input value={this.state.name} onChange={this.handleChange} name="name" id="name" />
                    <label htmlFor="position">Position:</label><br/>
                    <input value={this.state.position} onChange={this.handleChange} name="position" id="position" />
                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input value={this.state.nickname} onChange={this.handleChange} name="nickname" id="nickname" />
                    <label htmlFor="description">Description:</label><br/>
                    <input value={this.state.description} onChange={this.handleChange} name="description" id="description" />
                </div>

        {errorDisp ?  
        <div data-testid="errorAlert" className="alert alert-danger" role="alert">
            <span>Error:</span> 
        {this.props.error.name &&  <span> Smurf Name required</span>}
        {this.props.error.nickname && <span> Smurf Nickname required</span>}
        {this.props.error.position && <span> Smurf Position required</span>}
        {this.props.error.existingName && <span> Smurf Name already taken</span>}
        </div>

        : <div></div>
        }
                <button onClick={this.handleSubmit}>Submit Smurf</button>
            </form>
        </section>);
    }
}
const mapStateToProps = state => ({
    error: state.error
})

export default connect(mapStateToProps,{ addSmurf })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.