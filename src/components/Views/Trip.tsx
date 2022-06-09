import { useCurrentStateAndParams } from '@uirouter/react';
import React, { FC, memo, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { TeamTrip } from '../../redux/interfaces';
import { selectTeamTrip } from '../../redux/selectors';
import { actions, useActionsDispatch } from '../../redux/store';
import { useMemoizedSelector } from '../../redux/useMemoizedSelector';
import { API_URL } from '../common/constants';
import { toFormatedDate } from '../common/Date';
import GoButton from '../common/GoButton';
import { useTeamId } from '../common/hooks';
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
  const teamId = useTeamId();
  const {
    params: { tripId },
  } = useCurrentStateAndParams();
  useEffect(() => {
    if (teamId && tripId) dispatch(actions.getTeamTripAsync({ teamId, tripId }));
  }, [dispatch, tripId, teamId]);
  const trip = useMemoizedSelector(selectTeamTrip);
  return {
    trip
  }
}

const Trip: FC = () => {
  const { trip } = useTripProps();
  if (!trip) return <></>;
  const {
    title,
    startDate,
    endDate,
    lowerSpeed,
    upperSpeed,
    meetingLocation,
    meetingTime,
    imaged,
    id,
    teamId,
    description,
    stages
  } = trip;
  return (
    <ViewContainer>
      <Layout>
        <LeftCol>
          <ContentContainer>
            <Title>
              {title}
            </Title>
            <Date>{`Du ${toFormatedDate(startDate)} au ${toFormatedDate(endDate)}`}</Date>
            <DetailItem>{`Allure: ${lowerSpeed}/${upperSpeed} km/h`}</DetailItem>
            <DetailItem>{`Lieu de rendez-vous: ${meetingLocation}`}</DetailItem>
            <DetailItem>{`Heure de départ: ${meetingTime}`}</DetailItem>
            {imaged ? (<Image src={`${API_URL}/${teamId}/trips/${id}/image`} alt='team-logo' />) : null}
            <p>{description}</p>
          </ContentContainer >
        </LeftCol>
        <CenterCol>
          <ContentCard>
            <GoButton />
          </ContentCard>
          {
            stages.map((stage) =>
              <StageCard
                key={stage.id}
                teamId={teamId}
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
    </ViewContainer>)
}

export default memo(Trip);
