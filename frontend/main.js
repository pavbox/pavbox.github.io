
import Application from './application/Application';
import IQChecker from './application/IQChecker';

// import images
import './assets/img/favicon.ico';
import './assets/img/baby.svg';
import './assets/img/cow.svg';
import './assets/img/man.svg';
import './assets/img/star.svg';
import './assets/img/stone.svg';

const application = (window.location.pathname.includes('iq')) ? new IQChecker() : new Application();

application.init();
