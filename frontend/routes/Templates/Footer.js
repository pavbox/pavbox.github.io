import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render(){
    //let thanks = "Thanks <a href='https://plus.google.com/+AlexpasquarellaDesign'>AlexpasquarellaDesign</a> for Image";
    const styleThanks = {
      fontSize: '10px',
      fontWeight: 'lighter',
      fontColor: '#aaa',
      marginTop: '30px'
    }
    return (
      <footer style={{margin: '0 auto', width: '600px'}}>
        <MuiThemeProvider>
          <RaisedButton
            label='Свяжитесь со мной'
            primary={true}/>
        </MuiThemeProvider>
          <br />
        <p style={styleThanks}>Thanks <a href='https://plus.google.com/+AlexpasquarellaDesign'>AlexpasquarellaDesign</a> for Image</p>
      </footer>
    );
  }
}

export default Footer;
