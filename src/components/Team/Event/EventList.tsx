import { FC, memo } from 'react';
import { TeamEvent } from '../../../redux/interfaces';
import EventCard from '../../common/EventCard';


interface EventListProps {
  events: TeamEvent[];
}

const EventList: FC<EventListProps> = ({ events }) => {
  return (
    <div>
      {events.map((event) => <EventCard key={event.id}  {...event} />)}
    </div>
  )
}

export default memo(EventList);
