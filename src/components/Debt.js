import React, { Component } from 'react';
import TextField from 'react-md/lib/TextFields';
import FontIcon from 'react-md/lib/FontIcons';
import Button from 'react-md/lib/Buttons/Button';

class Debt extends React.Component {
    constructor(props) {
    	super(props)
        this.state = {
            numDebt: props.debtCount
        };

    this.xClick=this.xClick.bind(this)

    }
    componentDidMount(){
    	console.log('mount up!')
    }


    xClick(){
    	console.log("OK CLICKED")
    	if(this.props.debtCount === 0){
    		console.log('removing first debt')
    		this.props.removeFirstDebt()
    	} else {
    		console.log('removing other debt')
    		this.props.removeDebt()
    	}
    	
    }
    render () {
        return (
            <div className="added-debt md-grid md-cell--12">
              <TextField name="company_1" className="md-cell md-cell--5" type="text"leftIcon={<FontIcon>account_balance</FontIcon>} label="Company name?" onChange={this.props.handleChange}/>
              <TextField name="amount_1" className="md-cell md-cell--3" type="number" leftIcon={<FontIcon>attach_money</FontIcon>} label="Amount?" onChange={this.props.handleChange}/>
              <TextField name="rate_1" className="md-cell md-cell--2" type="number" leftIcon={<FontIcon>toys</FontIcon>} label="Rate %" onChange={this.props.handleChange}/>
              <Button flat className="md-cell md-cell--2 md-cell--middle" onClick={this.xClick} ><FontIcon>clear</FontIcon></Button>
            </div>
        );
    }
}

export default Debt