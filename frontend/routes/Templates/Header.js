import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    let hero = 'seaside-day-cropped-mini.png';
    let style = {
      width: '100%',
      top: 0
    }
    return (
      <header>
        <img src={hero} style={style} className="hero" />
      </header>
    );
  }
}

export default Header;
