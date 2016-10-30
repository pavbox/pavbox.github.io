import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from '../Templates/Navigation';
import Header from '../Templates/Header';
import Footer from '../Templates/Footer';
import StyleFactory from '../StyleFactory';

class Layout extends React.Component {
  constructor() {
    super();
    //StyleFactory.setBodyColor();
    //StyleFactory.initColorTimeout(6000);
  }

  render(){
    return (
      <div>
        <MuiThemeProvider>
          <Navigation />
        </MuiThemeProvider>
        <Header />
        <div className='wrapper'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
