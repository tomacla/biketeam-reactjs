import { BikeTeamState } from './interfaces';

export const INITIAL_BIKETEAM_STATE: BikeTeamState = {
  entities: {
    teams: [],
    data: { countries: [] },
    team: {
      details: undefined,
      members: [],
    },
  },
  ui: {},
};
