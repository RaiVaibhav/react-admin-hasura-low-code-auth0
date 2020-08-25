import React from 'react';
import './index.css';
import AppWithAuth from './components/AppWithAuth'
import * as serviceWorker from './service-worker';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import Auth0ProviderWithHistory from "./auth0-with-history";

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <React.StrictMode>
        <AppWithAuth />
      </React.StrictMode>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
