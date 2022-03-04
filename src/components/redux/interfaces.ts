
export interface BikeTeamState {
  entities: BikeTeamStateEntities
  ui: BikeTeamStateUi
}

export interface BikeTeamStateEntities {
  teams: Team[];
}

export interface BikeTeamStateUi {
}


export type TeamVisibility = 'PUBLIC' | 'PRIVATE'

export interface TeamSocial {
  facebook?: string,
  twitter?: string,
  instagram?: string
}

export interface TeamContact {

  email?: string,
  phoneNumber?: string,
  addressStreetLine?: string,
  addressPostalCode?: string,
  addressCity?: string
}

export interface Team {
  id: string,
  name: string,
  description: string,
  city: string,
  country: string,
  createdAt: string,
  visibility: TeamVisibility,
  social: TeamSocial
  contact: TeamContact,
  heatmap: boolean
  other?: any,
}
