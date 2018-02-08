import './../stylesheets/main.styl';
import Network from './Network';

class Application {
  constructor() {
    this.amountField = document.querySelector('.delivery__amount');
    this.sendButton = document.querySelector('.delivery__send');
    this.init = this.init.bind(this);
    this.send = this.send.bind(this);

    this.network = new Network();
  }

  init() {
    this.amountField.addEventListener('change', this.send);
    this.sendButton.addEventListener('click', this.send);
  }

  send() {
    console.log(this.amountField.value)
    let value = this.amountField.value;
    this.network.sendNumber(value)
  }
}
