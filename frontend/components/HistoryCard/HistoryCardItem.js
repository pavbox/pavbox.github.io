import React from 'react';
import FlatLabel from '../FlatLabel';

class HistoryCardItem extends React.Component {
  constructor() {
      super();
  }

  render(){
    const color = this.props.color;
    const text = this.props.text;

    return (
      <FlatLabel text={text} color={color}/>
    )
  }
}

export default HistoryCardItem;
