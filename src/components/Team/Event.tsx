/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FC, memo, ReactNode } from 'react';
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import { TeamEvent, EventType } from '../../redux/interfaces';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/fr';
import { API_URL } from '../common/constants';
import { useSref } from '@uirouter/react';
import { LinkProps } from '@uirouter/react/lib/hooks/useSref';

const EventCard = styled(Card)`
  margin: 8px 0 8px 0;
`;

const SeeIcon = styled.i.attrs({
  className: 'bi bi-eye-fill'
})`
margin-right: 4px;
`;


interface BikeIconProps {
  className: string;
}

const BikeIcon = styled.i.attrs<BikeIconProps>((({ className }) => ({
  className: `bi bi-${className}`
})))`
margin: 0 4px 0 4px;
`;

const CardHeader = styled(Card.Header)`
font-size: .875em;
color: #6c757d!important;
`;

interface GroupBadgeProps {
  color?: string;
}

const GroupBadge = styled(Badge) <GroupBadgeProps>`
margin-right: 4px;
background-color: ${({ color }) => (color)} !important;
`;

const EventImage = styled.img.attrs({
  className: 'mx-auto d-block shadow rounded w-100 h-auto mx-auto'
})`
margin-bottom: 8px;
`;

const ImageContainer = styled(Row)`
  justify-content: center;
`;

const EventContent = styled.p`
  white-space: pre-wrap;
`;

interface EventProps {
  event: TeamEvent;
}

function toTypeTitle(type: EventType): ReactNode {
  return {
    TRIP: <>Trip<BikeIcon className='signpost-2' /></>,
    RIDE: <>Ride<BikeIcon className='bicycle' /></>,
    PUBLICATION: <>Publication<BikeIcon className='newspaper' /></>
  }[type]
}

function toEventImage(type: EventType, teamId: string, id: string, link?: LinkProps): ReactNode {
  return {
    TRIP: <a {...link}><EventImage alt='image du trip' src={`${API_URL}/${teamId}/trips/${id}/image`} /></a>,
    RIDE: <a {...link}><EventImage alt='image du ride' src={`${API_URL}/${teamId}/rides/${id}/image`} /></a>,
    PUBLICATION: <EventImage alt='image de la publication' src={`${API_URL}/${teamId}/publications/${id}/image`} />
  }[type]
}

function toBadgeColor(badge: string): string | undefined {
  return {
    'G1': 'red',
    'G2': '#ff5324',
    'G3': '#eeb31e',
    'GRAVEL': 'chocolate',
    'CHILL': 'green',
  }[badge.toUpperCase()]
}

function toEventTitle(type: EventType, title: string, date?: Date): string {
  return {
    TRIP: title + ' - ' + moment(date).format('LL'),
    RIDE: title + ' - ' + moment(date).format('LL'),
    PUBLICATION: title
  }[type]
}

function useEventLink(type: EventType, id: string): LinkProps | undefined {
  return {
    TRIP: useSref('trip', { tripId: id }),
    RIDE: useSref('ride', { rideId: id }),
    PUBLICATION: undefined
  }[type]
}

const Event: FC<EventProps> = ({ event }) => {
  const { type, publishedAt, title, date, badges, content, imaged, teamId, id } = event;
  const goToEvent = useEventLink(type, id);
  return (
    <EventCard>
      <CardHeader className='text-end'>{toTypeTitle(type)}publié {moment(publishedAt).locale('fr').fromNow()}</CardHeader>
      <Card.Body>
        <Card.Title>{toEventTitle(type, title, date)}</Card.Title>
        <Card.Text>
          <p>
            {badges.map((badge) => <GroupBadge color={toBadgeColor(badge)} key={badge} bg="secondary">{badge}</GroupBadge>)}
          </p>
          <EventContent>
            {content}
          </EventContent>
          {imaged ? (
            <ImageContainer>
              <Col xs={12} md={6} >
                {toEventImage(type, teamId, id, goToEvent)}
              </Col>
            </ImageContainer>
          ) : (null)}
        </Card.Text>
      </Card.Body>
      {
        type !== 'PUBLICATION' ? (<Card.Footer className='text-center'>
          <Button {...goToEvent} size="sm" variant="secondary"><SeeIcon />Voir</Button>
        </Card.Footer>) : null
      }
    </EventCard>
  )
}

export default memo(Event);
