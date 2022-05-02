import { BikeTeamState, Team } from './interfaces';

export function selectTeams(state: BikeTeamState): Team[] {
  return state.entities.teams;
}
