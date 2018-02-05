
import Application from './application/Application';
import Sender from './application/Sender';

const isSender = document.querySelector('html').getAttribute('role')


// 
// if (isSender == 'sender') {
//   const Application = required('./application/Application');
// } else {
//   const Sender = required('./application/Application');
// }


const application = (isSender == 'sender') ? new Sender() : new Application();

application.init();
