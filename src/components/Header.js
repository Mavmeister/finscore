import React, { Component } from 'react';
// import FontIcon from 'react-md/lib/FontIcons';
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
      <div className="md-grid md-cell md-cell--12">
        <h2 className="md-cell md-cell--12"> Personal Finance Score card </h2>
      </div>
      )
  }
}

export default Header;
