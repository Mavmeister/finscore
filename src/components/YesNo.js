import React, { Component } from 'react';
import Radio from 'react-md/lib/SelectionControls/Radio';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  render() {
    return (
    <div>
          <Radio
            id="yes"
            inline
            name="inlineValue"
            label="Yes"
            checked={inlineValue === 'A'} />
          <Radio
            id="no"
            inline
            name="inlineValue"
            label="No"
            checked={inlineValue === 'B'} />
          <Radio
            id="dk"
            inline
            name="inlineValue"
            label="Don't Know"
            checked={inlineValue === 'C'} />
    </div>
    );
  }
}

export default YesNo