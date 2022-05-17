import { FC, memo } from 'react';
import { TeamEvent } from '../../../redux/interfaces';
import Event from '../Event/Event';


interface EventListProps {
  events: TeamEvent[];
}

const EventList: FC<EventListProps> = ({ events }) => {
  return (
    <div>
      {events.map((event) => <Event key={event.id} event={event} />)}
    </div>
  )
}

export default memo(EventList);
