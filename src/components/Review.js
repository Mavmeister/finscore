import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import Card from 'react-md/lib/Cards/Card';
import Paper from 'react-md/lib/Papers';
import Dialog from 'react-md/lib/Dialogs';

import Errors from '../Errors.js'

import '../App.css';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      visible: false,
      checksaveMessage: '',
      retirementMessage: '',
      otherRetirementMessage: '',
      investmentMessage: '',
      debtMessage: '',
    };

  }

  componentWillMount(){

  }

  componentDidMount(){
    this._calculateCheckingSavings()
    this._calculate401k()
    this._calculateOtherRetirement()

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
      this.setState({retirementMessage: Errors.fourKlow})
    }
    if (rate > 10 && salary < 180000 && product <= 18000){
      this.setState({retirementMessage: Errors.fourKonTrack})
    }
    if (rate > 10 && salary < 180000 && product > 18000){
      this.setState({retirementMessage: Errors.fourKhigh})
    }
  }

  _calculateOtherRetirement(){
    let amount = (this.props.formData.other_yearly_contribution / 100) * this.props.formData.pre_tax_income
    console.log("Other Retirement:", amount)
  }

  _calculateCheckingSavings(){
    let expenses = { total: this.props.formData.total_monthly_expenses,
                     low: (this.props.formData.total_monthly_expenses * 3),
                     high: (this.props.formData.total_monthly_expenses * 6),
                    }
    let checksave = this.props.formData.total_checking_savings
    if (expenses.low >= checksave){
    this.setState({checksaveMessage: Errors.savingsTooLow})
    }
    if (expenses.high < checksave){
    this.setState({checksaveMessage: Errors.savingsTooHigh})
    }
  }


  render() {
    const { visible } = this.state;
    const { formData } = this.props
    const data = JSON.stringify(this.props.formData, null, 2)

    return (
      <div className="md-grid md-cell md-cell--12">
      <Button raised label="Open Simple Dialog" onClick={this.openDialog} />
        <div className="review-container md-grid md-cell md-cell--12">
         Please Review Your Information 
          <pre>{data} </pre>
        </div>
        <Dialog className='md-grid md-cell md-cell--12'
          id="dialog"
          visible={visible}
          title="Your Financial Results"
          onHide={this.closeDialog}
        >
          <div className='modal'>
            <li>Checking and Savings: {this.state.checksaveMessage}</li>
            <li>401k: {this.state.retirementMessage}</li>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default Review;
