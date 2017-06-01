import React, { Component } from 'react';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import Paper from 'react-md/lib/Papers';
import SelectionControl from 'react-md/lib/SelectionControls'
import './App.css';

class App extends Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        amount: '',
        other_amount: '',
        name: '',
        new_input: '',
        fourK: true
      };

      this.completeForm = {}

      this._handleChange = this._handleChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(event){
      let data = this.completeForm;
      data = (this.state)
      event.preventDefault()
      console.log(data)
    }

    _handleChange(value, event) {
      // console.log(value, event)
      const target = event.target
      const name = target.name
      // console.log("T", target, "N", name)
      console.log("Setting " ,name, " to ", value)
      this.setState({ [name]: value })
    }


  render() {
    return (
      <div className="App md-grid">
        <Paper zDepth={4} className= "md-cell--top">
          <form className="react-form md-grid" onSubmit={this._handleSubmit}>
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
                onChange={this._handleChange}
                id="lights"
                type="switch"
                label="Do you have a 401k?"
                name="fourK"
          />
          <TextField 
                    onChange={this._handleChange}
                    value={this.state.amount}
                    name="amount"
                    id="errorTitle"
                    label="Enter your total amount..."
                    leftIcon={<FontIcon>attach_money</FontIcon>}
                    required
                    errorText="This is an example of some error message."
                    className="md-cell md-cell--12"
          
          />
          <Button className="md-cell md-cell--2" raised secondary iconBefore={false} label="Submit FinScore" iconClassName="fa fa-hand-paper-o" type="submit" />
          </form>
        </Paper>
      </div>
    );
  }
}

export default App;
