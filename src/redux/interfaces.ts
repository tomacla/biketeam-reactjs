
export interface BikeTeamState {
  entities: BikeTeamStateEntities
  ui: BikeTeamStateUi
}

export interface BikeTeamStateEntitiesData {
  countries: Country[];
}

export interface BikeTeamStateEntitiesTeam {
  members: TeamMember[];
  events: TeamEvent[];
  rides: TeamRide[];
  details?: Team;
}
export interface BikeTeamStateEntities {
  teams: Team[];
  data: BikeTeamStateEntitiesData;
  team: BikeTeamStateEntitiesTeam;
}

export type NavItem = 'feed' | 'rides' | 'trips' | 'maps'

export interface BikeTeamStateUi {
  navitems: NavItem[]
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
  publishedAt: Date; // TO CHANGE
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
