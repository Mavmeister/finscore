import React, { Component } from 'react';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import Paper from 'react-md/lib/Papers';
import SelectionControl from 'react-md/lib/SelectionControls'
import Radio from 'react-md/lib/SelectionControls/Radio';

import './App.css';

class App extends Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        pre_tax_income: '',
        total_monthly_expenses: '',
        yearly_contribution_401k: '',
        has_401k: false,
        has_other_retirement: false,
        other_yearly_contribution: '',
        total_checking_savings: '',
        has_debt: false,
        company_1: '',
        amount_1: '',
        rate_1: '',
        has_other_account: false,
        other_name: '',
        other_amount: ''

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
      console.log(value, event)
      const target = event.target
      const name = target.name
      // console.log("T", target, "N", name)
      console.log("Setting " ,name, " to ", value)
      this.setState({ [name]: value })
    }


  render() {
    return (
        <Paper zDepth={4} className= "md-grid">
          <form className="form-container md-grid md-cell--12" onSubmit={this._handleSubmit}>
              <div className="inner-form md-grid md-cell--12">
                <div className="md-grid md-cell--12"> 
                  <TextField className="md-cell md-cell--6"
                    onChange={this._handleChange}
                    name="pre_tax_income"
                    id="pre_tax_income"
                    label="Pre-tax yearly income" 
                    leftIconStateful
                    required
                    errorText=" is required"
                    leftIcon={<FontIcon>account_balance</FontIcon>} />
                  <TextField className="md-cell md-cell--6"
                    onChange={this._handleChange}
                    name="total_monthly_expenses"
                    id="total_monthly_expenses"
                    label="Totaly monthly expenses" 
                    leftIconStateful
                    required
                    errorText="This is an example of some error message."
                    leftIcon={<FontIcon>account_balance</FontIcon>} />
                </div>
                <div className='401k md-grid md-cell md-cell--6'>
                  <SelectionControl className="md-cell md-cell--12" onChange={this._handleChange}
                    type="switch"
                    label="Do you have a 401k?"
                    name="has_401k"/>
                    <div className="yes-401k md-grid md-cell--12">
                      <TextField name="yearly_contribution" leftIcon={<FontIcon>attach_money</FontIcon>} label="What is your yearly contribution rate?" onChange={this._handleChange}/>
                      <SelectionControl className="md-cell md-cell--12" name="has_other_retirement" leftIcon={<FontIcon>attach_money</FontIcon>} type="switch" label="Other retirement accounts?" onChange={this._handleChange} />
                      <TextField className="md-cell md-cell--12" name="other_yearly_contribution" leftIcon={<FontIcon>attach_money</FontIcon>} label="What is your yearly contribution rate?" onChange={this._handleChange}/>
                    </div>
                </div>
                  <TextField className="total-checking md-cell md-cell--6" onChange={this._handleChange}
                    name="total_checking_savings"
                    label="Total checking and savings amount"
                    leftIcon={<FontIcon>attach_money</FontIcon>}
                    required
                    errorText="This is an example of some error message." />
                <div className="debt md-grid md-cell md-cell--6 md-cell--top">
                  <SelectionControl name="has_debt" className="md-cell md-cell--12" type="switch" label="Do you have any debt?" onChange={this._handleChange} />
                  <TextField name="company_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Company name?" onChange={this._handleChange}/>
                  <TextField name="amount_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Amount?" onChange={this._handleChange}/>
                  <TextField name="rate_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Rate %" onChange={this._handleChange}/>
                  <Button className="md-cell md-cell--1" raised secondary label="Add" />
                </div>
                <div className="other-accounts md-grid md-cell md-cell--12">
                  <SelectionControl name="has_other_account" className="md-cell md-cell--12" leftIcon={<FontIcon>attach_money</FontIcon>} type="switch" label="Do you have any other accounts?" onChange={this._handleChange} />
                  <TextField name="other_name" className="md-cell md-cell--6" leftIcon={<FontIcon>attach_money</FontIcon>} label="Who is it with?" onChange={this._handleChange} />
                  <TextField name="other_amount" className="md-cell md-cell--6" leftIcon={<FontIcon>attach_money</FontIcon>} label="How much?" onChange={this._handleChange} />
                </div>
            </div>
              <Button className="btn-submit hi md-cell md-cell--12" 
                raised secondary iconBefore={false} 
                label="Submit FinScore" 
                iconClassName="fa fa-hand-paper-o" 
                type="submit" />
          </form>

        </Paper>
    );
  }
}

export default App;
