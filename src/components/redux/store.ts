import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getTeams } from './actions';
import { INITIAL_BIKETEAM_STATE } from './constants';
import { onGetTeamsFullfilled, onGetTeamsPending, onGetTeamsRejected } from './reducers';

const INITIAL_STATE = INITIAL_BIKETEAM_STATE;

const getTeamsAsync = createAsyncThunk('getTeams', getTeams);

const actionsSlice = createSlice({
  name: 'actions',
  initialState: INITIAL_STATE,
  reducers: {
  },
  extraReducers: builder =>
    builder
      .addCase(getTeamsAsync.pending, onGetTeamsPending)
      .addCase(getTeamsAsync.rejected, onGetTeamsRejected)
      .addCase(getTeamsAsync.fulfilled, onGetTeamsFullfilled)
});

export const actions = {
  ...actionsSlice.actions,
  getTeamsAsync,
};

const { reducer } = actionsSlice;

export const store = configureStore({ reducer });

export type ActionsDispatch = typeof store.dispatch;

export function useActionsDispatch(): ActionsDispatch {
  return useDispatch<ActionsDispatch>();
}
