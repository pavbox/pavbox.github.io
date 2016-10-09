import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StyleFactory from '../StyleFactory';
import Basic from '../../components/Basic';
import Header from '../Templates/Header';
import Footer from '../Templates/Footer';

class Layout extends React.Component {
  constructor() {
    super();

    StyleFactory.setBodyColor();
    StyleFactory.initColorTimeout(6000);
  }

  render(){
    return (
      <div>
        <Header />
          <MuiThemeProvider>
            <Basic />
          </MuiThemeProvider>
        <Footer />
      </div>
    );
  }
}

export default Layout;
