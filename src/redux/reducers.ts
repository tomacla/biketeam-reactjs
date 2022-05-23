import { PayloadAction } from '@reduxjs/toolkit';
import { BikeTeamState, Country, NavItem, Team, TeamConfiguration, TeamEvent, TeamMemberApi, TeamRide } from './interfaces';

export function onGetTeamsPending(): void {}
export function onGetTeamsRejected(): void {}
export function onGetTeamsFullfilled(state: BikeTeamState, { payload: teams }: PayloadAction<Team[]>): void {
  state.entities.teams = teams;
}

export function onGetCountriesPending(): void {}
export function onGetCountriesRejected(): void {}
export function onGetCountriesFullfilled(state: BikeTeamState, { payload: countries }: PayloadAction<Country[]>): void {
  state.entities.data.countries = countries;
}

function toNavItems(configuration: TeamConfiguration): NavItem[] {
  const navItems: NavItem[] = [];
  if (configuration.feedVisible) {
    navItems.push('feed');
  }
  if (configuration.ridesVisible) {
    navItems.push('rides');
  }
  if (configuration.tripsVisible) {
    navItems.push('trips');
  }
  navItems.push('maps');
  return navItems
}

export function onGetTeamDetailsPending(): void {}
export function onGetTeamDetailsRejected(): void {}
export function onGetTeamDetailsFullfilled(state: BikeTeamState, { payload: team }: PayloadAction<Team>): void {
  state.entities.team.details = team;
  state.ui.navitems = toNavItems(team.configuration)
}
export function onClearTeamDetails(state: BikeTeamState): void {
  state.entities.team.details = undefined;
}

export function onGetTeamMembersPending(): void {}
export function onGetTeamMembersRejected(): void {}
export function onGetTeamMembersFullfilled(
  state: BikeTeamState,
  { payload: members }: PayloadAction<TeamMemberApi[]>
): void {
  state.entities.team.members = members.map(({ identity, profileImage }) => ({ name: identity, image: profileImage }));
}

export function onGetTeamEventsPending(): void {}
export function onGetTeamEventsRejected(): void {}
export function onGetTeamEventsFullfilled(state: BikeTeamState, { payload: events }: PayloadAction<TeamEvent[]>): void {
  state.entities.team.events = events;
}

export function onGetTeamRidesPending(): void {}
export function onGetTeamRidesRejected(): void {}
export function onGetTeamRidesFullfilled(state: BikeTeamState, { payload: rides }: PayloadAction<TeamRide[]>): void {
  state.entities.team.rides = rides;
}
