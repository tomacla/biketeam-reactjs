import { BikeTeamState } from './interfaces';

export const INITIAL_BIKETEAM_STATE: BikeTeamState = {
  entities: {
    teams: [],
    data: {
      countries: [],
      windDirection: ['NORTH', 'NORTH_EAST', 'EAST', 'SOUTH_EAST', 'SOUTH', 'SOUTH_WEST', 'WEST', 'NORTH_WEST'] ,
      mapSort: ['SHORT', 'LONG', 'HILLY', 'FLAT'],
      mapType: ['ROAD', 'GRAVEL', 'MTB']
    },
    team: {
      details: undefined,
      members: [],
      events: [],
      rides: [],
      trips: [],
      maps: []
    },
  },
  ui: {
    navitems: []
  },
};
