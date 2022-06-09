import axios from 'axios';
import { Country, Team, TeamEvent, TeamMemberApi, TeamRide, TeamTrip, Map } from './interfaces';

const API_URL = 'https://staging.biketeam.info/api';
const DEFAULT_PAGE_SIZE = '9';
const DEFAULT_PAGE = '0';

export async function getTeams(
  name?: string,
  city?: string,
  country?: string,
  pageSize?: string,
  page?: number
): Promise<{teams:Team[], nbPages: string}> {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    params: {
      name: name,
      city: city,
      country: country,
      pageSize: pageSize || DEFAULT_PAGE_SIZE,
      page: page || DEFAULT_PAGE,
    },
  };
  const { data: teams, headers } = await axios.get(`${API_URL}/teams`, config);
  return {teams, nbPages: headers['x-pages']};
}

export async function getCountries(): Promise<Country[]> {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  const { data: countries } = await axios.get(`${API_URL}/data/countries`, config);
  return countries;
}

export async function getTeamDetails(teamId: string): Promise<Team> {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  const { data: team } = await axios.get(`${API_URL}/teams/${teamId}`, config);
  return team;
}

export async function getTeamMembers(teamId: string): Promise<TeamMemberApi[]> {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  const { data: members } = await axios.get(`${API_URL}/teams/${teamId}/members`, config);
  return members;
}

export async function getTeamEvents(teamId: string): Promise<TeamEvent[]> {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  const { data: members } = await axios.get(`${API_URL}/teams/${teamId}/feed`, config);
  return members;
}

export async function getTeamRides(teamId: string, from?: Date, to?: Date): Promise<TeamRide[]> {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    params: {
      from: from,
      to: to,
      pageSize: DEFAULT_PAGE_SIZE,
      page: DEFAULT_PAGE,
    },
  };
  const { data: result } = await axios.get(`${API_URL}/teams/${teamId}/rides`, config);
  return result;
}

export async function getTeamTrips(teamId: string, from?: Date, to?: Date): Promise<TeamTrip[]> {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    params: {
      from: from,
      to: to,
      pageSize: DEFAULT_PAGE_SIZE,
      page: DEFAULT_PAGE,
    },
  };
  const { data: result } = await axios.get(`${API_URL}/teams/${teamId}/trips`, config);
  return result;
}

export async function getTeamRide(teamId: string, rideId: string): Promise<TeamRide> {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  const { data: ride } = await axios.get(`${API_URL}/teams/${teamId}/rides/${rideId}`, config);
  return ride;
}

export async function getTeamTrip(teamId: string, tripId: string): Promise<TeamTrip> {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  const { data: trip } = await axios.get(`${API_URL}/teams/${teamId}/trips/${tripId}`, config);
  return trip;
}

export async function getTeamMaps(
  teamId: string,
  page: number,
  lowerDistance?: number,
  upperDistance?: number,
  lowerPositiveElevation?: number,
  upperPositiveElevation?: number,
  sort?: string,
  windDirection?: string,
  type?: string,
  tags?: string[]
): Promise<{ maps: Map[]; nbPages: string }> {
  const params = new URLSearchParams();
  params.append('lowerDistance', (lowerDistance || 0).toString());
  params.append('upperDistance', (upperDistance || 1000).toString());
  params.append('lowerPositiveElevation', (lowerPositiveElevation || 100).toString());
  params.append('upperPositiveElevation', (upperPositiveElevation || 1000).toString());
  sort && params.append('sort', sort);
  windDirection && params.append('windDirection', windDirection);
  type && params.append('type', type);
  params.append('pageSize', DEFAULT_PAGE_SIZE);
  page && params.append('page', page.toString());
  tags?.forEach(tag => params.append('tags', tag));
  const { data: maps, headers } = await axios.get(`${API_URL}/teams/${teamId}/maps`, {
    headers: { 'Content-Type': 'application/json' },
    params,
  });
  return { maps, nbPages: headers['x-pages'] };
}

export async function getTeamMap(teamId: string, mapId: string): Promise<Map> {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  const { data: trip } = await axios.get(`${API_URL}/teams/${teamId}/maps/${mapId}`, config);
  return trip;
}

export async function getTeamTags(teamId: string): Promise<string[]> {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  const { data: trip } = await axios.get(`${API_URL}/teams/${teamId}/maps/tags`, config);
  return trip;
}
