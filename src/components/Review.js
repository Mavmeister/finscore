import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
// import FontIcon from 'react-md/lib/FontIcons';
// import Card from 'react-md/lib/Cards/Card';
// import Paper from 'react-md/lib/Papers';
import Dialog from 'react-md/lib/Dialogs';

import Errors from '../constants/Errors.js'

import '../components/App/App.css';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      checksaveMessage: "You're doing great! Keep up the savings",
      checksaveColor: 'green',
      retirementMessage: '',
      retirementStatus: 'good',
      otherRetirementMessage: '',
      otherRetirementColor: 'green',
      investmentMessage: 'All other buckets are taking care of so great to have your money working for you',
      investmentColor: 'green',
      investmentDebtMessage: '',
      investmentDebtColor: '',
      debtMessage: '',
      debtColor:'',
    };

  }

  componentWillMount(){

  }

  componentDidMount(){
    this._calculateCheckingSavings()
    this._calculate401k()
    this._calculateOtherRetirement()
    this._calculateInvestment()
    this._calculateDebt()

  }

  openDialog = () => {
    this.setState({ visible: true });
  };

  closeDialog = () => {
    this.setState({ visible: false });
  };

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

  _calculate401k(){
    let salary = this.props.formData.pre_tax_income
    let rate = this.props.formData.yearly_contribution_401k
    let product = ( (rate / 100) * salary)
    console.log("401K", salary, rate, product)
    if (rate < 10 && salary < 180000){
      this.setState({retirementMessage: Errors.fourKlow, retirementColor: 'red'})
    }
    if (rate > 10 && salary < 180000 && product <= 18000){
      this.setState({retirementMessage: Errors.fourKonTrack})
    }
    if (product > 18000){
      console.log(product)
      this.setState({retirementMessage: Errors.fourKhigh, retirementColor: 'red'})
    }
  }

  _calculateOtherRetirement(){
    let amount = (this.props.formData.other_yearly_contribution / 100) * this.props.formData.pre_tax_income
    if (amount < 5500){
      this.setState({otherRetirementMessage: Errors.retirementGood})
    }
    if (amount > 5501){
      this.setState({otherRetirementMessage: Errors.retirementHigh, otherRetirementColor: 'red'})
    }
  }

  _calculateInvestment(){
    let checksave = this.props.formData.total_checking_savings
    let debt = (this.props.formData.has_debt)
    if (this.state.checksaveColor === 'red' || this.state.investmentColor === 'red'){
      // this message needs more logic for two cases
      this.setState({investmentMessage: Errors.investmentBad, investmentColor: 'red'})
    }
    if (debt > 5){
      this.setState({investmentDebtMessage: Errors.debtPlusInvestment, debtColor: 'red'})
    }

  }

  _calculateCheckingSavings(){
    let expenses = { total: this.props.formData.total_monthly_expenses,
                     low: (this.props.formData.total_monthly_expenses * 3),
                     high: (this.props.formData.total_monthly_expenses * 6),
                    }
    let checksave = this.props.formData.total_checking_savings
    if (expenses.low >= checksave){
    this.setState({checksaveMessage: Errors.savingsTooLow, checksaveColor: 'red'})
    }
    if (expenses.high < checksave){
    this.setState({checksaveMessage: Errors.savingsTooHigh, checksaveColor: 'red'})
    }
  }

  _calculateDebt(debt){
    let debtRate = (this.props.formData.rate_1)
    debtRate >= 5 ? this.setState({debtMessage: Errors.debtHigh, checksaveColor: 'red'}) :
                   this.setState({debtMessage: Errors.debtLow, checksaveColor: 'green'})
  }

  render() {
    const { visible } = this.state;
    const { formData } = this.props
    const data = JSON.stringify(this.props.formData, null, 2)

    const styles = {
      good: {
        border: '1px solid green',
        textColor: 'green',
      },
      bad: {
        border: '1px solid red',
        textColor: 'red',
      }
    }

    return (
      <div className="md-grid md-cell md-cell--12">
      <Button raised label="Open Simple Dialog" onClick={this.openDialog} id="modal-container" />
        <Dialog className='md-grid md-cell md-cell--12'
          id="dialog"
          visible={visible}
          title="Your Financial Results"
          onHide={this.closeDialog}
          initialFocus="modal-container"
        >
          <div className='modal'>
          <div> Total Pre-tax Income ${this.props.formData.pre_tax_income}</div>
          <div> Total Expenses ${this.props.formData.total_monthly_expenses}</div>
            <div>
              <span> Checking and Savings: ${this.props.formData.total_checking_savings} </span>
               <p> {this.state.checksaveMessage} </p>
            </div>

            {this.props.formData.has_401k &&
            <div>
              <span> 401k:  {this.props.formData.yearly_contribution_401k}% </span>
               <p> {this.state.retirementMessage} </p>
            </div>}

            {this.props.formData.has_other_retirement &&
            <div>
              <span> Other Retirement: {this.props.formData.other_yearly_contribution}% </span>
               <p> {this.state.otherRetirementMessage} </p>
            </div>}

            {this.props.formData.has_other_account &&
            <div>
              <span> Investments: ${this.props.formData.has_other_account} </span>
               <p> {this.state.investmentMessage} </p>
            </div>}

            {this.props.formData.has_debt &&
            <div>
              <span>
               Debt: {this.props.formData.rate_1}% </span>
               <p> {this.state.debtMessage} </p>
            </div>}

          </div>
        </Dialog>
      </div>
    );
  }
}

export default Review;
