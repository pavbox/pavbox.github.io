import React from 'react';
import ReactDOM from 'react-dom';
import tapPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Basic from './components/Basic';

const app = document.getElementById('app');
ReactDOM.render(
  <div>
    <MuiThemeProvider>
      <Basic />
    </MuiThemeProvider>
  </div>, app);
