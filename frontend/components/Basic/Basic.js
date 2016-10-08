import React from 'react';
import LaterButton from '../LaterButton';

class Basic extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div>
        <h1 className="wrapper">Привет!</h1>
        <p style={{fontWeight:'light'}}>В данный момент, сайт в разработке :(
          <br/>я стараюсь, и скоро он будет сделан! :D</p>
          <ul>
            <li>Скоро здесь можно будет наблюдать прогресс:
            <a href="/public">/public</a></li>
          </ul>
        <LaterButton />
      </div>

    )
  }
}

export default Basic;
