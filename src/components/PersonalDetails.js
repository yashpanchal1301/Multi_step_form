import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class PersonalDetails extends Component {
continue = e => {
    e.preventDefault();
    this.props.nextStep();
}
back = e => {
    e.preventDefault();
    this.props.prevStep();
}


  render() {
    const {values, handleChange} = this.props;
    return (
     <MuiThemeProvider>
        <>   
        <AppBar title="Enter User Details" />
            <TextField
            type='number'
            hintText = "Age" 
            floatingLabelText = "Age"
            onChange = {handleChange('age')}
            defaultValue = {values.age}
            />
            <br />

            <TextField
            hintText = "" 
            type='date'
           floatingLabelText = "Date Of Birth"
            onChange = {handleChange('dob')}
            defaultValue = {values.dob}
            />
            <br />
            <TextField
            hintText = "Occupation" 
            floatingLabelText = "Occupation"
            onChange = {handleChange('occupation')}
            defaultValue = {values.occupation}
            />
            <br />

            <TextField
            hintText = "Enter Your City" 
            floatingLabelText = "City"
            onChange = {handleChange('city')}
            defaultValue = {values.city}
            />
            <br />

            <TextField
            hintText = "Enter Your State" 
            floatingLabelText = "State"
            onChange = {handleChange('state')}
            defaultValue = {values.state}
            />
            <br />

            <RaisedButton 
            label ="Continue"
            primary={true}
            style={{margin: 20}}
            onClick={this.continue}
             />
             
            <RaisedButton 
            label ="Back"
            primary={false}
            style={{margin: 20}}
            onClick={this.back}
             />



        </>
     </MuiThemeProvider>
    )
  }
}

export default PersonalDetails