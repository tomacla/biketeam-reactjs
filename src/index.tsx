import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'leaflet/dist/leaflet.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import StoreProvider from './redux/StoreProvider';
import { pushStateLocationPlugin, UIRouter } from '@uirouter/react';
import Home from './components/Views/Home';
import Teams from './components/Views/Teams';
import HomeTeam from './components/Views/HomeTeam';
import Ride from './components/Views/Ride';
import Trip from './components/Views/Trip';
import Rides from './components/Views/Rides';
import Trips from './components/Views/Trips';
import Maps from './components/Views/Maps';
import Map from './components/Views/Map';

const homeState = { name: 'home', url: '/', component: Home };
const teamsState = { name: 'teams', url: '/teams', component: Teams };
const homeTeamState = { name: 'homeTeam', url: '/{teamId:[^/]*}', component: HomeTeam };
const tripsState = { name: 'trips', url: '/{teamId:[^/]*}/trips', component: Trips };
const ridesState = { name: 'rides', url: '/{teamId:[^/]*}/rides', component: Rides };
const mapsState = { name: 'maps', url: '/{teamId:[^/]*}/maps', component: Maps };
const rideState = { name: 'ride', url: '/{teamId:[^/]*}/rides/{rideId:[^/]*}', component: Ride };
const tripState = { name: 'trip', url: '/{teamId:[^/]*}/trips/{tripId:[^/]*}', component: Trip };
const mapState = { name: 'map', url: '/{teamId:[^/]*}/maps/{mapId:[^/]*}', component: Map };

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <UIRouter plugins={[pushStateLocationPlugin]}
        states={
          [homeState, teamsState, homeTeamState, rideState, tripState, tripsState, ridesState, mapsState, mapState]
        } >
        <App />
      </UIRouter>
    </StoreProvider >
  </React.StrictMode >
  , document.getElementById('root')
);
