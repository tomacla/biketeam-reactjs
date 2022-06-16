import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
  getCountriesAsync,
  getTeamDetailsAsync,
  getTeamEventsAsync,
  getTeamMapAsync,
  getTeamMapsAsync,
  getTeamMembersAsync,
  getTeamRideAsync,
  getTeamRidesAsync,
  getTeamsAsync,
  getTeamTagsAsync,
  getTeamTripAsync,
  getTeamTripsAsync,
  parseGpxFileAsync,
} from './actions';
import { INITIAL_BIKETEAM_STATE } from './constants';
import {
  onClearTeamDetails,
  onGetCountriesFullfilled,
  onGetCountriesPending,
  onGetCountriesRejected,
  onGetTeamDetailsFullfilled,
  onGetTeamDetailsPending,
  onGetTeamDetailsRejected,
  onGetTeamEventsFullfilled,
  onGetTeamEventsPending,
  onGetTeamEventsRejected,
  onGetTeamMapFullfilled,
  onGetTeamMapPending,
  onGetTeamMapRejected,
  onGetTeamMapsFullfilled,
  onGetTeamMapsPending,
  onGetTeamMapsRejected,
  onGetTeamMembersFullfilled,
  onGetTeamMembersPending,
  onGetTeamMembersRejected,
  onGetTeamRideFullfilled,
  onGetTeamRidePending,
  onGetTeamRideRejected,
  onGetTeamRidesFullfilled,
  onGetTeamRidesPending,
  onGetTeamRidesRejected,
  onGetTeamsFullfilled,
  onGetTeamsPending,
  onGetTeamsRejected,
  onGetTeamTagsFullfilled,
  onGetTeamTagsPending,
  onGetTeamTagsRejected,
  onGetTeamTripFullfilled,
  onGetTeamTripPending,
  onGetTeamTripRejected,
  onGetTeamTripsFullfilled,
  onGetTeamTripsPending,
  onGetTeamTripsRejected,
  onPFullfilled,
  onPPending,
  onPRejected,
} from './reducers';

const INITIAL_STATE = INITIAL_BIKETEAM_STATE;

const actionsSlice = createSlice({
  name: 'actions',
  initialState: INITIAL_STATE,
  reducers: {
    clearTeamDetails: onClearTeamDetails,
  },
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
      .addCase(getTeamEventsAsync.rejected, onGetTeamEventsRejected)
      .addCase(getTeamRidesAsync.fulfilled, onGetTeamRidesFullfilled)
      .addCase(getTeamRidesAsync.pending, onGetTeamRidesPending)
      .addCase(getTeamRidesAsync.rejected, onGetTeamRidesRejected)
      .addCase(getTeamTripsAsync.fulfilled, onGetTeamTripsFullfilled)
      .addCase(getTeamTripsAsync.pending, onGetTeamTripsPending)
      .addCase(getTeamTripsAsync.rejected, onGetTeamTripsRejected)
      .addCase(getTeamRideAsync.fulfilled, onGetTeamRideFullfilled)
      .addCase(getTeamRideAsync.pending, onGetTeamRidePending)
      .addCase(getTeamRideAsync.rejected, onGetTeamRideRejected)
      .addCase(getTeamTripAsync.fulfilled, onGetTeamTripFullfilled)
      .addCase(getTeamTripAsync.pending, onGetTeamTripPending)
      .addCase(getTeamTripAsync.rejected, onGetTeamTripRejected)
      .addCase(getTeamMapsAsync.fulfilled, onGetTeamMapsFullfilled)
      .addCase(getTeamMapsAsync.pending, onGetTeamMapsPending)
      .addCase(getTeamMapsAsync.rejected, onGetTeamMapsRejected)
      .addCase(getTeamMapAsync.fulfilled, onGetTeamMapFullfilled)
      .addCase(getTeamMapAsync.pending, onGetTeamMapPending)
      .addCase(getTeamMapAsync.rejected, onGetTeamMapRejected)
      .addCase(getTeamTagsAsync.fulfilled, onGetTeamTagsFullfilled)
      .addCase(getTeamTagsAsync.pending, onGetTeamTagsPending)
      .addCase(getTeamTagsAsync.rejected, onGetTeamTagsRejected)
      .addCase(parseGpxFileAsync.fulfilled, onPFullfilled)
      .addCase(parseGpxFileAsync.pending, onPPending)
      .addCase(parseGpxFileAsync.rejected, onPRejected),
});

export const actions = {
  ...actionsSlice.actions,
  getTeamsAsync,
  getCountriesAsync,
  getTeamDetailsAsync,
  getTeamMembersAsync,
  getTeamEventsAsync,
  getTeamRidesAsync,
  getTeamTripsAsync,
  getTeamTripAsync,
  getTeamRideAsync,
  getTeamMapsAsync,
  getTeamMapAsync,
  getTeamTagsAsync,
  parseGpxFileAsync
};

const { reducer } = actionsSlice;

export const store = configureStore({ reducer });

export type ActionsDispatch = typeof store.dispatch;

export function useActionsDispatch(): ActionsDispatch {
  return useDispatch<ActionsDispatch>();
}
