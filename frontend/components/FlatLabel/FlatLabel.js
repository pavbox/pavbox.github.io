import React from 'react';

class FlatLabel extends React.Component {
  constructor() {
    super();
  }

  render() {
    const styleFlatLabel = {
      backgroundColor: (!!this.props.color) ? this.props.color : '#eae'
    }
    return (
      <span style={styleFlatLabel}>{this.props.text}</span>
    )
  }
}

export default FlatLabel;
