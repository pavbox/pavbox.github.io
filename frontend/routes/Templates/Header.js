import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    let hero = 'seaside-day-cropped.png';
    let style = {
      width: '100%',
      top: 0
    }
    return (
      <img src={hero} style={style} className="hero" />
    );
  }
}

export default Header;
