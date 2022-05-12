import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getCountries, getTeamDetails, getTeams } from './actions';
import { INITIAL_BIKETEAM_STATE } from './constants';
import {
  onGetCountriesFullfilled,
  onGetCountriesPending,
  onGetCountriesRejected,
  onGetTeamDetailsFullfilled,
  onGetTeamDetailsPending,
  onGetTeamDetailsRejected,
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
      .addCase(getTeamDetailsAsync.rejected, onGetTeamDetailsRejected),
});

export const actions = {
  ...actionsSlice.actions,
  getTeamsAsync,
  getCountriesAsync,
  getTeamDetailsAsync,
};

const { reducer } = actionsSlice;

export const store = configureStore({ reducer });

export type ActionsDispatch = typeof store.dispatch;

export function useActionsDispatch(): ActionsDispatch {
  return useDispatch<ActionsDispatch>();
}

