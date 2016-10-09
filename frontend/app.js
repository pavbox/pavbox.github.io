import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from './routes/Layout';
import Mainpage from './routes/Mainpage';

injectTapEventPlugin();

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Mainpage}></IndexRoute>
    </Route>
  </Router>, app);
