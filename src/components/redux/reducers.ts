import { PayloadAction } from '@reduxjs/toolkit';
import { BikeTeamState, Team } from './interfaces';

export function onGetTeamsFullfilled(
  state: BikeTeamState,
  { payload: teams }: PayloadAction<Team[]>): BikeTeamState {
  return {
    ...state,
    entities: {
      ...state.entities,
      teams
    }
  };
}

export function onGetTeamsPending(
  state: BikeTeamState): BikeTeamState {
  return state;
}

export function onGetTeamsRejected(
  state: BikeTeamState): BikeTeamState {
  return state;
}
