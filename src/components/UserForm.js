import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
state ={
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    age: '',
    dob: '',
    city: '',
    state: '',
    occupation: '',

}

//proceed
nextStep =() => {
    const { step } = this.state;
      this.setState ({
        step: step + 1
    });
    
}

//go back
prevStep =() => {
    const { step } = this.state;
    this.setState ({
        step: step - 1
    });
}

//handle field change
handleChange = input => e => {
    this.setState({[input]: e.target.value});
}

  render() {
    const {step, firstName, lastName, email, age, dob,occupation, city, state} = this.state;
    const values ={firstName, lastName, email, age, dob, occupation, city, state}

    switch(step) {
        case 1:
            return(
            <UserDetails 
                nextStep= {this.nextStep}
                handleChange={this.handleChange}
                values={values}
            />
            )

        case 2:
            return(
                <PersonalDetails 
                 nextStep= {this.nextStep}
                 prevStep = {this.prevStep}
                handleChange={this.handleChange}
                values={values}
                 />
            )
        case 3:
            return(
                <Confirm 
                 nextStep= {this.nextStep}
                 prevStep = {this.prevStep}
                values={values}
                 />
            )
            
          
        case 4:
            return <Success />

           
    }


    return (
        
      <div>UserForm</div>
    )
  }
}

export default UserForm