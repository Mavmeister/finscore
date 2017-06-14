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
      retirementMessages: '',
      otherRetirementMessage: '',
      investmentMessage: '',
      debtMessage: '',
    };

    this._calculateScore = this._calculateScore.bind(this)

  }

  componentWillMount(){

  }

  componentDidMount(){
    this._calculateCheckingSavings()

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

  _calculateScore(data){
  }

  _calculateCheckingSavings(){
    let pre_tax_income = this.props.formData.pre_tax_income
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
          </div>
        </Dialog>
      </div>
    );
  }
}

export default Review;
