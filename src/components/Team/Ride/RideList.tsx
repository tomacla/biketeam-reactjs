import { FC, memo } from 'react';
import styled from 'styled-components';
import { RideGroup, TeamRide } from '../../../redux/interfaces';
import EventCard from '../../common/EventCard';


interface RideListProps {
  rides: TeamRide[];
}

function toBadges(groups: RideGroup[]): string[] {
  return groups.map(({ name }) => name)
}

const RideListContainer = styled.div`
  margin: 0 10% 0 10%;
`

const RideList: FC<RideListProps> = ({ rides }) => {
  return (
    <RideListContainer>
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
    </RideListContainer>
  )
}

export default memo(RideList);
