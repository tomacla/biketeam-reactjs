import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getCountries, getTeamDetails, getTeamEvents, getTeamMembers, getTeams } from './actions';
import { INITIAL_BIKETEAM_STATE } from './constants';
import {
  onGetCountriesFullfilled,
  onGetCountriesPending,
  onGetCountriesRejected,
  onGetTeamDetailsFullfilled,
  onGetTeamDetailsPending,
  onGetTeamDetailsRejected,
  onGetTeamEventsFullfilled,
  onGetTeamEventsPending,
  onGetTeamEventsRejected,
  onGetTeamMembersFullfilled,
  onGetTeamMembersPending,
  onGetTeamMembersRejected,
  onGetTeamsFullfilled,
  onGetTeamsPending,
  onGetTeamsRejected,
} from './reducers';

const INITIAL_STATE = INITIAL_BIKETEAM_STATE;

const getTeamsAsync = createAsyncThunk(
  'getTeamsAsync',
  ({ name, city, country }: { name?: string; city?: string; country?: string }) => getTeams(name, city, country)
);
const getCountriesAsync = createAsyncThunk('getCountries', getCountries);
const getTeamDetailsAsync = createAsyncThunk('getTeamDetails', ({ teamId }: { teamId: string }) =>
  getTeamDetails(teamId)
);
const getTeamMembersAsync = createAsyncThunk('getTeamMembers', ({ teamId }: { teamId: string }) =>
  getTeamMembers(teamId)
);
const getTeamEventsAsync = createAsyncThunk('getTeamEvents', ({ teamId }: { teamId: string }) => getTeamEvents(teamId));

const actionsSlice = createSlice({
  name: 'actions',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getTeamsAsync.pending, onGetTeamsPending)
      .addCase(getTeamsAsync.rejected, onGetTeamsRejected)
      .addCase(getTeamsAsync.fulfilled, onGetTeamsFullfilled)
      .addCase(getCountriesAsync.fulfilled, onGetCountriesFullfilled)
      .addCase(getCountriesAsync.pending, onGetCountriesPending)
      .addCase(getCountriesAsync.rejected, onGetCountriesRejected)
      .addCase(getTeamDetailsAsync.fulfilled, onGetTeamDetailsFullfilled)
      .addCase(getTeamDetailsAsync.pending, onGetTeamDetailsPending)
      .addCase(getTeamDetailsAsync.rejected, onGetTeamDetailsRejected)
      .addCase(getTeamMembersAsync.fulfilled, onGetTeamMembersFullfilled)
      .addCase(getTeamMembersAsync.pending, onGetTeamMembersPending)
      .addCase(getTeamMembersAsync.rejected, onGetTeamMembersRejected)
      .addCase(getTeamEventsAsync.fulfilled, onGetTeamEventsFullfilled)
      .addCase(getTeamEventsAsync.pending, onGetTeamEventsPending)
      .addCase(getTeamEventsAsync.rejected, onGetTeamEventsRejected),
});

export const actions = {
  ...actionsSlice.actions,
  getTeamsAsync,
  getCountriesAsync,
  getTeamDetailsAsync,
  getTeamMembersAsync,
  getTeamEventsAsync,
};

const { reducer } = actionsSlice;

export const store = configureStore({ reducer });

export type ActionsDispatch = typeof store.dispatch;

export function useActionsDispatch(): ActionsDispatch {
  return useDispatch<ActionsDispatch>();
}

