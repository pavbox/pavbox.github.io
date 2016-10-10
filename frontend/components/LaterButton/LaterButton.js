import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: '30px 0 0 0'
};

class LaterButton extends React.Component {
  constructor() {
    super();
  }

  render(){
    // Warn: button Ripple animation Bug in Firefox
    // https://github.com/callemall/material-ui/issues/3850
    // in: 10.10.2016
    return(
      <RaisedButton label="Ну Окей :)"
        onClick={this.props.clicker}
        secondary={true}
        style={style} />
    );
  }
}

export default LaterButton;
