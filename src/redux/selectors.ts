import { BikeTeamState, Country, NavItem, Team, TeamEvent, TeamMember, TeamRide, TeamTrip, Map, BikeTeamStateAuth } from './interfaces';

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

export function selectTeamTrips(state: BikeTeamState): TeamTrip[] {
  return state.entities.team.trips;
}

export function selectTeamRide(state: BikeTeamState): TeamRide | undefined{
  return state.entities.team.ride;
}

export function selectTeamTrip(state: BikeTeamState): TeamTrip | undefined{
  return state.entities.team.trip;
}

export function selectTeamMaps(state: BikeTeamState): Map[]{
  return state.entities.team.maps;
}

export function selectDataWindDirections(state: BikeTeamState): string[] {
  return state.entities.data.windDirections;
}

export function selectDataMapTypes(state: BikeTeamState): string[] {
  return state.entities.data.mapTypes;
}

export function selectDataMapSorts(state: BikeTeamState): string[] {
  return state.entities.data.mapSorts;
}

export function selectTeamMap(state: BikeTeamState): Map | undefined{
  return state.entities.team.map;
}

export function selectNbMapPages(state: BikeTeamState): number{
  return state.entities.team.nbMapPages;
}

export function selectTeamTags(state: BikeTeamState): string[]{
  return state.entities.team.tags;
}

export function selectNbTeamPages(state: BikeTeamState): number{
  return state.entities.nbTeamPages;
}

export function selectAuth(state: BikeTeamState): BikeTeamStateAuth {
  return state.auth;
}
