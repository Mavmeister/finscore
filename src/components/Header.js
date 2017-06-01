import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import '../App.css';

class Header extends Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
      };
  }

  render() {
    // add progress bar
    // add menu
    return (
      <div>
        <h2> Personal Finance Score card </h2>
      </div>
      )
  }
}

export default Header;
