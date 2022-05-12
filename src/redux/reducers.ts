import { PayloadAction } from '@reduxjs/toolkit';
import { BikeTeamState, Country, Team } from './interfaces';

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
