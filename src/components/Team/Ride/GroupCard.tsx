import 'moment/locale/fr';
import { FC, memo } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import GoButton from '../../common/GoButton';
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

const Infos = styled.p`
  font-weight: 500;
  margin-bottom: 0;
`


interface GroupCardProps {
  id: string,
  name: string,
  lowerSpeed: number,
  upperSpeed: number,
  meetingLocation: string,
  meetingTime: Date,
  teamId: string,
  mapId: string,
  distance: number,
  postiveElevation: number,
  negativeElevation: number
}

const GroupCard: FC<GroupCardProps> = (
  {
    name,
    meetingTime,
    teamId,
    lowerSpeed,
    upperSpeed,
    meetingLocation,
    mapId,
    distance,
    postiveElevation,
    negativeElevation
  }) => {
  return (
    <MapCardContainer>
      <Card.Body>
        <Title>{name}</Title>
        <Card.Text>
          <MeetingTime>
            {`Heure de départ : ${meetingTime}`}
          </MeetingTime>
          <Infos>
            {`Allure : ${lowerSpeed}/${upperSpeed} km/h`}
          </Infos>
          <Infos>
            {`Lieu de rendez-vous : ${meetingLocation}`}
          </Infos>
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
      <Card.Footer>
        <GoButton />
      </Card.Footer>

    </MapCardContainer>
  )
}

export default memo(GroupCard);
