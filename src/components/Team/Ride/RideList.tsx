import { FC, memo } from 'react';
import { RideGroup, TeamRide } from '../../../redux/interfaces';
import EventCard from '../../common/EventCard';
import { ListContainer } from '../common';

interface RideListProps {
  rides: TeamRide[];
}

function toBadges(groups: RideGroup[]): string[] {
  return groups.map(({ name }) => name)
}

const RideList: FC<RideListProps> = ({ rides }) => {
  return (
    <ListContainer>
      {rides.map((ride) => (
        <EventCard
          key={ride.id}
          type={'RIDE'}
          publishedAt={ride.publishedAt}
          title={ride.title}
          date={ride.date}
          badges={toBadges(ride.groups)}
          content={ride.description}
          imaged={ride.imaged}
          teamId={ride.teamId}
          id={ride.id}
        />))}
    </ListContainer>
  )
}

export default memo(RideList);
