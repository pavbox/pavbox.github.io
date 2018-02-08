
import Application from './application/Application';
import Sender from './application/Sender';

const isSender = document.querySelector('html').getAttribute('role')

const application = (isSender == 'sender') ? new Sender() : new Application();

application.init();
