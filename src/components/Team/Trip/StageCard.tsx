import moment from 'moment';
import 'moment/locale/fr';
import { FC, memo } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import MapCard from '../../common/MapCard';

const MapCardContainer = styled(Card)`
  margin: 8px 0 8px 0;
`;

const Title = styled(Card.Title)`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
`

const MeetingTime = styled.h6`
  color: #6c757d!important;
  font-weight: 600;
`;

interface StageCardProps {
  id: string,
  name: string,
  date: Date,
  teamId: string,
  mapId: string,
  distance: number,
  postiveElevation: number,
  negativeElevation: number
}

const StageCard: FC<StageCardProps> = (
  {
    name,
    teamId,
    mapId,
    distance,
    postiveElevation,
    negativeElevation,
    date
  }) => {
  return (
    <MapCardContainer>
      <Card.Body>
        <Title>{name}</Title>
        <Card.Text>
          <MeetingTime>
            {moment(date).format('LL')}
          </MeetingTime>
          <MapCard
            mapId={mapId}
            teamId={teamId}
            distance={distance}
            positiveElevation={postiveElevation}
            negativeElevation={negativeElevation}
            fileName={`todo-${name}`}
          />
        </Card.Text>
      </Card.Body>
    </MapCardContainer>
  )
}

export default memo(StageCard);
