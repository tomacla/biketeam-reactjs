import { FC, memo } from 'react';
import { TeamTrip, TeamTripStage } from '../../../redux/interfaces';
import EventCard from '../../common/EventCard';
import { ListContainer } from '../common';

interface TripListProps {
  trips: TeamTrip[];
}

function toBadges(stages: TeamTripStage[]): string[] {
  return stages.map(({ name }) => name).sort()
}

const TripList: FC<TripListProps> = ({ trips }) => {
  return (
    <ListContainer>
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
    </ListContainer>
  )
}

export default memo(TripList);
