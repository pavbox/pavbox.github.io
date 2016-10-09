import React from 'react';
import LaterButton from '../LaterButton';

class Basic extends React.Component {
  constructor() {
    super();

    this.state = {
      count: ''
    }

//    this.clickerCount = this.clickerCount.bind(this);
  };

  clickerCount = () => {
    this.setState({count: +this.state.count + 1});
  };

  render() {
    var clicks = this.state.count;
    return (
      <div>
        <h1 className="wrapper">Привет!</h1>
        <p>В данный момент, сайт в разработке.
          <br/>я стараюсь, и скоро он будет сделан! :D</p>
          <ul>
            <li>Скоро здесь можно будет наблюдать прогресс: <a href="/public">/public</a></li>
          </ul>
        <LaterButton clicker={this.clickerCount} />
        <span className="counter">{clicks}</span>
      </div>

    )
  }
}

export default Basic;
