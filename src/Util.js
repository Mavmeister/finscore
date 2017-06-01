import React, { Component } from 'react';
import TextField from 'react-md/lib/TextFields';
import FontIcon from 'react-md/lib/FontIcons';

const Util = {
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
    },

    _addDebt(){
      console.log("ive added debt")
      let newDebt = 
        <div>
        <TextField name="company_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Company name?" onChange={this._handleChange}/>
        <TextField name="amount_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Amount?" onChange={this._handleChange}/>
        <TextField name="rate_1" className="md-cell md-cell--4" leftIcon={<FontIcon>attach_money</FontIcon>} label="Rate %" onChange={this._handleChange}/>
        </div>
    },

    _removeDebt(index){
      console.log("removing debt", {index})
    },

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
    },

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
    },

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
}

export default Util