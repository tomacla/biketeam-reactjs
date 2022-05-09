import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import StoreProvider from './redux/StoreProvider';
import { pushStateLocationPlugin, UIRouter } from '@uirouter/react';
import Home from './components/Views/Home';
import Teams from './components/Views/Teams';

const homeState = { name: 'home', url: '/', component: Home };
const teamState = { name: 'teams', url: '/teams', component: Teams };

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <UIRouter plugins={[pushStateLocationPlugin]}
        states={[homeState, teamState]} >
        <App />
      </UIRouter>
    </StoreProvider >
  </React.StrictMode >
  , document.getElementById('root')
);
