import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';
import Card from 'react-md/lib/Cards/Card';
import FontIcon from 'react-md/lib/FontIcons';
import '../App.css';

class Footer extends Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
      };
  }
  render() {

    return (
      <div className="contact md-grid md-cell md-cell--12">
        <Button className="md-cell md-cell--12" 
        onClick={this.Contact} flat label="Have questions? - Contact@paysley.io">
        </Button>
        <div className="md-grid md-cell md-cell--12 md-cell--phone-hidden">
          <h3 className="md-cell md-cell--6"> Want more help with this? Enter your email and we'll reach out </h3>
          <TextField className="md-cell md-cell--3 md-cell--right" type="email" customSize="help" lineDirection="right" name="contact" placeholder="Enter Email" onChange={this._handleChange}></TextField>
          <Button className="md-cell md-cell--2" icon > <FontIcon >send</FontIcon> </Button>
        </div>
      </div>
      )
  }
}

export default Footer;
