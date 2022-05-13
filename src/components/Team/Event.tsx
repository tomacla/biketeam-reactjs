import { FC, memo, ReactNode } from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import { TeamEvent, EventType } from '../../redux/interfaces';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/fr';
import { API_URL } from '../common/constants';

const EventCard = styled(Card)`
  margin: 8px 0 8px 0;
`;

const SeeIcon = styled.i.attrs({
  className: 'bi bi-eye-fill'
})`
margin-right: 4px;
`;

const BikeIcon = styled.i.attrs({
  className: 'bi bi-bicycle'
})`
margin: 0 4px 0 4px;
`;

const CardHeader = styled(Card.Header)`
font-size: .875em;
color: #6c757d!important;
`;

const GroupBadge = styled(Badge)`
margin-right: 4px;
`;

const EventImage = styled.img`
width: 100%;
height: auto;
margin-bottom: 8px;
`;

interface EventProps {
  event: TeamEvent;
}

function toTypeTitle(type: EventType): ReactNode {
  return {
    TRIP: <>Trip</>,
    RIDE: <>Ride<BikeIcon /></>,
    PUBLICATION: <>Publication</>
  }[type]
}

function toImage(type: EventType, teamId: string, id: string): ReactNode {
  return {
    TRIP: <EventImage alt='image du trip' src={`${API_URL}/${teamId}/trips/${id}/image`} />,
    RIDE: <EventImage alt='image du ride' src={`${API_URL}/${teamId}/rides/${id}/image`} />,
    PUBLICATION: <EventImage alt='image de la publication' src={`${API_URL}/${teamId}/publications/${id}/image`} />
  }[type]
}

const Event: FC<EventProps> = ({ event }) => {
  return (
    <EventCard>
      <CardHeader className='text-end'>{toTypeTitle(event.type)} publié {moment(event.publishedAt).locale('fr').fromNow()}</CardHeader>
      <Card.Body>
        <Card.Title>{event.title} - {moment(event.date).format('L')}</Card.Title>
        <Card.Text>
          <p>
            {event.badges.map((badge) => <GroupBadge key={badge} bg="secondary">{badge}</GroupBadge>)}
          </p>
          <p>
            {event.content}
          </p>
          {event.imaged ? (toImage(event.type, event.teamId, event.id)) : (null)}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='text-center'>
        <Button size="sm" variant="secondary"><SeeIcon />Voir</Button>
      </Card.Footer>
    </EventCard>
  )
}

export default memo(Event);
