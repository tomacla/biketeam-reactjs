
export interface BikeTeamState {
  entities: BikeTeamStateEntities
  ui: BikeTeamStateUi
}

export interface BikeTeamStateEntitiesData {
  countries: Country[];
}
export interface BikeTeamStateEntities {
  teams: Team[];
  data: BikeTeamStateEntitiesData;
}

export interface BikeTeamStateUi {}

export type TeamVisibility = 'PUBLIC' | 'PRIVATE';

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
  img?: string;
  other?: any;
}

export interface Country {
  label: string;
  code: string;
}
