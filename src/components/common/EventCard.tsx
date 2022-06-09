import { useSref } from '@uirouter/react';
import { LinkProps } from '@uirouter/react/lib/hooks/useSref';
import { FC, memo, ReactNode } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { EventType } from '../../redux/interfaces';
import { API_URL } from '../common/constants';
import BadgeList from './BadgeList';
import { toFormatedDate, toFormatedDateFromNow } from './Date';
import { EventIcon, SeeIcon } from './Icons';

const EventCardContainer = styled(Card)`
  margin: 8px 0 8px 0;
`;

const Title = styled(Card.Title)`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
`

const CardHeader = styled(Card.Header)`
font-size: .875em;
color: #6c757d!important;
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

const EventDate = styled.h5`
  color: #6c757d!important;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
`

function toTypeTitle(type: EventType): ReactNode {
  return {
    TRIP: <>Trip<EventIcon className='signpost-2' /></>,
    RIDE: <>Ride<EventIcon className='bicycle' /></>,
    PUBLICATION: <>Publication<EventIcon className='newspaper' /></>
  }[type]
}

function toEventImage(type: EventType, teamId: string, id: string, link?: LinkProps): ReactNode {
  return {
    TRIP: <a {...link}><EventImage alt='image du trip' src={`${API_URL}/${teamId}/trips/${id}/image`} /></a>,
    RIDE: <a {...link}><EventImage alt='image du ride' src={`${API_URL}/${teamId}/rides/${id}/image`} /></a>,
    PUBLICATION: <EventImage alt='image de la publication' src={`${API_URL}/${teamId}/publications/${id}/image`} />
  }[type]
}

function useEventLink(type: EventType, eventId: string, teamId: string): LinkProps | undefined {
  return {
    TRIP: useSref('trip', { tripId: eventId, teamId }),
    RIDE: useSref('ride', { rideId: eventId, teamId }),
    PUBLICATION: undefined
  }[type]
}

function toEventDate(type: EventType, date?: Date, endDate?: Date): string {
  return {
    TRIP: 'Du ' + toFormatedDate(date) + ' au ' + toFormatedDate(endDate),
    RIDE: toFormatedDate(date),
    PUBLICATION: ''
  }[type]
}

interface EventProps {
  type: EventType,
  publishedAt: Date,
  title: string,
  date: Date,
  badges: string[],
  content: string,
  imaged: boolean,
  teamId: string,
  id: string,
  endDate?: Date,
}

const EventCard: FC<EventProps> = (
  {
    type,
    publishedAt,
    title,
    date,
    badges,
    content,
    imaged,
    teamId,
    id,
    endDate
  }) => {
  const goToEvent = useEventLink(type, id, teamId)
  return (
    <EventCardContainer>
      <CardHeader className='text-end'>{toTypeTitle(type)}publié {toFormatedDateFromNow(publishedAt)}</CardHeader>
      <Card.Body>
        <Title>{title}</Title>
        <EventDate>
          {toEventDate(type, date, endDate)}
        </EventDate>
        <BadgeList badges={badges} />
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
      </Card.Body>
      {
        type !== 'PUBLICATION' ? (<Card.Footer className='text-center'>
          <Button {...goToEvent} size="sm" variant="secondary">
            <SeeIcon />Voir
          </Button>
        </Card.Footer>) : null
      }
    </EventCardContainer>
  )
}

export default memo(EventCard);
