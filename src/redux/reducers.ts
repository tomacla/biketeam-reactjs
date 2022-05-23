import { PayloadAction } from '@reduxjs/toolkit';
import { BikeTeamState, Country, Team, TeamEvent, TeamMemberApi, TeamRide } from './interfaces';

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

export function onGetTeamDetailsPending(): void {}
export function onGetTeamDetailsRejected(): void {}
export function onGetTeamDetailsFullfilled(state: BikeTeamState, { payload: team }: PayloadAction<Team>): void {
  state.entities.team.details = team;
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
