import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";

export class UserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
};

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, age, dob, state },
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Age" secondaryText={age} />
            <ListItem primaryText="DOB" secondaryText={dob} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="State" secondaryText={state} />
          </List>

          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={{ margin: 20 }}
            onClick={this.continue}
          />

          <RaisedButton
            label="Back"
            primary={false}
            style={{ margin: 20 }}
            onClick={this.back}
          />
        </>
      </MuiThemeProvider>
    );
  }
}

export default UserDetails;
