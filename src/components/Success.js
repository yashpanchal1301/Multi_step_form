import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
  render() {

    return (
   <MuiThemeProvider>
    <>
        <AppBar title="Success !!" />
        <h1>You Have Successfully Registered. 👍</h1>
        <p>Thank You for your subsission. You will get an email regarding further instructions.</p>
    </>
   </MuiThemeProvider>
    )
  }
}

export default Success