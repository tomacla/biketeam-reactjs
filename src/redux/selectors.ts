import { BikeTeamState, Country, Team } from './interfaces';

export function selectTeams(state: BikeTeamState): Team[] {
  return state.entities.teams;
}

export function selectCountries(state: BikeTeamState): Country[] {
  return state.entities.data.countries;
}
