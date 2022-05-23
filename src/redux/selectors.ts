import { BikeTeamState, Country, NavItem, Team, TeamEvent, TeamMember, TeamRide } from './interfaces';

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

export function selectTeamEvents(state: BikeTeamState): TeamEvent[] {
  return state.entities.team.events;
}

export function selecteCurrentTeamId(state: BikeTeamState): string | undefined {
  return state.entities.team.details?.id;
}

export function selectTeamRides(state: BikeTeamState): TeamRide[] {
  return state.entities.team.rides;
}

export function selectUiNavItems(state:BikeTeamState): NavItem[] {
  return state.ui.navitems
}
