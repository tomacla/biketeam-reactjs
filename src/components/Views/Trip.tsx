import { useCurrentStateAndParams } from '@uirouter/react';
import moment from 'moment';
import React, { FC, memo, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { TeamTrip } from '../../redux/interfaces';
import { selectTeamTrip } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import { API_URL } from '../common/constants';
import GoButton from '../common/GoButton';
import { ContentContainer } from '../Team/common';
import StageCard from '../Team/Trip/StageCard';
import { ViewContainer } from './common';

const ContentCard = styled(Card)`
  margin: 8px 0 8px 0;
`;

const Layout = styled(Row)`
width: 100%;
`;

const LeftCol = styled(Col).attrs({
  xs: '12',
  md: '4'
})`
`;

const CenterCol = styled(Col).attrs({
  xs: '12',
  md: '5'
})`
`;

const RightCol = styled(Col).attrs({
  xs: '12',
  md: '3'
})`
`;

const Title = styled.h4`
  font-size: 24px;
`

const Date = styled.h5`
  color: #6c757d!important;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
`
const DetailItem = styled.p`
  margin-bottom: 0;
`

const Image = styled.img.attrs({
  className: 'mx-auto d-block shadow rounded w-100 h-auto mx-auto'
})`
width: 100%;
height: auto;
margin-top: 8px;
margin-bottom: 8px;
`;

interface TripPropsResults {
  trip?: TeamTrip;
}

export const useTripProps = (): TripPropsResults => {
  const dispatch = useActionsDispatch();
  const {
    params: { teamId, tripId },
  } = useCurrentStateAndParams();
  useEffect(() => {
    dispatch(actions.getTeamDetailsAsync({ teamId }));
    dispatch(actions.getTeamTripAsync({ teamId, tripId }));
  }, [dispatch, tripId, teamId]);
  const trip = useMemoizedSelector(selectTeamTrip);
  return {
    trip
  }
}

const Trip: FC = () => {
  const { trip } = useTripProps();
  return (
    trip ? (
      <ViewContainer>
        <Layout>
          <LeftCol>
            <ContentContainer>
              <Title>
                {trip.title}
              </Title>
              <Date>{`Du ${moment(trip.startDate).format('LL')} au ${moment(trip.endDate).format('LL')}`}</Date>
              <DetailItem>{`Allure: ${trip.lowerSpeed}/${trip.upperSpeed} km/h`}</DetailItem>
              <DetailItem>{`Lieu de rendez-vous: ${trip.meetingLocation}`}</DetailItem>
              <DetailItem>{`Heure de départ: ${trip.meetingTime}`}</DetailItem>
              {trip.imaged ? (<Image src={`${API_URL}/${trip.teamId}/trips/${trip.id}/image`} alt='team-logo' />) : null}
              <p>{trip.description}</p>
            </ContentContainer >
          </LeftCol>
          <CenterCol>
            <ContentCard>
              <GoButton />
            </ContentCard>
            {
              trip.stages.map((stage) =>
                <StageCard
                  key={stage.id}
                  teamId={trip.teamId}
                  mapId={stage.map.id}
                  id={stage.id}
                  name={stage.name}
                  date={stage.date}
                  distance={stage.map.length}
                  postiveElevation={stage.map.positiveElevation}
                  negativeElevation={stage.map.negativeElevation}
                />
              )}
          </CenterCol>
          <RightCol>
            TODO: Messages
          </RightCol>
        </Layout>
      </ViewContainer>) : null)
}

export default memo(Trip);
