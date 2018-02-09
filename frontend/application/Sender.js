import './../stylesheets/main.styl';
import Network from './Network';

import Inputmask from "inputmask"

class Sender {
  constructor() {
    this.amountField = document.querySelector('.delivery__amount');
    this.sendButton = document.querySelector('.delivery__send');
    this.send = this.send.bind(this);
    this.init = this.init.bind(this);

    this.network = new Network();
  }

  init() {
    let inputMaskConfig = {
      prefix: '',
      groupSeparator: ',',
      alias: 'numeric',
      placeholder: '',
      autoGroup: !0,
      rightAlign: !1,
      digits: 0,
      digitsOptional: !1,
      clearMaskOnLostFocus: !1,
      showMaskOnHover: true,
      showMaskOnFocus: true,
    }

    let inputMask = new Inputmask(inputMaskConfig);
    inputMask.mask(this.amountField);

    this.sendButton.addEventListener('click', this.send);
  }

  send() {
    console.log(this.amountField.value)
    let value = this.amountField.value;
    this.network.sendNumber(value)
  }
}

export default Sender;
