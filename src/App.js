import React, { Component } from 'react';

import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import Card from 'react-md/lib/Cards/Card';
import Paper from 'react-md/lib/Papers';
import SelectionControl from 'react-md/lib/SelectionControls'
import Collapse from 'react-md/lib/Helpers/Collapse';

import Header from './components/Header'
import Footer from './components/Footer'
import Review from './components/Review'
import Debt from './components/Debt'

import './App.css';

class App extends Component {
  constructor(props, context) {
      super(props, context);

      this.initialState = {
        hasNotSubmitted: false,
        pre_tax_income: 179000,
        total_monthly_expenses: 3000,
        yearly_contribution_401k: 20,
        has_401k: true,
        has_other_retirement: false,
        has_debt: true,
        has_other_account: false,
        other_yearly_contribution: 15,
        total_checking_savings: 19000,
        company_1: 'Bone Thugs',
        amount_1: 100,
        rate_1: 9,
        other_name: '',
        other_amount: '',
        numDebt: 0,
        debtData: []
      }

      this.state = {
        hasNotSubmitted: true,
        pre_tax_income: '',
        total_monthly_expenses: '',
        yearly_contribution_401k: '',
        has_401k: false,
        has_other_retirement: false,
        has_debt: false,
        has_other_account: false,
        other_yearly_contribution: '',
        total_checking_savings: '',
        company_1: '',
        amount_1: '',
        rate_1: '',
        other_name: '',
        other_amount: '',
        numDebt: 0,
        debtData: []
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
      this._reviewToggle = this._reviewToggle.bind(this);

    }
      componentWillMount(){
        this._handleSubmit()
      }

    _reviewToggle(value){
      console.log('submitted and disabled')

    }
  
    _handleSubmit(){
      let data = this.initialState
      this.completeForm = data
      // map some more companies 
      console.log("COMPLETE DATA", this.completeForm)
      this.setState({hasNotSubmitted: false})
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
      console.log("im toggling debt", this.state.has_debt)
      let hasDebt = this.state.numDebt > 0 ? true :  false
      this.setState(prevState => ({
        has_debt: !prevState.has_debt,

      }))
    }
    _addDebt(component){
      console.log(component)
      let debts = this.state.debtData
      let debtItem = {
        company: this.state.company_1,
        amount: this.state.amount_1,
        rate: this.state.rate_1
      }
      debts.push(debtItem)
      console.log("ive added debt")
      console.log(debts)
      this.setState({
          numDebt: this.state.numDebt + 1,
          debtData: debts
      });
    }
    _removeDebt(index){
      console.log("removing debt", this.state.numDebt)
      let numDebt = this.state.numDebt > 0 ? this.state.numDebt - 1 : this.state.numDebt + 1
      let debts = this.state.debtData
      debts.pop()
      this.setState({
        numDebt: this.state.numDebt - 1,
        debtData: debts,
      })
    }
    _toggle401k(){
      console.log("ive toggled 401k")
      this.setState(prevState => ({
        has_401k: !prevState.has_401k,
      }))
    }
    _toggleRetirement(){
      console.log("ive toggled retire")
      this.setState(prevState => ({
        has_other_retirement: !prevState.has_other_retirement
      }))
    }    
    _toggleOther(){
      console.log("ive toggled retire")
      this.setState(prevState => ({
        has_other_account: !prevState.has_other_account
      }))
    }

  render() {
      let newDebt = this.state.debtData.map((debt) => {
        return <Debt handleChange={this._handleChange} key={this.state.numDebt} debtCount={this.state.numDebt} removeDebt={this._removeDebt} />
      })

      let DebtComponent = 
      <div> 
        <Debt handleChange={this._handleChange} key={this.state.numDebt} debtCount={this.state.numDebt} removeFirstDebt={this._toggleDebt} />
        {newDebt}
        <Button className="md-cell md-cell--1" raised secondary label="Add" onClick={this._addDebt} />
      </div>

      // let DebtComponent = <Debt handleChange={this._toggleDebt} debtCount={this.state.numDebt} addDebt={this._addDebt} />
      let Component401k = 
        <div className="md-grid">
          <TextField className="yes-401k md-grid md-cell--12" id='y_contrib401' name="yearly_contribution_401k" type="number" leftIcon={<FontIcon>toys</FontIcon>} label="What is your yearly contribution rate?" onChange={this._handleChange}/>
          <SelectionControl className="md-cell md-cell--12" id="y_retire"  name="has_other_retirement" type="switch" label="Other retirement accounts?" onChange={this._toggleRetirement} />
          <Collapse collapsed={!this.state.has_other_retirement}>
            <TextField className="md-cell md-cell--12" id='other-retirement' type="number" name="other_yearly_contribution" leftIcon={<FontIcon>attach_money</FontIcon>} label="What is your yearly contribution rate?" onChange={this._handleChange}/>
          </Collapse>
        </div>
      let ComponentOther = 
        <div>
          <TextField name="other_name" className="md-cell md-cell--12" id='other-name' leftIcon={<FontIcon>account_balance</FontIcon>} label="Institution name?" onChange={this._handleChange} />
          <TextField name="other_amount" className="md-cell md-cell--12" id='other-amount' type="number" leftIcon={<FontIcon>attach_money</FontIcon>} label="How much?" onChange={this._handleChange} />
        </div>
    return (
      <div className="md-grid">
      <Header />
       <Review formData={this.completeForm} />
        <div className="md-grid md-cell md-cell--12">
          <form className="form-container md-grid md-cell--12" onSubmit={this._handleSubmit}>
                <Paper zDepth={4} className= "paper-container md-grid">
                <Card className="md-grid md-cell md-cell--12"> 
                  <TextField className="md-cell md-cell--12"
                    type="number"
                    onChange={this._handleChange}
                    value={this.state.pre_tax_income}
                    name="pre_tax_income"
                    id="pre_tax_income"
                    label="Pre-tax yearly income" 
                    leftIconStateful
                    required
                    errorText=" is required"
                    leftIcon={<FontIcon>attach_money</FontIcon>} />
                  <TextField className="md-cell md-cell--12"
                    type="number"
                    onChange={this._handleChange}
                    name="total_monthly_expenses"
                    id="total_monthly_expenses"
                    label="Totaly monthly expenses" 
                    leftIconStateful
                    required
                    errorText="This is an example of some error message."
                    leftIcon={<FontIcon>attach_money</FontIcon>} />
                </Card>

                <Card className='401k md-grid md-cell md-cell--6'>
                  <SelectionControl className="md-cell md-cell--12" id="y401k" 
                    onChange={this._toggle401k}
                    type="switch"
                    label="Do you have a 401k?"
                    name="has_401k"/>
                  <Collapse collapsed={!this.state.has_401k}>
                    {Component401k}
                  </Collapse>
                </Card>
                <Card className="other-accounts md-grid md-cell md-cell--6">
                  <SelectionControl name="has_other_account" className="md-cell md-cell--12" id="y_otheracct" type="switch" label="Do you have any investment accounts?" onChange={this._toggleOther} />
                  <Collapse collapsed={!this.state.has_other_account}>
                    {ComponentOther}
                  </Collapse>
                </Card>
                <Card className="total-checking md-grid md-cell md-cell--12" >
                  <TextField className="md-cell md-cell--12" onChange={this._handleChange}
                    id='total-checking'
                    type="number"
                    name="total_checking_savings"
                    label="Total checking and savings amount"
                    leftIcon={<FontIcon>attach_money</FontIcon>}
                    required
                    errorText="This is an example of some error message." />
                </Card>
                <Card className="debt md-grid md-cell md-cell--12 md-cell--middle">
                  <SelectionControl name="has_debt" className="md-cell md-cell--12" id="debt" type="switch" label="Do you have any debt?" onChange={this._toggleDebt} />
                  <Collapse collapsed={!this.state.has_debt}>
                    {DebtComponent}
                  </Collapse>
                </Card>
              </Paper>
              <Button className="btn-submit hi md-cell md-cell--12" 
                raised secondary iconBefore={false} 
                label="Submit FinScore" 
                iconClassName="fa fa-hand-paper-o" 
                type="submit" />
          </form>
          <Footer className="md-cell md-cell--12 md-cell--middle" />
        </div>
                    
      </div>
    );
  }
}

export default App;
