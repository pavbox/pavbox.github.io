
// load resources
// import '@/assets/img/favicon.ico';

// load styles
import '@/stylesheets/main.scss';

// load js router
import '@/application/Router';

// start
import Application from '@/application/Application';

const application = new Application();
application.init();
