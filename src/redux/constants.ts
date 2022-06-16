import {BikeTeamState} from './interfaces';

export const AUTH_STORAGE_KEY = 'auth';

export const INITIAL_BIKETEAM_STATE: BikeTeamState = {
  entities: {
    teams: [],
    data: {
      countries: [],
      windDirections: ['NORTH', 'NORTH_EAST', 'EAST', 'SOUTH_EAST', 'SOUTH', 'SOUTH_WEST', 'WEST', 'NORTH_WEST'] ,
      mapSorts: ['SHORT', 'LONG', 'HILLY', 'FLAT'],
      mapTypes: ['ROAD', 'GRAVEL', 'MTB']
    },
    team: {
      details: undefined,
      members: [],
      events: [],
      rides: [],
      trips: [],
      maps: [],
      nbMapPages: 0,
      tags:[]
    },
    nbTeamPages: 0
  },
  ui: {
    navitems: []
  },
  auth: {
    data: null,
    loading: false,
    error: false,
  },
};
