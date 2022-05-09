import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getCountries, getTeams } from './actions';
import { INITIAL_BIKETEAM_STATE } from './constants';
import {
  onGetCountriesFullfilled,
  onGetCountriesPending,
  onGetCountriesRejected,
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
      .addCase(getCountriesAsync.rejected, onGetCountriesRejected),
});

export const actions = {
  ...actionsSlice.actions,
  getTeamsAsync,
  getCountriesAsync,
};

const { reducer } = actionsSlice;

export const store = configureStore({ reducer });

export type ActionsDispatch = typeof store.dispatch;

export function useActionsDispatch(): ActionsDispatch {
  return useDispatch<ActionsDispatch>();
}

