import React, { Component } from 'react';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import Card from 'react-md/lib/Cards/Card';
import Paper from 'react-md/lib/Papers';
import SelectionControl from 'react-md/lib/SelectionControls'
import Radio from 'react-md/lib/SelectionControls/Radio';
import Util from './Util'

import './App.css';

class App extends Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        pre_tax_income: '23,429',
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

      this._handleSubmit = this._handleSubmit.bind(this)
      this._handleChange = this._handleChange.bind(this);
      this._toggleDebt = this._toggleDebt.bind(this);
      this._addDebt = this._addDebt.bind(this);
      this._removeDebt = this._removeDebt.bind(this);
      this._toggle401k = this._toggle401k.bind(this);
      this._toggleRetirement = this._toggleRetirement.bind(this);
      this._toggleOther = this._toggleOther.bind(this);
    }

    _handleSubmit(e){
      let data = this.state
      this.completeForm = data
      // map some more companies 
      e.preventDefault()
      console.log(this.completeForm)
    }

    _handleChange(value, event) {
      console.log(value, event)
      const target = event.target
      const name = target.name
      // console.log("T", target, "N", name)
      console.log("Setting " ,name, " to ", value)
      this.setState({ [name]: value })
    }

    _toggleDebt(){
      console.log("im toggling debt")
      this.setState(prevState => ({
        has_debt: !prevState.has_debt
      }))
      console.log(this.state.has_debt)

      let newDebt = 
        <div>
        <TextField name="company_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Company name?" onChange={this._handleChange}/>
        <TextField name="amount_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Amount?" onChange={this._handleChange}/>
        <TextField name="rate_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Rate %" onChange={this._handleChange}/>
        </div>
    }

    _addDebt(){
      console.log("ive added debt")
      let newDebt = 
        <div>
        <TextField name="company_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Company name?" onChange={this._handleChange}/>
        <TextField name="amount_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Amount?" onChange={this._handleChange}/>
        <TextField name="rate_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Rate %" onChange={this._handleChange}/>
        </div>
    }

    _removeDebt(index){
      console.log("removing debt", {index})
    }

    _toggle401k(){
      console.log("ive toggled 401k")
      this.setState(prevState => ({
        has_401k: !prevState.has_401k
      }))
      let toggle401k = 
        <div>
        <TextField name="company_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Company name?" onChange={this._handleChange}/>
        <TextField name="amount_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Amount?" onChange={this._handleChange}/>
        <TextField name="rate_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Rate %" onChange={this._handleChange}/>
        </div>
    }

    _toggleRetirement(){
      console.log("ive toggled retire")
      this.setState(prevState => ({
        has_other_retirement: !prevState.has_other_retirement
      }))
      let toggle401k = 
        <div>
        <TextField name="company_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Company name?" onChange={this._handleChange}/>
        <TextField name="amount_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Amount?" onChange={this._handleChange}/>
        <TextField name="rate_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Rate %" onChange={this._handleChange}/>
        </div>
    }    

    _toggleOther(){
      console.log("ive toggled retire")
      this.setState(prevState => ({
        has_other_account: !prevState.has_other_account
      }))
      let toggle401k = 
        <div>
        <TextField name="company_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Company name?" onChange={this._handleChange}/>
        <TextField name="amount_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Amount?" onChange={this._handleChange}/>
        <TextField name="rate_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Rate %" onChange={this._handleChange}/>
        </div>
    }


  render() {
    return (
          <form className="form-container md-grid md-cell--12" onSubmit={this._handleSubmit}>
                <Paper zDepth={4} className= "md-grid">
                <Card className="md-grid md-cell md-cell--12"> 
                  <TextField className="md-cell md-cell--12"
                    onChange={this._handleChange}
                    value={this.state.pre_tax_income}
                    name="pre_tax_income"
                    id="pre_tax_income"
                    label="Pre-tax yearly income" 
                    leftIconStateful
                    required
                    errorText=" is required"
                    leftIcon={<FontIcon>account_balance</FontIcon>} />
                  <TextField className="md-cell md-cell--12"
                    onChange={this._handleChange}
                    name="total_monthly_expenses"
                    id="total_monthly_expenses"
                    label="Totaly monthly expenses" 
                    leftIconStateful
                    required
                    errorText="This is an example of some error message."
                    leftIcon={<FontIcon>account_balance</FontIcon>} />
                </Card>

                <Card className='401k md-grid md-cell md-cell--6'>
                  <SelectionControl className="md-cell md-cell--12" onChange={this._toggle401k}
                    type="switch"
                    label="Do you have a 401k?"
                    name="has_401k"/>
                    <div className="yes-401k md-grid md-cell--12">
                      <TextField name="yearly_contribution_401k" leftIcon={<FontIcon>attach_money</FontIcon>} label="What is your yearly contribution rate?" onChange={this._handleChange}/>
                      <SelectionControl className="md-cell md-cell--12" name="has_other_retirement" type="switch" label="Other retirement accounts?" onChange={this._toggleRetirement} />
                      <TextField className="md-cell md-cell--12" name="other_yearly_contribution" leftIcon={<FontIcon>attach_money</FontIcon>} label="What is your yearly contribution rate?" onChange={this._handleChange}/>
                    </div>
                </Card>
                <Card className="other-accounts md-grid md-cell md-cell--6">
                  <SelectionControl name="has_other_account" className="md-cell md-cell--12" type="switch" label="Do you have any other accounts?" onChange={this._toggleOther} />
                  <TextField name="other_name" className="md-cell md-cell--12" leftIcon={<FontIcon>attach_money</FontIcon>} label="Who is it with?" onChange={this._handleChange} />
                  <TextField name="other_amount" className="md-cell md-cell--12" leftIcon={<FontIcon>attach_money</FontIcon>} label="How much?" onChange={this._handleChange} />
                </Card>
                <Card className="total-checking md-grid md-cell md-cell--12" >
                  <TextField className="md-cell md-cell--12" onChange={this._handleChange}
                    name="total_checking_savings"
                    label="Total checking and savings amount"
                    leftIcon={<FontIcon>attach_money</FontIcon>}
                    required
                    errorText="This is an example of some error message." />
                </Card>
                <Card className="debt md-grid md-cell md-cell--12 md-cell--middle">
                  <SelectionControl name="has_debt" className="md-cell md-cell--12" type="switch" label="Do you have any debt?" onChange={this._toggleDebt} />
                  <div className="added-debt md-grid md-cell--12">
                    <TextField name="company_1" className="md-cell md-cell--5" leftIcon={<FontIcon>attach_money</FontIcon>} label="Company name?" onChange={this._handleChange}/>
                    <TextField name="amount_1" className="md-cell md-cell--3" leftIcon={<FontIcon>attach_money</FontIcon>} label="Amount?" onChange={this._handleChange}/>
                    <TextField name="rate_1" className="md-cell md-cell--2" leftIcon={<FontIcon>attach_money</FontIcon>} label="Rate %" onChange={this._handleChange}/>
                    <Button flat className="md-cell md-cell--2 md-cell--middle"><FontIcon>clear</FontIcon></Button>
                  </div>
                  <Button className="md-cell md-cell--1" raised secondary label="Add" onClick={this._addDebt} />
                </Card>
              </Paper>
              <Button className="btn-submit hi md-cell md-cell--12" 
                raised secondary iconBefore={false} 
                label="Submit FinScore" 
                iconClassName="fa fa-hand-paper-o" 
                type="submit" />
          </form>

    );
  }
}

export default App;
