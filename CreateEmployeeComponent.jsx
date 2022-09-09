import { useState} from 'react';

function CreateEmployeeComponent(props) {

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [emailId, setEmailId] = useState("");


    // this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    // this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    // this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);


changeFirstNameHandler = (event) => {
    this.setFirstName(event.target.value);
}

changeLastNameHandler = (event) => {
    this.setLastName( event.target.value);
}

changeEmailIdHandler = (event) => {
    this.setEmailId( event.target.value);
}

return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Add Employee</h3>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <label>First Name:</label>
                                <input placeholder='First Name' name='firstName' className="form-control"
                                value={firstName} onChange={this.changeFirstNameHandler} />
                            </div>
                            <div className="form-group">
                                <label>Last Name:</label>
                                <input placeholder='Last Name' name='lastName' className="form-control"
                                value={ lastName} onChange={this.changeLastNameHandler} />
                            </div>
                            <div className="form-group">
                                <label>Email Id:</label>
                                <input placeholder='Email Id' name='emailId' className="form-control"
                                value={ emailId} onChange={this.changeEmailIdHandler} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
);
}
export default CreateEmployeeComponent;



/*
import React, { Component } from 'react';

class CreateEmployeeComponent extends Component {

constructor(props){
    super(props)

    this.state = {
        firstName: '',
        lastName: '',
        emailId: ''
    }

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
}

changeFirstNameHandler = (event) => {
    this.setState({firstName: event.target.value});
}

changeLastNameHandler = (event) => {
    this.setState({lastName: event.target.value});
}

changeEmailIdHandler = (event) => {
    this.setState({emailId: event.target.value});
}


    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input placeholder='First Name' name='firstName' className="form-control"
                                        value={ firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input placeholder='Last Name' name='lastName' className="form-control"
                                        value={ lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Id:</label>
                                        <input placeholder='Email Id' name='emailId' className="form-control"
                                        value={ emailId} onChange={this.changeEmailIdHandler} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CreateEmployeeComponent;
*/