import { useSref } from '@uirouter/react';
import { LinkProps } from '@uirouter/react/lib/hooks/useSref';
import 'moment/locale/fr';
import { FC, memo } from 'react';
import { EventType, TeamEvent } from '../../../redux/interfaces';
import EventCard from '../../common/EventCard';

interface EventProps {
  event: TeamEvent;
}

function useEventLink(type: EventType, id: string): LinkProps | undefined {
  return {
    TRIP: useSref('trip', { tripId: id }),
    RIDE: useSref('ride', { rideId: id }),
    PUBLICATION: undefined
  }[type]
}

const Event: FC<EventProps> = ({ event }) => {
  const goToEvent = useEventLink(event.type, event.id);
  return (
    <EventCard goToEvent={goToEvent} {...event} />
  )
}

export default memo(Event);
