import React, { Component } from 'react';
import TextField from 'react-md/lib/TextFields';
import FontIcon from 'react-md/lib/FontIcons';
import Paper from 'react-md/lib/Papers';
import SelectionControl from 'react-md/lib/SelectionControls'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        value: '',
        other_amount: '',
        name: '',
        new_input: ''
      };

      this.completeForm = {}

      this._handleChange = this._handleChange.bind(this);
    }


  _handleChange(value, event) {
    const target = event.target
    const name = target.name
    // console.log("T", target, "N", name)
    this.setState({ [name]: value })
  }


  render() {
    return (
      <div className="App md-grid">
        <Paper zDepth={4} className= "md-cell--top">
          <form className="react-form md-grid">
          <TextField 
            onChange={this._handleChange}
            name="other_amount"
            type="text"
            id="assets"
            label="Enter amount" 
            leftIconStateful
            required
            errorText="This is an example of some error message."
            leftIcon={<FontIcon>account_balance</FontIcon>}
            className="md-cell md-cell--6"
          />
          <TextField 
            onChange={this._handleChange}
            value={this.state.name}
            name="name"
            type="text"
            id="assets"
            label="Enter amount" 
            leftIconStateful
            required
            errorText="This is an example of some error message."
            leftIcon={<FontIcon>account_balance</FontIcon>}
            className="md-cell md-cell--6"
          />
          <hr />
          <SelectionControl className="md-cell md-cell--12"
                id="lights"
                type="switch"
                label="Do you have a 401k?"
                name="lights"
          />
          <SelectionControl className="md-cell md-cell--12"
                id="lights"
                type="switch"
                label="Do you have a 401k?"
                name="lights"
          />
          <TextField 
                    onChange={this._handleChange}
                    value={this.state.value}
                    name="amount"
                    id="errorTitle"
                    label="Enter your total amount..."
                    leftIcon={<FontIcon>attach_money</FontIcon>}
                    required
                    errorText="This is an example of some error message."
                    className="md-cell md-cell--12"
          
          />
          Money: {this.state.value}
          </form>
        </Paper>
      </div>
    );
  }
}

export default App;
