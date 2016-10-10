import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Basic from '../../components/Basic';

class Mainpage extends React.Component {
  constructor() {
    super();
    //context.history.replaceState(null, '/');
  }

  render(){
    return (
      <div>
        <MuiThemeProvider>
          <Basic />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Mainpage;
