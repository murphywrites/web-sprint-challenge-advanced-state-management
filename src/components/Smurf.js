import React from 'react';

class Smurf extends React.Component {
    render() {
        const { smurf } = this.props;

        return(<div data-testid="smurf" className="card" style={{width: "18rem"}}>
            <div className="card-body">
            <h5 className="card-title">Name: {smurf.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Position: {smurf.position}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Nickname: {smurf.nickname}</h6>
            <p className="card-text">{smurf.description}</p>
            </div>

        </div>);
    }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.