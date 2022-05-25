import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
  getCountries,
  getTeamDetails,
  getTeamEvents,
  getTeamMaps,
  getTeamMembers,
  getTeamRide,
  getTeamRides,
  getTeams,
  getTeamTrip,
  getTeamTrips,
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
  onGetTeamTripFullfilled,
  onGetTeamTripPending,
  onGetTeamTripRejected,
  onGetTeamTripsFullfilled,
  onGetTeamTripsPending,
  onGetTeamTripsRejected,
} from './reducers';

const INITIAL_STATE = INITIAL_BIKETEAM_STATE;

const getTeamsAsync = createAsyncThunk(
  'getTeamsAsync',
  ({ name, city, country, pageSize }: { name?: string; city?: string; country?: string; pageSize?: string }) =>
    getTeams(name, city, country, pageSize)
);
const getCountriesAsync = createAsyncThunk('getCountries', getCountries);
const getTeamDetailsAsync = createAsyncThunk('getTeamDetails', ({ teamId }: { teamId: string }) =>
  getTeamDetails(teamId)
);
const getTeamMembersAsync = createAsyncThunk('getTeamMembers', ({ teamId }: { teamId: string }) =>
  getTeamMembers(teamId)
);
const getTeamEventsAsync = createAsyncThunk('getTeamEvents', ({ teamId }: { teamId: string }) => getTeamEvents(teamId));
const getTeamRidesAsync = createAsyncThunk(
  'getTeamRides',
  ({ teamId, from, to }: { teamId: string; from?: Date; to?: Date }) => getTeamRides(teamId, from, to)
);
const getTeamTripsAsync = createAsyncThunk(
  'getTeamTrips',
  ({ teamId, from, to }: { teamId: string; from?: Date; to?: Date }) => getTeamTrips(teamId, from, to)
);
const getTeamRideAsync = createAsyncThunk('getTeamRide', ({ teamId, rideId }: { teamId: string; rideId: string }) =>
  getTeamRide(teamId, rideId)
);
const getTeamTripAsync = createAsyncThunk('getTeamTrip', ({ teamId, tripId }: { teamId: string; tripId: string }) =>
  getTeamTrip(teamId, tripId)
);
const getTeamMapsAsync = createAsyncThunk(
  'getTeamMaps',
  ({
    teamId,
    lowerDistance,
    upperDistance,
    lowerPositiveElevation,
    upperPositiveElevation,
    sort,
    windDirection,
    type,
    tags,
  }: {
    teamId: string;
    lowerDistance?: number;
    upperDistance?: number;
    lowerPositiveElevation?: number;
    upperPositiveElevation?: number;
    sort?: string;
    windDirection?: string;
    type?: string;
    tags?: string[];
  }) =>
    getTeamMaps(
      teamId,
      lowerDistance,
      upperDistance,
      lowerPositiveElevation,
      upperPositiveElevation,
      sort,
      windDirection,
      type,
      tags
    )
);

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
      .addCase(getTeamMapsAsync.rejected, onGetTeamMapsRejected),
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
  getTeamMapsAsync
};

const { reducer } = actionsSlice;

export const store = configureStore({ reducer });

export type ActionsDispatch = typeof store.dispatch;

export function useActionsDispatch(): ActionsDispatch {
  return useDispatch<ActionsDispatch>();
}
