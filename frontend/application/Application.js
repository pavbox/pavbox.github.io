
import './../stylesheets/main.styl';
import realImage from './../assets/pixel_chuck.png';
import favicon from './../assets/favicon.ico';
import Chuck from './Chuck';


class Application {
  constructor() {
    this.chuckImage = document.querySelector('.chuck__image');
    this.closeChuck = document.querySelector('.chuck__close');

    this.initDefaultEvents = this.initDefaultEvents.bind(this);
    this.unsetDefaultEvents = this.unsetDefaultEvents.bind(this);

    this.init = this.init.bind(this);

    this.Chuck = new Chuck(this.initDefaultEvents, this.unsetDefaultEvents, this.chuckImage);
  }

  init() {
    this.chuckImage.setAttribute('src', realImage);
    this.initDefaultEvents();
  }

  initDefaultEvents() {
    this.chuckImage.addEventListener('mouseout',  this.Chuck.mouseleftFromChuck);
    this.chuckImage.addEventListener('mouseover', this.Chuck.mouseoverChuck);
    this.chuckImage.addEventListener('click',     this.Chuck.talk);

    this.chuckImage.removeEventListener('click',  this.Chuck.thanks);
    this.closeChuck.removeEventListener('click',  this.Chuck.thanks);
  }

  unsetDefaultEvents() {
    this.chuckImage.removeEventListener('mouseout',  this.Chuck.mouseleftFromChuck);
    this.chuckImage.removeEventListener('mouseover', this.Chuck.mouseoverChuck);
    this.chuckImage.removeEventListener('click',     this.Chuck.talk);
    this.chuckImage.removeEventListener('click',     this.Chuck.thanks);

    this.chuckImage.addEventListener('click', this.Chuck.thanks);
    this.closeChuck.addEventListener('click', this.Chuck.thanks);
  }
}

export default Application;
