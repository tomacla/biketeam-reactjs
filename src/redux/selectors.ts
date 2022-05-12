import { BikeTeamState, Country, Team, TeamMember } from './interfaces';

export function selectTeams(state: BikeTeamState): Team[] {
  return state.entities.teams;
}

export function selectCountries(state: BikeTeamState): Country[] {
  return state.entities.data.countries;
}

export function selectTeamDetails(state: BikeTeamState): Team | undefined {
  return state.entities.team.details;
}

export function selectTeamMembers(state: BikeTeamState): TeamMember[] {
  return state.entities.team.members;
}
