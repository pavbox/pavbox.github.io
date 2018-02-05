import './../stylesheets/main.styl';

class Application {
  constructor() {
    this.amountField = document.querySelector('.delivery__amount');
    this.sendButton = document.querySelector('.delivery__send');
    this.init = this.init.bind(this);

    this.network = new Network();
  }

  init() {
    this.amountField.addEventListener('change', this.Chuck.talk);
    this.sendButton.addEventListener('click', this.Chuck.talk);
  }

  send() {
    console.log(this.amountField.value)

    let value = this.amountField.value;

    this.network.sendNumber(value)
  }
}
