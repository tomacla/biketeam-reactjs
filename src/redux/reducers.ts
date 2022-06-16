import { PayloadAction } from '@reduxjs/toolkit';
import GpxParser from 'gpxparser';
import {
  BikeTeamState,
  Country,
  NavItem,
  Team,
  TeamConfiguration,
  TeamEvent,
  TeamMemberApi,
  TeamRide,
  TeamTrip,
  Map,
} from './interfaces';

export function onGetTeamsPending(): void {}
export function onGetTeamsRejected(): void {}
export function onGetTeamsFullfilled(
  state: BikeTeamState,
  { payload }: PayloadAction<{ teams: Team[]; nbPages: string }>
): void {
  state.entities.teams = payload.teams;
  state.entities.nbTeamPages = parseInt(payload.nbPages);
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
  return navItems;
}

export function onGetTeamDetailsPending(): void {}
export function onGetTeamDetailsRejected(): void {}
export function onGetTeamDetailsFullfilled(state: BikeTeamState, { payload: team }: PayloadAction<Team>): void {
  state.entities.team.details = team;
  state.ui.navitems = toNavItems(team.configuration);
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

export function onGetTeamTripsPending(): void {}
export function onGetTeamTripsRejected(): void {}
export function onGetTeamTripsFullfilled(state: BikeTeamState, { payload: trips }: PayloadAction<TeamTrip[]>): void {
  state.entities.team.trips = trips;
}

export function onGetTeamRidePending(): void {}
export function onGetTeamRideRejected(): void {}
export function onGetTeamRideFullfilled(state: BikeTeamState, { payload: ride }: PayloadAction<TeamRide>): void {
  state.entities.team.ride = ride;
}

export function onGetTeamTripPending(): void {}
export function onGetTeamTripRejected(): void {}
export function onGetTeamTripFullfilled(state: BikeTeamState, { payload: trip }: PayloadAction<TeamTrip>): void {
  state.entities.team.trip = trip;
}

export function onGetTeamMapsPending(): void {}
export function onGetTeamMapsRejected(): void {}
export function onGetTeamMapsFullfilled(
  state: BikeTeamState,
  { payload }: PayloadAction<{ maps: Map[]; nbPages: string }>
): void {
  state.entities.team.maps = payload.maps;
  state.entities.team.nbMapPages = parseInt(payload.nbPages);
}

export function onGetTeamMapPending(): void {}
export function onGetTeamMapRejected(): void {}
export function onGetTeamMapFullfilled(state: BikeTeamState, { payload: map }: PayloadAction<Map>): void {
  state.entities.team.map = map;
}

export function onGetTeamTagsPending(): void {}
export function onGetTeamTagsRejected(): void {}
export function onGetTeamTagsFullfilled(state: BikeTeamState, { payload: tags }: PayloadAction<string[]>): void {
  state.entities.team.tags = tags;
}

export function onPPending(): void {}
export function onPRejected(): void {}
export function onPFullfilled(state: BikeTeamState, { payload }: PayloadAction<string>): void {
  const parsedGpx = new GpxParser();
  parsedGpx.parse(payload);
  state.entities.team.course = parsedGpx.tracks[0]
}
