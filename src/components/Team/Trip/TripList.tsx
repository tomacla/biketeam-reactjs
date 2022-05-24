import { FC, memo } from 'react';
import styled from 'styled-components';
import { TeamTrip, TeamTripStage } from '../../../redux/interfaces';
import EventCard from '../../common/EventCard';


interface TripListProps {
  trips: TeamTrip[];
}

const TripListContainer = styled.div`
  margin: 0 10% 0 10%;
`

function toBadges(stages: TeamTripStage[]): string[] {
  return stages.map(({ name }) => name).sort()
}

const TripList: FC<TripListProps> = ({ trips }) => {

  return (
    <TripListContainer>
      {trips.map((trip) => {
        return (
          <EventCard
            key={trip.id}
            type={'TRIP'}
            publishedAt={trip.publishedAt}
            title={trip.title}
            date={trip.startDate}
            endDate={trip.endDate}
            badges={toBadges(trip.stages)}
            content={trip.description}
            imaged={trip.imaged}
            teamId={trip.teamId}
            id={trip.id}
          />)
      })}
    </TripListContainer>
  )
}

export default memo(TripList);
