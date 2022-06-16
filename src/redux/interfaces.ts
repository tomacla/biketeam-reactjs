
export interface BikeTeamState {
  entities: BikeTeamStateEntities
  ui: BikeTeamStateUi,
  auth: BikeTeamStateAuth
}

export interface BikeTeamStateEntitiesData {
  countries: Country[];
  windDirections: string[];
  mapTypes: string[];
  mapSorts: string[]
}

export interface BikeTeamStateEntitiesTeam {
  members: TeamMember[];
  events: TeamEvent[];
  rides: TeamRide[];
  trips: TeamTrip[];
  maps: Map[];
  tags: string[];
  nbMapPages: number;
  details?: Team;
  ride?: TeamRide;
  trip?: TeamTrip;
  map?: Map;
}

export interface BikeTeamStateEntities {
  teams: Team[];
  nbTeamPages: number;
  data: BikeTeamStateEntitiesData;
  team: BikeTeamStateEntitiesTeam;
}

export type NavItem = 'feed' | 'rides' | 'trips' | 'maps'

export interface BikeTeamStateUi {
  navitems: NavItem[]
}

export interface BikeTeamStateAuth {
  data: AuthUser|null;
  loading: boolean;
  error: boolean;
}

export type TeamVisibility = 'PUBLIC' | 'PRIVATE';

export type TeamMemberApi = {
  identity: string;
  profileImage: string;
};

export type TeamMember = {
  name: string;
  image: string;
};

export type EventType = 'RIDE' | 'TRIP' | 'PUBLICATION';

export type TeamEvent = {
  id: string;
  permalink: string; // ?
  teamId: string;
  teamName: string;
  type: EventType;
  publishedAt: Date;
  title: string;
  date: Date;
  content: string;
  badges: string[];
  imaged: boolean;
};

export type MapType = 'ROAD' | 'GRAVEL';

export interface Map {
  id: string;
  teamId: string;
  permalink: string;
  name: string;
  length: number;
  type: MapType;
  positiveElevation: number;
  negativeElevation: number;
  postedAt: Date;
  tags: string[];
  crossing: boolean;
}

export type RideGroup = {
  id: string;
  name: string;
  lowerSpeed: number;
  upperSpeed: number;
  map: Map;
  meetingLocation: string;
  meetingTime: Date;
  meetingPoint: string; // ?
  participants: []; //TODO
};

export type PublishStatusType = 'PUBLISHED' | 'DRAFT'; // ?
export type RideType = 'RUGULAR' | 'JCPA'; // ?

export type TeamRide = {
  id: string;
  teamId: string;
  permalink: string; // ?
  publishedStatus: PublishStatusType;
  type: RideType;
  date: Date;
  publishedAt: Date;
  title: string;
  description: string;
  imaged: boolean;
  messages: []; //TODO
  groups: RideGroup[];
};


export interface TeamSocial {
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

export interface TeamContact {
  email?: string;
  phoneNumber?: string;
  addressStreetLine?: string;
  addressPostalCode?: string;
  addressCity?: string;
}

export interface TeamConfiguration {
  defaultPage: string,
  defaultSearchTags: string[],
  feedVisible: boolean,
  ridesVisible: boolean,
  tripsVisible: boolean,
  timezone: string
}

export interface Team {
  id: string;
  name: string;
  description: string;
  city: string;
  country: string;
  createdAt: string;
  visibility: TeamVisibility;
  social: TeamSocial;
  contact: TeamContact;
  heatmap: boolean;
  configuration:TeamConfiguration
  other?: string;
}

export interface Country {
  label: string;
  code: string;
}

export interface TeamTripStage {
  id: string;
  date: Date;
  name: string;
  map: Map
}

export interface TeamTrip  {
  id: string;
  teamId: string;
  permalink: string; // ?
  publishedStatus: PublishStatusType;
  type: RideType;
  startDate: Date;
  endDate: Date;
  publishedAt: Date;
  title: string;
  description: string;
  imaged: boolean;
  stages: TeamTripStage[];
  lowerSpeed: number;
  upperSpeed: number;
  meetingLocation: string;
  meetingTime: string;
}

export interface AuthUser {
  accessToken: string;
  refreshToken: string;
  admin: boolean,
  city: string|null,
  email: string|null,
  emailPreferences: Record<string, boolean>
  firstName: string,
  id: string,
  lastName: string,
  profileImage: string|null,
  stravaId?: number,
}
