import { useCurrentStateAndParams } from '@uirouter/react';
import React, { FC, memo, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { TeamRide } from '../../redux/interfaces';
import { selectTeamRide } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import EventDetail from '../Team/Ride/RideDetail';
import GroupCard from '../Team/Ride/GroupCard';
import { ViewContainer } from './common';
import { useTeamId } from '../common/hooks';

const Layout = styled(Row)`
width: 100%;
`;

const LeftCol = styled(Col).attrs({
  xs: '12',
  md: '4'
})`
`

const CenterCol = styled(Col).attrs({
  xs: '12',
  md: '5'
})`
`

const RightCol = styled(Col).attrs({
  xs: '12',
  md: '3'
})`
`

interface RidePropsResults {
  ride?: TeamRide;
}

export const useRideProps = (): RidePropsResults => {
  const dispatch = useActionsDispatch();
  const teamId = useTeamId();
  const {
    params: { rideId },
  } = useCurrentStateAndParams();
  useEffect(() => {
    if (teamId && rideId) {
      dispatch(actions.getTeamRideAsync({ teamId, rideId }));
    }
  }, [dispatch, rideId, teamId]);
  const ride = useMemoizedSelector(selectTeamRide);
  return {
    ride
  }
}

const Ride: FC = () => {
  const { ride } = useRideProps();
  return (
    ride ? (
      <ViewContainer>
        <Layout>
          <LeftCol>
            <EventDetail
              title={ride.title}
              id={ride.id}
              date={ride.date}
              description={ride.description}
              imaged={ride.imaged}
              teamId={ride.teamId} />
          </LeftCol>
          <CenterCol>
            {
              ride.groups.map((group) =>
                <GroupCard
                  key={group.id}
                  teamId={ride.teamId}
                  mapId={group.map.id}
                  distance={group.map.length}
                  postiveElevation={group.map.positiveElevation}
                  negativeElevation={group.map.negativeElevation}
                  id={group.id}
                  name={group.name}
                  lowerSpeed={group.lowerSpeed}
                  upperSpeed={group.upperSpeed}
                  meetingLocation={group.meetingLocation}
                  meetingTime={group.meetingTime} />
              )}
          </CenterCol>
          <RightCol>
            TODO: Messages
          </RightCol>
        </Layout>
      </ViewContainer>) : null)
}

export default memo(Ride);
