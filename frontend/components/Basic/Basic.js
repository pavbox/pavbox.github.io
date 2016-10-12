import React from 'react';
import LaterButton from '../LaterButton';

class Basic extends React.Component {
  constructor() {
    super();

    this.state = {
      count: ''
    }
  };

  clickerCount = () => {
    this.setState({count: +this.state.count + 1});
  };

  render() {
    var clicks = this.state.count;
    return (
      <div>
        <LaterButton clicker={this.clickerCount} />
        <span className="counter">{clicks}</span>
      </div>

    )
  }
}

export default Basic;
