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
    return(
      <RaisedButton label="Ну Окей :)"
        onClick={this.props.clicker}
        secondary={true}
        style={style} />
    );
  }
}

export default LaterButton;
