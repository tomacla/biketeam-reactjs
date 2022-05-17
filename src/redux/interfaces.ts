
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
  details?: Team;
}
export interface BikeTeamStateEntities {
  teams: Team[];
  data: BikeTeamStateEntitiesData;
  team: BikeTeamStateEntitiesTeam;
}

export interface BikeTeamStateUi {}

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
  other?: string;
}

export interface Country {
  label: string;
  code: string;
}
