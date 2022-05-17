import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import StoreProvider from './redux/StoreProvider';
import { pushStateLocationPlugin, UIRouter } from '@uirouter/react';
import Home from './components/Views/Home';
import Teams from './components/Views/Teams';
import HomeTeam from './components/Views/HomeTeam';
import Ride from './components/Views/Ride';
import Trip from './components/Views/Trip';

const homeState = { name: 'home', url: '/', component: Home };
const teamsState = { name: 'teams', url: '/teams', component: Teams };
const homeTeamState = { name: 'homeTeam', url: '/{teamId:string}', component: HomeTeam };
const rideState = { name: 'ride', url: '/rides/{rideId:string}', component: Ride };
const tripState = { name: 'trip', url: '/trips/{tripId:string}', component: Trip };

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <UIRouter plugins={[pushStateLocationPlugin]}
        states={[homeState, teamsState, homeTeamState, rideState, tripState]} >
        <App />
      </UIRouter>
    </StoreProvider >
  </React.StrictMode >
  , document.getElementById('root')
);
