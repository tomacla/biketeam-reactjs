import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCountries,
  getTeamDetails,
  getTeamEvents,
  getTeamMap,
  getTeamMaps,
  getTeamMembers,
  getTeamRide,
  getTeamRides,
  getTeams,
  getTeamTags,
  getTeamTrip,
  getTeamTrips,
} from './api';

export const getTeamsAsync = createAsyncThunk(
  'getTeamsAsync',
  ({ name, city, country, pageSize }: { name?: string; city?: string; country?: string; pageSize?: string }) =>
    getTeams(name, city, country, pageSize)
);

export const getCountriesAsync = createAsyncThunk('getCountries', getCountries);
export const getTeamDetailsAsync = createAsyncThunk('getTeamDetails', ({ teamId }: { teamId: string }) =>
  getTeamDetails(teamId)
);

export const getTeamMembersAsync = createAsyncThunk('getTeamMembers', ({ teamId }: { teamId: string }) =>
  getTeamMembers(teamId)
);

export const getTeamEventsAsync = createAsyncThunk('getTeamEvents', ({ teamId }: { teamId: string }) =>
  getTeamEvents(teamId)
);

export const getTeamRidesAsync = createAsyncThunk(
  'getTeamRides',
  ({ teamId, from, to }: { teamId: string; from?: Date; to?: Date }) => getTeamRides(teamId, from, to)
);
export const getTeamTripsAsync = createAsyncThunk(
  'getTeamTrips',
  ({ teamId, from, to }: { teamId: string; from?: Date; to?: Date }) => getTeamTrips(teamId, from, to)
);

export const getTeamRideAsync = createAsyncThunk(
  'getTeamRide',
  ({ teamId, rideId }: { teamId: string; rideId: string }) => getTeamRide(teamId, rideId)
);

export const getTeamTripAsync = createAsyncThunk(
  'getTeamTrip',
  ({ teamId, tripId }: { teamId: string; tripId: string }) => getTeamTrip(teamId, tripId)
);

export const getTeamMapsAsync = createAsyncThunk(
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
    page
  }: {
    teamId: string;
    page: number;
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
      page,
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

export const getTeamMapAsync = createAsyncThunk(
  'getTeamMap',
  ({ teamId, mapId }: { teamId: string; mapId: string }) => getTeamMap(teamId, mapId)
);

export const getTeamTagsAsync = createAsyncThunk(
  'getTeamTags',
  ({ teamId }: { teamId: string }) => getTeamTags(teamId)
);
