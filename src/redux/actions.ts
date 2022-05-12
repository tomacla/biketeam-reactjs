import axios from 'axios';
import { Country, Team } from './interfaces';

const API_URL = 'https://staging.biketeam.info/api';
const DEFAULT_PAGE_SIZE = '10';
const DEFAULT_PAGE = '0';

export async function getTeams(name?: string, city?: string, country?: string): Promise<Team[]> {
  const config = {
    headers: { 'Content-Type': 'application/json' },
    params: {
      name: name,
      city: city,
      country: country,
      pageSize: DEFAULT_PAGE_SIZE,
      page: DEFAULT_PAGE,
    },
  };
  const { data: result } = await axios.get(`${API_URL}/teams`, config);
  return result;
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
