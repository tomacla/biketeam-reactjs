import axios from 'axios';
import { Team } from './interfaces';

const API_URL = 'https://staging.biketeam.info/api'

export async function getTeams(): Promise<Team[]> {

  const config = {
    headers: { 'Content-Type': 'application/json' },
    params: { name: undefined, city: 'Paris', country: 'FR', pageSize: '10', page: '0' }
  }
  const { data: result } = await axios.get(`${API_URL}/teams`, config);
  // eslint-disable-next-line no-console
  console.log(result);
  return result;
}
